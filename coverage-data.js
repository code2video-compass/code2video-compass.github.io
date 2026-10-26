window.C2V_COVERAGE = {
  "families": [
    {
      "key": "1",
      "label": "Explainer Motion Graphics",
      "short_label": "Explainers",
      "cases": [
        "COV-01-01",
        "COV-01-02",
        "COV-01-03"
      ],
      "related": []
    },
    {
      "key": "2",
      "label": "Branding & Promotional Motion",
      "short_label": "Branding & Promotion",
      "cases": [
        "COV-RELATED-3D-06",
        "COV-02-01",
        "COV-02-02"
      ],
      "related": []
    },
    {
      "key": "3",
      "label": "Kinetic Typography",
      "short_label": "Kinetic Typography",
      "cases": [
        "COV-03-01",
        "COV-03-02"
      ],
      "related": []
    },
    {
      "key": "4",
      "label": "UI & Product Motion",
      "short_label": "UI & Product",
      "cases": [
        "COV-04-01",
        "COV-04-02",
        "COV-04-03"
      ],
      "related": []
    },
    {
      "key": "5",
      "label": "Data & Infographic Animation",
      "short_label": "Data & Infographics",
      "cases": [
        "COV-05-01",
        "COV-05-02",
        "COV-05-03"
      ],
      "related": []
    },
    {
      "key": "6",
      "label": "Title Sequences",
      "short_label": "Title Sequences",
      "cases": [
        "COV-06-01",
        "COV-06-02",
        "COV-06-03"
      ],
      "related": []
    },
    {
      "key": "7",
      "label": "Broadcast & Show Graphics",
      "short_label": "Broadcast & Shows",
      "cases": [
        "COV-07-01",
        "COV-07-02",
        "COV-07-03"
      ],
      "related": []
    },
    {
      "key": "8",
      "label": "Illustrative & Character Narrative",
      "short_label": "Illustration & Characters",
      "cases": [
        "COV-08-01",
        "COV-08-02"
      ],
      "related": []
    },
    {
      "key": "9",
      "label": "Abstract & Experimental Motion",
      "short_label": "Abstract & Experimental",
      "cases": [
        "COV-09-01",
        "COV-09-02"
      ],
      "related": []
    },
    {
      "key": "10",
      "label": "3D Motion",
      "short_label": "3D Motion",
      "cases": [
        "COV-10-02",
        "COV-10-03",
        "COV-RELATED-3D-09",
        "COV-10-01",
        "COV-10-05",
        "COV-10-06"
      ],
      "related": []
    }
  ],
  "cases": {
    "COV-01-01": {
      "key": "COV-01-01",
      "sample": "ac26d62cba933b6544d0266d",
      "task": "t2v",
      "title": "Where the sky ends",
      "label": "Explainer Motion Graphics-example1",
      "chip_label": "Example 1",
      "family_key": "coverage",
      "category_id": 1,
      "subtype": "1.1 Concept & Mechanism Explanation",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "A science explanation connects the atmosphere, solar system, stars, and elements through a shared character journey. The challenge is preserving the explanatory thread across scales.",
      "comparison": "Astra combines illustrated scenes, diagrams, and a closing callback. Kimi simplifies some characters and settings; Luna uses simpler compositions and less developed scenes.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-01-01/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-01-01/gpt_6_astra.jpg",
          "duration_s": 145.0,
          "scores": {}
        },
        {
          "id": "kimi_k3",
          "name": "Kimi K3",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-01-01/kimi_k3.mp4",
          "vposter": "assets/case_studies/coverage/COV-01-01/kimi_k3.jpg",
          "duration_s": 110.0,
          "scores": {}
        },
        {
          "id": "az_gpt6_luna",
          "name": "GPT-6 Luna",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-01-01/az_gpt6_luna.mp4",
          "vposter": "assets/case_studies/coverage/COV-01-01/az_gpt6_luna.jpg",
          "duration_s": 97.0,
          "scores": {}
        }
      ]
    },
    "COV-01-02": {
      "key": "COV-01-02",
      "sample": "youtube_G145_0ca4fe77469f",
      "task": "t2v",
      "title": "Quantum computing explained",
      "label": "Explainer Motion Graphics-example2",
      "chip_label": "Example 2",
      "family_key": "coverage",
      "category_id": 1,
      "subtype": "1.1 Concept & Mechanism Explanation",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "Classical bits, superposition, entanglement, search, and applications form a sequence of linked concepts. Each visual transition needs to carry the explanation forward.",
      "comparison": "Opus develops the cryogenic computer, bits, quantum states, search, and materials examples. Luna simplifies spatial depth; Qwen-27B has weaker contrast between labels and graphics.",
      "models": [
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-01-02/claude_opus_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-01-02/claude_opus_5_5.jpg",
          "duration_s": 88.0,
          "scores": {}
        },
        {
          "id": "az_gpt6_luna",
          "name": "GPT-6 Luna",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-01-02/az_gpt6_luna.mp4",
          "vposter": "assets/case_studies/coverage/COV-01-02/az_gpt6_luna.jpg",
          "duration_s": 63.0,
          "scores": {}
        },
        {
          "id": "qwen_3_8_27b",
          "name": "Qwen3.8-27B",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-01-02/qwen_3_8_27b.mp4",
          "vposter": "assets/case_studies/coverage/COV-01-02/qwen_3_8_27b.jpg",
          "duration_s": 110.0,
          "scores": {}
        }
      ]
    },
    "COV-01-03": {
      "key": "COV-01-03",
      "sample": "c024db0b37d9117838d124ff",
      "task": "v2v",
      "title": "One second inside the human body",
      "label": "Explainer Motion Graphics-example3",
      "chip_label": "Example 3",
      "family_key": "coverage",
      "category_id": 1,
      "subtype": "1.3 System & Architecture Explanation",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "The heart, circulation, cells, and ATP are linked on a shared timeline. The difficulty comes from explaining a system across several physical scales.",
      "comparison": "Astra develops organs, red blood cells, mitochondria, ATP, and membranes. Haiku simplifies several structures; Gemini compresses multiple mechanisms into a 16-second output.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-01-03/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-01-03/gpt_6_astra.jpg",
          "duration_s": 62.0,
          "scores": {}
        },
        {
          "id": "claude_haiku_5_5",
          "name": "Claude Haiku 5.5",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-01-03/claude_haiku_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-01-03/claude_haiku_5_5.jpg",
          "duration_s": 30.0,
          "scores": {}
        },
        {
          "id": "gemini_3_8_flash",
          "name": "Gemini 3.8 Flash",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-01-03/gemini_3_8_flash.mp4",
          "vposter": "assets/case_studies/coverage/COV-01-03/gemini_3_8_flash.jpg",
          "duration_s": 16.0,
          "scores": {}
        }
      ]
    },
    "COV-02-01": {
      "key": "COV-02-01",
      "sample": "6bf10cf1f1ed4f43f9ba8461",
      "task": "t2v",
      "title": "Claude Code product capability promotion",
      "label": "Branding & Promotional Motion-example2",
      "chip_label": "Example 2",
      "family_key": "coverage",
      "category_id": 2,
      "subtype": "2.2 Product & Service Promotion",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "The sequence promotes Claude Code through a task request, planning, parallel construction, and a combined result. The product story must remain coherent across these stages.",
      "comparison": "Astra connects the voxel character, code platform, parallel components, and projector ending. The other outputs progressively simplify component detail, spatial depth, and the final result.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-02-01/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-02-01/gpt_6_astra.jpg",
          "duration_s": 48.0,
          "scores": {}
        },
        {
          "id": "az_gpt6_luna",
          "name": "GPT-6 Luna",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-02-01/az_gpt6_luna.mp4",
          "vposter": "assets/case_studies/coverage/COV-02-01/az_gpt6_luna.jpg",
          "duration_s": 36.0,
          "scores": {}
        },
        {
          "id": "minimax_m3",
          "name": "MiniMax M3",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-02-01/minimax_m3.mp4",
          "vposter": "assets/case_studies/coverage/COV-02-01/minimax_m3.jpg",
          "duration_s": 52.0,
          "scores": {}
        }
      ]
    },
    "COV-02-02": {
      "key": "COV-02-02",
      "sample": "3f9f8cd2ee60dad47abf9bbf",
      "task": "t2v",
      "title": "OpenAI DevDay event campaign",
      "label": "Branding & Promotional Motion-example3",
      "chip_label": "Example 3",
      "family_key": "coverage",
      "category_id": 2,
      "subtype": "2.3 Event & Campaign Promotion",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "Event identity, location, program cues, and a finale form a DevDay campaign. The challenge is retaining those event-specific beats within a consistent visual identity.",
      "comparison": "Astra develops the bay, bridge, venue, and event sign-off in detailed pixel scenes. Opus retains the main beats with simpler scenes and crowds; Gemini compresses the event sequence.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-02-02/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-02-02/gpt_6_astra.jpg",
          "duration_s": 59.0,
          "scores": {}
        },
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-02-02/claude_opus_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-02-02/claude_opus_5_5.jpg",
          "duration_s": 45.0,
          "scores": {}
        },
        {
          "id": "gemini_3_8_flash",
          "name": "Gemini 3.8 Flash",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-02-02/gemini_3_8_flash.mp4",
          "vposter": "assets/case_studies/coverage/COV-02-02/gemini_3_8_flash.jpg",
          "duration_s": 15.0,
          "scores": {}
        }
      ]
    },
    "COV-03-01": {
      "key": "COV-03-01",
      "sample": "75c2253be1096f2460d2bb70",
      "task": "t2v",
      "title": "海と毒薬 - animated editorial publication",
      "label": "Kinetic Typography-example1",
      "chip_label": "Example 1",
      "family_key": "coverage",
      "category_id": 3,
      "subtype": "3.2 Editorial Motion Typography",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "A chaptered editorial publication makes type hierarchy and reading order the main subject. Dense content must stay readable through transitions and changing layouts.",
      "comparison": "Sonnet combines vertical Japanese type, textured pages, imagery, and chapter grids into an editorial sequence. MiMo retains chapter layouts but replaces much of the imagery with simple geometry. Qwen-Max introduces charts and radial forms that weaken the consistency of the publication design.",
      "models": [
        {
          "id": "claude_sonnet_5_5",
          "name": "Claude Sonnet 5.5",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-03-01/claude_sonnet_5_5_web.mp4",
          "vposter": "assets/case_studies/coverage/COV-03-01/claude_sonnet_5_5.jpg",
          "duration_s": 100.33333333333333,
          "scores": {}
        },
        {
          "id": "mimo_v2_6_pro",
          "name": "MiMo V2.6 Pro",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-03-01/mimo_v2_6_pro.mp4",
          "vposter": "assets/case_studies/coverage/COV-03-01/mimo_v2_6_pro.jpg",
          "duration_s": 39.0,
          "scores": {}
        },
        {
          "id": "qwen_3_8_max",
          "name": "Qwen3.8-Max",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-03-01/qwen_3_8_max.mp4",
          "vposter": "assets/case_studies/coverage/COV-03-01/qwen_3_8_max.jpg",
          "duration_s": 72.0,
          "scores": {}
        }
      ]
    },
    "COV-03-02": {
      "key": "COV-03-02",
      "sample": "youtube_B06_1f0896f7cc54",
      "task": "t2v",
      "title": "Three Clichés - editorial typography",
      "label": "Kinetic Typography-example2",
      "chip_label": "Example 2",
      "family_key": "coverage",
      "category_id": 3,
      "subtype": "3.2 Editorial Motion Typography",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "Three pieces of advice are developed through text and graphics before a shared editorial ending. Each section needs a distinct visual interpretation and a readable typographic hierarchy.",
      "comparison": "Astra connects collage, an isometric maze, moving type cards, and a curved grid. The other outputs reduce typographic organization, semantic graphics, and variation between sections.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-03-02/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-03-02/gpt_6_astra.jpg",
          "duration_s": 54.0,
          "scores": {}
        },
        {
          "id": "minimax_m3",
          "name": "MiniMax M3",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-03-02/minimax_m3.mp4",
          "vposter": "assets/case_studies/coverage/COV-03-02/minimax_m3.jpg",
          "duration_s": 60.0,
          "scores": {}
        },
        {
          "id": "claude_haiku_5_5",
          "name": "Claude Haiku 5.5",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-03-02/claude_haiku_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-03-02/claude_haiku_5_5.jpg",
          "duration_s": 36.0,
          "scores": {}
        }
      ]
    },
    "COV-04-01": {
      "key": "COV-04-01",
      "sample": "ed22638589e458fe396b9d68",
      "task": "v2v",
      "title": "Cut Studio editing workflow",
      "label": "UI & Product Motion-example1",
      "chip_label": "Example 1",
      "family_key": "coverage",
      "category_id": 4,
      "subtype": "4.1 UI / Product Workflow Demo",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "The editing workflow moves from opening the application to importing media, arranging audio and video tracks, adding transitions, previewing, and finishing. Interface states must follow the operation sequence.",
      "comparison": "Astra retains the desktop, media library, layered tracks, preview, and character feedback. Luna simplifies media and track structure; Qwen-Max leaves much of the preview incomplete.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-04-01/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-04-01/gpt_6_astra.jpg",
          "duration_s": 29.0,
          "scores": {}
        },
        {
          "id": "az_gpt6_luna",
          "name": "GPT-6 Luna",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-04-01/az_gpt6_luna.mp4",
          "vposter": "assets/case_studies/coverage/COV-04-01/az_gpt6_luna.jpg",
          "duration_s": 42.0,
          "scores": {}
        },
        {
          "id": "qwen_3_8_max",
          "name": "Qwen3.8-Max",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-04-01/qwen_3_8_max.mp4",
          "vposter": "assets/case_studies/coverage/COV-04-01/qwen_3_8_max.jpg",
          "duration_s": 24.0,
          "scores": {}
        }
      ]
    },
    "COV-04-02": {
      "key": "COV-04-02",
      "sample": "c2d693a5353bccad7b9b7c92",
      "task": "v2v",
      "title": "Moveno health app workflow",
      "label": "UI & Product Motion-example2",
      "chip_label": "Example 2",
      "family_key": "coverage",
      "category_id": 4,
      "subtype": "4.1 UI / Product Workflow Demo",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "Food recognition, calorie logging, recipes, hydration, training, and an AI coach form a connected health-app tour. Distinct screens need clear information hierarchy and continuity.",
      "comparison": "Astra gives the recognition, recipe, hydration, training, and chat screens clear structure. Haiku simplifies recipes and workouts; Qwen-Flash has sparser content and more crowded small text and cards.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-04-02/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-04-02/gpt_6_astra.jpg",
          "duration_s": 38.0,
          "scores": {}
        },
        {
          "id": "claude_haiku_5_5",
          "name": "Claude Haiku 5.5",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-04-02/claude_haiku_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-04-02/claude_haiku_5_5.jpg",
          "duration_s": 40.0,
          "scores": {}
        },
        {
          "id": "qwen_3_8_flash",
          "name": "Qwen3.8-Flash",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-04-02/qwen_3_8_flash.mp4",
          "vposter": "assets/case_studies/coverage/COV-04-02/qwen_3_8_flash.jpg",
          "duration_s": 40.333333333333336,
          "scores": {}
        }
      ]
    },
    "COV-04-03": {
      "key": "COV-04-03",
      "sample": "cde4bbb273bd0cc4a4091ba9",
      "task": "t2v",
      "title": "CodePilot desktop product tour",
      "label": "UI & Product Motion-example3",
      "chip_label": "Example 3",
      "family_key": "coverage",
      "category_id": 4,
      "subtype": "4.1 UI / Product Workflow Demo",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "A desktop product tour demonstrates multiple features through connected screens. Navigation, interface state, and feature order carry the explanation.",
      "comparison": "Astra presents the chat, execution logs, model selector, provider grid, and skills screens in a consistent desktop layout. Gemini retains these feature views in a more compressed sequence. GLM has blank sampled frames in the middle of the tour, interrupting the visible interface progression.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-04-03/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-04-03/gpt_6_astra.jpg",
          "duration_s": 81.8,
          "scores": {}
        },
        {
          "id": "gemini_3_8_flash",
          "name": "Gemini 3.8 Flash",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-04-03/gemini_3_8_flash.mp4",
          "vposter": "assets/case_studies/coverage/COV-04-03/gemini_3_8_flash.jpg",
          "duration_s": 32.0,
          "scores": {}
        },
        {
          "id": "glm_5_3_flash",
          "name": "GLM 5.3 Flash",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-04-03/glm_5_3_flash.mp4",
          "vposter": "assets/case_studies/coverage/COV-04-03/glm_5_3_flash.jpg",
          "duration_s": 68.0,
          "scores": {}
        }
      ]
    },
    "COV-05-01": {
      "key": "COV-05-01",
      "sample": "RTA-0089",
      "task": "t2v",
      "title": "Banking risk and portfolio analytics",
      "label": "Data & Infographic Animation-example1",
      "chip_label": "Example 1",
      "family_key": "coverage",
      "category_id": 5,
      "subtype": "5.1 Quantitative Data Storytelling",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "Capital buffers, net-interest-margin differences, bank risk, portfolio weights, and five-year returns form a multi-chart data story. Trends and comparisons must stay legible across changing chart types.",
      "comparison": "Opus develops the charts and risk callouts, ending with portfolio-versus-bank returns. Qwen-27B keeps the charts in a tighter layout; MiMo leaves the allocation ring and closing return chart less developed.",
      "models": [
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-05-01/claude_opus_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-05-01/claude_opus_5_5.jpg",
          "duration_s": 35.0,
          "scores": {}
        },
        {
          "id": "qwen_3_8_27b",
          "name": "Qwen3.8-27B",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-05-01/qwen_3_8_27b.mp4",
          "vposter": "assets/case_studies/coverage/COV-05-01/qwen_3_8_27b.jpg",
          "duration_s": 38.0,
          "scores": {}
        },
        {
          "id": "mimo_v2_6_pro",
          "name": "MiMo V2.6 Pro",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-05-01/mimo_v2_6_pro.mp4",
          "vposter": "assets/case_studies/coverage/COV-05-01/mimo_v2_6_pro.jpg",
          "duration_s": 22.0,
          "scores": {}
        }
      ]
    },
    "COV-05-02": {
      "key": "COV-05-02",
      "sample": "e49bb2f14ac0a5a21b21718d",
      "task": "t2v",
      "title": "Organism-scale cell population atlas",
      "label": "Data & Infographic Animation-example2",
      "chip_label": "Example 2",
      "family_key": "coverage",
      "category_id": 5,
      "subtype": "5.2 Structural & Relational Infographic",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "A whole-organism model expands into cell populations, moves between clusters, and resolves into a labeled atlas. The central challenge is communicating cluster structure across scales.",
      "comparison": "Astra develops dense colored clusters, visits individual groups, and returns to a labeled overview. Sol simplifies the overall hierarchy; Luna provides fewer cluster details and labels.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-05-02/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-05-02/gpt_6_astra.jpg",
          "duration_s": 56.0,
          "scores": {}
        },
        {
          "id": "gpt_6_1_sol",
          "name": "GPT-6.1 Sol",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-05-02/gpt_6_1_sol.mp4",
          "vposter": "assets/case_studies/coverage/COV-05-02/gpt_6_1_sol.jpg",
          "duration_s": 50.0,
          "scores": {}
        },
        {
          "id": "az_gpt6_luna",
          "name": "GPT-6 Luna",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-05-02/az_gpt6_luna.mp4",
          "vposter": "assets/case_studies/coverage/COV-05-02/az_gpt6_luna.jpg",
          "duration_s": 30.0,
          "scores": {}
        }
      ]
    },
    "COV-05-03": {
      "key": "COV-05-03",
      "sample": "da2eb7ef1d2e6fb4cabaf577",
      "task": "v2v",
      "title": "Mapping definitions of life",
      "label": "Data & Infographic Animation-example3",
      "chip_label": "Example 3",
      "family_key": "coverage",
      "category_id": 5,
      "subtype": "5.2 Structural & Relational Infographic",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "Pairwise comparisons of 68 definitions of life develop into a similarity matrix, clustering, and a relational landscape. The sequence needs to preserve the meaning of the analysis through each representation.",
      "comparison": "Opus connects the 68-by-68 matrix, sorting, relational terrain, and labels. Gemini emphasizes more abstract graphics; Luna's later stages rely on text and sparse visual structure.",
      "models": [
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-05-03/claude_opus_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-05-03/claude_opus_5_5.jpg",
          "duration_s": 41.0,
          "scores": {}
        },
        {
          "id": "gemini_3_8_flash",
          "name": "Gemini 3.8 Flash",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-05-03/gemini_3_8_flash.mp4",
          "vposter": "assets/case_studies/coverage/COV-05-03/gemini_3_8_flash.jpg",
          "duration_s": 29.0,
          "scores": {}
        },
        {
          "id": "az_gpt6_luna",
          "name": "GPT-6 Luna",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-05-03/az_gpt6_luna.mp4",
          "vposter": "assets/case_studies/coverage/COV-05-03/az_gpt6_luna.jpg",
          "duration_s": 36.0,
          "scores": {}
        }
      ]
    },
    "COV-06-01": {
      "key": "COV-06-01",
      "sample": "b92b72e7e18c58f6c54c4508",
      "task": "t2v",
      "title": "Doctor Who themed title sequence",
      "label": "Title Sequences-example1",
      "chip_label": "Example 1",
      "family_key": "coverage",
      "category_id": 6,
      "subtype": "6.1 Opening & Title Sequence",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "A Doctor Who opening develops the time vortex, TARDIS, Gallifreyan graphics, and regeneration before resolving into the title. Theme and identity guide the sequence.",
      "comparison": "Opus develops the spatial vortex, typography, blueprint, and regeneration sections. Luna simplifies objects and identity graphics; GLM leaves several middle sections without their central visual elements.",
      "models": [
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-06-01/claude_opus_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-06-01/claude_opus_5_5.jpg",
          "duration_s": 50.0,
          "scores": {}
        },
        {
          "id": "az_gpt6_luna",
          "name": "GPT-6 Luna",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-06-01/az_gpt6_luna.mp4",
          "vposter": "assets/case_studies/coverage/COV-06-01/az_gpt6_luna.jpg",
          "duration_s": 50.0,
          "scores": {}
        },
        {
          "id": "glm_5_3_flash",
          "name": "GLM 5.3 Flash",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-06-01/glm_5_3_flash.mp4",
          "vposter": "assets/case_studies/coverage/COV-06-01/glm_5_3_flash.jpg",
          "duration_s": 45.0,
          "scores": {}
        }
      ]
    },
    "COV-06-02": {
      "key": "COV-06-02",
      "sample": "youtube_G33_0fd370772efa",
      "task": "t2v",
      "title": "ParaNorman end-title sequence",
      "label": "Title Sequences-example2",
      "chip_label": "Example 2",
      "family_key": "coverage",
      "category_id": 6,
      "subtype": "6.2 Closing & Credits Sequence",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "Cast names are paired with horror-comedy characters and settings before the production credits. The challenge is coordinating readable credits, character staging, and a sequence of distinct scenes.",
      "comparison": "Astra develops expressive characters, settings, and production credits. Opus uses more geometric figures with some crowded text; Haiku substitutes simpler blocks and silhouettes, with some credits outside the frame.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-06-02/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-06-02/gpt_6_astra.jpg",
          "duration_s": 131.1,
          "scores": {}
        },
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-06-02/claude_opus_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-06-02/claude_opus_5_5.jpg",
          "duration_s": 90.0,
          "scores": {}
        },
        {
          "id": "claude_haiku_5_5",
          "name": "Claude Haiku 5.5",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-06-02/claude_haiku_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-06-02/claude_haiku_5_5.jpg",
          "duration_s": 86.83333333333333,
          "scores": {}
        }
      ]
    },
    "COV-06-03": {
      "key": "COV-06-03",
      "sample": "RTA-0107",
      "task": "t2v",
      "title": "Dual Reel opening titles",
      "label": "Title Sequences-example3",
      "chip_label": "Example 3",
      "family_key": "coverage",
      "category_id": 6,
      "subtype": "6.1 Opening & Title Sequence",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "Production credits and a final series title organize the forest, dinosaurs, waves, skeletal passage, and gothic setting into an opening sequence. The imagery serves the series identity rather than a standalone character narrative.",
      "comparison": "Astra connects layered forests, dinosaurs, waves, a rib-cage passage, and a gothic finale with a consistent dark palette and a clear title reveal. Sonnet preserves the main sequence with flatter scenery and simpler figures. MiniMax reduces the dinosaurs and bone structures to less recognizable shapes and uses sparser staging.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-06-03/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-06-03/gpt_6_astra.jpg",
          "duration_s": 45.0,
          "scores": {}
        },
        {
          "id": "claude_sonnet_5_5",
          "name": "Claude Sonnet 5.5",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-06-03/claude_sonnet_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-06-03/claude_sonnet_5_5.jpg",
          "duration_s": 42.0,
          "scores": {}
        },
        {
          "id": "minimax_m3",
          "name": "MiniMax M3",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-06-03/minimax_m3.mp4",
          "vposter": "assets/case_studies/coverage/COV-06-03/minimax_m3.jpg",
          "duration_s": 30.0,
          "scores": {}
        }
      ]
    },
    "COV-07-01": {
      "key": "COV-07-01",
      "sample": "RTA-0112",
      "task": "t2v",
      "title": "Sports broadcast package",
      "label": "Broadcast & Show Graphics-example1",
      "chip_label": "Example 1",
      "family_key": "coverage",
      "category_id": 7,
      "subtype": "7.1 News & Sports Graphics Package",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "Scores, field diagrams, player statistics, replay graphics, and final results form a sports broadcast package. The difficulty is maintaining a shared visual system across different on-air layouts.",
      "comparison": "Opus uses a consistent orange-and-black package across scores, statistics, replay, and final results. Gemini simplifies multi-view organization; Haiku has fewer graphic layers and more crowded cards and headings.",
      "models": [
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-07-01/claude_opus_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-07-01/claude_opus_5_5.jpg",
          "duration_s": 38.0,
          "scores": {}
        },
        {
          "id": "gemini_3_8_flash",
          "name": "Gemini 3.8 Flash",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-07-01/gemini_3_8_flash.mp4",
          "vposter": "assets/case_studies/coverage/COV-07-01/gemini_3_8_flash.jpg",
          "duration_s": 24.0,
          "scores": {}
        },
        {
          "id": "claude_haiku_5_5",
          "name": "Claude Haiku 5.5",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-07-01/claude_haiku_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-07-01/claude_haiku_5_5.jpg",
          "duration_s": 37.0,
          "scores": {}
        }
      ]
    },
    "COV-07-02": {
      "key": "COV-07-02",
      "sample": "RTA-0114",
      "task": "t2v",
      "title": "Beat & Bake entertainment show package",
      "label": "Broadcast & Show Graphics-example2",
      "chip_label": "Example 2",
      "family_key": "coverage",
      "category_id": 7,
      "subtype": "7.2 Entertainment & Show Graphics Package",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "Show identity, judges, challenges, workstations, and timers form an entertainment competition package. The layouts need to stay consistent while supporting different program segments.",
      "comparison": "Astra retains contestants, challenge information, split screens, and the winner ending. Opus reduces people to gray silhouettes; Qwen-Flash omits contestant detail and crowds the title and closing cards.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-07-02/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-07-02/gpt_6_astra.jpg",
          "duration_s": 60.0,
          "scores": {}
        },
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-07-02/claude_opus_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-07-02/claude_opus_5_5.jpg",
          "duration_s": 46.0,
          "scores": {}
        },
        {
          "id": "qwen_3_8_flash",
          "name": "Qwen3.8-Flash",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-07-02/qwen_3_8_flash.mp4",
          "vposter": "assets/case_studies/coverage/COV-07-02/qwen_3_8_flash.jpg",
          "duration_s": 48.0,
          "scores": {}
        }
      ]
    },
    "COV-07-03": {
      "key": "COV-07-03",
      "sample": "RTA-0113",
      "task": "t2v",
      "title": "Casserole Queens show graphics",
      "label": "Broadcast & Show Graphics-example3",
      "chip_label": "Example 3",
      "family_key": "coverage",
      "category_id": 7,
      "subtype": "7.2 Entertainment & Show Graphics Package",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "A food opening, host credits, show identity, guest lineup, and cocktail feature share a retro entertainment package. Graphic continuity must survive changes in subject and layout.",
      "comparison": "Astra develops food detail, characters, program layouts, and retro graphics. Sol retains the package structure with simpler detail; Qwen-Flash crowds characters, cards, and the closing text.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-07-03/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-07-03/gpt_6_astra.jpg",
          "duration_s": 40.0,
          "scores": {}
        },
        {
          "id": "gpt_6_1_sol",
          "name": "GPT-6.1 Sol",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-07-03/gpt_6_1_sol.mp4",
          "vposter": "assets/case_studies/coverage/COV-07-03/gpt_6_1_sol.jpg",
          "duration_s": 37.0,
          "scores": {}
        },
        {
          "id": "qwen_3_8_flash",
          "name": "Qwen3.8-Flash",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-07-03/qwen_3_8_flash.mp4",
          "vposter": "assets/case_studies/coverage/COV-07-03/qwen_3_8_flash.jpg",
          "duration_s": 30.0,
          "scores": {}
        }
      ]
    },
    "COV-08-01": {
      "key": "COV-08-01",
      "sample": "RTA-0127",
      "task": "t2v",
      "title": "Knight and glowing-glyph character adventure",
      "label": "Illustrative & Character Narrative-example1",
      "chip_label": "Example 1",
      "family_key": "coverage",
      "category_id": 8,
      "subtype": "8.1 Character-driven Narrative",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "A knight's actions connect magical glyphs and successive stages of an adventure. Character identity and the journey drive the narrative across changing scenes.",
      "comparison": "Astra uses articulated armor, expressive portraits, and layered architecture to distinguish the narrative stages. Gemini reduces figures and environments to sparse silhouettes. Luna retains more angular character detail, but simplifies the chase and final sanctuary into broad geometric layouts.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-08-01/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-08-01/gpt_6_astra.jpg",
          "duration_s": 64.0,
          "scores": {}
        },
        {
          "id": "gemini_3_8_flash",
          "name": "Gemini 3.8 Flash",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-08-01/gemini_3_8_flash.mp4",
          "vposter": "assets/case_studies/coverage/COV-08-01/gemini_3_8_flash.jpg",
          "duration_s": 38.5,
          "scores": {}
        },
        {
          "id": "az_gpt6_luna",
          "name": "GPT-6 Luna",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-08-01/az_gpt6_luna.mp4",
          "vposter": "assets/case_studies/coverage/COV-08-01/az_gpt6_luna.jpg",
          "duration_s": 45.0,
          "scores": {}
        }
      ]
    },
    "COV-08-02": {
      "key": "COV-08-02",
      "sample": "youtube_R25_ce71dc8e73b0",
      "task": "t2v",
      "title": "Glass Half - character short narrative",
      "label": "Illustrative & Character Narrative-example2",
      "chip_label": "Example 2",
      "family_key": "coverage",
      "category_id": 8,
      "subtype": "8.1 Character-driven Narrative",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "Interactions and emotional responses between characters drive this gallery-set short. The setting needs to support the actions and the narrative resolution.",
      "comparison": "Astra contrasts the characters through expressive poses and richly illustrated paintings. Luna preserves the opposing viewpoints with simpler figures and geometric artwork. MiMo uses rounder, more generic characters and sparse gallery compositions, with some closing text cropped by the frame.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-08-02/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-08-02/gpt_6_astra.jpg",
          "duration_s": 123.0,
          "scores": {}
        },
        {
          "id": "az_gpt6_luna",
          "name": "GPT-6 Luna",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-08-02/az_gpt6_luna.mp4",
          "vposter": "assets/case_studies/coverage/COV-08-02/az_gpt6_luna.jpg",
          "duration_s": 78.0,
          "scores": {}
        },
        {
          "id": "mimo_v2_6_pro",
          "name": "MiMo V2.6 Pro",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-08-02/mimo_v2_6_pro.mp4",
          "vposter": "assets/case_studies/coverage/COV-08-02/mimo_v2_6_pro.jpg",
          "duration_s": 110.0,
          "scores": {}
        }
      ]
    },
    "COV-09-01": {
      "key": "COV-09-01",
      "sample": "3a989533cb9ac50281fc2847",
      "task": "t2v",
      "title": "Ember - procedural generative chapters",
      "label": "Abstract & Experimental Motion-example1",
      "chip_label": "Example 1",
      "family_key": "coverage",
      "category_id": 9,
      "subtype": "9.1 Procedural Geometry & Particle Motion",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "Ten generative chapters develop geometry, particles, and evolving forms. Procedural variety needs to support a recognizable progression across the complete piece.",
      "comparison": "The high output develops a richer range of procedural forms and layers. The middle and low outputs reduce formal variety and the development between chapters.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-09-01/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-09-01/gpt_6_astra.jpg",
          "duration_s": 84.0,
          "scores": {}
        },
        {
          "id": "az_gpt6_luna",
          "name": "GPT-6 Luna",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-09-01/az_gpt6_luna.mp4",
          "vposter": "assets/case_studies/coverage/COV-09-01/az_gpt6_luna.jpg",
          "duration_s": 43.0,
          "scores": {}
        },
        {
          "id": "qwen_3_8_27b",
          "name": "Qwen3.8-27B",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-09-01/qwen_3_8_27b.mp4",
          "vposter": "assets/case_studies/coverage/COV-09-01/qwen_3_8_27b.jpg",
          "duration_s": 46.0,
          "scores": {}
        }
      ]
    },
    "COV-09-02": {
      "key": "COV-09-02",
      "sample": "1bd59cf29a9f8448b3be1b87",
      "task": "v2v",
      "title": "Phosphenes - perception and abstract film",
      "label": "Abstract & Experimental Motion-example2",
      "chip_label": "Example 2",
      "family_key": "coverage",
      "category_id": 9,
      "subtype": "9.2 Abstract & Formal Motion Experiment",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "A perceptual journey is organized through changing scale, form, and visual rhythm. Success depends on the development between abstract sections.",
      "comparison": "Astra develops an eye, circular symbols, a colored tunnel, iridescent forms, and a spatial corridor. The other outputs reduce the variety of forms and their continuity.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-09-02/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-09-02/gpt_6_astra.jpg",
          "duration_s": 25.0,
          "scores": {}
        },
        {
          "id": "az_gpt6_luna",
          "name": "GPT-6 Luna",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-09-02/az_gpt6_luna.mp4",
          "vposter": "assets/case_studies/coverage/COV-09-02/az_gpt6_luna.jpg",
          "duration_s": 36.0,
          "scores": {}
        },
        {
          "id": "minimax_m3",
          "name": "MiniMax M3",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-09-02/minimax_m3.mp4",
          "vposter": "assets/case_studies/coverage/COV-09-02/minimax_m3.jpg",
          "duration_s": 70.0,
          "scores": {}
        }
      ]
    },
    "COV-10-01": {
      "key": "COV-10-01",
      "sample": "youtube_G106_1b36fe238e0d",
      "task": "v2v",
      "title": "Cyberpunk room disassembly",
      "label": "3D Motion-example4",
      "chip_label": "Example 4",
      "family_key": "coverage",
      "category_id": 10,
      "subtype": "10.1 3D Object & Product Showcase",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "Computers, furniture, lighting, and floor panels form a multi-part 3D room that is displayed, disassembled, and rebuilt. The challenge is maintaining the spatial relationships between parts.",
      "comparison": "Astra preserves distinct screens, furniture, lighting, and floor components. Opus simplifies the furnishings; MiniMax keeps visible objects but stacks them more frontally, weakening the room structure and assembly depth.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-10-01/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-10-01/gpt_6_astra.jpg",
          "duration_s": 11.0,
          "scores": {}
        },
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-10-01/claude_opus_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-10-01/claude_opus_5_5.jpg",
          "duration_s": 15.0,
          "scores": {}
        },
        {
          "id": "minimax_m3",
          "name": "MiniMax M3",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-10-01/minimax_m3.mp4",
          "vposter": "assets/case_studies/coverage/COV-10-01/minimax_m3.jpg",
          "duration_s": 30.0,
          "scores": {}
        }
      ]
    },
    "COV-10-02": {
      "key": "COV-10-02",
      "sample": "c8a633537d12a440509dc35d",
      "task": "t2v",
      "title": "Mountain railway simulation",
      "label": "3D Motion-example1",
      "chip_label": "Example 1",
      "family_key": "coverage",
      "category_id": 10,
      "subtype": "10.3 Procedural & Simulated 3D Motion",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "A continuous railway crosses a 3D valley with bridges, water, vegetation, trains, and changing day-night lighting. Movement and status updates must remain consistent with the route.",
      "comparison": "Astra retains dense vegetation, continuous track, the valley, water, and lighting changes. Opus simplifies the environment; MiniMax reduces terrain, vegetation, and bridge detail and changes spatial relationships.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-10-02/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-10-02/gpt_6_astra.jpg",
          "duration_s": 24.0,
          "scores": {}
        },
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-10-02/claude_opus_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-10-02/claude_opus_5_5.jpg",
          "duration_s": 20.0,
          "scores": {}
        },
        {
          "id": "minimax_m3",
          "name": "MiniMax M3",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-10-02/minimax_m3.mp4",
          "vposter": "assets/case_studies/coverage/COV-10-02/minimax_m3.jpg",
          "duration_s": 60.0,
          "scores": {}
        }
      ]
    },
    "COV-10-03": {
      "key": "COV-10-03",
      "sample": "RTA-0374",
      "task": "v2v",
      "title": "Wireless earbuds engineering showcase",
      "label": "3D Motion-example2",
      "chip_label": "Example 2",
      "family_key": "coverage",
      "category_id": 10,
      "subtype": "10.1 3D Object & Product Showcase",
      "metrics": [],
      "note": "Full generated videos",
      "desc": "Drivers and layered components develop into paired earbuds, charging coils, connected devices, and a case. Curved surfaces, materials, and component relationships must persist through assembly.",
      "comparison": "Astra gives the drivers, earbuds, and charging case clearer volume and surface highlights. Opus simplifies shape and materials; Haiku distorts the stems, lid, and relationships between components.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-10-03/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-10-03/gpt_6_astra.jpg",
          "duration_s": 40.0,
          "scores": {}
        },
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-10-03/claude_opus_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-10-03/claude_opus_5_5.jpg",
          "duration_s": 40.666666666666664,
          "scores": {}
        },
        {
          "id": "claude_haiku_5_5",
          "name": "Claude Haiku 5.5",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-10-03/claude_haiku_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-10-03/claude_haiku_5_5.jpg",
          "duration_s": 60.0,
          "scores": {}
        }
      ]
    },
    "COV-RELATED-3D-09": {
      "key": "COV-RELATED-3D-09",
      "sample": "db6f1d4deb3e2d17a8c967f1",
      "task": "i2v",
      "title": "DualSense controller",
      "label": "3D Motion-example3",
      "chip_label": "Example 3",
      "family_key": "coverage",
      "category_id": 10,
      "metrics": [],
      "note": "Full generated videos",
      "desc": "The controller is the 3D anchor of a longer product-interface tour, including calibration screens and interactive features.",
      "comparison": "Astra retains the curved grips, black-and-white panels, touchpad, sticks, and blue trim. Kimi simplifies the controller geometry; DeepSeek uses a flatter silhouette and simpler control placement.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/skeuomorphic/3D-09/gpt_6_astra/video.mp4",
          "vposter": "assets/case_studies/coverage/COV-RELATED-3D-09/gpt_6_astra.jpg",
          "duration_s": 66.0,
          "scores": {}
        },
        {
          "id": "kimi_k3",
          "name": "Kimi K3",
          "rank": "mid",
          "video": "assets/case_studies/skeuomorphic/3D-09/kimi_k3/video.mp4",
          "vposter": "assets/case_studies/coverage/COV-RELATED-3D-09/kimi_k3.jpg",
          "duration_s": 48.0,
          "scores": {}
        },
        {
          "id": "deepseek_v4_1_flash",
          "name": "DeepSeek V4.1 Flash",
          "rank": "low",
          "video": "assets/case_studies/skeuomorphic/3D-09/deepseek_v4_1_flash/video.mp4",
          "vposter": "assets/case_studies/coverage/COV-RELATED-3D-09/deepseek_v4_1_flash.jpg",
          "duration_s": 70.0,
          "scores": {}
        }
      ],
      "primary_category_id": 10,
      "secondary_category_ids": [
        2
      ],
      "category_role": "primary"
    },
    "COV-RELATED-3D-06": {
      "key": "COV-RELATED-3D-06",
      "sample": "22e7dd187282f2e734066f35",
      "task": "i2v",
      "title": "ROG laptop showcase",
      "label": "Branding & Promotional Motion-example1",
      "chip_label": "Example 1",
      "family_key": "coverage",
      "category_id": 2,
      "metrics": [],
      "note": "Full generated videos",
      "desc": "A 3D laptop anchors a product-promotion sequence that also includes component callouts, code, and performance screens.",
      "comparison": "Astra retains detailed chassis and keyboard geometry alongside component callouts and screen demonstrations. Opus simplifies the laptop body and emphasizes large promotional typography. Gemini uses a sparser laptop outline and a shorter sequence of feature cards.",
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/skeuomorphic/3D-06/gpt_6_astra/video.mp4",
          "vposter": "assets/case_studies/coverage/COV-RELATED-3D-06/gpt_6_astra.jpg",
          "duration_s": 61.0,
          "scores": {}
        },
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "rank": "mid",
          "video": "assets/case_studies/skeuomorphic/3D-06/claude_opus_5_5/video.mp4",
          "vposter": "assets/case_studies/coverage/COV-RELATED-3D-06/claude_opus_5_5.jpg",
          "duration_s": 63.0,
          "scores": {}
        },
        {
          "id": "gemini_3_8_flash",
          "name": "Gemini 3.8 Flash",
          "rank": "low",
          "video": "assets/case_studies/skeuomorphic/3D-06/gemini_3_8_flash/video.mp4",
          "vposter": "assets/case_studies/coverage/COV-RELATED-3D-06/gemini_3_8_flash.jpg",
          "duration_s": 20.0,
          "scores": {}
        }
      ],
      "primary_category_id": 2,
      "secondary_category_ids": [
        10
      ],
      "category_role": "primary",
      "subtype": "2.2 Product & Service Promotion"
    },
    "COV-10-05": {
      "key": "COV-10-05",
      "sample": "RTA-0371",
      "task": "v2v",
      "title": "Tree canopy and seasonal lighting",
      "family_key": "coverage",
      "category_id": 10,
      "metrics": [],
      "note": "Full generated videos",
      "desc": "A procedural tree develops through branching, foliage, changing light, wind, and seasonal stages.",
      "comparison": "Opus preserves a visible trunk and a complete crown across the lighting and seasonal stages. Haiku retains the branching structure with sparser foliage. Astra produces denser leaves, but the trunk is not visible in several shaded views.",
      "models": [
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-10-05/claude_opus_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-10-05/claude_opus_5_5.jpg",
          "duration_s": 44.0,
          "scores": {}
        },
        {
          "id": "claude_haiku_5_5",
          "name": "Claude Haiku 5.5",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-10-05/claude_haiku_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-10-05/claude_haiku_5_5.jpg",
          "duration_s": 35.0,
          "scores": {}
        },
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-10-05/gpt_6_astra.mp4",
          "vposter": "assets/case_studies/coverage/COV-10-05/gpt_6_astra.jpg",
          "duration_s": 33.0,
          "scores": {}
        }
      ],
      "label": "3D Motion-example5",
      "chip_label": "Example 5"
    },
    "COV-10-06": {
      "key": "COV-10-06",
      "sample": "RTA-0379",
      "task": "v2v",
      "title": "Poolside pavilion walkthrough",
      "family_key": "coverage",
      "category_id": 10,
      "metrics": [],
      "note": "Full generated videos",
      "desc": "A 3D walkthrough connects a pool, timber pergola, lounge furniture, and a day-to-night lighting change.",
      "comparison": "Opus maintains a spatial walkthrough of the pool, pavilion, and lounge furniture through the day-to-night change. Sonnet adds denser slatted shadows, but its night scenes have excessive bloom. Haiku reduces the scene to a flatter frontal layout with simpler furnishings.",
      "models": [
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "rank": "high",
          "video": "assets/case_studies/coverage/COV-10-06/claude_opus_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-10-06/claude_opus_5_5.jpg",
          "duration_s": 18.0,
          "scores": {}
        },
        {
          "id": "claude_sonnet_5_5",
          "name": "Claude Sonnet 5.5",
          "rank": "mid",
          "video": "assets/case_studies/coverage/COV-10-06/claude_sonnet_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-10-06/claude_sonnet_5_5.jpg",
          "duration_s": 15.0,
          "scores": {}
        },
        {
          "id": "claude_haiku_5_5",
          "name": "Claude Haiku 5.5",
          "rank": "low",
          "video": "assets/case_studies/coverage/COV-10-06/claude_haiku_5_5.mp4",
          "vposter": "assets/case_studies/coverage/COV-10-06/claude_haiku_5_5.jpg",
          "duration_s": 20.0,
          "scores": {}
        }
      ],
      "label": "3D Motion-example6",
      "chip_label": "Example 6"
    }
  },
  "primary_count": 26,
  "related_count": 2,
  "additional_count": 2
};
