window.COMPASS_DATA = {
  "project": {
    "name": "Code2Video-Compass",
    "title": "A Comprehensive Benchmark for General-Purpose Code-Based Video Generation across T2V, I2V, and V2V",
    "status": "Research preview",
    "updated": "2026-10-21",
    "authors": [
      "Zhenghan Chen",
      "Zekai Shao",
      "Xin Lin",
      "Leting Cheng",
      "Siming Chen"
    ],
    "affiliations": [],
    "links": {
      "paper": "assets/paper.pdf",
      "github": "https://github.com/code2video-compass/Code2Video-Compass",
      "dataset": "https://huggingface.co/datasets/code2video-compass/Code2Video-Compass",
      "arxiv": "https://arxiv.org/abs/2610.28416",
      "website": null
    },
    "citation": "@misc{chen2026code2videocompasscomprehensivebenchmarkgeneralpurpose,\n      title={Code2Video-Compass: A Comprehensive Benchmark for General-Purpose Code-Based Video Generation across T2V, I2V, and V2V},\n      author={Zhenghan Chen and Zekai Shao and Xin Lin and Leting Cheng and Siming Chen},\n      year={2026},\n      eprint={2610.28416},\n      archivePrefix={arXiv},\n      primaryClass={cs.CV},\n      url={https://arxiv.org/abs/2610.28416}\n}",
    "abstract": "Code-based video generation offers fine-grained control, targeted editing, and component reuse compared with direct video generation. This approach requires multimodal large language models (MLLMs) to translate visual and temporal requirements into executable programs that produce complete videos. However, existing code-based benchmarks primarily target specialized tasks, leaving complete video creation across diverse creative categories and input modalities insufficiently evaluated. We introduce <b>Code2Video-Compass</b>, a general-purpose benchmark for code-based video generation across <b>text-to-video (T2V), image-to-video (I2V), and video-to-video (V2V)</b> settings. Code2Video-Compass comprises <b>2,104 tasks</b> spanning <b>10 categories</b>, <b>24 subtypes</b>, and three complexity dimensions covering construction, dynamic animation, and state dependency. It combines tasks curated from textual instructions and visual references with corresponding T2V, I2V, and V2V tasks derived from complete professional and user-created videos. We propose a dual-level evaluation framework combining <b>12 objective metrics</b> and <b>five subjective metrics</b>. Objective evaluation covers operational performance, video quality, text–video alignment, and reference fidelity, while subjective evaluation uses an MLLM judge to evaluate instruction following and holistic video quality. Extensive evaluation of <b>15 recent proprietary and open-weight MLLMs</b> from nine families reveals that even leading models face challenges in reliably generating high-quality complete videos aligned with textual and visual requirements, with performance generally declining as construction, dynamic animation, and state-dependency complexity increases. We anticipate that Code2Video-Compass will advance reliable, coherent, and controllable code-based video generation and inspire broader progress in programmatic visual creation."
  },
  "counts": {
    "tasks": 2104,
    "categories": 10,
    "subtypes": 24,
    "models": 15,
    "objective_metrics": 12,
    "subjective_metrics": 5,
    "paired_sources": 573,
    "paired_tasks": 1719,
    "independent_tasks": 385,
    "statistical_records": 958
  },
  "settings": [
    {
      "id": "T2V",
      "name": "Text-to-Video",
      "input": "Text instruction",
      "tasks": 718,
      "independent": 145,
      "paired": 573,
      "description": "Create a complete video from a self-contained description of content, design, and temporal progression."
    },
    {
      "id": "I2V",
      "name": "Image-to-Video",
      "input": "Text instruction + reference image",
      "tasks": 693,
      "independent": 120,
      "paired": 573,
      "description": "Reconstruct a reference image through code and integrate its visual state at a suitable point in the full video."
    },
    {
      "id": "V2V",
      "name": "Video-to-Video",
      "input": "Text instruction + reference clip",
      "tasks": 693,
      "independent": 120,
      "paired": 573,
      "description": "Reconstruct a 2–10 second reference clip and integrate its appearance, motion, and event sequence into a complete video."
    }
  ],
  "categories": [
    {
      "id": "1",
      "name": "Explainer Motion Graphics",
      "subtypes": [
        {
          "id": "1.1",
          "name": "Concept & Mechanism Explanation"
        },
        {
          "id": "1.2",
          "name": "Process & Procedure Explanation"
        },
        {
          "id": "1.3",
          "name": "System & Architecture Explanation"
        }
      ]
    },
    {
      "id": "2",
      "name": "Branding & Promotional Motion",
      "subtypes": [
        {
          "id": "2.1",
          "name": "Brand Identity & Logo Motion"
        },
        {
          "id": "2.2",
          "name": "Product & Service Promotion"
        },
        {
          "id": "2.3",
          "name": "Event & Campaign Promotion"
        }
      ]
    },
    {
      "id": "3",
      "name": "Kinetic Typography",
      "subtypes": [
        {
          "id": "3.1",
          "name": "Text-driven Motion"
        },
        {
          "id": "3.2",
          "name": "Editorial Motion Typography"
        }
      ]
    },
    {
      "id": "4",
      "name": "UI & Product Motion",
      "subtypes": [
        {
          "id": "4.1",
          "name": "UI & Product Workflow Demo"
        },
        {
          "id": "4.2",
          "name": "Dashboard, HUD & Analytics Motion"
        }
      ]
    },
    {
      "id": "5",
      "name": "Data & Infographic Animation",
      "subtypes": [
        {
          "id": "5.1",
          "name": "Quantitative Data Storytelling"
        },
        {
          "id": "5.2",
          "name": "Structural & Relational Infographic"
        },
        {
          "id": "5.3",
          "name": "Timeline & Geographic Information Animation"
        }
      ]
    },
    {
      "id": "6",
      "name": "Title Sequences",
      "subtypes": [
        {
          "id": "6.1",
          "name": "Opening & Title Sequence"
        },
        {
          "id": "6.2",
          "name": "Closing & Credits Sequence"
        }
      ]
    },
    {
      "id": "7",
      "name": "Broadcast & Show Graphics",
      "subtypes": [
        {
          "id": "7.1",
          "name": "News & Sports Graphics Package"
        },
        {
          "id": "7.2",
          "name": "Entertainment & Show Graphics Package"
        }
      ]
    },
    {
      "id": "8",
      "name": "Illustrative & Character Narrative",
      "subtypes": [
        {
          "id": "8.1",
          "name": "Character-driven Narrative"
        },
        {
          "id": "8.2",
          "name": "Illustrative Scene & Non-character Narrative"
        }
      ]
    },
    {
      "id": "9",
      "name": "Abstract & Experimental Motion",
      "subtypes": [
        {
          "id": "9.1",
          "name": "Procedural Geometry & Particle Motion"
        },
        {
          "id": "9.2",
          "name": "Abstract & Formal Motion Experiment"
        }
      ]
    },
    {
      "id": "10",
      "name": "3D Motion",
      "subtypes": [
        {
          "id": "10.1",
          "name": "3D Object & Product Showcase"
        },
        {
          "id": "10.2",
          "name": "Photorealistic 3D Environment"
        },
        {
          "id": "10.3",
          "name": "Procedural & Simulated 3D Motion"
        }
      ]
    }
  ],
  "complexity": [
    {
      "id": "C",
      "name": "Construction complexity",
      "levels": [
        "Component composition",
        "Custom geometry and detail",
        "Procedural and simulation systems"
      ]
    },
    {
      "id": "D",
      "name": "Dynamic complexity",
      "levels": [
        "Staged sequences",
        "Coordinated changes",
        "Concurrent motion and transformations"
      ]
    },
    {
      "id": "S",
      "name": "State-dependency complexity",
      "levels": [
        "Adjacent stages",
        "Intervening stages",
        "Long-range dependencies"
      ],
      "na": "N/A when no cross-stage dependency is required."
    }
  ],
  "metrics": [
    {
      "id": "ES",
      "name": "Execution Success",
      "group": "Operational",
      "level": "objective",
      "settings": [
        "T2V",
        "I2V",
        "V2V"
      ],
      "direction": "up",
      "description": "Fraction of all attempted tasks that execute and render a complete, playable video.",
      "scale": "0–1"
    },
    {
      "id": "TC",
      "name": "Token Consumption",
      "group": "Operational",
      "level": "objective",
      "settings": [
        "T2V",
        "I2V",
        "V2V"
      ],
      "direction": "down",
      "description": "Mean API-reported output tokens per attempted task, including reasoning tokens.",
      "scale": "tokens"
    },
    {
      "id": "TQ",
      "name": "Technical Quality",
      "group": "Video quality",
      "level": "objective",
      "settings": [
        "T2V",
        "I2V",
        "V2V"
      ],
      "direction": "up",
      "description": "DOVER++ assesses blur, noise, compression artifacts, and technical clarity.",
      "scale": "method-defined"
    },
    {
      "id": "AQ",
      "name": "Aesthetic Quality",
      "group": "Video quality",
      "level": "objective",
      "settings": [
        "T2V",
        "I2V",
        "V2V"
      ],
      "direction": "up",
      "description": "Aesthetic Predictor V2.5 scores are averaged over video frames.",
      "scale": "method-defined"
    },
    {
      "id": "MS",
      "name": "Motion Smoothness",
      "group": "Video quality",
      "level": "objective",
      "settings": [
        "T2V",
        "I2V",
        "V2V"
      ],
      "direction": "up",
      "description": "AMT interpolation assesses local temporal predictability.",
      "scale": "0–1"
    },
    {
      "id": "L-TVA",
      "name": "Local TVAlign",
      "group": "Text alignment",
      "level": "objective",
      "settings": [
        "T2V",
        "I2V",
        "V2V"
      ],
      "direction": "up",
      "description": "Sliding-window ViCLIP embeddings compare video segments with event descriptions.",
      "scale": "cosine similarity"
    },
    {
      "id": "G-TVA",
      "name": "Global TVAlign",
      "group": "Text alignment",
      "level": "objective",
      "settings": [
        "T2V",
        "I2V",
        "V2V"
      ],
      "direction": "up",
      "description": "Qwen3-VL-Embedding compares the full instruction with frames spanning the complete video.",
      "scale": "cosine similarity"
    },
    {
      "id": "PF",
      "name": "Perceptual Fidelity",
      "group": "Image fidelity",
      "level": "objective",
      "settings": [
        "I2V"
      ],
      "direction": "up",
      "description": "DINOv3 finds the closest reference-image match across the generated video.",
      "scale": "cosine similarity"
    },
    {
      "id": "SF",
      "name": "Structural Fidelity",
      "group": "Image fidelity",
      "level": "objective",
      "settings": [
        "I2V"
      ],
      "direction": "up",
      "description": "SSIM measures local image structure at the DINOv3-selected frame.",
      "scale": "SSIM"
    },
    {
      "id": "SA",
      "name": "Sequence Alignment",
      "group": "Clip fidelity",
      "level": "objective",
      "settings": [
        "V2V"
      ],
      "direction": "up",
      "description": "DINOv3 and subsequence DTW locate and align the reference clip within the output.",
      "scale": "method-defined"
    },
    {
      "id": "AF",
      "name": "Appearance Fidelity",
      "group": "Clip fidelity",
      "level": "objective",
      "settings": [
        "V2V"
      ],
      "direction": "up",
      "description": "DreamSim with a new constrained DTW alignment assesses appearance inside the localized interval.",
      "scale": "method-defined"
    },
    {
      "id": "MF",
      "name": "Motion Fidelity",
      "group": "Clip fidelity",
      "level": "objective",
      "settings": [
        "V2V"
      ],
      "direction": "up",
      "description": "CoTracker3 trajectories compare motion direction and relative displacement.",
      "scale": "method-defined"
    },
    {
      "id": "IF",
      "name": "Instruction Following",
      "group": "Instruction following",
      "level": "subjective",
      "settings": [
        "T2V",
        "I2V",
        "V2V"
      ],
      "direction": "up",
      "description": "A judge answers verifiable visual questions spanning six dimensions; the score is the mean binary answer.",
      "scale": "0–1"
    },
    {
      "id": "NC",
      "name": "Content Coherence",
      "group": "Holistic quality",
      "level": "subjective",
      "settings": [
        "T2V",
        "I2V",
        "V2V"
      ],
      "direction": "up",
      "description": "Coherent progression, persistent states, and internally consistent information.",
      "scale": "1–5"
    },
    {
      "id": "VD",
      "name": "Visual Design",
      "group": "Holistic quality",
      "level": "subjective",
      "settings": [
        "T2V",
        "I2V",
        "V2V"
      ],
      "direction": "up",
      "description": "Composition, typography, readability, color, hierarchy, and purposeful detail.",
      "scale": "1–5"
    },
    {
      "id": "MT",
      "name": "Motion Quality",
      "group": "Holistic quality",
      "level": "subjective",
      "settings": [
        "T2V",
        "I2V",
        "V2V"
      ],
      "direction": "up",
      "description": "Easing, pacing, continuity, transitions, coordinated elements, and behavioral variety.",
      "scale": "1–5"
    },
    {
      "id": "VE",
      "name": "Viewer Engagement",
      "group": "Holistic quality",
      "level": "subjective",
      "settings": [
        "T2V",
        "I2V",
        "V2V"
      ],
      "direction": "up",
      "description": "Interest sustained through emphasis, pacing, and presentation.",
      "scale": "1–5"
    }
  ],
  "models": [
    {
      "id": "gpt-6-astra",
      "name": "GPT-6 Astra",
      "access": "closed",
      "reasoning": "fixed",
      "icon": "assets/models/01-OpenAI.png",
      "video_input": "frames"
    },
    {
      "id": "claude-opus-5-5",
      "name": "Claude Opus 5.5",
      "access": "closed",
      "reasoning": "medium",
      "icon": "assets/models/02-Claude.png",
      "video_input": "frames"
    },
    {
      "id": "gpt-6-1-sol",
      "name": "GPT-6.1 Sol",
      "access": "closed",
      "reasoning": "medium",
      "icon": "assets/models/01-OpenAI.png",
      "video_input": "frames"
    },
    {
      "id": "claude-sonnet-5-5",
      "name": "Claude Sonnet 5.5",
      "access": "closed",
      "reasoning": "high",
      "icon": "assets/models/02-Claude.png",
      "video_input": "frames"
    },
    {
      "id": "gemini-3-8-flash",
      "name": "Gemini 3.8 Flash",
      "access": "closed",
      "reasoning": "medium",
      "icon": "assets/models/03-Gemini.png",
      "video_input": "native"
    },
    {
      "id": "qwen3-8-max",
      "name": "Qwen3.8-Max",
      "access": "closed",
      "reasoning": "xhigh",
      "icon": "assets/models/04-Qwen.png",
      "video_input": "native"
    },
    {
      "id": "gpt-6-luna",
      "name": "GPT-6 Luna",
      "access": "closed",
      "reasoning": "medium",
      "icon": "assets/models/01-OpenAI.png",
      "video_input": "frames"
    },
    {
      "id": "claude-haiku-5-5",
      "name": "Claude Haiku 5.5",
      "access": "closed",
      "reasoning": "medium",
      "icon": "assets/models/02-Claude.png",
      "video_input": "frames"
    },
    {
      "id": "qwen3-8-flash",
      "name": "Qwen3.8-Flash",
      "access": "closed",
      "reasoning": "xhigh",
      "icon": "assets/models/04-Qwen.png",
      "video_input": "native"
    },
    {
      "id": "kimi-k3",
      "name": "Kimi K3",
      "access": "open",
      "reasoning": "max",
      "icon": "assets/models/05-Kimi.png",
      "video_input": "native"
    },
    {
      "id": "mimo-v2-6-pro",
      "name": "MiMo-V2.6-Pro",
      "access": "open",
      "reasoning": "enabled",
      "icon": "assets/models/09-Xiaomi-MiMo-Square.png",
      "video_input": "native"
    },
    {
      "id": "glm-5-3-flash",
      "name": "GLM-5.3-Flash",
      "access": "open",
      "reasoning": "max",
      "icon": "assets/models/06-Zai-GLM.png",
      "video_input": "native"
    },
    {
      "id": "deepseek-v4-1-flash",
      "name": "DeepSeek-V4.1-Flash",
      "access": "open",
      "reasoning": "high",
      "icon": "assets/models/07-DeepSeek.png",
      "video_input": "native"
    },
    {
      "id": "minimax-m3",
      "name": "MiniMax M3",
      "access": "open",
      "reasoning": "adaptive",
      "icon": "assets/models/08-MiniMax.png",
      "video_input": "native"
    },
    {
      "id": "qwen3-8-27b",
      "name": "Qwen3.8-27B",
      "access": "open",
      "reasoning": "xhigh",
      "icon": "assets/models/04-Qwen.png",
      "video_input": "native"
    }
  ],
  "results": [
    {
      "model": "gpt-6-astra",
      "setting": "T2V",
      "metrics": {
        "ES": {
          "value": 0.8638888888888889,
          "n": 360
        },
        "TC": {
          "value": 16646.508333333335,
          "n": 360
        },
        "TQ": {
          "value": 0.1123678256839933,
          "n": 360
        },
        "AQ": {
          "value": 3.561225941219838,
          "n": 360
        },
        "MS": {
          "value": 0.8563997768299723,
          "n": 360
        },
        "L-TVA": {
          "value": 0.482346041354819,
          "n": 360
        },
        "G-TVA": {
          "value": 0.5941138757599724,
          "n": 360
        },
        "IF": {
          "value": 0.850121825,
          "n": 360
        },
        "NC": {
          "value": 3.8055555555555554,
          "n": 360
        },
        "VD": {
          "value": 3.7555555555555555,
          "n": 360
        },
        "MT": {
          "value": 3.702777777777778,
          "n": 360
        },
        "VE": {
          "value": 3.7472222222222222,
          "n": 360
        }
      }
    },
    {
      "model": "claude-opus-5-5",
      "setting": "T2V",
      "metrics": {
        "ES": {
          "value": 0.9444444444444444,
          "n": 360
        },
        "TC": {
          "value": 29400.2,
          "n": 360
        },
        "TQ": {
          "value": 0.11516256884950392,
          "n": 360
        },
        "AQ": {
          "value": 3.6362757609024117,
          "n": 360
        },
        "MS": {
          "value": 0.9329936805758308,
          "n": 360
        },
        "L-TVA": {
          "value": 0.5224021926542302,
          "n": 360
        },
        "G-TVA": {
          "value": 0.652712148676316,
          "n": 360
        },
        "IF": {
          "value": 0.9147252861111111,
          "n": 360
        },
        "NC": {
          "value": 4.0472222222222225,
          "n": 360
        },
        "VD": {
          "value": 3.808333333333333,
          "n": 360
        },
        "MT": {
          "value": 3.827777777777778,
          "n": 360
        },
        "VE": {
          "value": 3.8944444444444444,
          "n": 360
        }
      }
    },
    {
      "model": "gpt-6-1-sol",
      "setting": "T2V",
      "metrics": {
        "ES": {
          "value": 0.8916666666666667,
          "n": 360
        },
        "TC": {
          "value": 13022.43888888889,
          "n": 360
        },
        "TQ": {
          "value": 0.11703094617661829,
          "n": 360
        },
        "AQ": {
          "value": 3.6314710635539087,
          "n": 360
        },
        "MS": {
          "value": 0.88387015762904,
          "n": 360
        },
        "L-TVA": {
          "value": 0.501121562255509,
          "n": 360
        },
        "G-TVA": {
          "value": 0.6142829519179133,
          "n": 360
        },
        "IF": {
          "value": 0.8730548916666666,
          "n": 360
        },
        "NC": {
          "value": 3.952777777777778,
          "n": 360
        },
        "VD": {
          "value": 3.8833333333333333,
          "n": 360
        },
        "MT": {
          "value": 3.7666666666666666,
          "n": 360
        },
        "VE": {
          "value": 3.861111111111111,
          "n": 360
        }
      }
    },
    {
      "model": "claude-sonnet-5-5",
      "setting": "T2V",
      "metrics": {
        "ES": {
          "value": 0.9361111111111111,
          "n": 360
        },
        "TC": {
          "value": 48679.072222222225,
          "n": 360
        },
        "TQ": {
          "value": 0.11587302287916393,
          "n": 360
        },
        "AQ": {
          "value": 3.586737740777446,
          "n": 360
        },
        "MS": {
          "value": 0.9239565880934146,
          "n": 360
        },
        "L-TVA": {
          "value": 0.5205740004950606,
          "n": 360
        },
        "G-TVA": {
          "value": 0.648067395720217,
          "n": 360
        },
        "IF": {
          "value": 0.9108824055555556,
          "n": 360
        },
        "NC": {
          "value": 4.038888888888889,
          "n": 360
        },
        "VD": {
          "value": 3.861111111111111,
          "n": 360
        },
        "MT": {
          "value": 3.8472222222222223,
          "n": 360
        },
        "VE": {
          "value": 3.9,
          "n": 360
        }
      }
    },
    {
      "model": "gemini-3-8-flash",
      "setting": "T2V",
      "metrics": {
        "ES": {
          "value": 0.9027777777777778,
          "n": 360
        },
        "TC": {
          "value": 17816.88888888889,
          "n": 360
        },
        "TQ": {
          "value": 0.10039222449320467,
          "n": 360
        },
        "AQ": {
          "value": 3.331942621593527,
          "n": 360
        },
        "MS": {
          "value": 0.8944767957287965,
          "n": 360
        },
        "L-TVA": {
          "value": 0.48222949322406117,
          "n": 360
        },
        "G-TVA": {
          "value": 0.614121612906456,
          "n": 360
        },
        "IF": {
          "value": 0.798449325,
          "n": 360
        },
        "NC": {
          "value": 3.4805555555555556,
          "n": 360
        },
        "VD": {
          "value": 3.3833333333333333,
          "n": 360
        },
        "MT": {
          "value": 3.272222222222222,
          "n": 360
        },
        "VE": {
          "value": 3.375,
          "n": 360
        }
      }
    },
    {
      "model": "qwen3-8-max",
      "setting": "T2V",
      "metrics": {
        "ES": {
          "value": 0.875,
          "n": 360
        },
        "TC": {
          "value": 60315.98611111111,
          "n": 360
        },
        "TQ": {
          "value": 0.10451563415931078,
          "n": 360
        },
        "AQ": {
          "value": 3.2713078076626543,
          "n": 360
        },
        "MS": {
          "value": 0.8667570104760601,
          "n": 360
        },
        "L-TVA": {
          "value": 0.4806356569957723,
          "n": 360
        },
        "G-TVA": {
          "value": 0.5982257343828679,
          "n": 360
        },
        "IF": {
          "value": 0.8118459777777777,
          "n": 360
        },
        "NC": {
          "value": 3.561111111111111,
          "n": 360
        },
        "VD": {
          "value": 3.2527777777777778,
          "n": 360
        },
        "MT": {
          "value": 3.308333333333333,
          "n": 360
        },
        "VE": {
          "value": 3.3555555555555556,
          "n": 360
        }
      }
    },
    {
      "model": "gpt-6-luna",
      "setting": "T2V",
      "metrics": {
        "ES": {
          "value": 0.8833333333333333,
          "n": 360
        },
        "TC": {
          "value": 9923.461111111112,
          "n": 360
        },
        "TQ": {
          "value": 0.1087025056119046,
          "n": 360
        },
        "AQ": {
          "value": 3.4614346296063476,
          "n": 360
        },
        "MS": {
          "value": 0.8771651382652726,
          "n": 360
        },
        "L-TVA": {
          "value": 0.4825191195452089,
          "n": 360
        },
        "G-TVA": {
          "value": 0.5995152667992645,
          "n": 360
        },
        "IF": {
          "value": 0.7322632694444444,
          "n": 360
        },
        "NC": {
          "value": 3.111111111111111,
          "n": 360
        },
        "VD": {
          "value": 3.2,
          "n": 360
        },
        "MT": {
          "value": 2.908333333333333,
          "n": 360
        },
        "VE": {
          "value": 3.0722222222222224,
          "n": 360
        }
      }
    },
    {
      "model": "claude-haiku-5-5",
      "setting": "T2V",
      "metrics": {
        "ES": {
          "value": 0.8083333333333333,
          "n": 360
        },
        "TC": {
          "value": 47633.89166666667,
          "n": 360
        },
        "TQ": {
          "value": 0.096464801335149,
          "n": 360
        },
        "AQ": {
          "value": 2.98879640385773,
          "n": 360
        },
        "MS": {
          "value": 0.8002558531295746,
          "n": 360
        },
        "L-TVA": {
          "value": 0.4447985548637697,
          "n": 360
        },
        "G-TVA": {
          "value": 0.5509740624162885,
          "n": 360
        },
        "IF": {
          "value": 0.7370887777777778,
          "n": 360
        },
        "NC": {
          "value": 3.161111111111111,
          "n": 360
        },
        "VD": {
          "value": 2.8722222222222222,
          "n": 360
        },
        "MT": {
          "value": 2.888888888888889,
          "n": 360
        },
        "VE": {
          "value": 2.95,
          "n": 360
        }
      }
    },
    {
      "model": "qwen3-8-flash",
      "setting": "T2V",
      "metrics": {
        "ES": {
          "value": 0.7388888888888889,
          "n": 360
        },
        "TC": {
          "value": 65944.82451253482,
          "n": 359
        },
        "TQ": {
          "value": 0.08801992359136536,
          "n": 360
        },
        "AQ": {
          "value": 2.763407827935361,
          "n": 360
        },
        "MS": {
          "value": 0.7316947461508228,
          "n": 360
        },
        "L-TVA": {
          "value": 0.4002213432265887,
          "n": 360
        },
        "G-TVA": {
          "value": 0.5001022794180446,
          "n": 360
        },
        "IF": {
          "value": 0.6411416111111111,
          "n": 360
        },
        "NC": {
          "value": 2.638888888888889,
          "n": 360
        },
        "VD": {
          "value": 2.4694444444444446,
          "n": 360
        },
        "MT": {
          "value": 2.4805555555555556,
          "n": 360
        },
        "VE": {
          "value": 2.4916666666666667,
          "n": 360
        }
      }
    },
    {
      "model": "kimi-k3",
      "setting": "T2V",
      "metrics": {
        "ES": {
          "value": 0.8194444444444444,
          "n": 360
        },
        "TC": {
          "value": 39681.09166666667,
          "n": 360
        },
        "TQ": {
          "value": 0.09404230264845649,
          "n": 360
        },
        "AQ": {
          "value": 3.1204086789321406,
          "n": 360
        },
        "MS": {
          "value": 0.8119743276706801,
          "n": 360
        },
        "L-TVA": {
          "value": 0.4434167056385919,
          "n": 360
        },
        "G-TVA": {
          "value": 0.5615669966571861,
          "n": 360
        },
        "IF": {
          "value": 0.7559136333333333,
          "n": 360
        },
        "NC": {
          "value": 3.2472222222222222,
          "n": 360
        },
        "VD": {
          "value": 3.1,
          "n": 360
        },
        "MT": {
          "value": 3.063888888888889,
          "n": 360
        },
        "VE": {
          "value": 3.125,
          "n": 360
        }
      }
    },
    {
      "model": "mimo-v2-6-pro",
      "setting": "T2V",
      "metrics": {
        "ES": {
          "value": 0.8611111111111112,
          "n": 360
        },
        "TC": {
          "value": 22740.633333333335,
          "n": 360
        },
        "TQ": {
          "value": 0.10812080155272549,
          "n": 360
        },
        "AQ": {
          "value": 3.2642685419866804,
          "n": 360
        },
        "MS": {
          "value": 0.8544005003566781,
          "n": 360
        },
        "L-TVA": {
          "value": 0.4727179572591295,
          "n": 360
        },
        "G-TVA": {
          "value": 0.5845273135436906,
          "n": 360
        },
        "IF": {
          "value": 0.7396499138888889,
          "n": 360
        },
        "NC": {
          "value": 3.188888888888889,
          "n": 360
        },
        "VD": {
          "value": 3.088888888888889,
          "n": 360
        },
        "MT": {
          "value": 3.036111111111111,
          "n": 360
        },
        "VE": {
          "value": 3.0944444444444446,
          "n": 360
        }
      }
    },
    {
      "model": "glm-5-3-flash",
      "setting": "T2V",
      "metrics": {
        "ES": {
          "value": 0.6777777777777778,
          "n": 360
        },
        "TC": {
          "value": 94000.05277777778,
          "n": 360
        },
        "TQ": {
          "value": 0.08137056794112518,
          "n": 360
        },
        "AQ": {
          "value": 2.623097476936849,
          "n": 360
        },
        "MS": {
          "value": 0.6714756344898143,
          "n": 360
        },
        "L-TVA": {
          "value": 0.37178532429623395,
          "n": 360
        },
        "G-TVA": {
          "value": 0.46340339167250527,
          "n": 360
        },
        "IF": {
          "value": 0.6402486861111112,
          "n": 360
        },
        "NC": {
          "value": 2.8305555555555557,
          "n": 360
        },
        "VD": {
          "value": 2.7194444444444446,
          "n": 360
        },
        "MT": {
          "value": 2.683333333333333,
          "n": 360
        },
        "VE": {
          "value": 2.725,
          "n": 360
        }
      }
    },
    {
      "model": "deepseek-v4-1-flash",
      "setting": "T2V",
      "metrics": {
        "ES": {
          "value": 0.8527777777777777,
          "n": 360
        },
        "TC": {
          "value": 65680.14166666666,
          "n": 360
        },
        "TQ": {
          "value": 0.10437834933377099,
          "n": 360
        },
        "AQ": {
          "value": 3.276066223421328,
          "n": 360
        },
        "MS": {
          "value": 0.8452837611313242,
          "n": 360
        },
        "L-TVA": {
          "value": 0.46168782571736355,
          "n": 360
        },
        "G-TVA": {
          "value": 0.5849234039584795,
          "n": 360
        },
        "IF": {
          "value": 0.7969127416666667,
          "n": 360
        },
        "NC": {
          "value": 3.4694444444444446,
          "n": 360
        },
        "VD": {
          "value": 3.3027777777777776,
          "n": 360
        },
        "MT": {
          "value": 3.308333333333333,
          "n": 360
        },
        "VE": {
          "value": 3.352777777777778,
          "n": 360
        }
      }
    },
    {
      "model": "minimax-m3",
      "setting": "T2V",
      "metrics": {
        "ES": {
          "value": 0.5194444444444445,
          "n": 360
        },
        "TC": {
          "value": 15422.502777777778,
          "n": 360
        },
        "TQ": {
          "value": 0.05165622963914842,
          "n": 360
        },
        "AQ": {
          "value": 1.9304695229979325,
          "n": 360
        },
        "MS": {
          "value": 0.51618324968892,
          "n": 360
        },
        "L-TVA": {
          "value": 0.2622588589643982,
          "n": 360
        },
        "G-TVA": {
          "value": 0.3319144582582845,
          "n": 360
        },
        "IF": {
          "value": 0.330317625,
          "n": 360
        },
        "NC": {
          "value": 1.3555555555555556,
          "n": 360
        },
        "VD": {
          "value": 1.3444444444444446,
          "n": 360
        },
        "MT": {
          "value": 1.2583333333333333,
          "n": 360
        },
        "VE": {
          "value": 1.2944444444444445,
          "n": 360
        }
      }
    },
    {
      "model": "qwen3-8-27b",
      "setting": "T2V",
      "metrics": {
        "ES": {
          "value": 0.6916666666666667,
          "n": 360
        },
        "TC": {
          "value": 87862.03064066853,
          "n": 359
        },
        "TQ": {
          "value": 0.07921204292988833,
          "n": 360
        },
        "AQ": {
          "value": 2.676359681066101,
          "n": 360
        },
        "MS": {
          "value": 0.6856448410164652,
          "n": 360
        },
        "L-TVA": {
          "value": 0.36819651542494997,
          "n": 360
        },
        "G-TVA": {
          "value": 0.4641615054673619,
          "n": 360
        },
        "IF": {
          "value": 0.6206904805555555,
          "n": 360
        },
        "NC": {
          "value": 2.6694444444444443,
          "n": 360
        },
        "VD": {
          "value": 2.547222222222222,
          "n": 360
        },
        "MT": {
          "value": 2.5305555555555554,
          "n": 360
        },
        "VE": {
          "value": 2.566666666666667,
          "n": 360
        }
      }
    },
    {
      "model": "gpt-6-astra",
      "setting": "I2V",
      "metrics": {
        "ES": {
          "value": 0.8731988472622478,
          "n": 347
        },
        "TC": {
          "value": 12688.913544668589,
          "n": 347
        },
        "TQ": {
          "value": 0.11122689593672892,
          "n": 347
        },
        "AQ": {
          "value": 3.602810254617819,
          "n": 347
        },
        "MS": {
          "value": 0.8655816305666846,
          "n": 347
        },
        "L-TVA": {
          "value": 0.48092021680830926,
          "n": 347
        },
        "G-TVA": {
          "value": 0.5741754723900677,
          "n": 347
        },
        "PF": {
          "value": 0.8337548462733068,
          "n": 347
        },
        "SF": {
          "value": 0.6487076761535531,
          "n": 347
        },
        "IF": {
          "value": 0.8551651354466858,
          "n": 347
        },
        "NC": {
          "value": 3.69164265129683,
          "n": 347
        },
        "VD": {
          "value": 3.6570605187319885,
          "n": 347
        },
        "MT": {
          "value": 3.4668587896253604,
          "n": 347
        },
        "VE": {
          "value": 3.590778097982709,
          "n": 347
        }
      }
    },
    {
      "model": "claude-opus-5-5",
      "setting": "I2V",
      "metrics": {
        "ES": {
          "value": 0.9596541786743515,
          "n": 347
        },
        "TC": {
          "value": 19904.801152737753,
          "n": 347
        },
        "TQ": {
          "value": 0.11195381423652426,
          "n": 347
        },
        "AQ": {
          "value": 3.754256168899647,
          "n": 347
        },
        "MS": {
          "value": 0.948158912012719,
          "n": 347
        },
        "L-TVA": {
          "value": 0.5172110595894147,
          "n": 347
        },
        "G-TVA": {
          "value": 0.6254891382170685,
          "n": 347
        },
        "PF": {
          "value": 0.8937132298431066,
          "n": 347
        },
        "SF": {
          "value": 0.6577657326914556,
          "n": 347
        },
        "IF": {
          "value": 0.9152704034582133,
          "n": 347
        },
        "NC": {
          "value": 3.9337175792507204,
          "n": 347
        },
        "VD": {
          "value": 3.7838616714697406,
          "n": 347
        },
        "MT": {
          "value": 3.755043227665706,
          "n": 347
        },
        "VE": {
          "value": 3.8184438040345823,
          "n": 347
        }
      }
    },
    {
      "model": "gpt-6-1-sol",
      "setting": "I2V",
      "metrics": {
        "ES": {
          "value": 0.8703170028818443,
          "n": 347
        },
        "TC": {
          "value": 10015.369942196532,
          "n": 346
        },
        "TQ": {
          "value": 0.1099735758784606,
          "n": 347
        },
        "AQ": {
          "value": 3.539218871002046,
          "n": 347
        },
        "MS": {
          "value": 0.8625916440955331,
          "n": 347
        },
        "L-TVA": {
          "value": 0.4778593077500731,
          "n": 347
        },
        "G-TVA": {
          "value": 0.5698105262576332,
          "n": 347
        },
        "PF": {
          "value": 0.8277124365743368,
          "n": 347
        },
        "SF": {
          "value": 0.6348485803121373,
          "n": 347
        },
        "IF": {
          "value": 0.8366886484149856,
          "n": 347
        },
        "NC": {
          "value": 3.6311239193083575,
          "n": 347
        },
        "VD": {
          "value": 3.547550432276657,
          "n": 347
        },
        "MT": {
          "value": 3.435158501440922,
          "n": 347
        },
        "VE": {
          "value": 3.5504322766570606,
          "n": 347
        }
      }
    },
    {
      "model": "claude-sonnet-5-5",
      "setting": "I2V",
      "metrics": {
        "ES": {
          "value": 0.9538904899135446,
          "n": 347
        },
        "TC": {
          "value": 28925.65417867435,
          "n": 347
        },
        "TQ": {
          "value": 0.11449025251960858,
          "n": 347
        },
        "AQ": {
          "value": 3.715834890327587,
          "n": 347
        },
        "MS": {
          "value": 0.9421082031725997,
          "n": 347
        },
        "L-TVA": {
          "value": 0.5136471414546947,
          "n": 347
        },
        "G-TVA": {
          "value": 0.6198281622585714,
          "n": 347
        },
        "PF": {
          "value": 0.8895440615219754,
          "n": 347
        },
        "SF": {
          "value": 0.6568765043874113,
          "n": 347
        },
        "IF": {
          "value": 0.900680037463977,
          "n": 347
        },
        "NC": {
          "value": 3.8530259365994235,
          "n": 347
        },
        "VD": {
          "value": 3.717579250720461,
          "n": 347
        },
        "MT": {
          "value": 3.68299711815562,
          "n": 347
        },
        "VE": {
          "value": 3.749279538904899,
          "n": 347
        }
      }
    },
    {
      "model": "gemini-3-8-flash",
      "setting": "I2V",
      "metrics": {
        "ES": {
          "value": 0.930835734870317,
          "n": 347
        },
        "TC": {
          "value": 15013.648414985591,
          "n": 347
        },
        "TQ": {
          "value": 0.10342077245711762,
          "n": 347
        },
        "AQ": {
          "value": 3.5767221206667013,
          "n": 347
        },
        "MS": {
          "value": 0.9223576425678057,
          "n": 347
        },
        "L-TVA": {
          "value": 0.4987648648454119,
          "n": 347
        },
        "G-TVA": {
          "value": 0.5961444240482121,
          "n": 347
        },
        "PF": {
          "value": 0.8392402558917614,
          "n": 347
        },
        "SF": {
          "value": 0.5861898845644344,
          "n": 347
        },
        "IF": {
          "value": 0.7446054149855909,
          "n": 347
        },
        "NC": {
          "value": 3.118155619596542,
          "n": 347
        },
        "VD": {
          "value": 3.2103746397694524,
          "n": 347
        },
        "MT": {
          "value": 2.887608069164265,
          "n": 347
        },
        "VE": {
          "value": 3.0547550432276656,
          "n": 347
        }
      }
    },
    {
      "model": "qwen3-8-max",
      "setting": "I2V",
      "metrics": {
        "ES": {
          "value": 0.6397694524495677,
          "n": 347
        },
        "TC": {
          "value": 42967.3083573487,
          "n": 347
        },
        "TQ": {
          "value": 0.07189425887254844,
          "n": 347
        },
        "AQ": {
          "value": 2.4787992975063236,
          "n": 347
        },
        "MS": {
          "value": 0.6335898801371844,
          "n": 347
        },
        "L-TVA": {
          "value": 0.3408349839222666,
          "n": 347
        },
        "G-TVA": {
          "value": 0.41255032844433526,
          "n": 347
        },
        "PF": {
          "value": 0.587065507252553,
          "n": 347
        },
        "SF": {
          "value": 0.42408643739761265,
          "n": 347
        },
        "IF": {
          "value": 0.5983348501440922,
          "n": 347
        },
        "NC": {
          "value": 2.515850144092219,
          "n": 347
        },
        "VD": {
          "value": 2.4265129682997117,
          "n": 347
        },
        "MT": {
          "value": 2.4178674351585014,
          "n": 347
        },
        "VE": {
          "value": 2.4582132564841497,
          "n": 347
        }
      }
    },
    {
      "model": "gpt-6-luna",
      "setting": "I2V",
      "metrics": {
        "ES": {
          "value": 0.9020172910662824,
          "n": 347
        },
        "TC": {
          "value": 8833.314121037463,
          "n": 347
        },
        "TQ": {
          "value": 0.1084162379974646,
          "n": 347
        },
        "AQ": {
          "value": 3.55557322871883,
          "n": 347
        },
        "MS": {
          "value": 0.8956267610956337,
          "n": 347
        },
        "L-TVA": {
          "value": 0.48996435097292756,
          "n": 347
        },
        "G-TVA": {
          "value": 0.5785920221455159,
          "n": 347
        },
        "PF": {
          "value": 0.8228739472562366,
          "n": 347
        },
        "SF": {
          "value": 0.6169375602487165,
          "n": 347
        },
        "IF": {
          "value": 0.7034137406340057,
          "n": 347
        },
        "NC": {
          "value": 2.881844380403458,
          "n": 347
        },
        "VD": {
          "value": 3.07492795389049,
          "n": 347
        },
        "MT": {
          "value": 2.610951008645533,
          "n": 347
        },
        "VE": {
          "value": 2.792507204610951,
          "n": 347
        }
      }
    },
    {
      "model": "claude-haiku-5-5",
      "setting": "I2V",
      "metrics": {
        "ES": {
          "value": 0.9481268011527377,
          "n": 347
        },
        "TC": {
          "value": 35605.95389048992,
          "n": 347
        },
        "TQ": {
          "value": 0.11074406246355406,
          "n": 347
        },
        "AQ": {
          "value": 3.6649538385083305,
          "n": 347
        },
        "MS": {
          "value": 0.9382807085892392,
          "n": 347
        },
        "L-TVA": {
          "value": 0.5054089356143442,
          "n": 347
        },
        "G-TVA": {
          "value": 0.6054771588927387,
          "n": 347
        },
        "PF": {
          "value": 0.8567962577775851,
          "n": 347
        },
        "SF": {
          "value": 0.6286075865950108,
          "n": 347
        },
        "IF": {
          "value": 0.8384025821325649,
          "n": 347
        },
        "NC": {
          "value": 3.4927953890489913,
          "n": 347
        },
        "VD": {
          "value": 3.377521613832853,
          "n": 347
        },
        "MT": {
          "value": 3.288184438040346,
          "n": 347
        },
        "VE": {
          "value": 3.3804034582132565,
          "n": 347
        }
      }
    },
    {
      "model": "qwen3-8-flash",
      "setting": "I2V",
      "metrics": {
        "ES": {
          "value": 0.7694524495677233,
          "n": 347
        },
        "TC": {
          "value": 54245.75504322766,
          "n": 347
        },
        "TQ": {
          "value": 0.08696178556046395,
          "n": 347
        },
        "AQ": {
          "value": 2.9384381784427305,
          "n": 347
        },
        "MS": {
          "value": 0.7630303389057761,
          "n": 347
        },
        "L-TVA": {
          "value": 0.4062732464803232,
          "n": 347
        },
        "G-TVA": {
          "value": 0.49937172727900897,
          "n": 347
        },
        "PF": {
          "value": 0.6938743027898695,
          "n": 347
        },
        "SF": {
          "value": 0.46926328032867287,
          "n": 347
        },
        "IF": {
          "value": 0.7040840634005764,
          "n": 347
        },
        "NC": {
          "value": 2.968299711815562,
          "n": 347
        },
        "VD": {
          "value": 2.8069164265129682,
          "n": 347
        },
        "MT": {
          "value": 2.7694524495677233,
          "n": 347
        },
        "VE": {
          "value": 2.84149855907781,
          "n": 347
        }
      }
    },
    {
      "model": "kimi-k3",
      "setting": "I2V",
      "metrics": {
        "ES": {
          "value": 0.8645533141210374,
          "n": 347
        },
        "TC": {
          "value": 39300.42074927954,
          "n": 347
        },
        "TQ": {
          "value": 0.09864904598503982,
          "n": 347
        },
        "AQ": {
          "value": 3.3908519681496814,
          "n": 347
        },
        "MS": {
          "value": 0.8561790312270419,
          "n": 347
        },
        "L-TVA": {
          "value": 0.46157923024491737,
          "n": 347
        },
        "G-TVA": {
          "value": 0.5634888652765785,
          "n": 347
        },
        "PF": {
          "value": 0.7756351414606276,
          "n": 347
        },
        "SF": {
          "value": 0.5390145929354303,
          "n": 347
        },
        "IF": {
          "value": 0.7833436512968299,
          "n": 347
        },
        "NC": {
          "value": 3.3371757925072045,
          "n": 347
        },
        "VD": {
          "value": 3.250720461095101,
          "n": 347
        },
        "MT": {
          "value": 3.138328530259366,
          "n": 347
        },
        "VE": {
          "value": 3.195965417867435,
          "n": 347
        }
      }
    },
    {
      "model": "mimo-v2-6-pro",
      "setting": "I2V",
      "metrics": {
        "ES": {
          "value": 0.8703170028818443,
          "n": 347
        },
        "TC": {
          "value": 27446.100864553315,
          "n": 347
        },
        "TQ": {
          "value": 0.10799660259293756,
          "n": 347
        },
        "AQ": {
          "value": 3.4044890671415193,
          "n": 347
        },
        "MS": {
          "value": 0.8630460782321614,
          "n": 347
        },
        "L-TVA": {
          "value": 0.4729237949729581,
          "n": 347
        },
        "G-TVA": {
          "value": 0.5676298562319203,
          "n": 347
        },
        "PF": {
          "value": 0.7877706447320988,
          "n": 347
        },
        "SF": {
          "value": 0.5395295214814833,
          "n": 347
        },
        "IF": {
          "value": 0.7782285821325649,
          "n": 347
        },
        "NC": {
          "value": 3.282420749279539,
          "n": 347
        },
        "VD": {
          "value": 3.23342939481268,
          "n": 347
        },
        "MT": {
          "value": 3.121037463976945,
          "n": 347
        },
        "VE": {
          "value": 3.1988472622478388,
          "n": 347
        }
      }
    },
    {
      "model": "glm-5-3-flash",
      "setting": "I2V",
      "metrics": {
        "ES": {
          "value": 0.7665706051873199,
          "n": 347
        },
        "TC": {
          "value": 88070.21037463976,
          "n": 347
        },
        "TQ": {
          "value": 0.08933203032504741,
          "n": 347
        },
        "AQ": {
          "value": 3.0135835273398435,
          "n": 347
        },
        "MS": {
          "value": 0.7593984637183769,
          "n": 347
        },
        "L-TVA": {
          "value": 0.41101824036099005,
          "n": 347
        },
        "G-TVA": {
          "value": 0.49799980948912653,
          "n": 347
        },
        "PF": {
          "value": 0.7005897914985415,
          "n": 347
        },
        "SF": {
          "value": 0.4851590986080263,
          "n": 347
        },
        "IF": {
          "value": 0.7149641527377522,
          "n": 347
        },
        "NC": {
          "value": 3.0662824207492796,
          "n": 347
        },
        "VD": {
          "value": 2.9769452449567724,
          "n": 347
        },
        "MT": {
          "value": 2.9394812680115274,
          "n": 347
        },
        "VE": {
          "value": 2.988472622478386,
          "n": 347
        }
      }
    },
    {
      "model": "deepseek-v4-1-flash",
      "setting": "I2V",
      "metrics": {
        "ES": {
          "value": 0.8242074927953891,
          "n": 347
        },
        "TC": {
          "value": 61170.610951008646,
          "n": 347
        },
        "TQ": {
          "value": 0.09887430308937728,
          "n": 347
        },
        "AQ": {
          "value": 3.222112862942209,
          "n": 347
        },
        "MS": {
          "value": 0.8173901529771873,
          "n": 347
        },
        "L-TVA": {
          "value": 0.4417425521978388,
          "n": 347
        },
        "G-TVA": {
          "value": 0.5361205172813591,
          "n": 347
        },
        "PF": {
          "value": 0.7459583205173613,
          "n": 347
        },
        "SF": {
          "value": 0.5026992654372704,
          "n": 347
        },
        "IF": {
          "value": 0.7662278818443804,
          "n": 347
        },
        "NC": {
          "value": 3.2795389048991352,
          "n": 347
        },
        "VD": {
          "value": 3.2103746397694524,
          "n": 347
        },
        "MT": {
          "value": 3.1412103746397695,
          "n": 347
        },
        "VE": {
          "value": 3.2103746397694524,
          "n": 347
        }
      }
    },
    {
      "model": "minimax-m3",
      "setting": "I2V",
      "metrics": {
        "ES": {
          "value": 0.5878962536023055,
          "n": 347
        },
        "TC": {
          "value": 12115.028818443803,
          "n": 347
        },
        "TQ": {
          "value": 0.058949884448368135,
          "n": 347
        },
        "AQ": {
          "value": 2.2186009797603843,
          "n": 347
        },
        "MS": {
          "value": 0.5843288638169005,
          "n": 347
        },
        "L-TVA": {
          "value": 0.28876203946202544,
          "n": 347
        },
        "G-TVA": {
          "value": 0.36042232064245755,
          "n": 347
        },
        "PF": {
          "value": 0.4908949312799602,
          "n": 347
        },
        "SF": {
          "value": 0.34817398973680824,
          "n": 347
        },
        "IF": {
          "value": 0.40257235734870317,
          "n": 347
        },
        "NC": {
          "value": 1.5907780979827089,
          "n": 347
        },
        "VD": {
          "value": 1.6051873198847262,
          "n": 347
        },
        "MT": {
          "value": 1.4755043227665705,
          "n": 347
        },
        "VE": {
          "value": 1.5129682997118155,
          "n": 347
        }
      }
    },
    {
      "model": "qwen3-8-27b",
      "setting": "I2V",
      "metrics": {
        "ES": {
          "value": 0.7175792507204611,
          "n": 347
        },
        "TC": {
          "value": 50307.33429394813,
          "n": 347
        },
        "TQ": {
          "value": 0.0814878387182743,
          "n": 347
        },
        "AQ": {
          "value": 2.7984500051181564,
          "n": 347
        },
        "MS": {
          "value": 0.7117341779097769,
          "n": 347
        },
        "L-TVA": {
          "value": 0.377856339733247,
          "n": 347
        },
        "G-TVA": {
          "value": 0.46457357253739745,
          "n": 347
        },
        "PF": {
          "value": 0.6461241149936698,
          "n": 347
        },
        "SF": {
          "value": 0.45222971286758157,
          "n": 347
        },
        "IF": {
          "value": 0.6512279048991355,
          "n": 347
        },
        "NC": {
          "value": 2.6512968299711814,
          "n": 347
        },
        "VD": {
          "value": 2.559077809798271,
          "n": 347
        },
        "MT": {
          "value": 2.4812680115273773,
          "n": 347
        },
        "VE": {
          "value": 2.5417867435158503,
          "n": 347
        }
      }
    },
    {
      "model": "gpt-6-astra",
      "setting": "V2V",
      "metrics": {
        "ES": {
          "value": 0.8501440922190202,
          "n": 347
        },
        "TC": {
          "value": 12157.734104046243,
          "n": 346
        },
        "TQ": {
          "value": 0.10740009136600938,
          "n": 347
        },
        "AQ": {
          "value": 3.444506142527383,
          "n": 347
        },
        "MS": {
          "value": 0.8395431700445267,
          "n": 347
        },
        "L-TVA": {
          "value": 0.4714756088265896,
          "n": 347
        },
        "G-TVA": {
          "value": 0.5565219699305829,
          "n": 347
        },
        "SA": {
          "value": 0.789972631835113,
          "n": 347
        },
        "AF": {
          "value": 0.7269405513215681,
          "n": 347
        },
        "MF": {
          "value": 0.4008702312835012,
          "n": 347
        },
        "IF": {
          "value": 0.8212867175792508,
          "n": 347
        },
        "NC": {
          "value": 3.5302593659942363,
          "n": 347
        },
        "VD": {
          "value": 3.5072046109510087,
          "n": 347
        },
        "MT": {
          "value": 3.440922190201729,
          "n": 347
        },
        "VE": {
          "value": 3.478386167146974,
          "n": 347
        }
      }
    },
    {
      "model": "claude-opus-5-5",
      "setting": "V2V",
      "metrics": {
        "ES": {
          "value": 0.9711815561959655,
          "n": 347
        },
        "TC": {
          "value": 29050.466858789627,
          "n": 347
        },
        "TQ": {
          "value": 0.11514920095123184,
          "n": 347
        },
        "AQ": {
          "value": 3.793747519378773,
          "n": 347
        },
        "MS": {
          "value": 0.9578849720372188,
          "n": 347
        },
        "L-TVA": {
          "value": 0.5267832958036657,
          "n": 347
        },
        "G-TVA": {
          "value": 0.6302424463999031,
          "n": 347
        },
        "SA": {
          "value": 0.8820702454198678,
          "n": 347
        },
        "AF": {
          "value": 0.7871301349758018,
          "n": 347
        },
        "MF": {
          "value": 0.44464381359066674,
          "n": 347
        },
        "IF": {
          "value": 0.9289497550432277,
          "n": 347
        },
        "NC": {
          "value": 3.9971181556195967,
          "n": 347
        },
        "VD": {
          "value": 3.8530259365994235,
          "n": 347
        },
        "MT": {
          "value": 3.838616714697406,
          "n": 347
        },
        "VE": {
          "value": 3.881844380403458,
          "n": 347
        }
      }
    },
    {
      "model": "gpt-6-1-sol",
      "setting": "V2V",
      "metrics": {
        "ES": {
          "value": 0.8472622478386167,
          "n": 347
        },
        "TC": {
          "value": 9861.544668587896,
          "n": 347
        },
        "TQ": {
          "value": 0.10659079952145002,
          "n": 347
        },
        "AQ": {
          "value": 3.398647181304384,
          "n": 347
        },
        "MS": {
          "value": 0.8371261426969527,
          "n": 347
        },
        "L-TVA": {
          "value": 0.46649800031595157,
          "n": 347
        },
        "G-TVA": {
          "value": 0.5488767225391926,
          "n": 347
        },
        "SA": {
          "value": 0.7786164610117932,
          "n": 347
        },
        "AF": {
          "value": 0.7095015298441466,
          "n": 347
        },
        "MF": {
          "value": 0.38637689331422964,
          "n": 347
        },
        "IF": {
          "value": 0.8084146829971182,
          "n": 347
        },
        "NC": {
          "value": 3.4322766570605188,
          "n": 347
        },
        "VD": {
          "value": 3.452449567723343,
          "n": 347
        },
        "MT": {
          "value": 3.3688760806916425,
          "n": 347
        },
        "VE": {
          "value": 3.400576368876081,
          "n": 347
        }
      }
    },
    {
      "model": "claude-sonnet-5-5",
      "setting": "V2V",
      "metrics": {
        "ES": {
          "value": 0.962536023054755,
          "n": 347
        },
        "TC": {
          "value": 34354.63976945245,
          "n": 347
        },
        "TQ": {
          "value": 0.11775805829673607,
          "n": 347
        },
        "AQ": {
          "value": 3.743640579030215,
          "n": 347
        },
        "MS": {
          "value": 0.9483421527035538,
          "n": 347
        },
        "L-TVA": {
          "value": 0.5277220994705247,
          "n": 347
        },
        "G-TVA": {
          "value": 0.5548573604406473,
          "n": 347
        },
        "SA": {
          "value": 0.8725012568300671,
          "n": 347
        },
        "AF": {
          "value": 0.7726091592585741,
          "n": 347
        },
        "MF": {
          "value": 0.44299458053166996,
          "n": 347
        },
        "IF": {
          "value": 0.756286507204611,
          "n": 347
        },
        "NC": {
          "value": 3.357348703170029,
          "n": 347
        },
        "VD": {
          "value": 3.5677233429394812,
          "n": 347
        },
        "MT": {
          "value": 3.5072046109510087,
          "n": 347
        },
        "VE": {
          "value": 3.438040345821326,
          "n": 347
        }
      }
    },
    {
      "model": "gemini-3-8-flash",
      "setting": "V2V",
      "metrics": {
        "ES": {
          "value": 0.9250720461095101,
          "n": 347
        },
        "TC": {
          "value": 13708.478386167148,
          "n": 347
        },
        "TQ": {
          "value": 0.10164771602802194,
          "n": 347
        },
        "AQ": {
          "value": 3.525670232075046,
          "n": 347
        },
        "MS": {
          "value": 0.9155295265197247,
          "n": 347
        },
        "L-TVA": {
          "value": 0.49164693592303843,
          "n": 347
        },
        "G-TVA": {
          "value": 0.5739982118695889,
          "n": 347
        },
        "SA": {
          "value": 0.7806315547451163,
          "n": 347
        },
        "AF": {
          "value": 0.6416345632496978,
          "n": 347
        },
        "MF": {
          "value": 0.39339991699721694,
          "n": 347
        },
        "IF": {
          "value": 0.7643024409221901,
          "n": 347
        },
        "NC": {
          "value": 3.2680115273775217,
          "n": 347
        },
        "VD": {
          "value": 3.3054755043227666,
          "n": 347
        },
        "MT": {
          "value": 3.207492795389049,
          "n": 347
        },
        "VE": {
          "value": 3.2651296829971184,
          "n": 347
        }
      }
    },
    {
      "model": "qwen3-8-max",
      "setting": "V2V",
      "metrics": {
        "ES": {
          "value": 0.7031700288184438,
          "n": 347
        },
        "TC": {
          "value": 42216.59077809798,
          "n": 347
        },
        "TQ": {
          "value": 0.07840453697326152,
          "n": 347
        },
        "AQ": {
          "value": 2.685162824154785,
          "n": 347
        },
        "MS": {
          "value": 0.6956316552648891,
          "n": 347
        },
        "L-TVA": {
          "value": 0.3756281469273386,
          "n": 347
        },
        "G-TVA": {
          "value": 0.45210076864239807,
          "n": 347
        },
        "SA": {
          "value": 0.6162654862280195,
          "n": 347
        },
        "AF": {
          "value": 0.5330631630744779,
          "n": 347
        },
        "MF": {
          "value": 0.31659911302393384,
          "n": 347
        },
        "IF": {
          "value": 0.6369300201729107,
          "n": 347
        },
        "NC": {
          "value": 2.6714697406340058,
          "n": 347
        },
        "VD": {
          "value": 2.5446685878962536,
          "n": 347
        },
        "MT": {
          "value": 2.5561959654178676,
          "n": 347
        },
        "VE": {
          "value": 2.5792507204610953,
          "n": 347
        }
      }
    },
    {
      "model": "gpt-6-luna",
      "setting": "V2V",
      "metrics": {
        "ES": {
          "value": 0.9048991354466859,
          "n": 347
        },
        "TC": {
          "value": 7050.121037463977,
          "n": 347
        },
        "TQ": {
          "value": 0.10975044760567879,
          "n": 347
        },
        "AQ": {
          "value": 3.6075857000182756,
          "n": 347
        },
        "MS": {
          "value": 0.8986441658717588,
          "n": 347
        },
        "L-TVA": {
          "value": 0.48750705034572356,
          "n": 347
        },
        "G-TVA": {
          "value": 0.5142119821450896,
          "n": 347
        },
        "SA": {
          "value": 0.7821679055175451,
          "n": 347
        },
        "AF": {
          "value": 0.6612705576445658,
          "n": 347
        },
        "MF": {
          "value": 0.38297673592864606,
          "n": 347
        },
        "IF": {
          "value": 0.6137292766570606,
          "n": 347
        },
        "NC": {
          "value": 2.602305475504323,
          "n": 347
        },
        "VD": {
          "value": 2.8559077809798272,
          "n": 347
        },
        "MT": {
          "value": 2.636887608069164,
          "n": 347
        },
        "VE": {
          "value": 2.648414985590778,
          "n": 347
        }
      }
    },
    {
      "model": "claude-haiku-5-5",
      "setting": "V2V",
      "metrics": {
        "ES": {
          "value": 0.930835734870317,
          "n": 347
        },
        "TC": {
          "value": 38141.83285302594,
          "n": 347
        },
        "TQ": {
          "value": 0.10656462357124273,
          "n": 347
        },
        "AQ": {
          "value": 3.538027237182026,
          "n": 347
        },
        "MS": {
          "value": 0.9213767253510314,
          "n": 347
        },
        "L-TVA": {
          "value": 0.49482243200423776,
          "n": 347
        },
        "G-TVA": {
          "value": 0.580099349234908,
          "n": 347
        },
        "SA": {
          "value": 0.8005997086808042,
          "n": 347
        },
        "AF": {
          "value": 0.6679245485221257,
          "n": 347
        },
        "MF": {
          "value": 0.39298429784582395,
          "n": 347
        },
        "IF": {
          "value": 0.7968179625360229,
          "n": 347
        },
        "NC": {
          "value": 3.325648414985591,
          "n": 347
        },
        "VD": {
          "value": 3.195965417867435,
          "n": 347
        },
        "MT": {
          "value": 3.1844380403458215,
          "n": 347
        },
        "VE": {
          "value": 3.201729106628242,
          "n": 347
        }
      }
    },
    {
      "model": "qwen3-8-flash",
      "setting": "V2V",
      "metrics": {
        "ES": {
          "value": 0.7089337175792507,
          "n": 347
        },
        "TC": {
          "value": 26971.057636887606,
          "n": 347
        },
        "TQ": {
          "value": 0.07932108129909167,
          "n": 347
        },
        "AQ": {
          "value": 2.7146864620809614,
          "n": 347
        },
        "MS": {
          "value": 0.701539113304858,
          "n": 347
        },
        "L-TVA": {
          "value": 0.37543873865631566,
          "n": 347
        },
        "G-TVA": {
          "value": 0.4543928899064188,
          "n": 347
        },
        "SA": {
          "value": 0.6065248873632305,
          "n": 347
        },
        "AF": {
          "value": 0.5043369385562577,
          "n": 347
        },
        "MF": {
          "value": 0.30606102117307765,
          "n": 347
        },
        "IF": {
          "value": 0.6279809827089338,
          "n": 347
        },
        "NC": {
          "value": 2.559077809798271,
          "n": 347
        },
        "VD": {
          "value": 2.4121037463976944,
          "n": 347
        },
        "MT": {
          "value": 2.4293948126801155,
          "n": 347
        },
        "VE": {
          "value": 2.4553314121037464,
          "n": 347
        }
      }
    },
    {
      "model": "kimi-k3",
      "setting": "V2V",
      "metrics": {
        "ES": {
          "value": 0.760806916426513,
          "n": 347
        },
        "TC": {
          "value": 38402.67435158502,
          "n": 347
        },
        "TQ": {
          "value": 0.08649585861125926,
          "n": 347
        },
        "AQ": {
          "value": 2.9600894256418937,
          "n": 347
        },
        "MS": {
          "value": 0.7531041652085894,
          "n": 347
        },
        "L-TVA": {
          "value": 0.4038979274729019,
          "n": 347
        },
        "G-TVA": {
          "value": 0.4882377512345053,
          "n": 347
        },
        "SA": {
          "value": 0.638574951663828,
          "n": 347
        },
        "AF": {
          "value": 0.5063164734977216,
          "n": 347
        },
        "MF": {
          "value": 0.3210094621786123,
          "n": 347
        },
        "IF": {
          "value": 0.6607922334293947,
          "n": 347
        },
        "NC": {
          "value": 2.7521613832853027,
          "n": 347
        },
        "VD": {
          "value": 2.6570605187319885,
          "n": 347
        },
        "MT": {
          "value": 2.634005763688761,
          "n": 347
        },
        "VE": {
          "value": 2.648414985590778,
          "n": 347
        }
      }
    },
    {
      "model": "mimo-v2-6-pro",
      "setting": "V2V",
      "metrics": {
        "ES": {
          "value": 0.8789625360230547,
          "n": 347
        },
        "TC": {
          "value": 36345.250720461096,
          "n": 347
        },
        "TQ": {
          "value": 0.10831325241445097,
          "n": 347
        },
        "AQ": {
          "value": 3.431939986317024,
          "n": 347
        },
        "MS": {
          "value": 0.8695885355793435,
          "n": 347
        },
        "L-TVA": {
          "value": 0.47337081314343554,
          "n": 347
        },
        "G-TVA": {
          "value": 0.5580751881303979,
          "n": 347
        },
        "SA": {
          "value": 0.7574620860969642,
          "n": 347
        },
        "AF": {
          "value": 0.6236304576639752,
          "n": 347
        },
        "MF": {
          "value": 0.3744772820805954,
          "n": 347
        },
        "IF": {
          "value": 0.7830605763688762,
          "n": 347
        },
        "NC": {
          "value": 3.351585014409222,
          "n": 347
        },
        "VD": {
          "value": 3.2651296829971184,
          "n": 347
        },
        "MT": {
          "value": 3.2363112391930837,
          "n": 347
        },
        "VE": {
          "value": 3.3025936599423633,
          "n": 347
        }
      }
    },
    {
      "model": "glm-5-3-flash",
      "setting": "V2V",
      "metrics": {
        "ES": {
          "value": 0.7838616714697406,
          "n": 347
        },
        "TC": {
          "value": 87794.38040345821,
          "n": 347
        },
        "TQ": {
          "value": 0.0914140476587906,
          "n": 347
        },
        "AQ": {
          "value": 3.0674725701179315,
          "n": 347
        },
        "MS": {
          "value": 0.7753487308099835,
          "n": 347
        },
        "L-TVA": {
          "value": 0.4235688324449298,
          "n": 347
        },
        "G-TVA": {
          "value": 0.5082593243300743,
          "n": 347
        },
        "SA": {
          "value": 0.683826855177151,
          "n": 347
        },
        "AF": {
          "value": 0.5687129345717536,
          "n": 347
        },
        "MF": {
          "value": 0.3448640429320871,
          "n": 347
        },
        "IF": {
          "value": 0.734136265129683,
          "n": 347
        },
        "NC": {
          "value": 3.121037463976945,
          "n": 347
        },
        "VD": {
          "value": 3.086455331412104,
          "n": 347
        },
        "MT": {
          "value": 3.0576368876080693,
          "n": 347
        },
        "VE": {
          "value": 3.07492795389049,
          "n": 347
        }
      }
    },
    {
      "model": "deepseek-v4-1-flash",
      "setting": "V2V",
      "metrics": {
        "ES": {
          "value": 0.8242074927953891,
          "n": 347
        },
        "TC": {
          "value": 65569.77809798271,
          "n": 347
        },
        "TQ": {
          "value": 0.09739103253915424,
          "n": 347
        },
        "AQ": {
          "value": 3.2121160144854084,
          "n": 347
        },
        "MS": {
          "value": 0.8151834713746777,
          "n": 347
        },
        "L-TVA": {
          "value": 0.4396917271231955,
          "n": 347
        },
        "G-TVA": {
          "value": 0.5300138705659668,
          "n": 347
        },
        "SA": {
          "value": 0.7134945213966479,
          "n": 347
        },
        "AF": {
          "value": 0.5982268501108996,
          "n": 347
        },
        "MF": {
          "value": 0.35410708682853137,
          "n": 347
        },
        "IF": {
          "value": 0.7572426685878961,
          "n": 347
        },
        "NC": {
          "value": 3.2161383285302594,
          "n": 347
        },
        "VD": {
          "value": 3.1786743515850144,
          "n": 347
        },
        "MT": {
          "value": 3.1412103746397695,
          "n": 347
        },
        "VE": {
          "value": 3.152737752161383,
          "n": 347
        }
      }
    },
    {
      "model": "minimax-m3",
      "setting": "V2V",
      "metrics": {
        "ES": {
          "value": 0.6858789625360231,
          "n": 347
        },
        "TC": {
          "value": 11880.129682997118,
          "n": 347
        },
        "TQ": {
          "value": 0.06769193977598252,
          "n": 347
        },
        "AQ": {
          "value": 2.5595665232303046,
          "n": 347
        },
        "MS": {
          "value": 0.6804361846223015,
          "n": 347
        },
        "L-TVA": {
          "value": 0.341526608815768,
          "n": 347
        },
        "G-TVA": {
          "value": 0.4179778509593491,
          "n": 347
        },
        "SA": {
          "value": 0.5444918937916714,
          "n": 347
        },
        "AF": {
          "value": 0.40968786818470454,
          "n": 347
        },
        "MF": {
          "value": 0.2795664006334217,
          "n": 347
        },
        "IF": {
          "value": 0.4810080778097983,
          "n": 347
        },
        "NC": {
          "value": 1.8789625360230549,
          "n": 347
        },
        "VD": {
          "value": 1.8731988472622478,
          "n": 347
        },
        "MT": {
          "value": 1.7752161383285303,
          "n": 347
        },
        "VE": {
          "value": 1.7838616714697406,
          "n": 347
        }
      }
    },
    {
      "model": "qwen3-8-27b",
      "setting": "V2V",
      "metrics": {
        "ES": {
          "value": 0.7060518731988472,
          "n": 347
        },
        "TC": {
          "value": 47196.75504322766,
          "n": 347
        },
        "TQ": {
          "value": 0.07861432398195052,
          "n": 347
        },
        "AQ": {
          "value": 2.6767598201047242,
          "n": 347
        },
        "MS": {
          "value": 0.6993153403369258,
          "n": 347
        },
        "L-TVA": {
          "value": 0.3769567436529524,
          "n": 347
        },
        "G-TVA": {
          "value": 0.45163831192066073,
          "n": 347
        },
        "SA": {
          "value": 0.6038241553890602,
          "n": 347
        },
        "AF": {
          "value": 0.5059294663614071,
          "n": 347
        },
        "MF": {
          "value": 0.3031006944540255,
          "n": 347
        },
        "IF": {
          "value": 0.6252934207492795,
          "n": 347
        },
        "NC": {
          "value": 2.596541786743516,
          "n": 347
        },
        "VD": {
          "value": 2.4956772334293946,
          "n": 347
        },
        "MT": {
          "value": 2.4927953890489913,
          "n": 347
        },
        "VE": {
          "value": 2.4985590778097984,
          "n": 347
        }
      }
    },
    {
      "model": "claude-opus-5-5",
      "setting": "Overall",
      "metrics": {
        "ES": {
          "value": 0.9582542694497154,
          "n": 1054
        },
        "TC": {
          "value": 26158.965844402275,
          "n": 1054
        },
        "TQ": {
          "value": 0.11410177519542009,
          "n": 1010
        },
        "AQ": {
          "value": 3.7269606771892603,
          "n": 1010
        },
        "MS": {
          "value": 0.9461811696134985,
          "n": 1010
        },
        "L-TVA": {
          "value": 0.5221355129762066,
          "n": 1010
        },
        "G-TVA": {
          "value": 0.636352213838295,
          "n": 1010
        },
        "PF": {
          "value": 0.8937132298431066,
          "n": 1010
        },
        "SF": {
          "value": 0.6577657326914556,
          "n": 1010
        },
        "SA": {
          "value": 0.8820702454198678,
          "n": 1010
        },
        "AF": {
          "value": 0.7871301349758018,
          "n": 1010
        },
        "MF": {
          "value": 0.44464381359066674,
          "n": 1010
        },
        "IF": {
          "value": 0.9195877590132827,
          "n": 1010
        },
        "NC": {
          "value": 3.993358633776091,
          "n": 1010
        },
        "VD": {
          "value": 3.814990512333966,
          "n": 1010
        },
        "MT": {
          "value": 3.8074003795066416,
          "n": 1010
        },
        "VE": {
          "value": 3.8652751423149905,
          "n": 1010
        }
      }
    },
    {
      "model": "claude-sonnet-5-5",
      "setting": "Overall",
      "metrics": {
        "ES": {
          "value": 0.9506641366223909,
          "n": 1054
        },
        "TC": {
          "value": 37459.89373814042,
          "n": 1054
        },
        "TQ": {
          "value": 0.11603837959181273,
          "n": 1002
        },
        "AQ": {
          "value": 3.6808952320180626,
          "n": 1002
        },
        "MS": {
          "value": 0.9379607639493875,
          "n": 1002
        },
        "L-TVA": {
          "value": 0.5206468375514923,
          "n": 1002
        },
        "G-TVA": {
          "value": 0.6080836231839725,
          "n": 1002
        },
        "PF": {
          "value": 0.8895440615219754,
          "n": 1002
        },
        "SF": {
          "value": 0.6568765043874113,
          "n": 1002
        },
        "SA": {
          "value": 0.8725012568300671,
          "n": 1002
        },
        "AF": {
          "value": 0.7726091592585741,
          "n": 1002
        },
        "MF": {
          "value": 0.44299458053166996,
          "n": 1002
        },
        "IF": {
          "value": 0.856627188804554,
          "n": 1002
        },
        "NC": {
          "value": 3.7533206831119545,
          "n": 1002
        },
        "VD": {
          "value": 3.717267552182163,
          "n": 1002
        },
        "MT": {
          "value": 3.681214421252372,
          "n": 1002
        },
        "VE": {
          "value": 3.698292220113852,
          "n": 1002
        }
      }
    },
    {
      "model": "gpt-6-astra",
      "setting": "Overall",
      "metrics": {
        "ES": {
          "value": 0.8624288425047438,
          "n": 1054
        },
        "TC": {
          "value": 13867.399810066478,
          "n": 1053
        },
        "TQ": {
          "value": 0.11035671901355576,
          "n": 909
        },
        "AQ": {
          "value": 3.536489685624788,
          "n": 909
        },
        "MS": {
          "value": 0.8538730791943837,
          "n": 909
        },
        "L-TVA": {
          "value": 0.4782978428681639,
          "n": 909
        },
        "G-TVA": {
          "value": 0.5751736316497683,
          "n": 909
        },
        "PF": {
          "value": 0.8337548462733068,
          "n": 909
        },
        "SF": {
          "value": 0.6487076761535531,
          "n": 909
        },
        "SA": {
          "value": 0.789972631835113,
          "n": 909
        },
        "AF": {
          "value": 0.7269405513215681,
          "n": 909
        },
        "MF": {
          "value": 0.4008702312835012,
          "n": 909
        },
        "IF": {
          "value": 0.8422890417457306,
          "n": 909
        },
        "NC": {
          "value": 3.6774193548387095,
          "n": 909
        },
        "VD": {
          "value": 3.6413662239089186,
          "n": 909
        },
        "MT": {
          "value": 3.538899430740038,
          "n": 909
        },
        "VE": {
          "value": 3.6072106261859584,
          "n": 909
        }
      }
    },
    {
      "model": "gpt-6-1-sol",
      "setting": "Overall",
      "metrics": {
        "ES": {
          "value": 0.8700189753320683,
          "n": 1054
        },
        "TC": {
          "value": 10992.736942070276,
          "n": 1053
        },
        "TQ": {
          "value": 0.1112703784509977,
          "n": 917
        },
        "AQ": {
          "value": 3.5244488643545906,
          "n": 917
        },
        "MS": {
          "value": 0.8614756439880902,
          "n": 917
        },
        "L-TVA": {
          "value": 0.4820642773348139,
          "n": 917
        },
        "G-TVA": {
          "value": 0.578108480097673,
          "n": 917
        },
        "PF": {
          "value": 0.8277124365743368,
          "n": 917
        },
        "SF": {
          "value": 0.6348485803121373,
          "n": 917
        },
        "SA": {
          "value": 0.7786164610117932,
          "n": 917
        },
        "AF": {
          "value": 0.7095015298441466,
          "n": 917
        },
        "MF": {
          "value": 0.38637689331422964,
          "n": 917
        },
        "IF": {
          "value": 0.839801344402277,
          "n": 917
        },
        "NC": {
          "value": 3.6755218216318783,
          "n": 917
        },
        "VD": {
          "value": 3.630929791271347,
          "n": 917
        },
        "MT": {
          "value": 3.5265654648956355,
          "n": 917
        },
        "VE": {
          "value": 3.6072106261859584,
          "n": 917
        }
      }
    },
    {
      "model": "gemini-3-8-flash",
      "setting": "Overall",
      "metrics": {
        "ES": {
          "value": 0.9193548387096774,
          "n": 1054
        },
        "TC": {
          "value": 15541.421252371916,
          "n": 1054
        },
        "TQ": {
          "value": 0.10180262459383027,
          "n": 969
        },
        "AQ": {
          "value": 3.476308814207833,
          "n": 969
        },
        "MS": {
          "value": 0.9105868065803985,
          "n": 969
        },
        "L-TVA": {
          "value": 0.4907737309557062,
          "n": 969
        },
        "G-TVA": {
          "value": 0.594993619838521,
          "n": 969
        },
        "PF": {
          "value": 0.8392402558917614,
          "n": 969
        },
        "SF": {
          "value": 0.5861898845644344,
          "n": 969
        },
        "SA": {
          "value": 0.7806315547451163,
          "n": 969
        },
        "AF": {
          "value": 0.6416345632496978,
          "n": 969
        },
        "MF": {
          "value": 0.39339991699721694,
          "n": 969
        },
        "IF": {
          "value": 0.7694808187855786,
          "n": 969
        },
        "NC": {
          "value": 3.291271347248577,
          "n": 969
        },
        "VD": {
          "value": 3.3007590132827325,
          "n": 969
        },
        "MT": {
          "value": 3.1242884250474385,
          "n": 969
        },
        "VE": {
          "value": 3.2333965844402277,
          "n": 969
        }
      }
    },
    {
      "model": "claude-haiku-5-5",
      "setting": "Overall",
      "metrics": {
        "ES": {
          "value": 0.8946869070208728,
          "n": 1054
        },
        "TC": {
          "value": 40549.035104364324,
          "n": 1054
        },
        "TQ": {
          "value": 0.10449093219613674,
          "n": 943
        },
        "AQ": {
          "value": 3.392221194168251,
          "n": 943
        },
        "MS": {
          "value": 0.8855723308386345,
          "n": 943
        },
        "L-TVA": {
          "value": 0.48122178777476754,
          "n": 943
        },
        "G-TVA": {
          "value": 0.5785063669735838,
          "n": 943
        },
        "PF": {
          "value": 0.8567962577775851,
          "n": 943
        },
        "SF": {
          "value": 0.6286075865950108,
          "n": 943
        },
        "SA": {
          "value": 0.8005997086808042,
          "n": 943
        },
        "AF": {
          "value": 0.6679245485221257,
          "n": 943
        },
        "MF": {
          "value": 0.39298429784582395,
          "n": 943
        },
        "IF": {
          "value": 0.7901076745730551,
          "n": 943
        },
        "NC": {
          "value": 3.3244781783681217,
          "n": 943
        },
        "VD": {
          "value": 3.1451612903225805,
          "n": 943
        },
        "MT": {
          "value": 3.1176470588235294,
          "n": 943
        },
        "VE": {
          "value": 3.174573055028463,
          "n": 943
        }
      }
    },
    {
      "model": "gpt-6-luna",
      "setting": "Overall",
      "metrics": {
        "ES": {
          "value": 0.896584440227704,
          "n": 1054
        },
        "TC": {
          "value": 8618.593927893739,
          "n": 1054
        },
        "TQ": {
          "value": 0.10895326558308957,
          "n": 945
        },
        "AQ": {
          "value": 3.5405432779222585,
          "n": 945
        },
        "MS": {
          "value": 0.8903144795381247,
          "n": 945
        },
        "L-TVA": {
          "value": 0.48661239022186636,
          "n": 945
        },
        "G-TVA": {
          "value": 0.5645431551580411,
          "n": 945
        },
        "PF": {
          "value": 0.8228739472562366,
          "n": 945
        },
        "SF": {
          "value": 0.6169375602487165,
          "n": 945
        },
        "SA": {
          "value": 0.7821679055175451,
          "n": 945
        },
        "AF": {
          "value": 0.6612705576445658,
          "n": 945
        },
        "MF": {
          "value": 0.38297673592864606,
          "n": 945
        },
        "IF": {
          "value": 0.6837413700189755,
          "n": 945
        },
        "NC": {
          "value": 2.8681214421252372,
          "n": 945
        },
        "VD": {
          "value": 3.0455407969639468,
          "n": 945
        },
        "MT": {
          "value": 2.7210626185958255,
          "n": 945
        },
        "VE": {
          "value": 2.840607210626186,
          "n": 945
        }
      }
    },
    {
      "model": "mimo-v2-6-pro",
      "setting": "Overall",
      "metrics": {
        "ES": {
          "value": 0.8700189753320683,
          "n": 1054
        },
        "TC": {
          "value": 28768.71631878558,
          "n": 1054
        },
        "TQ": {
          "value": 0.10814327158116224,
          "n": 917
        },
        "AQ": {
          "value": 3.3656333554699427,
          "n": 917
        },
        "MS": {
          "value": 0.8622470503994273,
          "n": 917
        },
        "L-TVA": {
          "value": 0.473000658092671,
          "n": 917
        },
        "G-TVA": {
          "value": 0.5702556767262363,
          "n": 917
        },
        "PF": {
          "value": 0.7877706447320988,
          "n": 917
        },
        "SF": {
          "value": 0.5395295214814833,
          "n": 917
        },
        "SA": {
          "value": 0.7574620860969642,
          "n": 917
        },
        "AF": {
          "value": 0.6236304576639752,
          "n": 917
        },
        "MF": {
          "value": 0.3744772820805954,
          "n": 917
        },
        "IF": {
          "value": 0.7666426062618595,
          "n": 917
        },
        "NC": {
          "value": 3.2732447817836814,
          "n": 917
        },
        "VD": {
          "value": 3.1944971537001896,
          "n": 917
        },
        "MT": {
          "value": 3.1299810246679316,
          "n": 917
        },
        "VE": {
          "value": 3.1973434535104364,
          "n": 917
        }
      }
    },
    {
      "model": "deepseek-v4-1-flash",
      "setting": "Overall",
      "metrics": {
        "ES": {
          "value": 0.8339658444022771,
          "n": 1054
        },
        "TC": {
          "value": 64159.17077798861,
          "n": 1054
        },
        "TQ": {
          "value": 0.10026591766912524,
          "n": 879
        },
        "AQ": {
          "value": 3.2372497731490144,
          "n": 879
        },
        "MS": {
          "value": 0.8261908934130683,
          "n": 879
        },
        "L-TVA": {
          "value": 0.4478798028298384,
          "n": 879
        },
        "G-TVA": {
          "value": 0.5507789924175283,
          "n": 879
        },
        "PF": {
          "value": 0.7459583205173613,
          "n": 879
        },
        "SF": {
          "value": 0.5026992654372704,
          "n": 879
        },
        "SA": {
          "value": 0.7134945213966479,
          "n": 879
        },
        "AF": {
          "value": 0.5982268501108996,
          "n": 879
        },
        "MF": {
          "value": 0.35410708682853137,
          "n": 879
        },
        "IF": {
          "value": 0.7737503491461102,
          "n": 879
        },
        "NC": {
          "value": 3.323529411764706,
          "n": 879
        },
        "VD": {
          "value": 3.2314990512333965,
          "n": 879
        },
        "MT": {
          "value": 3.198292220113852,
          "n": 879
        },
        "VE": {
          "value": 3.240037950664137,
          "n": 879
        }
      }
    },
    {
      "model": "kimi-k3",
      "setting": "Overall",
      "metrics": {
        "ES": {
          "value": 0.8149905123339658,
          "n": 1054
        },
        "TC": {
          "value": 39134.88330170778,
          "n": 1054
        },
        "TQ": {
          "value": 0.09307448847092992,
          "n": 859
        },
        "AQ": {
          "value": 3.1566639355419803,
          "n": 859
        },
        "MS": {
          "value": 0.8071461357918491,
          "n": 859
        },
        "L-TVA": {
          "value": 0.4363857568861256,
          "n": 859
        },
        "G-TVA": {
          "value": 0.5380581164382666,
          "n": 859
        },
        "PF": {
          "value": 0.7756351414606276,
          "n": 859
        },
        "SF": {
          "value": 0.5390145929354303,
          "n": 859
        },
        "SA": {
          "value": 0.638574951663828,
          "n": 859
        },
        "AF": {
          "value": 0.5063164734977216,
          "n": 859
        },
        "MF": {
          "value": 0.3210094621786123,
          "n": 859
        },
        "IF": {
          "value": 0.7336281404174573,
          "n": 859
        },
        "NC": {
          "value": 3.113851992409867,
          "n": 859
        },
        "VD": {
          "value": 3.0037950664136623,
          "n": 859
        },
        "MT": {
          "value": 2.9468690702087286,
          "n": 859
        },
        "VE": {
          "value": 2.99146110056926,
          "n": 859
        }
      }
    },
    {
      "model": "glm-5-3-flash",
      "setting": "Overall",
      "metrics": {
        "ES": {
          "value": 0.7419354838709677,
          "n": 1054
        },
        "TC": {
          "value": 90004.7741935484,
          "n": 1054
        },
        "TQ": {
          "value": 0.08729819119468392,
          "n": 781
        },
        "AQ": {
          "value": 2.8979521418549465,
          "n": 781
        },
        "MS": {
          "value": 0.7346190748744537,
          "n": 781
        },
        "L-TVA": {
          "value": 0.4017499345448752,
          "n": 781
        },
        "G-TVA": {
          "value": 0.4895608543049,
          "n": 781
        },
        "PF": {
          "value": 0.7005897914985415,
          "n": 781
        },
        "SF": {
          "value": 0.4851590986080263,
          "n": 781
        },
        "SA": {
          "value": 0.683826855177151,
          "n": 781
        },
        "AF": {
          "value": 0.5687129345717536,
          "n": 781
        },
        "MF": {
          "value": 0.3448640429320871,
          "n": 781
        },
        "IF": {
          "value": 0.6957565199240986,
          "n": 781
        },
        "NC": {
          "value": 3.0037950664136623,
          "n": 781
        },
        "VD": {
          "value": 2.9250474383301706,
          "n": 781
        },
        "MT": {
          "value": 2.890891840607211,
          "n": 781
        },
        "VE": {
          "value": 2.9269449715370017,
          "n": 781
        }
      }
    },
    {
      "model": "qwen3-8-max",
      "setting": "Overall",
      "metrics": {
        "ES": {
          "value": 0.7409867172675522,
          "n": 1054
        },
        "TC": {
          "value": 48645.70018975332,
          "n": 1054
        },
        "TQ": {
          "value": 0.08517961143818589,
          "n": 781
        },
        "AQ": {
          "value": 2.817424731475294,
          "n": 781
        },
        "MS": {
          "value": 0.7336550251953522,
          "n": 781
        },
        "L-TVA": {
          "value": 0.4000394145382268,
          "n": 781
        },
        "G-TVA": {
          "value": 0.48898974864034994,
          "n": 781
        },
        "PF": {
          "value": 0.587065507252553,
          "n": 781
        },
        "SF": {
          "value": 0.42408643739761265,
          "n": 781
        },
        "SA": {
          "value": 0.6162654862280195,
          "n": 781
        },
        "AF": {
          "value": 0.5330631630744779,
          "n": 781
        },
        "MF": {
          "value": 0.31659911302393384,
          "n": 781
        },
        "IF": {
          "value": 0.6839672314990513,
          "n": 781
        },
        "NC": {
          "value": 2.9240986717267554,
          "n": 781
        },
        "VD": {
          "value": 2.747628083491461,
          "n": 781
        },
        "MT": {
          "value": 2.767552182163188,
          "n": 781
        },
        "VE": {
          "value": 2.804554079696395,
          "n": 781
        }
      }
    },
    {
      "model": "qwen3-8-flash",
      "setting": "Overall",
      "metrics": {
        "ES": {
          "value": 0.7390891840607211,
          "n": 1054
        },
        "TC": {
          "value": 49246.36847103514,
          "n": 1053
        },
        "TQ": {
          "value": 0.08480771090432385,
          "n": 779
        },
        "AQ": {
          "value": 2.804991525918834,
          "n": 779
        },
        "MS": {
          "value": 0.7320832149254138,
          "n": 779
        },
        "L-TVA": {
          "value": 0.3940547840645025,
          "n": 779
        },
        "G-TVA": {
          "value": 0.48481322841920255,
          "n": 779
        },
        "PF": {
          "value": 0.6938743027898695,
          "n": 779
        },
        "SF": {
          "value": 0.46926328032867287,
          "n": 779
        },
        "SA": {
          "value": 0.6065248873632305,
          "n": 779
        },
        "AF": {
          "value": 0.5043369385562577,
          "n": 779
        },
        "MF": {
          "value": 0.30606102117307765,
          "n": 779
        },
        "IF": {
          "value": 0.6575308833017078,
          "n": 779
        },
        "NC": {
          "value": 2.7210626185958255,
          "n": 779
        },
        "VD": {
          "value": 2.5616698292220113,
          "n": 779
        },
        "MT": {
          "value": 2.5588235294117645,
          "n": 779
        },
        "VE": {
          "value": 2.594876660341556,
          "n": 779
        }
      }
    },
    {
      "model": "qwen3-8-27b",
      "setting": "Overall",
      "metrics": {
        "ES": {
          "value": 0.7049335863377609,
          "n": 1054
        },
        "TC": {
          "value": 62085.83855650522,
          "n": 1053
        },
        "TQ": {
          "value": 0.07976450276255959,
          "n": 743
        },
        "AQ": {
          "value": 2.7166862377003183,
          "n": 743
        },
        "MS": {
          "value": 0.6987346542671095,
          "n": 743
        },
        "L-TVA": {
          "value": 0.3742608021707715,
          "n": 743
        },
        "G-TVA": {
          "value": 0.4601742560485735,
          "n": 743
        },
        "PF": {
          "value": 0.6461241149936698,
          "n": 743
        },
        "SF": {
          "value": 0.45222971286758157,
          "n": 743
        },
        "SA": {
          "value": 0.6038241553890602,
          "n": 743
        },
        "AF": {
          "value": 0.5059294663614071,
          "n": 743
        },
        "MF": {
          "value": 0.3031006944540255,
          "n": 743
        },
        "IF": {
          "value": 0.632259462049336,
          "n": 743
        },
        "NC": {
          "value": 2.6394686907020875,
          "n": 743
        },
        "VD": {
          "value": 2.53415559772296,
          "n": 743
        },
        "MT": {
          "value": 2.501897533206831,
          "n": 743
        },
        "VE": {
          "value": 2.5360531309297913,
          "n": 743
        }
      }
    },
    {
      "model": "minimax-m3",
      "setting": "Overall",
      "metrics": {
        "ES": {
          "value": 0.5967741935483871,
          "n": 1054
        },
        "TC": {
          "value": 13167.382352941177,
          "n": 1054
        },
        "TQ": {
          "value": 0.05933677009102763,
          "n": 629
        },
        "AQ": {
          "value": 2.232441320509511,
          "n": 629
        },
        "MS": {
          "value": 0.5926939674539035,
          "n": 629
        },
        "L-TVA": {
          "value": 0.29708097739997885,
          "n": 629
        },
        "G-TVA": {
          "value": 0.36963383730437316,
          "n": 629
        },
        "PF": {
          "value": 0.4908949312799602,
          "n": 629
        },
        "SF": {
          "value": 0.34817398973680824,
          "n": 629
        },
        "SA": {
          "value": 0.5444918937916714,
          "n": 629
        },
        "AF": {
          "value": 0.40968786818470454,
          "n": 629
        },
        "MF": {
          "value": 0.2795664006334217,
          "n": 629
        },
        "IF": {
          "value": 0.4037160872865276,
          "n": 629
        },
        "NC": {
          "value": 1.605313092979127,
          "n": 629
        },
        "VD": {
          "value": 1.6043643263757115,
          "n": 629
        },
        "MT": {
          "value": 1.5,
          "n": 629
        },
        "VE": {
          "value": 1.5275142314990513,
          "n": 629
        }
      }
    }
  ],
  "release": {
    "dataset": "pending",
    "evaluation_code": "pending",
    "results": "pending",
    "human_validation": "planned",
    "license": "pending",
    "examples": "pending"
  }
};
