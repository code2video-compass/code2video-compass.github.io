window.C2V_CASES = {
  "families": [
    {
      "key": "vq",
      "label": "Video Quality",
      "metric": "Video Quality",
      "cases": [
        "VQ-3",
        "VQ-4",
        "SK-3D-05",
        "SK-3D-07",
        "SK-3D-08",
        "SK-3D-10"
      ]
    },
    {
      "key": "ta",
      "label": "Text Alignment",
      "metric": "Text Alignment",
      "cases": [
        "TA-1",
        "TA-2"
      ]
    },
    {
      "key": "if",
      "label": "Image Fidelity · I2V",
      "metric": "Image Fidelity",
      "cases": [
        "I2V-1",
        "I2V-2",
        "SK-3D-06",
        "SK-3D-09",
        "SK-3D-11"
      ]
    },
    {
      "key": "cf",
      "label": "Clip Fidelity · V2V",
      "metric": "Clip Fidelity",
      "cases": [
        "V2V-1",
        "V2V-2",
        "SK-3D-02",
        "SK-3D-13",
        "SK-3D-14"
      ]
    },
    {
      "key": "instr",
      "label": "Instruction Following",
      "metric": "Instruction Following",
      "cases": [
        "IF-1"
      ]
    },
    {
      "key": "hl",
      "label": "Holistic Quality",
      "metric": "Holistic Quality",
      "cases": [
        "NC-4",
        "SK-3D-01",
        "VD-1",
        "HQ-VD-2",
        "MT-1",
        "MT-2",
        "VE-2",
        "HQ-VE-1"
      ]
    }
  ],
  "cases": {
    "I2V-1": {
      "key": "I2V-1",
      "task": "i2v",
      "sample": "0501793a51e9752afd7fca75",
      "title": "Space Lighthouse Standoff",
      "desc": "Compare character silhouettes, relative scale, camera angle and placement with the reference frame.",
      "metrics": [
        "PF",
        "SF"
      ],
      "models": [
        {
          "id": "gpt-6-astra",
          "name": "GPT-6 Astra",
          "rank": null,
          "scores": {
            "PF": 0.889,
            "SF": 0.667
          },
          "poster": "assets/case_studies/I2V-1/gpt-6-astra.jpg"
        },
        {
          "id": "gpt-6-1-sol",
          "name": "GPT-6.1 Sol",
          "rank": null,
          "scores": {
            "PF": 0.761,
            "SF": 0.608
          },
          "poster": "assets/case_studies/I2V-1/gpt-6-1-sol.jpg"
        },
        {
          "id": "gpt-6-luna",
          "name": "GPT-6 Luna",
          "rank": null,
          "scores": {
            "PF": 0.847,
            "SF": 0.634
          },
          "poster": "assets/case_studies/I2V-1/gpt-6-luna.jpg"
        },
        {
          "id": "claude-opus-5-5",
          "name": "Claude Opus 5.5",
          "rank": null,
          "scores": {
            "PF": 0.87,
            "SF": 0.604
          },
          "poster": "assets/case_studies/I2V-1/claude-opus-5-5.jpg"
        },
        {
          "id": "claude-sonnet-5-5",
          "name": "Claude Sonnet 5.5",
          "rank": null,
          "scores": {
            "PF": 0.741,
            "SF": 0.618
          },
          "poster": "assets/case_studies/I2V-1/claude-sonnet-5-5.jpg"
        },
        {
          "id": "claude-haiku-5-5",
          "name": "Claude Haiku 5.5",
          "rank": null,
          "scores": {
            "PF": 0.774,
            "SF": 0.577
          },
          "poster": "assets/case_studies/I2V-1/claude-haiku-5-5.jpg"
        },
        {
          "id": "gemini-3-8-flash",
          "name": "Gemini 3.8 Flash",
          "rank": null,
          "scores": {
            "PF": 0.847,
            "SF": 0.463
          },
          "poster": "assets/case_studies/I2V-1/gemini-3-8-flash.jpg"
        },
        {
          "id": "deepseek-v4-1-flash",
          "name": "DeepSeek V4.1 Flash",
          "rank": null,
          "scores": {
            "PF": 0.83,
            "SF": 0.483
          },
          "poster": "assets/case_studies/I2V-1/deepseek-v4-1-flash.jpg"
        },
        {
          "id": "glm-5-3-flash",
          "name": "GLM 5.3 Flash",
          "rank": null,
          "scores": {
            "PF": 0.805,
            "SF": 0.366
          },
          "poster": "assets/case_studies/I2V-1/glm-5-3-flash.jpg"
        },
        {
          "id": "kimi-k3",
          "name": "Kimi K3",
          "rank": null,
          "scores": {
            "PF": 0.771,
            "SF": 0.518
          },
          "poster": "assets/case_studies/I2V-1/kimi-k3.jpg"
        },
        {
          "id": "mimo-v2-6-pro",
          "name": "MiMo V2.6 Pro",
          "rank": null,
          "scores": {
            "PF": 0.781,
            "SF": 0.387
          },
          "poster": "assets/case_studies/I2V-1/mimo-v2-6-pro.jpg"
        },
        {
          "id": "minimax-m3",
          "name": "MiniMax M3",
          "rank": null,
          "scores": {
            "PF": 0.734,
            "SF": 0.372
          },
          "poster": "assets/case_studies/I2V-1/minimax-m3.jpg"
        },
        {
          "id": "qwen3-8-27b",
          "name": "Qwen3.8-27B",
          "rank": null,
          "scores": {
            "PF": 0.788,
            "SF": 0.505
          },
          "poster": "assets/case_studies/I2V-1/qwen3-8-27b.jpg"
        },
        {
          "id": "qwen3-8-flash",
          "name": "Qwen3.8-Flash",
          "rank": null,
          "scores": {
            "PF": 0.764,
            "SF": 0.355
          },
          "poster": "assets/case_studies/I2V-1/qwen3-8-flash.jpg"
        },
        {
          "id": "qwen3-8-max",
          "name": "Qwen3.8-Max",
          "rank": null,
          "scores": {
            "PF": 0.839,
            "SF": 0.578
          },
          "poster": "assets/case_studies/I2V-1/qwen3-8-max.jpg"
        }
      ],
      "input": {
        "type": "keyframe",
        "media": "assets/case_studies/I2V-1/keyframe.jpg"
      },
      "note": "Selected output frames",
      "label": "Image Fidelity-example1",
      "family_key": "if",
      "family_label": "Image Fidelity"
    },
    "I2V-2": {
      "key": "I2V-2",
      "task": "i2v",
      "sample": "59e37cdc722e94efc8acd945",
      "title": "Titanic, Iceberg and Aurora in a Bottle",
      "desc": "Compare the ship, bottle, iceberg and aurora with the reference frame, including proportions, framing and lighting.",
      "metrics": [
        "PF",
        "SF"
      ],
      "models": [
        {
          "id": "gpt-6-astra",
          "name": "GPT-6 Astra",
          "rank": null,
          "scores": {
            "PF": 0.903,
            "SF": 0.684
          },
          "poster": "assets/case_studies/I2V-2/gpt-6-astra.jpg"
        },
        {
          "id": "gpt-6-1-sol",
          "name": "GPT-6.1 Sol",
          "rank": null,
          "scores": {
            "PF": 0.9,
            "SF": 0.659
          },
          "poster": "assets/case_studies/I2V-2/gpt-6-1-sol.jpg"
        },
        {
          "id": "gpt-6-luna",
          "name": "GPT-6 Luna",
          "rank": null,
          "scores": {
            "PF": 0.817,
            "SF": 0.565
          },
          "poster": "assets/case_studies/I2V-2/gpt-6-luna.jpg"
        },
        {
          "id": "claude-opus-5-5",
          "name": "Claude Opus 5.5",
          "rank": null,
          "scores": {
            "PF": 0.853,
            "SF": 0.607
          },
          "poster": "assets/case_studies/I2V-2/claude-opus-5-5.jpg"
        },
        {
          "id": "claude-sonnet-5-5",
          "name": "Claude Sonnet 5.5",
          "rank": null,
          "scores": {
            "PF": 0.837,
            "SF": 0.596
          },
          "poster": "assets/case_studies/I2V-2/claude-sonnet-5-5.jpg"
        },
        {
          "id": "claude-haiku-5-5",
          "name": "Claude Haiku 5.5",
          "rank": null,
          "scores": {
            "PF": 0.824,
            "SF": 0.537
          },
          "poster": "assets/case_studies/I2V-2/claude-haiku-5-5.jpg"
        },
        {
          "id": "gemini-3-8-flash",
          "name": "Gemini 3.8 Flash",
          "rank": null,
          "scores": {
            "PF": 0.819,
            "SF": 0.533
          },
          "poster": "assets/case_studies/I2V-2/gemini-3-8-flash.jpg"
        },
        {
          "id": "deepseek-v4-1-flash",
          "name": "DeepSeek V4.1 Flash",
          "rank": null,
          "scores": {
            "PF": 0.849,
            "SF": 0.589
          },
          "poster": "assets/case_studies/I2V-2/deepseek-v4-1-flash.jpg"
        },
        {
          "id": "glm-5-3-flash",
          "name": "GLM 5.3 Flash",
          "rank": null,
          "scores": {
            "PF": 0.836,
            "SF": 0.498
          },
          "poster": "assets/case_studies/I2V-2/glm-5-3-flash.jpg"
        },
        {
          "id": "kimi-k3",
          "name": "Kimi K3",
          "rank": null,
          "scores": {
            "PF": 0.862,
            "SF": 0.56
          },
          "poster": "assets/case_studies/I2V-2/kimi-k3.jpg"
        },
        {
          "id": "mimo-v2-6-pro",
          "name": "MiMo V2.6 Pro",
          "rank": null,
          "scores": {
            "PF": 0.839,
            "SF": 0.49
          },
          "poster": "assets/case_studies/I2V-2/mimo-v2-6-pro.jpg"
        },
        {
          "id": "minimax-m3",
          "name": "MiniMax M3",
          "rank": null,
          "scores": {
            "PF": 0.736,
            "SF": 0.316
          },
          "poster": "assets/case_studies/I2V-2/minimax-m3.jpg"
        },
        {
          "id": "qwen3-8-27b",
          "name": "Qwen3.8-27B",
          "rank": null,
          "scores": {
            "PF": 0.833,
            "SF": 0.52
          },
          "poster": "assets/case_studies/I2V-2/qwen3-8-27b.jpg"
        },
        {
          "id": "qwen3-8-flash",
          "name": "Qwen3.8-Flash",
          "rank": null,
          "scores": {
            "PF": 0.826,
            "SF": 0.494
          },
          "poster": "assets/case_studies/I2V-2/qwen3-8-flash.jpg"
        },
        {
          "id": "qwen3-8-max",
          "name": "Qwen3.8-Max",
          "rank": null,
          "scores": {
            "PF": 0.885,
            "SF": 0.671
          },
          "poster": "assets/case_studies/I2V-2/qwen3-8-max.jpg"
        }
      ],
      "input": {
        "type": "keyframe",
        "media": "assets/case_studies/I2V-2/keyframe.jpg"
      },
      "note": "Selected output frames",
      "label": "Image Fidelity-example2",
      "family_key": "if",
      "family_label": "Image Fidelity"
    },
    "V2V-1": {
      "key": "V2V-1",
      "task": "v2v",
      "sample": "youtube_R34_78b15ba5d26f",
      "title": "Bright Lab with an Alien Character",
      "desc": "Astra retains the bright lab and colored characters. MiMo uses simplified lab geometry; the Qwen excerpt shows a sparse seated-character scene.",
      "metrics": [
        "SA",
        "AF",
        "MF"
      ],
      "models": [
        {
          "id": "gpt-6-astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "scores": {
            "SA": 0.818,
            "AF": 0.681,
            "MF": 0.691
          },
          "clip": [
            14.6,
            19.1
          ],
          "video": "assets/case_studies/V2V-1/gpt-6-astra.mp4",
          "vposter": "assets/case_studies/V2V-1/gpt-6-astra.poster.jpg"
        },
        {
          "id": "mimo-v2-6-pro",
          "name": "MiMo V2.6 Pro",
          "rank": "mid",
          "scores": {
            "SA": 0.715,
            "AF": 0.559,
            "MF": 0.438
          },
          "clip": [
            14.6,
            17.1
          ],
          "video": "assets/case_studies/V2V-1/mimo-v2-6-pro.mp4",
          "vposter": "assets/case_studies/V2V-1/mimo-v2-6-pro.poster.jpg"
        },
        {
          "id": "qwen3-8-27b",
          "name": "Qwen3.8-27B",
          "rank": "low",
          "scores": {
            "SA": 0.563,
            "AF": 0.42,
            "MF": 0.309
          },
          "clip": [
            6.3,
            8.1
          ],
          "video": "assets/case_studies/V2V-1/qwen3-8-27b.mp4",
          "vposter": "assets/case_studies/V2V-1/qwen3-8-27b.poster.jpg"
        }
      ],
      "input": {
        "type": "keyclip",
        "media": "assets/case_studies/V2V-1/reference.mp4",
        "vposter": "assets/case_studies/V2V-1/reference.poster.jpg"
      },
      "note": "Reference-matched excerpts",
      "label": "Clip Fidelity-example1",
      "family_key": "cf",
      "family_label": "Clip Fidelity"
    },
    "V2V-2": {
      "key": "V2V-2",
      "task": "v2v",
      "sample": "e0e13ac6da65b2d00ca01284",
      "title": "Girl, Kite and Aerial Meadow",
      "desc": "Astra retains the girl, kite and elevated meadow view. DeepSeek changes the viewpoint and layout; the Kimi excerpt shows terrain without the girl or kite.",
      "metrics": [
        "SA",
        "AF",
        "MF"
      ],
      "models": [
        {
          "id": "gpt-6-astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "scores": {
            "SA": 0.943,
            "AF": 0.858,
            "MF": 0.712
          },
          "clip": [
            8.1,
            12.7
          ],
          "video": "assets/case_studies/V2V-2/gpt-6-astra.mp4",
          "vposter": "assets/case_studies/V2V-2/gpt-6-astra.poster.jpg"
        },
        {
          "id": "deepseek-v4-1-flash",
          "name": "DeepSeek V4.1 Flash",
          "rank": "mid",
          "scores": {
            "SA": 0.843,
            "AF": 0.646,
            "MF": 0.58
          },
          "clip": [
            14.9,
            16.9
          ],
          "video": "assets/case_studies/V2V-2/deepseek-v4-1-flash.mp4",
          "vposter": "assets/case_studies/V2V-2/deepseek-v4-1-flash.poster.jpg"
        },
        {
          "id": "kimi-k3",
          "name": "Kimi K3",
          "rank": "low",
          "scores": {
            "SA": 0.707,
            "AF": 0.39,
            "MF": 0.433
          },
          "clip": [
            12.1,
            14.1
          ],
          "video": "assets/case_studies/V2V-2/kimi-k3.mp4",
          "vposter": "assets/case_studies/V2V-2/kimi-k3.poster.jpg"
        }
      ],
      "input": {
        "type": "keyclip",
        "media": "assets/case_studies/V2V-2/reference.mp4",
        "vposter": "assets/case_studies/V2V-2/reference.poster.jpg"
      },
      "note": "Reference-matched excerpts",
      "label": "Clip Fidelity-example2",
      "family_key": "cf",
      "family_label": "Clip Fidelity"
    },
    "VQ-3": {
      "key": "VQ-3",
      "task": "t2v",
      "sample": "RTA-0117",
      "title": "Monster Campus Night Training",
      "desc": "Astra uses articulated campus settings and multi-character scenes. GLM simplifies the settings and includes a black interval; Haiku uses flatter geometric figures and props.",
      "metrics": [
        "TQ",
        "AQ",
        "MS"
      ],
      "models": [
        {
          "id": "gpt-6-astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "scores": {
            "TQ": 0.17,
            "AQ": 4.757,
            "MS": 0.994
          },
          "video": "assets/case_studies/VQ-3/gpt-6-astra.mp4",
          "vposter": "assets/case_studies/VQ-3/gpt-6-astra.poster.jpg"
        },
        {
          "id": "glm-5-3-flash",
          "name": "GLM 5.3 Flash",
          "rank": "mid",
          "scores": {
            "TQ": 0.138,
            "AQ": 4.371,
            "MS": 0.993
          },
          "video": "assets/case_studies/VQ-3/glm-5-3-flash.mp4",
          "vposter": "assets/case_studies/VQ-3/glm-5-3-flash.poster.jpg"
        },
        {
          "id": "claude-haiku-5-5",
          "name": "Claude Haiku 5.5",
          "rank": "low",
          "scores": {
            "TQ": 0.134,
            "AQ": 3.487,
            "MS": 0.993
          },
          "video": "assets/case_studies/VQ-3/claude-haiku-5-5.mp4",
          "vposter": "assets/case_studies/VQ-3/claude-haiku-5-5.poster.jpg"
        }
      ],
      "note": "Full generated videos",
      "label": "Video Quality-example1",
      "family_key": "vq",
      "family_label": "Video Quality"
    },
    "VQ-4": {
      "key": "VQ-4",
      "task": "t2v",
      "sample": "9eba96c581e33d420432831f",
      "title": "Pirate Parrots Debate Onstage",
      "desc": "Sol shows a layered stage and detailed parrot. DeepSeek uses simpler stage elements; Haiku overlays interface-style text panels on a geometric parrot.",
      "metrics": [
        "TQ",
        "AQ",
        "MS"
      ],
      "models": [
        {
          "id": "gpt-6-1-sol",
          "name": "GPT-6.1 Sol",
          "rank": "high",
          "scores": {
            "TQ": 0.182,
            "AQ": 4.837,
            "MS": 0.993
          },
          "video": "assets/case_studies/VQ-4/gpt-6-1-sol.mp4",
          "vposter": "assets/case_studies/VQ-4/gpt-6-1-sol.poster.jpg"
        },
        {
          "id": "deepseek-v4-1-flash",
          "name": "DeepSeek V4.1 Flash",
          "rank": "mid",
          "scores": {
            "TQ": 0.158,
            "AQ": 4.074,
            "MS": 0.992
          },
          "video": "assets/case_studies/VQ-4/deepseek-v4-1-flash.mp4",
          "vposter": "assets/case_studies/VQ-4/deepseek-v4-1-flash.poster.jpg"
        },
        {
          "id": "claude-haiku-5-5",
          "name": "Claude Haiku 5.5",
          "rank": "low",
          "scores": {
            "TQ": 0.14,
            "AQ": 3.398,
            "MS": 0.987
          },
          "video": "assets/case_studies/VQ-4/claude-haiku-5-5.mp4",
          "vposter": "assets/case_studies/VQ-4/claude-haiku-5-5.poster.jpg"
        }
      ],
      "note": "Full generated videos",
      "label": "Video Quality-example2",
      "family_key": "vq",
      "family_label": "Video Quality"
    },
    "TA-1": {
      "key": "TA-1",
      "task": "v2v",
      "sample": "0e19135f2d46f807902c00e8",
      "title": "LLM Development Timeline",
      "desc": "Astra spans the early milestones, reasoning demonstration and later GPT stages. Sol starts at the reasoning stage and retains later milestones; Sonnet largely stays within the reasoning demonstration.",
      "metrics": [
        "L-TVA",
        "G-TVA"
      ],
      "models": [
        {
          "id": "gpt-6-astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "scores": {
            "L-TVA": 0.615,
            "G-TVA": 0.687
          },
          "video": "assets/case_studies/TA-1/gpt-6-astra.mp4",
          "vposter": "assets/case_studies/TA-1/gpt-6-astra.poster.jpg"
        },
        {
          "id": "gpt-6-1-sol",
          "name": "GPT-6.1 Sol",
          "rank": "mid",
          "scores": {
            "L-TVA": 0.551,
            "G-TVA": 0.43
          },
          "video": "assets/case_studies/TA-1/gpt-6-1-sol.mp4",
          "vposter": "assets/case_studies/TA-1/gpt-6-1-sol.poster.jpg"
        },
        {
          "id": "claude-sonnet-5-5",
          "name": "Claude Sonnet 5.5",
          "rank": "low",
          "scores": {
            "L-TVA": 0.39,
            "G-TVA": 0.145
          },
          "video": "assets/case_studies/TA-1/claude-sonnet-5-5.mp4",
          "vposter": "assets/case_studies/TA-1/claude-sonnet-5-5.poster.jpg"
        }
      ],
      "note": "Full generated videos",
      "label": "Text Alignment-example1",
      "family_key": "ta",
      "family_label": "Text Alignment"
    },
    "TA-2": {
      "key": "TA-2",
      "task": "v2v",
      "sample": "12d3190021bddfdc77975dbc",
      "title": "2D-to-3D Animation Showreel",
      "desc": "Opus and Haiku show stages beyond the reference ring. Haiku simplifies the cylindrical pillar volume and beveled closing letters. Luna concentrates on the 2D/3D ring sequence and omits much of the requested showreel.",
      "metrics": [
        "L-TVA",
        "G-TVA"
      ],
      "models": [
        {
          "id": "claude-opus-5-5",
          "name": "Claude Opus 5.5",
          "rank": "high",
          "scores": {
            "L-TVA": 0.559,
            "G-TVA": 0.733
          },
          "video": "assets/case_studies/TA-2/claude-opus-5-5.mp4",
          "vposter": "assets/case_studies/TA-2/claude-opus-5-5.poster.jpg"
        },
        {
          "id": "claude-haiku-5-5",
          "name": "Claude Haiku 5.5",
          "rank": "mid",
          "scores": {
            "L-TVA": 0.545,
            "G-TVA": 0.7
          },
          "video": "assets/case_studies/TA-2/claude-haiku-5-5.mp4",
          "vposter": "assets/case_studies/TA-2/claude-haiku-5-5.poster.jpg"
        },
        {
          "id": "gpt-6-luna",
          "name": "GPT-6 Luna",
          "rank": "low",
          "scores": {
            "L-TVA": 0.515,
            "G-TVA": 0.376
          },
          "video": "assets/case_studies/TA-2/gpt-6-luna.mp4",
          "vposter": "assets/case_studies/TA-2/gpt-6-luna.poster.jpg"
        }
      ],
      "note": "Full generated videos",
      "label": "Text Alignment-example2",
      "family_key": "ta",
      "family_label": "Text Alignment"
    },
    "MT-1": {
      "key": "MT-1",
      "task": "i2v",
      "sample": "010457dd306493e691ec2972",
      "title": "Eight motion studies: data, runner, extrusion and particles",
      "desc": "Haiku develops an extruded-bar study through changing geometric patterns. MiniMax animates sparse blue blocks; Gemini shows a mostly flat grid before a dark transition.",
      "metrics": [
        "MT"
      ],
      "models": [
        {
          "id": "claude-haiku-5-5",
          "name": "Claude Haiku 5.5",
          "rank": "high",
          "clip": [
            16.2,
            19
          ],
          "video": "assets/case_studies/MT-1/claude-haiku-5-5.mp4",
          "vposter": "assets/case_studies/MT-1/claude-haiku-5-5.poster.jpg",
          "scores": {
            "MT": 5.0
          }
        },
        {
          "id": "minimax-m3",
          "name": "MiniMax M3",
          "rank": "mid",
          "clip": [
            50,
            59
          ],
          "video": "assets/case_studies/MT-1/minimax-m3.mp4",
          "vposter": "assets/case_studies/MT-1/minimax-m3.poster.jpg",
          "scores": {
            "MT": 2.0
          }
        },
        {
          "id": "gemini-3-8-flash",
          "name": "Gemini 3.8 Flash",
          "rank": "low",
          "clip": [
            15,
            19
          ],
          "video": "assets/case_studies/MT-1/gemini-3-8-flash.mp4",
          "vposter": "assets/case_studies/MT-1/gemini-3-8-flash.poster.jpg",
          "scores": {
            "MT": 1.0
          }
        }
      ],
      "note": "Motion excerpts",
      "label": "Motion Quality-example1",
      "family_key": "hl",
      "family_label": "Holistic Quality",
      "score_source": "Saved holistic judge evidence; 1–5 scale."
    },
    "MT-2": {
      "key": "MT-2",
      "task": "v2v",
      "sample": "RTA-0381",
      "title": "Turbulent liquid: surface deformation and dispersed micro-droplets",
      "desc": "Astra has dense, changing fluid-like surface detail and dispersed droplets. Opus shows a smoother deforming blob. MiniMax shows repeated large rounded lobes with little local deformation in the reviewed focus window.",
      "metrics": [
        "MT"
      ],
      "models": [
        {
          "id": "gpt-6-astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "clip": [
            13.5,
            17.5
          ],
          "video": "assets/case_studies/MT-2/gpt-6-astra.mp4",
          "vposter": "assets/case_studies/MT-2/gpt-6-astra.poster.jpg",
          "scores": {
            "MT": 5.0
          }
        },
        {
          "id": "claude-opus-5-5",
          "name": "Claude Opus 5.5",
          "rank": "mid",
          "clip": [
            14,
            16.5
          ],
          "video": "assets/case_studies/MT-2/claude-opus-5-5.mp4",
          "vposter": "assets/case_studies/MT-2/claude-opus-5-5.poster.jpg",
          "scores": {
            "MT": 3.0
          }
        },
        {
          "id": "minimax-m3",
          "name": "MiniMax M3",
          "rank": "low",
          "clip": [
            35.1,
            39.1
          ],
          "video": "assets/case_studies/MT-2/minimax-m3.mp4",
          "vposter": "assets/case_studies/MT-2/minimax-m3.poster.jpg",
          "scores": {
            "MT": 1.0
          }
        }
      ],
      "note": "Motion excerpts",
      "label": "Motion Quality-example2",
      "family_key": "hl",
      "family_label": "Holistic Quality",
      "score_source": "Saved holistic judge evidence; 1–5 scale."
    },
    "NC-4": {
      "key": "NC-4",
      "task": "i2v",
      "sample": "daec8de95c9be83e46168f19",
      "title": "Mid-Autumn: sunset river to illuminated pavilion",
      "desc": "Sol connects sunset, the moonlit pavilion, lanterns and poetry through successive scene changes. DeepSeek retains the broad stage order. MiniMax repeats the city-and-moon composition before introducing a simplified pavilion.",
      "metrics": [
        "NC"
      ],
      "models": [
        {
          "id": "gpt-6-1-sol",
          "name": "GPT-6.1 Sol",
          "rank": "high",
          "video": "assets/case_studies/NC-4/gpt-6-1-sol.mp4",
          "vposter": "assets/case_studies/NC-4/gpt-6-1-sol.poster.jpg",
          "scores": {
            "NC": 5.0
          }
        },
        {
          "id": "deepseek-v4-1-flash",
          "name": "DeepSeek V4.1 Flash",
          "rank": "mid",
          "video": "assets/case_studies/NC-4/deepseek-v4-1-flash.mp4",
          "vposter": "assets/case_studies/NC-4/deepseek-v4-1-flash.poster.jpg",
          "scores": {
            "NC": 3.0
          }
        },
        {
          "id": "minimax-m3",
          "name": "MiniMax M3",
          "rank": "low",
          "video": "assets/case_studies/NC-4/minimax-m3.mp4",
          "vposter": "assets/case_studies/NC-4/minimax-m3.poster.jpg",
          "scores": {
            "NC": 1.0
          }
        }
      ],
      "note": "Full generated videos",
      "label": "Content Coherence-example1",
      "family_key": "hl",
      "family_label": "Holistic Quality",
      "score_source": "Saved holistic judge evidence; 1–5 scale."
    },
    "VE-2": {
      "key": "VE-2",
      "task": "t2v",
      "sample": "b461318919760d7ae4507530",
      "title": "Cosmic future: Earth to final evaporation",
      "desc": "Astra develops varied Earth, eclipse, galaxy and later astronomical scenes. Haiku keeps a simplified but complete progression. GLM has a sparse merger passage and an Earth texture that appears as a rectangular card, weakening the visual reveal.",
      "metrics": [
        "VE"
      ],
      "models": [
        {
          "id": "gpt-6-astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "video": "assets/case_studies/VE-2/gpt-6-astra.mp4",
          "vposter": "assets/case_studies/VE-2/gpt-6-astra.poster.jpg",
          "scores": {
            "VE": 5.0
          }
        },
        {
          "id": "claude-haiku-5-5",
          "name": "Claude Haiku 5.5",
          "rank": "mid",
          "video": "assets/case_studies/VE-2/claude-haiku-5-5.mp4",
          "vposter": "assets/case_studies/VE-2/claude-haiku-5-5.poster.jpg",
          "scores": {
            "VE": 3.0
          }
        },
        {
          "id": "glm-5-3-flash",
          "name": "GLM 5.3 Flash",
          "rank": "low",
          "video": "assets/case_studies/VE-2/glm-5-3-flash.mp4",
          "vposter": "assets/case_studies/VE-2/glm-5-3-flash.poster.jpg",
          "scores": {
            "VE": 2.0
          }
        }
      ],
      "note": "Full generated videos",
      "label": "Viewer Engagement-example1",
      "family_key": "hl",
      "family_label": "Holistic Quality",
      "score_source": "Saved holistic judge evidence; 1–5 scale."
    },
    "VD-1": {
      "key": "VD-1",
      "task": "i2v",
      "sample": "61173ec0e2f7f7b8f979c377",
      "title": "DubStemMix: typography and audio mixer interface",
      "desc": "Opus separates the title, mixer and routing layouts. MiniMax shows a clipped heading and crowded elements. Qwen repeatedly overlays large headings on mixer and waveform content.",
      "metrics": [
        "VD"
      ],
      "models": [
        {
          "id": "claude-opus-5-5",
          "name": "Claude Opus 5.5",
          "rank": "high",
          "video": "assets/case_studies/VD-1/claude-opus-5-5.mp4",
          "vposter": "assets/case_studies/VD-1/claude-opus-5-5.poster.jpg",
          "scores": {
            "VD": 5.0
          }
        },
        {
          "id": "minimax-m3",
          "name": "MiniMax M3",
          "rank": "mid",
          "video": "assets/case_studies/VD-1/minimax-m3.mp4",
          "vposter": "assets/case_studies/VD-1/minimax-m3.poster.jpg",
          "scores": {
            "VD": 2.0
          }
        },
        {
          "id": "qwen3-8-max",
          "name": "Qwen3.8-Max",
          "rank": "low",
          "video": "assets/case_studies/VD-1/qwen3-8-max.mp4",
          "vposter": "assets/case_studies/VD-1/qwen3-8-max.poster.jpg",
          "scores": {
            "VD": 1.0
          }
        }
      ],
      "note": "Full generated videos",
      "label": "Visual Design-example1",
      "family_key": "hl",
      "family_label": "Holistic Quality",
      "score_source": "Saved holistic judge evidence; 1–5 scale."
    },
    "IF-1": {
      "key": "IF-1",
      "task": "v2v",
      "sample": "ff864d9d7f3c73292b530d98",
      "title": "Kinetic promo: app, story, gallery and closing CTA",
      "desc": "Opus covers the opening scenes, Just ask gallery and closing card. MiniMax has a black code-fix interval, unclear gallery dimming and an unverified final click. Sonnet ends at the code scene, omitting the later tunnel, gallery and closing card.",
      "metrics": [
        "IF"
      ],
      "models": [
        {
          "id": "claude-opus-5-5",
          "name": "Claude Opus 5.5",
          "rank": "high",
          "video": "assets/case_studies/IF-1/claude-opus-5-5.mp4",
          "vposter": "assets/case_studies/IF-1/claude-opus-5-5.poster.jpg"
        },
        {
          "id": "minimax-m3",
          "name": "MiniMax M3",
          "rank": "mid",
          "video": "assets/case_studies/IF-1/minimax-m3.mp4",
          "vposter": "assets/case_studies/IF-1/minimax-m3.poster.jpg"
        },
        {
          "id": "claude-sonnet-5-5",
          "name": "Claude Sonnet 5.5",
          "rank": "low",
          "video": "assets/case_studies/IF-1/claude-sonnet-5-5.mp4",
          "vposter": "assets/case_studies/IF-1/claude-sonnet-5-5.poster.jpg"
        }
      ],
      "note": "Full generated videos",
      "input": {
        "type": "checklist",
        "questions": [
          {
            "n": 1,
            "text": "Is the interactive button at the end labeled with the text 'Try it at claude.ai →'?",
            "answers": {
              "claude-opus-5-5": "Yes",
              "minimax-m3": "Yes",
              "claude-sonnet-5-5": "No"
            }
          },
          {
            "n": 2,
            "text": "Is the subtitle text 'Opus 5.5' styled in a red monospace font?",
            "answers": {
              "claude-opus-5-5": "Yes",
              "minimax-m3": "Yes",
              "claude-sonnet-5-5": "No"
            }
          },
          {
            "n": 3,
            "text": "Is the 'Just ask.' card centrally positioned while surrounded by floating vignette cards in the gallery view?",
            "answers": {
              "claude-opus-5-5": "Yes",
              "minimax-m3": "Yes",
              "claude-sonnet-5-5": "No"
            }
          },
          {
            "n": 4,
            "text": "Is the word 'make?' positioned inside an orange pill-shaped badge in the opening title?",
            "answers": {
              "claude-opus-5-5": "Yes",
              "minimax-m3": "Yes",
              "claude-sonnet-5-5": "No"
            }
          },
          {
            "n": 5,
            "text": "Do the floating miniature cards in the gallery view correspond to the earlier showcase vignettes?",
            "answers": {
              "claude-opus-5-5": "Yes",
              "minimax-m3": "Yes",
              "claude-sonnet-5-5": "No"
            }
          },
          {
            "n": 6,
            "text": "Does the final cream-colored card slide upward into the frame to present the brand logotype?",
            "answers": {
              "claude-opus-5-5": "Yes",
              "minimax-m3": "Yes",
              "claude-sonnet-5-5": "No"
            }
          },
          {
            "n": 7,
            "text": "Does a mouse cursor click the 'Try it at claude.ai →' button?",
            "answers": {
              "claude-opus-5-5": "Yes",
              "minimax-m3": "No",
              "claude-sonnet-5-5": "No"
            }
          },
          {
            "n": 8,
            "text": "Does the surrounding array of vignette cards dim when the text 'This ad was made by Claude, from a single prompt.' appears?",
            "answers": {
              "claude-opus-5-5": "Yes",
              "minimax-m3": "No",
              "claude-sonnet-5-5": "No"
            }
          },
          {
            "n": 9,
            "text": "Does the tunnel sequence create a forward-rushing depth perspective with text passing the viewer?",
            "answers": {
              "claude-opus-5-5": "Yes",
              "minimax-m3": "Yes",
              "claude-sonnet-5-5": "No"
            }
          },
          {
            "n": 10,
            "text": "Does the 'Just ask.' card scale back to reveal the gallery layout before the text 'This ad was made by Claude,' fades in?",
            "answers": {
              "claude-opus-5-5": "Yes",
              "minimax-m3": "Yes",
              "claude-sonnet-5-5": "No"
            }
          },
          {
            "n": 11,
            "text": "Does the video feature a modern kinetic typography promo style with modular motion cards?",
            "answers": {
              "claude-opus-5-5": "Yes",
              "minimax-m3": "Yes",
              "claude-sonnet-5-5": "Yes"
            }
          },
          {
            "n": 12,
            "text": "Before the reference clip starts, does the video present the 'an app' smartphone mockup and 'a short story' manuscript vignettes?",
            "answers": {
              "claude-opus-5-5": "Yes",
              "minimax-m3": "Yes",
              "claude-sonnet-5-5": "No"
            }
          },
          {
            "n": 13,
            "text": "Immediately following the reference clip's code editor scene, does the video transition forward into a dark 3D tunnel of rushing typographic labels?",
            "answers": {
              "claude-opus-5-5": "Yes",
              "minimax-m3": "No",
              "claude-sonnet-5-5": "No"
            }
          }
        ]
      },
      "label": "Instruction Following",
      "family_key": "instr",
      "family_label": "Instruction Following"
    },
    "SK-3D-01": {
      "key": "SK-3D-01",
      "task": "i2v",
      "sample": "b791bb668217c187b6e13925",
      "title": "GPU: server rack to atom",
      "label": "Content Coherence-example2",
      "desc": "Qwen-Max covers the rack, GPU, transistor and atom stages. Sol omits some transitions. In Sonnet, later labels return to transistor/GPU/rack while the visible geometry remains an atom array, creating a concrete content-stage mismatch.",
      "metrics": [
        "NC"
      ],
      "models": [
        {
          "id": "qwen_3_8_max",
          "name": "Qwen3.8-Max",
          "scores": {
            "NC": 5.0
          },
          "rank": "high",
          "video": "assets/case_studies/skeuomorphic/3D-01/qwen_3_8_max/video.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-01/qwen_3_8_max/poster.png"
        },
        {
          "id": "gpt_6_1_sol",
          "name": "GPT-6.1 Sol",
          "scores": {
            "NC": 2.0
          },
          "rank": "mid",
          "video": "assets/case_studies/skeuomorphic/3D-01/gpt_6_1_sol/video.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-01/gpt_6_1_sol/poster.png"
        },
        {
          "id": "claude_sonnet_5_5",
          "name": "Claude Sonnet 5.5",
          "scores": {
            "NC": 1.0
          },
          "rank": "low",
          "video": "assets/case_studies/skeuomorphic/3D-01/claude_sonnet_5_5/video.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-01/claude_sonnet_5_5/poster.png"
        }
      ],
      "note": "High / Mid / Low by NC",
      "figures": {
        "png": "assets/case_studies/skeuomorphic/3D-01/3D-01.png",
        "pdf": "assets/case_studies/skeuomorphic/3D-01/3D-01.pdf",
        "svg": "assets/case_studies/skeuomorphic/3D-01/3D-01.svg"
      },
      "source_collection": "skeuomorphic_3d_references",
      "family_key": "hl",
      "family_label": "Holistic Quality",
      "score_source": "Saved holistic judge evidence; 1–5 scale."
    },
    "SK-3D-02": {
      "key": "SK-3D-02",
      "task": "v2v",
      "sample": "d130c5ac8561038df0a085e8",
      "title": "Controller assembly and wiring",
      "label": "Clip Fidelity-example3",
      "desc": "Shell, PCB, wiring terminals and a mounting rail make assembly errors visible.",
      "metrics": [
        "SA",
        "AF",
        "MF"
      ],
      "models": [
        {
          "id": "gpt_6_1_sol",
          "name": "GPT-6.1 Sol",
          "scores": {
            "SA": 0.9544131755828857,
            "AF": 0.7994656165440878,
            "MF": 0.6208502650260925
          },
          "rank": "high",
          "video": "assets/case_studies/skeuomorphic/3D-02/gpt_6_1_sol/matched.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-02/gpt_6_1_sol/poster.png",
          "clip": [
            5.733333333333333,
            8.733333333333333
          ]
        },
        {
          "id": "qwen_3_8_max",
          "name": "Qwen3.8-Max",
          "scores": {
            "SA": 0.9047866463661194,
            "AF": 0.6869982911480798,
            "MF": 0.4772152304649353
          },
          "rank": "mid",
          "video": "assets/case_studies/skeuomorphic/3D-02/qwen_3_8_max/matched.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-02/qwen_3_8_max/poster.png",
          "clip": [
            5.266666666666667,
            6.266666666666667
          ]
        },
        {
          "id": "qwen_3_8_27b",
          "name": "Qwen3.8-27B",
          "scores": {
            "SA": 0.8527622818946838,
            "AF": 0.6087272299660577,
            "MF": 0.3825370669364929
          },
          "rank": "low",
          "video": "assets/case_studies/skeuomorphic/3D-02/qwen_3_8_27b/matched.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-02/qwen_3_8_27b/poster.png",
          "clip": [
            5.733333333333333,
            6.733333333333333
          ]
        }
      ],
      "input": {
        "type": "keyclip",
        "media": "assets/case_studies/skeuomorphic/3D-02/input/keyclip.mp4",
        "vposter": "assets/case_studies/skeuomorphic/3D-02/input/poster.png"
      },
      "note": "High / Mid / Low by SA/AF/MF",
      "figures": {
        "png": "assets/case_studies/skeuomorphic/3D-02/3D-02.png",
        "pdf": "assets/case_studies/skeuomorphic/3D-02/3D-02.pdf",
        "svg": "assets/case_studies/skeuomorphic/3D-02/3D-02.svg"
      },
      "source_collection": "skeuomorphic_3d_references",
      "family_key": "cf",
      "family_label": "Clip Fidelity"
    },
    "SK-3D-05": {
      "key": "SK-3D-05",
      "task": "t2v",
      "sample": "0e657563c06e1b07c9718317",
      "title": "Rainy store diorama (T2V)",
      "label": "Video Quality-example3",
      "desc": "Astra preserves a modeled storefront, vending machines, wet reflections and interior shelves, checkout and floor tiles. Haiku simplifies the shop; Gemini loses much of its structure.",
      "metrics": [
        "AQ",
        "TQ"
      ],
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "scores": {
            "AQ": 4.565042155129569,
            "TQ": 0.12256417603299857
          },
          "rank": "high",
          "video": "assets/case_studies/skeuomorphic/3D-05/gpt_6_astra/video.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-05/gpt_6_astra/poster.png"
        },
        {
          "id": "claude_haiku_5_5",
          "name": "Claude Haiku 5.5",
          "scores": {
            "AQ": 4.240459597110748,
            "TQ": 0.12950590830733155
          },
          "rank": "mid",
          "video": "assets/case_studies/skeuomorphic/3D-05/claude_haiku_5_5/video.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-05/claude_haiku_5_5/poster.png"
        },
        {
          "id": "gemini_3_8_flash",
          "name": "Gemini 3.8 Flash",
          "scores": {
            "AQ": 3.4349598407745363,
            "TQ": 0.10661669619116056
          },
          "rank": "low",
          "video": "assets/case_studies/skeuomorphic/3D-05/gemini_3_8_flash/video.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-05/gemini_3_8_flash/poster.png"
        }
      ],
      "note": "High / Mid / Low by AQ",
      "figures": {
        "png": "assets/case_studies/skeuomorphic/3D-05/3D-05.png",
        "pdf": "assets/case_studies/skeuomorphic/3D-05/3D-05.pdf",
        "svg": "assets/case_studies/skeuomorphic/3D-05/3D-05.svg"
      },
      "source_collection": "skeuomorphic_3d_references",
      "family_key": "vq",
      "family_label": "Video Quality"
    },
    "SK-3D-06": {
      "key": "SK-3D-06",
      "task": "i2v",
      "sample": "22e7dd187282f2e734066f35",
      "title": "ROG laptop and hardware scan",
      "label": "Image Fidelity-example3",
      "desc": "The physical chassis, keyboard, screen and lighting expose differences in product geometry and layout.",
      "metrics": [
        "PF",
        "SF"
      ],
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "scores": {
            "PF": 0.9731407165527344,
            "SF": 0.735188324599141
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-06/gpt_6_astra/canonical.png",
          "canonical_time": 18.266666666666666
        },
        {
          "id": "az_gpt6_luna",
          "name": "GPT-6 Luna",
          "scores": {
            "PF": 0.9420331120491028,
            "SF": 0.630685411687974
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-06/az_gpt6_luna/canonical.png",
          "canonical_time": 33.266666666666666
        },
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "scores": {
            "PF": 0.9015607833862305,
            "SF": 0.6192428532600932
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-06/claude_opus_5_5/canonical.png",
          "canonical_time": 19.266666666666666
        },
        {
          "id": "claude_sonnet_5_5",
          "name": "Claude Sonnet 5.5",
          "scores": {
            "PF": 0.9280311465263367,
            "SF": 0.6877173322866996
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-06/claude_sonnet_5_5/canonical.png",
          "canonical_time": 20.5
        },
        {
          "id": "claude_haiku_5_5",
          "name": "Claude Haiku 5.5",
          "scores": {
            "PF": 0.858034074306488,
            "SF": 0.5217563576740286
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-06/claude_haiku_5_5/canonical.png",
          "canonical_time": 14.0
        },
        {
          "id": "gemini_3_8_flash",
          "name": "Gemini 3.8 Flash",
          "scores": {
            "PF": 0.8787881135940552,
            "SF": 0.4917390148026895
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-06/gemini_3_8_flash/canonical.png",
          "canonical_time": 3.5
        },
        {
          "id": "deepseek_v4_1_flash",
          "name": "DeepSeek V4.1 Flash",
          "scores": {
            "PF": 0.917493462562561,
            "SF": 0.5768104215468639
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-06/deepseek_v4_1_flash/canonical.png",
          "canonical_time": 30.266666666666666
        },
        {
          "id": "glm_5_3_flash",
          "name": "GLM 5.3 Flash",
          "scores": {
            "PF": 0.9363558888435364,
            "SF": 0.5712960915298582
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-06/glm_5_3_flash/canonical.png",
          "canonical_time": 22.5
        },
        {
          "id": "kimi_k3",
          "name": "Kimi K3",
          "scores": {
            "PF": 0.8598145842552185,
            "SF": 0.5197880365093132
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-06/kimi_k3/canonical.png",
          "canonical_time": 20.5
        },
        {
          "id": "mimo_v2_6_pro",
          "name": "MiMo V2.6 Pro",
          "scores": {
            "PF": 0.913454532623291,
            "SF": 0.5634594146842341
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-06/mimo_v2_6_pro/canonical.png",
          "canonical_time": 23.733333333333334
        },
        {
          "id": "qwen_3_8_27b",
          "name": "Qwen3.8-27B",
          "scores": {
            "PF": 0.8993277549743652,
            "SF": 0.5655421133897792
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-06/qwen_3_8_27b/canonical.png",
          "canonical_time": 36.5
        },
        {
          "id": "qwen_3_8_flash",
          "name": "Qwen3.8-Flash",
          "scores": {
            "PF": 0.9122216105461121,
            "SF": 0.38722297951803847
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-06/qwen_3_8_flash/canonical.png",
          "canonical_time": 23.266666666666666
        },
        {
          "id": "gpt_6_1_sol",
          "name": "GPT-6.1 Sol",
          "scores": {},
          "rank": null,
          "unavailable": true
        },
        {
          "id": "minimax_m3",
          "name": "MiniMax M3",
          "scores": {},
          "rank": null,
          "unavailable": true
        },
        {
          "id": "qwen_3_8_max",
          "name": "Qwen3.8-Max",
          "scores": {},
          "rank": null,
          "unavailable": true
        }
      ],
      "input": {
        "type": "keyframe",
        "media": "assets/case_studies/skeuomorphic/3D-06/input/keyframe.png"
      },
      "note": "All Models",
      "figures": {
        "png": "assets/case_studies/skeuomorphic/3D-06/3D-06.png",
        "pdf": "assets/case_studies/skeuomorphic/3D-06/3D-06.pdf",
        "svg": "assets/case_studies/skeuomorphic/3D-06/3D-06.svg"
      },
      "source_collection": "skeuomorphic_3d_references",
      "family_key": "if",
      "family_label": "Image Fidelity"
    },
    "SK-3D-07": {
      "key": "SK-3D-07",
      "task": "t2v",
      "sample": "5790cb10d45b1fbcf248ca0c",
      "title": "Suitcase mountain-town diorama",
      "label": "Video Quality-example4",
      "desc": "A suitcase becomes a mountain city with a tram. Building detail, material shading and layered miniature space give a clear contrast.",
      "metrics": [
        "AQ",
        "TQ"
      ],
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "scores": {
            "AQ": 4.8086731566323175,
            "TQ": 0.13704608204557017
          },
          "rank": "high",
          "video": "assets/case_studies/skeuomorphic/3D-07/gpt_6_astra/video.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-07/gpt_6_astra/poster.png"
        },
        {
          "id": "kimi_k3",
          "name": "Kimi K3",
          "scores": {
            "AQ": 4.340863415173122,
            "TQ": 0.11048144930524643
          },
          "rank": "mid",
          "video": "assets/case_studies/skeuomorphic/3D-07/kimi_k3/video.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-07/kimi_k3/poster.png"
        },
        {
          "id": "gemini_3_8_flash",
          "name": "Gemini 3.8 Flash",
          "scores": {
            "AQ": 3.7549628019332886,
            "TQ": 0.10823893817917439
          },
          "rank": "low",
          "video": "assets/case_studies/skeuomorphic/3D-07/gemini_3_8_flash/video.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-07/gemini_3_8_flash/poster.png"
        }
      ],
      "note": "High / Mid / Low by AQ/TQ",
      "figures": {
        "png": "assets/case_studies/skeuomorphic/3D-07/3D-07.png",
        "pdf": "assets/case_studies/skeuomorphic/3D-07/3D-07.pdf",
        "svg": "assets/case_studies/skeuomorphic/3D-07/3D-07.svg"
      },
      "source_collection": "skeuomorphic_3d_references",
      "family_key": "vq",
      "family_label": "Video Quality"
    },
    "SK-3D-08": {
      "key": "SK-3D-08",
      "task": "t2v",
      "sample": "b791bb668217c187b6e13925",
      "title": "GPU scale journey (T2V)",
      "label": "Video Quality-example5",
      "desc": "Rack, GPU, transistor and atom stages contrast modeled depth with simplified diagrams.",
      "metrics": [
        "TQ",
        "AQ"
      ],
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "scores": {
            "TQ": 0.11615212788564307,
            "AQ": 3.661472499370575
          },
          "rank": "high",
          "video": "assets/case_studies/skeuomorphic/3D-08/gpt_6_astra/video.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-08/gpt_6_astra/poster.png"
        },
        {
          "id": "claude_haiku_5_5",
          "name": "Claude Haiku 5.5",
          "scores": {
            "TQ": 0.10283542031865221,
            "AQ": 3.8672563433647156
          },
          "rank": "mid",
          "video": "assets/case_studies/skeuomorphic/3D-08/claude_haiku_5_5/video.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-08/claude_haiku_5_5/poster.png"
        },
        {
          "id": "claude_sonnet_5_5",
          "name": "Claude Sonnet 5.5",
          "scores": {
            "TQ": 0.0930579918140575,
            "AQ": 3.08570569934267
          },
          "rank": "low",
          "video": "assets/case_studies/skeuomorphic/3D-08/claude_sonnet_5_5/video.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-08/claude_sonnet_5_5/poster.png"
        }
      ],
      "note": "High / Mid / Low by TQ",
      "figures": {
        "png": "assets/case_studies/skeuomorphic/3D-08/3D-08.png",
        "pdf": "assets/case_studies/skeuomorphic/3D-08/3D-08.pdf",
        "svg": "assets/case_studies/skeuomorphic/3D-08/3D-08.svg"
      },
      "source_collection": "skeuomorphic_3d_references",
      "family_key": "vq",
      "family_label": "Video Quality"
    },
    "SK-3D-09": {
      "key": "SK-3D-09",
      "task": "i2v",
      "sample": "db6f1d4deb3e2d17a8c967f1",
      "title": "DualSense controller studio",
      "label": "Image Fidelity-example4",
      "desc": "Curved grips, touchpad, sticks and blue edge lighting make the product silhouette easy to compare.",
      "metrics": [
        "PF",
        "SF"
      ],
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "scores": {
            "PF": 0.9770217537879944,
            "SF": 0.8165056285341663
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-09/gpt_6_astra/canonical.png",
          "canonical_time": 7.5
        },
        {
          "id": "gpt_6_1_sol",
          "name": "GPT-6.1 Sol",
          "scores": {
            "PF": 0.9749350547790527,
            "SF": 0.8018372582642143
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-09/gpt_6_1_sol/canonical.png",
          "canonical_time": 9.0
        },
        {
          "id": "az_gpt6_luna",
          "name": "GPT-6 Luna",
          "scores": {
            "PF": 0.9529517889022827,
            "SF": 0.7865529976665798
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-09/az_gpt6_luna/canonical.png",
          "canonical_time": 4.733333333333333
        },
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "scores": {
            "PF": 0.9574662446975708,
            "SF": 0.7499235064516627
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-09/claude_opus_5_5/canonical.png",
          "canonical_time": 6.733333333333333
        },
        {
          "id": "claude_sonnet_5_5",
          "name": "Claude Sonnet 5.5",
          "scores": {
            "PF": 0.9600081443786621,
            "SF": 0.741244771184714
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-09/claude_sonnet_5_5/canonical.png",
          "canonical_time": 7.5
        },
        {
          "id": "claude_haiku_5_5",
          "name": "Claude Haiku 5.5",
          "scores": {
            "PF": 0.9282141923904419,
            "SF": 0.6067700067361135
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-09/claude_haiku_5_5/canonical.png",
          "canonical_time": 10.266666666666667
        },
        {
          "id": "gemini_3_8_flash",
          "name": "Gemini 3.8 Flash",
          "scores": {
            "PF": 0.881222665309906,
            "SF": 0.6821557610186547
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-09/gemini_3_8_flash/canonical.png",
          "canonical_time": 7.5
        },
        {
          "id": "deepseek_v4_1_flash",
          "name": "DeepSeek V4.1 Flash",
          "scores": {
            "PF": 0.8540546894073486,
            "SF": 0.6427091119708516
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-09/deepseek_v4_1_flash/canonical.png",
          "canonical_time": 9.0
        },
        {
          "id": "glm_5_3_flash",
          "name": "GLM 5.3 Flash",
          "scores": {
            "PF": 0.9266357421875,
            "SF": 0.7124931173584637
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-09/glm_5_3_flash/canonical.png",
          "canonical_time": 6.0
        },
        {
          "id": "kimi_k3",
          "name": "Kimi K3",
          "scores": {
            "PF": 0.9354788064956665,
            "SF": 0.7584793631201752
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-09/kimi_k3/canonical.png",
          "canonical_time": 6.5
        },
        {
          "id": "mimo_v2_6_pro",
          "name": "MiMo V2.6 Pro",
          "scores": {
            "PF": 0.9363308548927307,
            "SF": 0.5608462301330981
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-09/mimo_v2_6_pro/canonical.png",
          "canonical_time": 10.266666666666667
        },
        {
          "id": "qwen_3_8_27b",
          "name": "Qwen3.8-27B",
          "scores": {
            "PF": 0.9215584993362427,
            "SF": 0.6393096917972821
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-09/qwen_3_8_27b/canonical.png",
          "canonical_time": 8.0
        },
        {
          "id": "qwen_3_8_flash",
          "name": "Qwen3.8-Flash",
          "scores": {
            "PF": 0.8943833112716675,
            "SF": 0.6367640000979691
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-09/qwen_3_8_flash/canonical.png",
          "canonical_time": 14.0
        },
        {
          "id": "minimax_m3",
          "name": "MiniMax M3",
          "scores": {},
          "rank": null,
          "unavailable": true
        },
        {
          "id": "qwen_3_8_max",
          "name": "Qwen3.8-Max",
          "scores": {},
          "rank": null,
          "unavailable": true
        }
      ],
      "input": {
        "type": "keyframe",
        "media": "assets/case_studies/skeuomorphic/3D-09/input/keyframe.png"
      },
      "note": "All Models",
      "figures": {
        "png": "assets/case_studies/skeuomorphic/3D-09/3D-09.png",
        "pdf": "assets/case_studies/skeuomorphic/3D-09/3D-09.pdf",
        "svg": "assets/case_studies/skeuomorphic/3D-09/3D-09.svg"
      },
      "source_collection": "skeuomorphic_3d_references",
      "family_key": "if",
      "family_label": "Image Fidelity"
    },
    "SK-3D-10": {
      "key": "SK-3D-10",
      "task": "v2v",
      "sample": "RTA-0380",
      "title": "Procedural city and night lights",
      "label": "Video Quality-example6",
      "desc": "Astra develops road and plot outlines into buildings, adds facade grids and rooftop equipment, then lights the city at night before a point-cloud teardown. Sol retains the city-building stages with less consistent surface detail. Kimi uses simpler blocks with weaker facades and spatial layering.",
      "metrics": [
        "AQ"
      ],
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "rank": "high",
          "scores": {
            "AQ": 4.100671558669119
          },
          "video": "assets/case_studies/skeuomorphic/3D-10/gpt_6_astra/video.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-10/gpt_6_astra/poster.png"
        },
        {
          "id": "gpt_6_1_sol",
          "name": "GPT-6.1 Sol",
          "scores": {
            "AQ": 3.852361276745796
          },
          "rank": "mid",
          "video": "assets/case_studies/skeuomorphic/3D-10/gpt_6_1_sol/video.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-10/gpt_6_1_sol/poster.png"
        },
        {
          "id": "kimi_k3",
          "name": "Kimi K3",
          "scores": {
            "AQ": 2.5348499019940696
          },
          "rank": "low",
          "video": "assets/case_studies/skeuomorphic/3D-10/kimi_k3/video.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-10/kimi_k3/poster.png"
        }
      ],
      "note": "High / Mid / Low by AQ",
      "figures": {
        "png": "assets/case_studies/skeuomorphic/3D-10/3D-10.png",
        "pdf": "assets/case_studies/skeuomorphic/3D-10/3D-10.pdf",
        "svg": "assets/case_studies/skeuomorphic/3D-10/3D-10.svg"
      },
      "source_collection": "skeuomorphic_3d_references",
      "family_key": "vq",
      "family_label": "Video Quality"
    },
    "SK-3D-11": {
      "key": "SK-3D-11",
      "task": "i2v",
      "sample": "youtube_R24_a9c5e2957a7a",
      "title": "Llama and penguins in the snow",
      "label": "Image Fidelity-example5",
      "desc": "A character-scene supplement: compare the llama proportions, penguin group, snow and lighting.",
      "metrics": [
        "PF",
        "SF"
      ],
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "scores": {
            "PF": 0.9080554842948914,
            "SF": 0.37471291832988807
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-11/gpt_6_astra/canonical.png",
          "canonical_time": 96.5
        },
        {
          "id": "gpt_6_1_sol",
          "name": "GPT-6.1 Sol",
          "scores": {
            "PF": 0.861843466758728,
            "SF": 0.2598811603039683
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-11/gpt_6_1_sol/canonical.png",
          "canonical_time": 69.5
        },
        {
          "id": "az_gpt6_luna",
          "name": "GPT-6 Luna",
          "scores": {
            "PF": 0.8227795958518982,
            "SF": 0.3510769213221871
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-11/az_gpt6_luna/canonical.png",
          "canonical_time": 35.266666666666666
        },
        {
          "id": "claude_opus_5_5",
          "name": "Claude Opus 5.5",
          "scores": {
            "PF": 0.8505077362060547,
            "SF": 0.40109183384687913
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-11/claude_opus_5_5/canonical.png",
          "canonical_time": 39.733333333333334
        },
        {
          "id": "claude_sonnet_5_5",
          "name": "Claude Sonnet 5.5",
          "scores": {
            "PF": 0.8297111988067627,
            "SF": 0.38880524387438614
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-11/claude_sonnet_5_5/canonical.png",
          "canonical_time": 28.0
        },
        {
          "id": "claude_haiku_5_5",
          "name": "Claude Haiku 5.5",
          "scores": {
            "PF": 0.7851003408432007,
            "SF": 0.36624881460233333
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-11/claude_haiku_5_5/canonical.png",
          "canonical_time": 17.733333333333334
        },
        {
          "id": "gemini_3_8_flash",
          "name": "Gemini 3.8 Flash",
          "scores": {
            "PF": 0.728052020072937,
            "SF": 0.34712695324916937
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-11/gemini_3_8_flash/canonical.png",
          "canonical_time": 15.5
        },
        {
          "id": "deepseek_v4_1_flash",
          "name": "DeepSeek V4.1 Flash",
          "scores": {
            "PF": 0.7915131449699402,
            "SF": 0.3592710959449612
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-11/deepseek_v4_1_flash/canonical.png",
          "canonical_time": 34.5
        },
        {
          "id": "glm_5_3_flash",
          "name": "GLM 5.3 Flash",
          "scores": {
            "PF": 0.7584607005119324,
            "SF": 0.37946943621512935
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-11/glm_5_3_flash/canonical.png",
          "canonical_time": 34.5
        },
        {
          "id": "kimi_k3",
          "name": "Kimi K3",
          "scores": {
            "PF": 0.7859737873077393,
            "SF": 0.3627847605649938
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-11/kimi_k3/canonical.png",
          "canonical_time": 39.266666666666666
        },
        {
          "id": "mimo_v2_6_pro",
          "name": "MiMo V2.6 Pro",
          "scores": {
            "PF": 0.8152018785476685,
            "SF": 0.35380671781515555
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-11/mimo_v2_6_pro/canonical.png",
          "canonical_time": 89.73333333333333
        },
        {
          "id": "qwen_3_8_27b",
          "name": "Qwen3.8-27B",
          "scores": {
            "PF": 0.753171443939209,
            "SF": 0.3891902271515491
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-11/qwen_3_8_27b/canonical.png",
          "canonical_time": 23.0
        },
        {
          "id": "qwen_3_8_flash",
          "name": "Qwen3.8-Flash",
          "scores": {
            "PF": 0.7251849174499512,
            "SF": 0.3682621782696172
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-11/qwen_3_8_flash/canonical.png",
          "canonical_time": 43.0
        },
        {
          "id": "qwen_3_8_max",
          "name": "Qwen3.8-Max",
          "scores": {
            "PF": 0.8043699264526367,
            "SF": 0.3752038198854828
          },
          "rank": null,
          "poster": "assets/case_studies/skeuomorphic/3D-11/qwen_3_8_max/canonical.png",
          "canonical_time": 43.0
        },
        {
          "id": "minimax_m3",
          "name": "MiniMax M3",
          "scores": {},
          "rank": null,
          "unavailable": true
        }
      ],
      "input": {
        "type": "keyframe",
        "media": "assets/case_studies/skeuomorphic/3D-11/input/keyframe.png"
      },
      "note": "All Models",
      "figures": {
        "png": "assets/case_studies/skeuomorphic/3D-11/3D-11.png",
        "pdf": "assets/case_studies/skeuomorphic/3D-11/3D-11.pdf",
        "svg": "assets/case_studies/skeuomorphic/3D-11/3D-11.svg"
      },
      "source_collection": "skeuomorphic_3d_references",
      "family_key": "if",
      "family_label": "Image Fidelity"
    },
    "SK-3D-13": {
      "key": "SK-3D-13",
      "task": "v2v",
      "sample": "2d66d4538bec657962bd9006",
      "title": "Audi V8 to wagon acceleration",
      "label": "Clip Fidelity-example4",
      "desc": "V8 and twin-turbo diagrams become a wagon outline, then a detailed car with acceleration telemetry. Astra retains the stage progression and vehicle; Kimi simplifies proportions and telemetry; MiniMax stretches the car into an angular shape.",
      "metrics": [
        "SA",
        "AF",
        "MF"
      ],
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "scores": {
            "SA": 0.9768683314323425,
            "AF": 0.9081325319505507,
            "MF": 0.5967167615890503
          },
          "rank": "high",
          "video": "assets/case_studies/skeuomorphic/3D-13/gpt_6_astra/matched.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-13/gpt_6_astra/poster.png",
          "clip": [
            5.266666666666667,
            11.733333333333333
          ]
        },
        {
          "id": "kimi_k3",
          "name": "Kimi K3",
          "scores": {
            "SA": 0.9099647402763367,
            "AF": 0.6844384437654076,
            "MF": 0.5767649412155151
          },
          "rank": "mid",
          "video": "assets/case_studies/skeuomorphic/3D-13/kimi_k3/matched.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-13/kimi_k3/poster.png",
          "clip": [
            9.733333333333333,
            19.266666666666666
          ]
        },
        {
          "id": "minimax_m3",
          "name": "MiniMax M3",
          "scores": {
            "SA": 0.7242196202278137,
            "AF": 0.4979500400608984,
            "MF": 0.47691434621810913
          },
          "rank": "low",
          "video": "assets/case_studies/skeuomorphic/3D-13/minimax_m3/matched.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-13/minimax_m3/poster.png",
          "clip": [
            21.0,
            22.733333333333334
          ]
        }
      ],
      "input": {
        "type": "keyclip",
        "media": "assets/case_studies/skeuomorphic/3D-13/input/keyclip.mp4",
        "vposter": "assets/case_studies/skeuomorphic/3D-13/input/poster.png"
      },
      "note": "High / Mid / Low by SA/AF/MF",
      "figures": {
        "png": "assets/case_studies/skeuomorphic/3D-13/3D-13.png",
        "pdf": "assets/case_studies/skeuomorphic/3D-13/3D-13.pdf",
        "svg": "assets/case_studies/skeuomorphic/3D-13/3D-13.svg"
      },
      "source_collection": "skeuomorphic_3d_references",
      "family_key": "cf",
      "family_label": "Clip Fidelity"
    },
    "SK-3D-14": {
      "key": "SK-3D-14",
      "task": "v2v",
      "sample": "dfe8b01bdc4bc7803065b9e2",
      "title": "VELVET ALIBI: anime and kinetic typography",
      "label": "Clip Fidelity-example5",
      "desc": "A pink-haired operative crosses a neon city, followed by cut-out lyric tiles, radial stripes and a face close-up. Astra retains these stages and a detailed character; Kimi simplifies the character; MiniMax reduces it to an icon-like figure in a partial city passage.",
      "metrics": [
        "SA",
        "AF"
      ],
      "models": [
        {
          "id": "gpt_6_astra",
          "name": "GPT-6 Astra",
          "scores": {
            "SA": 0.8565277457237244,
            "AF": 0.7334559410810471
          },
          "rank": "high",
          "video": "assets/case_studies/skeuomorphic/3D-14/gpt_6_astra/matched.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-14/gpt_6_astra/poster.png",
          "clip": [
            24.5,
            27.266666666666666
          ]
        },
        {
          "id": "kimi_k3",
          "name": "Kimi K3",
          "scores": {
            "SA": 0.7538787722587585,
            "AF": 0.6202402370316642
          },
          "rank": "mid",
          "video": "assets/case_studies/skeuomorphic/3D-14/kimi_k3/matched.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-14/kimi_k3/poster.png",
          "clip": [
            42.0,
            46.733333333333334
          ]
        },
        {
          "id": "minimax_m3",
          "name": "MiniMax M3",
          "scores": {
            "SA": 0.614093005657196,
            "AF": 0.5155817994049617
          },
          "rank": "low",
          "video": "assets/case_studies/skeuomorphic/3D-14/minimax_m3/matched.mp4",
          "vposter": "assets/case_studies/skeuomorphic/3D-14/minimax_m3/poster.png",
          "clip": [
            59.266666666666666,
            60.733333333333334
          ]
        }
      ],
      "input": {
        "type": "keyclip",
        "media": "assets/case_studies/skeuomorphic/3D-14/input/keyclip.mp4",
        "vposter": "assets/case_studies/skeuomorphic/3D-14/input/poster.png"
      },
      "note": "High / Mid / Low by SA/AF",
      "figures": {
        "png": "assets/case_studies/skeuomorphic/3D-14/3D-14.png",
        "pdf": "assets/case_studies/skeuomorphic/3D-14/3D-14.pdf",
        "svg": "assets/case_studies/skeuomorphic/3D-14/3D-14.svg"
      },
      "source_collection": "skeuomorphic_3d_references",
      "family_key": "cf",
      "family_label": "Clip Fidelity"
    },
    "HQ-VD-2": {
      "key": "HQ-VD-2",
      "task": "i2v",
      "sample": "f7a4dac05d2736becb25f061",
      "title": "QuickEmailVerify: UI hierarchy and information density",
      "label": "Visual Design-example2",
      "desc": "GLM separates the outcome cards, bulk-verification panel, API code and integration diagram into readable layouts. Kimi keeps fewer states and a simpler information structure. Qwen repeatedly overlays headings and body text in the white panels, visibly obscuring the content.",
      "metrics": [
        "VD"
      ],
      "models": [
        {
          "id": "glm-5-3-flash",
          "name": "GLM 5.3 Flash",
          "rank": "high",
          "scores": {
            "VD": 5.0
          },
          "video": "assets/case_studies/holistic_additions/VD-2/glm-5-3-flash/video.mp4",
          "vposter": "assets/case_studies/holistic_additions/VD-2/glm-5-3-flash/poster.png"
        },
        {
          "id": "kimi-k3",
          "name": "Kimi K3",
          "rank": "mid",
          "scores": {
            "VD": 3.0
          },
          "video": "assets/case_studies/holistic_additions/VD-2/kimi-k3/video.mp4",
          "vposter": "assets/case_studies/holistic_additions/VD-2/kimi-k3/poster.png"
        },
        {
          "id": "qwen3-8-max",
          "name": "Qwen3.8-Max",
          "rank": "low",
          "scores": {
            "VD": 1.0
          },
          "video": "assets/case_studies/holistic_additions/VD-2/qwen3-8-max/video.mp4",
          "vposter": "assets/case_studies/holistic_additions/VD-2/qwen3-8-max/poster.png"
        }
      ],
      "note": "Full generated videos",
      "source_collection": "holistic_additions",
      "family_key": "hl",
      "family_label": "Holistic Quality",
      "score_source": "Saved holistic judge evidence; 1–5 scale."
    },
    "HQ-VE-1": {
      "key": "HQ-VE-1",
      "task": "t2v",
      "sample": "RTA-0050",
      "title": "Aetheria: television to a living mind-body system",
      "label": "Viewer Engagement-example2",
      "desc": "Sol develops a sequence of reveals from a television to a computing architecture, a human figure and a sunset scene. Sonnet retains these stages with simpler rendering. MiniMax starts with a long sparse opening and later uses thin lines and simplified figures, weakening the build-up and resolution.",
      "metrics": [
        "VE"
      ],
      "models": [
        {
          "id": "gpt-6-1-sol",
          "name": "GPT-6.1 Sol",
          "rank": "high",
          "scores": {
            "VE": 5.0
          },
          "video": "assets/case_studies/holistic_additions/VE-1/gpt-6-1-sol/video.mp4",
          "vposter": "assets/case_studies/holistic_additions/VE-1/gpt-6-1-sol/poster.png"
        },
        {
          "id": "claude-sonnet-5-5",
          "name": "Claude Sonnet 5.5",
          "rank": "mid",
          "scores": {
            "VE": 3.0
          },
          "video": "assets/case_studies/holistic_additions/VE-1/claude-sonnet-5-5/video.mp4",
          "vposter": "assets/case_studies/holistic_additions/VE-1/claude-sonnet-5-5/poster.png"
        },
        {
          "id": "minimax-m3",
          "name": "MiniMax M3",
          "rank": "low",
          "scores": {
            "VE": 1.0
          },
          "video": "assets/case_studies/holistic_additions/VE-1/minimax-m3/video.mp4",
          "vposter": "assets/case_studies/holistic_additions/VE-1/minimax-m3/poster.png"
        }
      ],
      "note": "Full generated videos",
      "source_collection": "holistic_additions",
      "family_key": "hl",
      "family_label": "Holistic Quality",
      "score_source": "Saved holistic judge evidence; 1–5 scale."
    }
  }
};
