window.C2V_CASES = {
 "families": [
  {
   "key": "vq",
   "label": "Video Quality",
   "metric": "Video Quality",
   "cases": [
    "VQ-3",
    "VQ-4"
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
    "I2V-2"
   ]
  },
  {
   "key": "cf",
   "label": "Clip Fidelity · V2V",
   "metric": "Clip Fidelity",
   "cases": [
    "V2V-1",
    "V2V-2"
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
    "VD-1",
    "MT-1",
    "MT-2",
    "VE-2"
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
   "label": "Image Fidelity-example1"
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
   "label": "Image Fidelity-example2"
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
   "label": "Clip Fidelity-example1"
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
   "label": "Clip Fidelity-example2"
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
   "label": "Video Quality-example1"
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
   "label": "Video Quality-example2"
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
   "input": {
    "type": "annotated-prompt",
    "prompt": "An educational hand-drawn motion graphics timeline traces the evolution of large language models on a light beige textured ground. Prior to the reference clip, the animation covers the introduction of token prediction, the 2017 Transformer attention mechanism, the hatching of the speech-bubble mascot in GPT-1, staged safety releases in GPT-2, massive parameter scaling in GPT-3, RLHF alignment in InstructGPT, ChatGPT's multi-task chat explosion, GPT-4's browser demo, and GPT-4o's real-time sensory circles.\n\nThe animation then transitions into the dynamic sequence shown in the reference clip: at milestone \"o1 2024.9.12\", a thought cloud appears above the green mascot's head under the heading \"Think first, answer second\". The cloud rapidly expands, filling the frame with a dark navy grid background. At the top right, a stopwatch indicator counts upward (\"Thought for 0 s\" up to \"Thought for 8 s\"). Sketched white chalk diagrams and handwritten equations solve the classic word problem step by step: \"A bat and a ball cost 1.10 in total; the bat costs 1 more than the ball. What does the ball cost?\", rejecting the intuitive \"Intuition: 0.10?\" and working through \"x + (x+1) = 1.10 -> x = 0.05\" until \"Ball = 0.05\" is circled in yellow.\n\nFollowing this clip, the thought window snaps back into the cloud as the mascot pops back onto the main timeline cheerfully shouting \"The ball is five cents!\". The journey proceeds into GPT-5's routing system merging fast and slow thinkers, a rapid sequence of version updates (GPT-5.1 through GPT-5.6) flashing across the timeline, and concludes under a starry twilight gradient sky for GPT-6 Astra, typing the final line \"The next word is still being written.\".",
    "spans": [
     {
      "t": "An educational hand-drawn motion graphics timeline traces the evolution of large language models on a light beige textured ground. ",
      "m": []
     },
     {
      "t": "Prior to the reference clip, the animation covers the introduction of token prediction, the 2017 Transformer attention mechanism, the hatching of the speech-bubble mascot in GPT-1, staged safety releases in GPT-2, massive parameter scaling in GPT-3, RLHF alignment in InstructGPT, ChatGPT's multi-task chat explosion, GPT-4's browser demo, and GPT-4o's real-time sensory circles.",
      "m": [
       "M1",
       "T1"
      ]
     },
     {
      "t": "\n\nThe animation then transitions into the dynamic sequence shown in the reference clip: at milestone \"o1 2024.9.12\", a thought cloud appears above the green mascot's head under the heading \"Think first, answer second\". The cloud rapidly expands, filling the frame with a dark navy grid background. At the top right, a stopwatch indicator counts upward (\"Thought for 0 s\" up to \"Thought for 8 s\"). Sketched white chalk diagrams and handwritten equations solve the classic word problem step by step: \"A bat and a ball cost 1.10 in total; the bat costs 1 more than the ball. What does the ball cost?\", rejecting the intuitive \"Intuition: 0.10?\" and working through \"x + (x+1) = 1.10 -> x = 0.05\" until \"Ball = 0.05\" is circled in yellow.\n\n",
      "m": []
     },
     {
      "t": "Following this clip, the thought window snaps back into the cloud as the mascot pops back onto the main timeline cheerfully shouting \"The ball is five cents!\". The journey proceeds into GPT-5's routing system merging fast and slow thinkers, a rapid sequence of version updates (GPT-5.1 through GPT-5.6) flashing across the timeline, and concludes under a starry twilight gradient sky for GPT-6 Astra, typing the final line \"The next word is still being written.",
      "m": [
       "T2"
      ]
     },
     {
      "t": "\".",
      "m": []
     }
    ],
    "marks": [
     {
      "start": 131,
      "end": 510,
      "severity": "missing",
      "id": "T1",
      "rank": "low",
      "note": "Low output concentrates on the reasoning segment; the early-milestone narrative before it (token prediction, Transformer, GPT-1 to GPT-4o) is not covered. The mid tier also covers this part less completely.",
      "short": "early milestones before the clip (token prediction → GPT-4o) are missing",
      "questions": []
     },
     {
      "start": 131,
      "end": 510,
      "severity": "partial",
      "id": "M1",
      "rank": "mid",
      "note": "The mid output begins at the reasoning stage and retains later milestones; the earlier token-prediction-to-GPT-4o sequence is not shown.",
      "short": "the earlier timeline is omitted; later milestones are retained",
      "questions": []
     },
     {
      "start": 1246,
      "end": 1707,
      "severity": "missing",
      "id": "T2",
      "rank": "low",
      "note": "The closing GPT-5 routing and GPT-6 Astra stages after the reference segment are not covered by the low output.",
      "short": "the GPT-5 routing and GPT-6 finale after the clip are missing",
      "questions": []
     }
    ],
    "legend": {
     "red": "missing from the Low model's video",
     "yellow": "incomplete in the Mid model's video"
    }
   },
   "note": "Full generated videos",
   "label": "Text Alignment-example1"
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
   "input": {
    "type": "annotated-prompt",
    "prompt": "A motion design showreel tracing the technical evolution from 2D animation foundations to 3D procedural and kinetic motion. The animation commences on a minimal white drafting canvas with a 2D spacing chart and dashed arc tracking a blue sphere's acceleration and deceleration, leading into an electric blue title sequence for 'CLAUDE' with textured background typography. A bouncing ball breakdown follows with explicit squash and stretch deformation accompanied by colorful hand-drawn callout annotations, leading to the phrase 'I MAKE THINGS MOVE' and a rhythmic barrage of typographic animations for 'BOUNCE', 'STRETCH', 'SPIN', and 'SNAP'. A curve editor UI then details the difference between linear motion and ease-in-out interpolation using interactive timeline scrubber controls.\n\nThe animation then reproduces the exact behavior of the reference clip: an overhead dotted ring rapidly fills clockwise with blue dots as a numerical percentage counts from 12% to 100% next to bold black '2D' text annotated in red cursive with '(for now.)'. Upon reaching 100%, the viewpoint tilts downwards into dramatic 3D perspective, extruding the dotted ring into a procedural circular wave of tall blue cylindrical pillars that oscillate up and down like an audio visualizer. In the center, the blue sphere bounces with onion-skin trajectory rings, while the bold typography flips into extruded '3D' block letters and the camera orbits smoothly around the circular array following a curved floor guide labeled 'orbit'.\n\nContinuing past the reference clip, the scene shifts to an extruded 3D phrase 'I MAKE THINGS MOVE' toppling onto a perspective grid as a camera dolly zoom warps spatial perspective with an FoV counter rising from 28° to 80°. The scene opens into a vast procedural terrain of black dots undulating in ripples around the bouncing sphere, transitioning through an expansive radial particle vortex. Quick-cut 3D kinetic typography showcases 'BOUNCE', 'STRETCH', 'SPIN', and 'SNAP' interacting dynamically with dimensional grids. Finally, heavy 3D beveled letters spelling 'CLAUDE' land upright on a clean studio floor, alongside the bouncing blue sphere, an animated cursive subtitle 'motion designer', and a playful red call-to-action arrow reading '(hire me.)'.",
    "spans": [
     {
      "t": "A motion design showreel tracing the technical evolution from 2D animation foundations to 3D procedural and kinetic motion. ",
      "m": []
     },
     {
      "t": "The animation commences on a minimal white drafting canvas with a 2D spacing chart and dashed arc tracking a blue sphere's acceleration and deceleration, leading into an electric blue title sequence for 'CLAUDE' with textured background typography. A bouncing ball breakdown follows with explicit squash and stretch deformation accompanied by colorful hand-drawn callout annotations, leading to the phrase 'I MAKE THINGS MOVE' and a rhythmic barrage of typographic animations for 'BOUNCE', 'STRETCH', 'SPIN', and 'SNAP'.",
      "m": [
       "T1"
      ]
     },
     {
      "t": " ",
      "m": []
     },
     {
      "t": "A curve editor UI then details the difference between linear motion and ease-in-out interpolation using interactive timeline scrubber controls.",
      "m": [
       "T2"
      ]
     },
     {
      "t": "\n\nThe animation then reproduces the exact behavior of the reference clip: an overhead dotted ring rapidly fills clockwise with blue dots as a numerical percentage counts from 12% to 100% next to bold black '2D' text annotated in red cursive with '(for now.)'. Upon reaching 100%, the viewpoint tilts downwards into dramatic 3D perspective, extruding the dotted ring into ",
      "m": []
     },
     {
      "t": "a procedural circular wave of tall blue cylindrical pillars that oscillate up and down like an audio visualizer",
      "m": [
       "T4"
      ]
     },
     {
      "t": ". In the center, the blue sphere bounces with onion-skin trajectory rings, while the bold typography flips into extruded '3D' block letters and the camera orbits smoothly around the circular array following a curved floor guide labeled 'orbit'.\n\n",
      "m": []
     },
     {
      "t": "Continuing past the reference clip, the scene shifts to an extruded 3D phrase 'I MAKE THINGS MOVE' toppling onto a perspective grid as a camera dolly zoom warps spatial perspective with an FoV counter rising from 28° to 80°. The scene opens into a vast procedural terrain of black dots undulating in ripples around the bouncing sphere, transitioning through an expansive radial particle vortex. Quick-cut 3D kinetic typography showcases 'BOUNCE', 'STRETCH', 'SPIN', and 'SNAP' interacting dynamically with dimensional grids. Finally, ",
      "m": [
       "T3"
      ]
     },
     {
      "t": "heavy 3D beveled letters spelling 'CLAUDE'",
      "m": [
       "T3",
       "T5"
      ]
     },
     {
      "t": " land upright on a clean studio floor, alongside the bouncing blue sphere, an animated cursive subtitle 'motion designer', and a playful red call-to-action arrow reading '(hire me.)",
      "m": [
       "T3"
      ]
     },
     {
      "t": "'.",
      "m": []
     }
    ],
    "marks": [
     {
      "start": 124,
      "end": 644,
      "severity": "missing",
      "id": "T1",
      "rank": "low",
      "note": "Low output skips the 2D foundations: drafting canvas, spacing chart, CLAUDE title and the bouncing-ball breakdown.",
      "short": "2D foundations — spacing chart, CLAUDE title, bouncing ball — are missing",
      "questions": []
     },
     {
      "start": 645,
      "end": 788,
      "severity": "missing",
      "id": "T2",
      "rank": "low",
      "note": "The curve-editor segment on interpolation is not covered.",
      "short": "the curve-editor interpolation segment is missing",
      "questions": []
     },
     {
      "start": 1516,
      "end": 2273,
      "severity": "missing",
      "id": "T3",
      "rank": "low",
      "note": "The closing 3D kinetic typography, terrain, vortex and branding segments after the reference clip are not covered.",
      "short": "the closing 3D act — typography, terrain, vortex, branding — is missing",
      "questions": []
     },
     {
      "start": 1159,
      "end": 1270,
      "severity": "partial",
      "id": "T4",
      "rank": "mid",
      "note": "Mid shows oscillating blue strokes arranged in a ring; the cylindrical volume of the requested pillars is not clearly visible.",
      "short": "the oscillating ring is present, but cylindrical pillar volume is unclear",
      "questions": [],
      "evidence_times_s": [
       13,
       15,
       16
      ]
     },
     {
      "start": 2050,
      "end": 2092,
      "severity": "partial",
      "id": "T5",
      "rank": "mid",
      "note": "Mid shows flat-faced closing letters with blue offset depth; the requested beveled edges are not clearly visible.",
      "short": "the closing letters show offset depth, but no clear beveled edges",
      "questions": [],
      "evidence_times_s": [
       29,
       30
      ]
     }
    ],
    "legend": {
     "red": "missing from the Low model's video",
     "yellow": "incomplete in the Mid model's video"
    }
   },
   "note": "Full generated videos",
   "label": "Text Alignment-example2"
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
     "vposter": "assets/case_studies/MT-1/claude-haiku-5-5.poster.jpg"
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
     "vposter": "assets/case_studies/MT-1/minimax-m3.poster.jpg"
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
     "vposter": "assets/case_studies/MT-1/gemini-3-8-flash.poster.jpg"
    }
   ],
   "note": "Motion excerpts",
   "label": "Motion Quality-example1"
  },
  "MT-2": {
   "key": "MT-2",
   "task": "v2v",
   "sample": "RTA-0381",
   "title": "Turbulent liquid: surface deformation and dispersed micro-droplets",
   "desc": "Astra shows detailed fluid-like surface changes and a close camera view. Opus shows a smoother deforming blob; MiniMax shows large rounded lobes with changing shape and orientation.",
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
     "vposter": "assets/case_studies/MT-2/gpt-6-astra.poster.jpg"
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
     "vposter": "assets/case_studies/MT-2/claude-opus-5-5.poster.jpg"
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
     "vposter": "assets/case_studies/MT-2/minimax-m3.poster.jpg"
    }
   ],
   "note": "Motion excerpts",
   "label": "Motion Quality-example2"
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
     "vposter": "assets/case_studies/NC-4/gpt-6-1-sol.poster.jpg"
    },
    {
     "id": "deepseek-v4-1-flash",
     "name": "DeepSeek V4.1 Flash",
     "rank": "mid",
     "video": "assets/case_studies/NC-4/deepseek-v4-1-flash.mp4",
     "vposter": "assets/case_studies/NC-4/deepseek-v4-1-flash.poster.jpg"
    },
    {
     "id": "minimax-m3",
     "name": "MiniMax M3",
     "rank": "low",
     "video": "assets/case_studies/NC-4/minimax-m3.mp4",
     "vposter": "assets/case_studies/NC-4/minimax-m3.poster.jpg"
    }
   ],
   "note": "Full generated videos",
   "label": "Content Coherence"
  },
  "VE-2": {
   "key": "VE-2",
   "task": "t2v",
   "sample": "b461318919760d7ae4507530",
   "title": "Cosmic future: Earth to final evaporation",
   "desc": "Astra varies the presentation across Earth, eclipse, galaxy and later astronomical scenes. Haiku presents the journey schematically. GLM includes empty passages and a visibly banded Earth near the end.",
   "metrics": [
    "VE"
   ],
   "models": [
    {
     "id": "gpt-6-astra",
     "name": "GPT-6 Astra",
     "rank": "high",
     "video": "assets/case_studies/VE-2/gpt-6-astra.mp4",
     "vposter": "assets/case_studies/VE-2/gpt-6-astra.poster.jpg"
    },
    {
     "id": "claude-haiku-5-5",
     "name": "Claude Haiku 5.5",
     "rank": "mid",
     "video": "assets/case_studies/VE-2/claude-haiku-5-5.mp4",
     "vposter": "assets/case_studies/VE-2/claude-haiku-5-5.poster.jpg"
    },
    {
     "id": "glm-5-3-flash",
     "name": "GLM 5.3 Flash",
     "rank": "low",
     "video": "assets/case_studies/VE-2/glm-5-3-flash.mp4",
     "vposter": "assets/case_studies/VE-2/glm-5-3-flash.poster.jpg"
    }
   ],
   "note": "Full generated videos",
   "label": "Viewer Engagement"
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
     "vposter": "assets/case_studies/VD-1/claude-opus-5-5.poster.jpg"
    },
    {
     "id": "minimax-m3",
     "name": "MiniMax M3",
     "rank": "mid",
     "video": "assets/case_studies/VD-1/minimax-m3.mp4",
     "vposter": "assets/case_studies/VD-1/minimax-m3.poster.jpg"
    },
    {
     "id": "qwen3-8-max",
     "name": "Qwen3.8-Max",
     "rank": "low",
     "video": "assets/case_studies/VD-1/qwen3-8-max.mp4",
     "vposter": "assets/case_studies/VD-1/qwen3-8-max.poster.jpg"
    }
   ],
   "note": "Full generated videos",
   "label": "Visual Design"
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
    ],
    "prompt": "Create a kinetic typography and brand promo video featuring diverse rapid product demonstrations, matching the visual styles, kinetic pacing, and UI behaviors shown in the reference clip. Before the clip begins, the promo starts on an off-white background with colorful accents spelling out 'What do you want to make?', where 'make?' is highlighted in an orange pill container. Expanding concentric circles transition the scene into a bright blue frame labeled 'an app', featuring a mobile phone mockup with popping notification badges, followed by a yellow backdrop labeled 'a short story' showing a classic manuscript page titled 'Chapter One'. The animation then seamlessly incorporates the dynamic sequence seen in the reference clip: sliding into a dark green grid showing 'a business plan' where bar chart columns rise under a bouncing coin token; transitioning to an orange retro arcade game labeled 'a game' where an invader explodes into yellow pixel particles upon being hit; wiping to a soft peach screen labeled 'a website' with a clickable browser mockup; and transitioning into a dark code editor labeled 'that 2 a.m. bug fix' where a loop bug in JavaScript is corrected and verified with green checklist items. Following the reference clip, typographic labels rush past the camera through a 3D dark tunnel before settling on an expanding cream card reading 'Just ask.'. This card scales back to reveal an aggregated constellation of the previous scenario cards arranged around it. The background cards dim as text appears stating 'This ad was made by Claude, from a single prompt.' in mixed sans-serif and gold serif styling. Finally, a large rounded cream card slides up to center stage, displaying the bold black 'Claude' branding, 'Opus 5.5' in red monospace font, and a black call-to-action button 'Try it at claude.ai →' that receives an interactive cursor click.",
    "spans": [
     {
      "t": "Create a kinetic typography and brand promo video featuring diverse rapid product demonstrations, matching the visual styles, kinetic pacing, and UI behaviors shown in the reference clip. ",
      "m": []
     },
     {
      "t": "Before the clip begins, the promo starts on an off-white background with colorful accents spelling out 'What do you want to make?', where 'make?' is highlighted in an orange pill container.",
      "m": [
       "L1"
      ]
     },
     {
      "t": " ",
      "m": []
     },
     {
      "t": "Expanding concentric circles transition the scene into a bright blue frame labeled 'an app', featuring a mobile phone mockup with popping notification badges, followed by a yellow backdrop labeled 'a short story' showing a classic manuscript page titled 'Chapter One'.",
      "m": [
       "L2"
      ]
     },
     {
      "t": " The animation then seamlessly incorporates the dynamic sequence seen in the reference clip: sliding into a dark green grid showing 'a business plan' where bar chart columns rise under a bouncing coin token; transitioning to an orange retro arcade game labeled 'a game' where an invader explodes into yellow pixel particles upon being hit; wiping to a soft peach screen labeled 'a website' with a clickable browser mockup; ",
      "m": []
     },
     {
      "t": "and transitioning into a dark code editor labeled 'that 2 a.m. bug fix' where a loop bug in JavaScript is corrected and verified with green checklist items.",
      "m": [
       "M1"
      ]
     },
     {
      "t": " ",
      "m": []
     },
     {
      "t": "Following the reference clip,",
      "m": [
       "L3",
       "M2"
      ]
     },
     {
      "t": " typographic labels rush past the camera through a 3D dark tunnel before settling on an expanding cream card reading 'Just ask.'.",
      "m": [
       "L3"
      ]
     },
     {
      "t": " ",
      "m": []
     },
     {
      "t": "This card scales back to reveal an aggregated constellation of the previous scenario cards arranged around it.",
      "m": [
       "L4"
      ]
     },
     {
      "t": " ",
      "m": []
     },
     {
      "t": "The background cards dim",
      "m": [
       "L5",
       "M3"
      ]
     },
     {
      "t": " as text appears stating 'This ad was made by Claude, from a single prompt.' in mixed sans-serif and gold serif styling.",
      "m": [
       "L5"
      ]
     },
     {
      "t": " ",
      "m": []
     },
     {
      "t": "Finally, a large rounded cream card slides up to center stage, displaying the bold black 'Claude' branding, 'Opus 5.5' in red monospace font, and a black call-to-action button 'Try it at claude.ai →' that receives an ",
      "m": [
       "L6"
      ]
     },
     {
      "t": "interactive cursor click",
      "m": [
       "L6",
       "M4"
      ]
     },
     {
      "t": ".",
      "m": [
       "L6"
      ]
     }
    ],
    "marks": [
     {
      "id": "L1",
      "severity": "missing",
      "start": 188,
      "end": 377,
      "note": "Opening question and orange make? badge are absent.",
      "rank": "low",
      "short": "Opening question and orange make? badge are absent.",
      "questions": [
       4
      ],
      "evidence_times_s": [
       0,
       0.5,
       1,
       1.5
      ]
     },
     {
      "id": "L2",
      "severity": "missing",
      "start": 378,
      "end": 646,
      "note": "The smartphone and manuscript lead-in is not shown.",
      "rank": "low",
      "short": "The smartphone and manuscript lead-in is not shown.",
      "questions": [
       12
      ],
      "evidence_times_s": [
       0,
       0.5,
       1,
       1.5
      ]
     },
     {
      "id": "L3",
      "severity": "missing",
      "start": 1226,
      "end": 1384,
      "note": "The output ends in the code scene; tunnel and Just ask stage are absent.",
      "rank": "low",
      "short": "The output ends in the code scene; tunnel and Just ask stage are absent.",
      "questions": [
       3,
       9,
       13
      ],
      "evidence_times_s": [
       8.3,
       9.3,
       10.3,
       11.7
      ]
     },
     {
      "id": "L4",
      "severity": "missing",
      "start": 1385,
      "end": 1495,
      "note": "No central-card shrink/reveal or surrounding gallery.",
      "rank": "low",
      "short": "No central-card shrink/reveal or surrounding gallery.",
      "questions": [
       3,
       5,
       10
      ],
      "evidence_times_s": [
       9,
       10,
       11,
       11.7
      ]
     },
     {
      "id": "L5",
      "severity": "missing",
      "start": 1496,
      "end": 1640,
      "note": "Gallery dimming and the specified explanatory sentence are absent.",
      "rank": "low",
      "short": "Gallery dimming and the specified explanatory sentence are absent.",
      "questions": [
       8,
       10
      ],
      "evidence_times_s": [
       9,
       10,
       11,
       11.7
      ]
     },
     {
      "id": "L6",
      "severity": "missing",
      "start": 1641,
      "end": 1883,
      "note": "Closing card, brand subtitle, CTA and its click are absent.",
      "rank": "low",
      "short": "Closing card, brand subtitle, CTA and its click are absent.",
      "questions": [
       1,
       2,
       6,
       7
      ],
      "evidence_times_s": [
       9,
       10,
       11,
       11.7
      ]
     },
     {
      "id": "M1",
      "severity": "missing",
      "start": 1069,
      "end": 1225,
      "note": "The required code-fix scene is not visible; black frames follow the website.",
      "rank": "mid",
      "short": "The required code-fix scene is not visible; black frames follow the website.",
      "questions": [
       13
      ],
      "evidence_times_s": [
       26.8,
       28.8,
       31.8,
       32.9
      ]
     },
     {
      "id": "M2",
      "severity": "partial",
      "start": 1226,
      "end": 1255,
      "note": "Tunnel exists, but the required code-scene-to-tunnel continuity is not established.",
      "rank": "mid",
      "short": "Tunnel exists, but the required code-scene-to-tunnel continuity is not established.",
      "questions": [
       13
      ],
      "evidence_times_s": [
       26.8,
       28.8,
       31.8,
       32.9
      ]
     },
     {
      "id": "M3",
      "severity": "partial",
      "start": 1496,
      "end": 1520,
      "note": "Gallery and sentence exist, but the surrounding cards do not visibly dim together.",
      "rank": "mid",
      "short": "Gallery and sentence exist, but the surrounding cards do not visibly dim together.",
      "questions": [
       8
      ],
      "evidence_times_s": [
       33.6,
       34,
       34.4,
       35
      ]
     },
     {
      "id": "M4",
      "severity": "partial",
      "start": 1858,
      "end": 1882,
      "note": "Button and cursor exist; a visible click/pressed-state response is not verified.",
      "rank": "mid",
      "short": "Button and cursor exist; a visible click/pressed-state response is not verified.",
      "questions": [
       7
      ],
      "evidence_times_s": [
       35.5,
       35.6666666667,
       35.8,
       35.9666666667
      ]
     }
    ],
    "legend": {
     "red": "missing from the Low model's video",
     "yellow": "incomplete in the Mid model's video"
    }
   },
   "label": "Instruction Following"
  }
 }
};
