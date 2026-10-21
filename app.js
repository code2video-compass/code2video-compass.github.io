(() => {
  'use strict';
  const d=window.COMPASS_DATA;
  const $=id=>document.getElementById(id);
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  /* ---- table layout, following the paper's dual-level framework -------
     12 objective metrics (ES..MF) + 5 subjective dimensions (IF, NC, VD, MQ, VE) */
  const TIER={'Operational':['Objective','Operational'],'Video quality':['Objective','Video Quality'],
    'Text alignment':['Objective','Text Alignment'],'Image fidelity':['Objective','Image Fidelity'],
    'Clip fidelity':['Objective','Clip Fidelity'],'Instruction following':['Subjective','Instr. Follow.'],
    'Holistic quality':['Subjective','Holistic Video Quality']};
  const tierColor={'Objective':'#35840D','Subjective':'#ECA138'};
  const subColor={'Operational':'#59667a','Video Quality':'#2e6679','Text Alignment':'#6b618b',
    'Image Fidelity':'#527a70','Clip Fidelity':'#89704e','Instr. Follow.':'#4c6b8f',
    'Holistic Video Quality':'#7d5a86'};
  const QUALITY_ONLY=m=>m.group!=='Operational';  // Avg. Rank excludes ES and TC
  const isSub=k=>k.group==='Instruction following'||k.group==='Holistic quality';
  // abbreviated column heads for the two longest names (tooltip keeps the full name)
  const SHORT_NAME={'Token Consumption':'Token Cons.','Viewer Engagement':'Viewer Eng.','Motion Smoothness':'Motion Smooth.','Content Coherence':'Content Coher.'};
  const rankKey='__rank';

  /* heat scales: objective purple, subjective green (fig15 palette), Avg. Rank blue */
  const lerp=(a,b,t)=>Math.round(a+(b-a)*t);
  const heat=(from,to,t)=>`rgb(${lerp(from[0],to[0],t)},${lerp(from[1],to[1],t)},${lerp(from[2],to[2],t)})`;
  const PURPLE=[[245,245,252],[191,197,232]], GREEN=[[244,248,241],[168,205,160]], RANKBLUE=[[240,245,250],[158,192,220]];

  let setting='Overall',filter='all',sort=null,ascending=true;

  $('abstract').innerHTML=d.project.abstract;  // abstract may carry <b> key-term markup
  $('authors').hidden=false;
  $('authors').innerHTML='<span class="author-row">'+
    '<span><a href="https://orcid.org/0009-0007-1607-4732" target="_blank" rel="noopener">Zhenghan Chen</a><sup>1</sup></span>'+
    '<span><a href="https://zekaishao25.github.io" target="_blank" rel="noopener">Zekai Shao</a><sup>1</sup></span>'+
    '<span>Xin Lin<sup>2</sup></span>'+
    '<span>Leting Cheng<sup>1</sup></span>'+
    '<span><a href="http://simingchen.me" target="_blank" rel="noopener">Siming Chen</a><sup>1</sup></span></span>';
  $('affiliations').hidden=false;
  $('affiliations').innerHTML='<sup>1</sup>Fudan University&ensp;&ensp;<sup>2</sup>Sun Yat-sen University';
  for(const [key,id,label] of [['arxiv','arxiv-link','arXiv'],['paper','paper-link','Paper'],['github','code-link','Code'],['dataset','dataset-link','Hugging Face']]){
    const url=d.project.links[key];
    if(url){const a=document.createElement('a');a.className='pill';a.href=url;a.textContent='[ '+label+' ]';a.target='_blank';a.rel='noopener';$(id).replaceWith(a);}
  }
  if(d.project.citation){$('bibtex').textContent=d.project.citation;}
  $('copy-bibtex').addEventListener('click',async()=>{
    const label=$('copy-bibtex-label');
    try{await navigator.clipboard.writeText($('bibtex').textContent);label.textContent='Copied';}
    catch{const range=document.createRange();range.selectNodeContents($('bibtex'));const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);label.textContent='Select and copy';}
    window.setTimeout(()=>{label.textContent='Copy';},1800);
  });

  const raw=(model,metric,s)=>d.results.find(r=>r.model===model.id&&r.setting===s)?.metrics?.[metric];
  const score=(model,metric,s=setting)=>{
    if(s!=='Overall')return {value:raw(model,metric,s)?.value};
    // pooled paper numbers (fig3 / models_summary.csv) take precedence; the
    // per-setting mean is only a fallback when no pooled row was merged
    const pooled=raw(model,metric,'Overall');
    if(pooled?.value!=null)return pooled;
    const vs=d.metrics.find(m=>m.id===metric)?.settings.map(x=>raw(model,metric,x)?.value).filter(v=>v!=null);
    return vs?.length?{value:vs.reduce((a,b)=>a+b,0)/vs.length}:undefined;
  };
  function ranks(models,get){  // higher is better, ties share the average rank
    const withv=models.filter(m=>get(m)!=null).sort((a,b)=>get(b)-get(a));
    const rk=new Map();let i=0;
    while(i<withv.length){let j=i;while(j<withv.length&&Math.abs(get(withv[j])-get(withv[i]))<1e-12)j++;
      for(let k=i;k<j;k++)rk.set(withv[k],((i+1)+j)/2);i=j;}
    return rk;
  }

  function build(){
    const metrics=d.metrics.filter(m=>m.settings.includes(setting)||setting==='Overall');
    const quality=metrics.filter(QUALITY_ONLY);
    const metRank={},metRange={};
    for(const k of metrics){
      const get=m=>{const v=score(m,k.id)?.value;return v==null?null:(k.direction==='down'?-v:v);};
      metRank[k.id]=ranks(d.models,get);
      const vs=d.models.map(m=>score(m,k.id)?.value).filter(v=>v!=null);
      metRange[k.id]=vs.length?[Math.min(...vs),Math.max(...vs)]:[0,0];
    }
    const avgRank={};
    for(const m of d.models){
      let s=0,n=0;
      for(const k of quality){const r=metRank[k.id].get(m);if(r!=null){s+=r;n++;}}
      avgRank[m.id]=n?s/n:null;
    }
    const groups=[['closed','Proprietary Models'],['open','Open-weight Models']];
    const rows=[];
    for(const [access,label] of groups){
      const members=d.models.filter(m=>m.access===access)
        .sort((a,b)=>(avgRank[a.id]??99)-(avgRank[b.id]??99));
      if(!members.length)continue;
      rows.push({grp:true,label});
      for(const m of members){
        const cell={model:m,avg:avgRank[m.id]};
        for(const k of metrics){
          const v=score(m,k.id)?.value;
          if(v==null)continue;
          const get=x=>{const y=score(x,k.id)?.value;return y==null?null:(k.direction==='down'?-y:y);};
          cell[k.id]={v,r:metRank[k.id].get(m),
            grpR:ranks(members,get).get(m),range:metRange[k.id]};
        }
        rows.push(cell);
      }
    }
    return {metrics,rows};
  }

  function render(){
    const {metrics,rows}=build();
    const shown=filter==='all'?rows:rows.filter(r=>r.grp?r.label.startsWith(filter==='closed'?'Proprietary':'Open'):r.model.access===filter);
    const key=sort||rankKey;
    const sorter=(a,b)=>{
      if(a.grp||b.grp)return 0;
      let x,y;
      if(key===rankKey){x=a.avg;y=b.avg;}
      else{const kk=metrics.find(m=>m.id===key),dir=kk.direction==='down'?-1:1;
        x=a[key]?.v;x=x==null?null:x*dir;
        y=b[key]?.v;y=y==null?null:y*dir;}
      if(x==null&&y==null)return 0;if(x==null)return 1;if(y==null)return -1;
      return (x-y)*(ascending?1:-1);
    };
    const ordered=[];let block=[];
    for(const r of shown){if(r.grp){ordered.push(...block.sort(sorter),r);block=[];}else block.push(r);}
    ordered.push(...block.sort(sorter));

    /* three-tier header: L1 Objective|Subjective, L2 groups, L3 metric names */
    const t1=[],t2=[],gStart=new Set();
    let prevGroup=null;
    metrics.forEach((m,i)=>{if(m.group!==prevGroup){gStart.add(i);prevGroup=m.group;}
      const [top,sub]=TIER[m.group];
      const l1=t1.at(-1);if(l1?.name===top)l1.count++;else t1.push({name:top,count:1});
      const l2=t2.at(-1);if(l2?.name===sub)l2.count++;else t2.push({name:sub,count:1});
    });
    const nCols=metrics.length+2;
    const nRanked=d.models.filter(m=>rows.some(r=>!r.grp&&r.model===m&&r.avg!=null)).length;
    const arrow=id=>sort===id?(ascending?' asc':' desc'):'';
    let h='<tr class="head-t1"><th class="th-model" scope="col" rowspan="3">Model</th>'+
      `<th class="th-rank" scope="col" rowspan="3"><button class="sort${key===rankKey?' active':''}${arrow(rankKey)}" data-sort="__rank" title="Mean per-metric rank across all 15 models, excluding ES and TC; lower is better">Avg. Rank</button></th>`;
    t1.forEach((g,gi)=>{h+=`<th scope="colgroup" colspan="${g.count}"${gi>0?' class="gsep"':''} style="color:${tierColor[g.name]}">${esc(g.name)}</th>`;});
    h+='</tr><tr class="head-t2">'+t2.map((g,gi)=>`<th scope="colgroup" colspan="${g.count}"${gi>0?' class="gsep"':''} style="color:${subColor[g.name]}">${esc(g.name)}</th>`).join('')+'</tr><tr class="head-metrics">'+
      metrics.map((m,i)=>{const head=SHORT_NAME[m.name]||m.name;
      return `<th scope="col"${gStart.has(i)?' class="gsep"':''} aria-sort="${sort===m.id?(ascending?'ascending':'descending'):'none'}"><button class="sort${head.split(' ').some(w=>w.length>10)?' compact':''}${sort===m.id?' active':''}${arrow(m.id)}" data-sort="${m.id}" title="${esc(m.name)} — ${esc(m.description)} (${m.direction==='up'?'higher is better':'lower is better'})">${esc(head)}<span class="dir ${m.direction}" aria-hidden="true">${m.direction==='up'?'↑':'↓'}</span></button></th>`;}).join('')+'</tr>';
    $('board').querySelector('thead').innerHTML=h;

    const body=ordered.map(r=>{
      if(r.grp)return `<tr class="grp-row ${r.label.startsWith('Proprietary')?'grp-closed':'grp-open'}"><th colspan="${nCols}"><i></i>${esc(r.label)}</th></tr>`;
      const m=r.model;
      const rk=r.avg;
      const avgT=rk!=null&&nRanked>1?1-(rk-1)/(nRanked-1):.5;
      const avgCell=`<td class="rank-cell${key===rankKey?' sorted':''}" style="background:${heat(RANKBLUE[0],RANKBLUE[1],avgT)}" title="Mean rank across ${metrics.filter(QUALITY_ONLY).length} quality metrics">${rk!=null?rk.toFixed(2):'—'}</td>`;
      const cells=metrics.map((k,i)=>{
        const c=r[k.id];
        if(!c)return `<td class="pending${gStart.has(i)?' gsep':''}">—</td>`;
        const [lo,hi]=c.range;
        let t=hi>lo?(c.v-lo)/(hi-lo):.5;
        if(k.direction==='down')t=1-t;
        const scale=isSub(k)?GREEN:PURPLE;
        const bg=heat(scale[0],scale[1],t);
        const mark=c.grpR===1?' best':c.grpR===2?' second':'';
        const shown=k.id==='TC'?String(Math.round(c.v)):c.v.toFixed(c.v>=10?1:3);
        return `<td class="heat${mark}${gStart.has(i)?' gsep':''}" style="background:${bg}" title="${esc(m.name)} · ${esc(k.name)}: ${shown} (rank ${c.r})"><span>${shown}</span></td>`;
      }).join('');
      return `<tr class="${m.access==='open'?'open-model':''}"><td><span class="model-name"><img src="${esc(m.icon)}" alt="" loading="lazy">${esc(m.name)}</span></td>${avgCell}${cells}</tr>`;
    }).join('');
    $('board').querySelector('tbody').innerHTML=body;
    const legend=$('heat-legend');
    if(legend){
      const ramp=(scale,label)=>`<span class="leg">${[0,.25,.5,.75,1].map(t=>`<i style="background:${heat(scale[0],scale[1],t)}"></i>`).join('')}<em>${label} · darker is better</em></span>`;
      legend.innerHTML=ramp(PURPLE,'Objective')+ramp(GREEN,'Subjective');
    }
    $('board-panel').setAttribute('aria-label',setting+' results');
    $('board').querySelector('caption').textContent=setting+' model results. A dash indicates a pending score.';
    document.querySelectorAll('[data-setting]').forEach(b=>{const sel=b.dataset.setting===setting;b.classList.toggle('active',sel);b.setAttribute('aria-selected',sel);b.tabIndex=sel?0:-1;});
    document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b.dataset.filter===filter);b.setAttribute('aria-pressed',b.dataset.filter===filter);});
  }

  render();
  document.querySelectorAll('[data-setting]').forEach(b=>b.addEventListener('click',()=>{setting=b.dataset.setting;sort=null;ascending=true;render();}));
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;render();}));
  $('board').addEventListener('click',e=>{
    const b=e.target.closest('[data-sort]');if(!b)return;
    const id=b.dataset.sort;
    if(sort!==id){sort=id;ascending=false;}          // first click: best score first
    else if(!ascending){ascending=true;}             // second click: reverse
    else{sort=null;ascending=true;}                  // third click: back to Avg. Rank
    render();
    $('board').querySelector(`[data-sort="${id}"]`)?.focus({preventScroll:true});
  });
})();
