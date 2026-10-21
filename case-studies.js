/* ============================================================
   Case Studies — curated examples with embedded model videos.
   Data: case-data.js (window.C2V_CASES). Per case: input material
   on top (keyframe / clip / prompt, annotated for IF), output
   videos three per row, objective metrics under each applicable output. Lightbox with
   prev/next and keyboard navigation.
   ============================================================ */
(() => {
  'use strict';
  // a reload always starts at the top of the page (no hash deep-link)
  if (window.history && 'scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  if (!window.location.hash) window.scrollTo(0, 0);
  const C = window.C2V_CASES;
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const TASK_LABEL = {t2v: 'T2V · Text to Video', i2v: 'I2V · Image to Video', v2v: 'V2V · Video to Video'};
  const RANK_LABEL = {high: 'High', mid: 'Mid', low: 'Low'};
  // leaderboard dual-level tier per family: automatic metrics vs judged dimensions
  const TIER_OF = {vq: 'OBJ', ta: 'OBJ', if: 'OBJ', cf: 'OBJ', instr: 'SUB', hl: 'SUB'};
  const flat = C.families.flatMap(f => f.cases);
  let caseIdx = 0, zoom = -1;

  const metricName = id => {
    const m = (window.COMPASS_DATA?.metrics || []).find(x => x.id === id);
    return m ? m.name : id;
  };
  const fmtScore = (id, v) => Number(v).toFixed(3);

  function chipRow() {
    const box = $('cs-chips');
    box.innerHTML = '';
    for (const fam of C.families) {
      const row = document.createElement('div');
      row.className = 'cs-chip-row';
      const label = document.createElement('span');
      label.className = 'cs-family-label';
      const tier = TIER_OF[fam.key] || 'OBJ';
      label.innerHTML = `<i class="cs-tier ${tier === 'SUB' ? 'sub' : 'obj'}" title="${tier === 'SUB' ? 'Subjective — judged dimensions' : 'Objective — automatic metrics'}">${tier}</i>${esc(fam.label)}`;
      row.appendChild(label);
      for (const key of fam.cases) {
        const c = C.cases[key];
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'cs-chip' + (key === flat[caseIdx] ? ' active' : '');
        chip.setAttribute('role', 'tab');
        chip.setAttribute('aria-selected', String(key === flat[caseIdx]));
        chip.textContent = c.label || `${c.key} · ${c.title}`;
        chip.addEventListener('click', () => { caseIdx = flat.indexOf(key); render(); });
        row.appendChild(chip);
      }
      box.appendChild(row);
    }
  }

  function scoreChips(model, metrics) {
    return metrics.filter(k => !['IF', 'NC', 'VD', 'MT', 'VE'].includes(k)).map(k => `<span class="sc"><b>${esc(k)}</b> ${model.scores[k] != null ? fmtScore(k, model.scores[k]) : '—'}</span>`).join('');
  }
  function annotatedPrompt(inp, models) {
      let offset = 0;
      const body = inp.spans.map(s => {
        offset += s.t.length;
        if (!s.m.length) return esc(s.t);
        const mks = s.m.map(id => inp.marks.find(x => x.id === id));
        const modelLabel = mk => {
          const model = models.find(m => m.rank === mk.rank);
          return model ? `${RANK_LABEL[mk.rank]} (${model.name})` : RANK_LABEL[mk.rank];
        };
        const notes = mks.map(mk => `${modelLabel(mk)} — ${mk.note || ''}` +
          (mk.questions?.length ? ` Questions: ${mk.questions.join(', ')}.` : '') +
          (mk.evidence_times_s?.length ? ` Evidence at ${mk.evidence_times_s.map(t => Number(t).toFixed(2)).join(', ')}s.` : '')).join('\n');
        const miss = mks.some(m => m.rank === 'low'),
              part = mks.some(m => m.rank === 'mid');
        const cls = miss && part ? 'mk-both' : miss ? 'mk-missing' : 'mk-partial';
        // Colors identify the selected output tier: red Low, yellow Mid.
        const tags = mks.filter(mk => mk.end === offset).map(mk => `<i class="mk-note ${mk.rank}">[${esc(modelLabel(mk))}: ${esc(mk.short || '')}]</i>`).join(' ');
        return `<mark class="${cls}" title="${esc(notes)}">${esc(s.t)}</mark>${tags ? ' ' + tags : ''}`;
      }).join('');
      return `<details class="cs-prompt" open><summary>Instruction prompt — annotated</summary>
        <p class="cs-prompt-body">${body}</p>
        <div class="cs-legend-block">
          <span class="leg low"><i class="sw"></i>red — ${esc(inp.legend?.red || "missing from the Low model's video")}</span>
          <span class="leg mid"><i class="sw"></i>yellow — ${esc(inp.legend?.yellow || "incomplete in the Mid model's video")}</span>
        </div></details>`;

  }

  function inputBlock(c) {
    const inp = c.input;
    if (!inp) return '';  // groups without input material render nothing
    let media = '';
    if (inp.media && inp.type === 'keyframe') {
      media = `<figure class="cs-input-media"><img src="${esc(inp.media)}" alt="Reference keyframe for ${esc(c.title)}"><figcaption>Reference keyframe</figcaption></figure>`;
    } else if (inp.media) {
      media = `<figure class="cs-input-media"><video src="${esc(inp.media)}" controls playsinline preload="none" poster="${esc(inp.vposter || '')}"></video><figcaption>Reference clip</figcaption></figure>`;
    }
    let prompt = '';
    if (inp.type === 'checklist') {
      const heads = c.models.map(m =>
        `<th>${m.rank ? `<span class="cs-rank ${m.rank}">${RANK_LABEL[m.rank]}</span>` : ''}${esc(m.name)}</th>`).join('');
      const rows = inp.questions.map(q => {
        const cells = c.models.map(m => {
          const yes = q.answers[m.id] === 'Yes';
          return `<td class="${yes ? 'if-yes' : 'if-no'}">${yes ? '✓' : '✗'}</td>`;
        }).join('');
        return `<tr><td class="q-n">${q.n}</td><td class="q-t">${esc(q.text)}</td>${cells}</tr>`;
      }).join('');
      prompt = (inp.spans ? annotatedPrompt(inp, c.models) : '') + `<details class="cs-prompt" open><summary>Instruction-following checklist — ${inp.questions.length} yes/no questions</summary>
        <div class="cs-table-scroll" tabindex="0" role="region" aria-label="Scroll instruction-following checklist horizontally"><table class="cs-checklist"><thead><tr><th class="q-n">#</th><th>Question</th>${heads}</tr></thead><tbody>${rows}</tbody></table></div></details>`;
    } else if (inp.type === 'annotated-prompt') {
      prompt = annotatedPrompt(inp, c.models);
    } else if (inp.prompt) {
      prompt = `<details class="cs-prompt"><summary>Instruction prompt</summary><p class="cs-prompt-body">${esc(inp.prompt)}</p></details>`;
    }
    if (!media && !prompt) return '';
    // media-only blocks (keyframe / clip) centre the reference in the panel
    const cls = !media ? ' cs-input-only' + (inp.type === 'checklist' ? ' cs-input-stack' : '') : !prompt ? ' cs-media-only' : '';
    return `<div class="cs-input${cls}">${media}${prompt}</div>`;
  }

  function videoCell(c, m, i) {
    const rank = m.rank ? `<span class="cs-rank ${m.rank}">${RANK_LABEL[m.rank]}</span>` : '';
    const clip = m.clip ? `<span class="sc sc-clip" title="Shown segment">${m.clip[0]}–${m.clip[1]}s</span>` : '';
    let box;
    if (m.poster) {  // still frame: click to enlarge
      box = `<button class="cs-video" type="button" data-zoom="${i}" aria-label="Enlarge ${esc(m.name)} output">
        <img src="${esc(m.poster)}" loading="lazy" alt="${esc(m.name)} output frame"></button>`;
    } else {  // video plays in place; the corner button opens the lightbox
      box = `<div class="cs-video cs-video-live">
        <video src="${esc(m.video)}" controls muted playsinline preload="none" poster="${esc(m.vposter || '')}"></video>
        <button class="cs-zoom" type="button" data-zoom="${i}" aria-label="Enlarge ${esc(m.name)} output">⤢</button></div>`;
    }
    return `<figure class="cs-cell">
      ${box}
      <figcaption>
        <span class="cs-model">${rank}<b>${esc(m.name)}</b></span>
        <span class="cs-scores">${clip}${scoreChips(m, c.metrics)}</span>
      </figcaption>
    </figure>`;
  }

  function render() {
    const c = C.cases[flat[caseIdx]];
    const tags = [`<span class="cs-tag">${TASK_LABEL[c.task]}</span>`,
      `<span class="cs-tag">Metrics: ${c.metrics.map(k => `${k} · ${esc(metricName(k))}`).join(', ')}</span>`];
    if (c.note) tags.push(`<span class="cs-tag cs-tag-note">${esc(c.note)}</span>`);
    $('cs-panel').innerHTML = `
      <header class="cs-head"><h3>${esc(c.label || c.key + ' · ' + c.title)}</h3>
        <div class="cs-meta">${tags.join('')}</div>
        ${c.desc ? `<p class="cs-desc">${esc(c.desc)}</p>` : ''}</header>
      ${inputBlock(c)}
      <div class="cs-grid">${c.models.map((m, i) => videoCell(c, m, i)).join('')}</div>`;
    $('cs-panel').querySelectorAll('[data-zoom]').forEach(b =>
      b.addEventListener('click', () => openViewer(Number(b.dataset.zoom))));
    chipRow();
  }

  /* ---------- lightbox ---------- */
  function openViewer(i) {
    zoom = i;
    $('cs-lightbox').hidden = false;
    document.body.style.overflow = 'hidden';
    showViewer();
  }
  function closeViewer() {
    zoom = -1;
    $('cs-lightbox').hidden = true;
    $('cs-lb-video').removeAttribute('src');
    $('cs-lb-video').load();
    document.body.style.overflow = '';
  }
  function showViewer() {
    const c = C.cases[flat[caseIdx]];
    const m = c.models[zoom];
    const vid = $('cs-lb-video'), img = $('cs-lb-img');
    if (m.poster) {
      vid.hidden = true; vid.removeAttribute('src'); vid.load();
      img.hidden = false; img.src = m.poster; img.alt = `${m.name} output frame`;
    } else {
      img.hidden = true; img.removeAttribute('src');
      vid.hidden = false; vid.src = m.video;
    }
    $('cs-lb-cap').textContent = `${c.label || c.key + ' · ' + c.title} — ${m.name}` +
      (m.rank ? ` (${RANK_LABEL[m.rank]})` : '') + (m.clip ? ` · ${m.clip[0]}–${m.clip[1]}s` : '') +
      ` (${zoom + 1}/${c.models.length})`;
  }
  function stepViewer(d) {
    const c = C.cases[flat[caseIdx]];
    zoom = (zoom + d + c.models.length) % c.models.length;
    showViewer();
  }
  function stepCase(d) {
    caseIdx = (caseIdx + d + flat.length) % flat.length;
    render();
  }
  $('cs-lb-prev').addEventListener('click', () => stepViewer(-1));
  $('cs-lb-next').addEventListener('click', () => stepViewer(1));
  $('cs-lb-close').addEventListener('click', closeViewer);
  $('cs-lightbox').addEventListener('click', e => { if (e.target === e.currentTarget) closeViewer(); });
  document.addEventListener('keydown', e => {
    if ($('cs-lightbox').hidden) {
      if (e.key === 'ArrowLeft') stepCase(-1);
      if (e.key === 'ArrowRight') stepCase(1);
      return;
    }
    if (e.key === 'Escape') closeViewer();
    if (e.key === 'ArrowLeft') stepViewer(-1);
    if (e.key === 'ArrowRight') stepViewer(1);
  });

  render();
})();
