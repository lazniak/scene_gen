https://replicate.com/kwaivgi/kling-v2.5-turbo-pro/api

## Basic model info

Model name: kwaivgi/kling-v2.5-turbo-pro
Model description: Kling 2.5 Turbo Pro: Unlock pro-level text-to-video and image-to-video creation with smooth motion, cinematic depth, and remarkable prompt adherence.


## Model inputs

- aspect_ratio (optional): Aspect ratio of the video. Ignored if start_image is provided. (string)
- duration (optional): Duration of the video in seconds (integer)
- image (optional): Deprecated: Use start_image instead. (string)
- prompt (required): Text prompt for video generation (string)
- start_image (optional): First frame of the video (string)
- negative_prompt (optional): Things you do not want to see in the video (string)


## Model output schema

{
  "type": "string",
  "title": "Output",
  "format": "uri"
}

If the input or output schema includes a format of URI, it is referring to a file.


## Example inputs and outputs

Use these example outputs to better understand the types of inputs the model accepts, and the types of outputs the model returns:

### Example (https://replicate.com/p/75wknmxbfnrme0csg84vagt5qr)

#### Input

```json
{
  "prompt": "a woman is dancing",
  "duration": 5,
  "aspect_ratio": "16:9",
  "guidance_scale": 0.5
}
```

#### Output

```json
"https://replicate.delivery/xezq/17c3JG1SzH6NCduMiKp1Cxyqvpad0GXRf507Pqq5GOqNsZsKA/tmpg4w3kyjz.mp4"
```


### Example (https://replicate.com/p/zz6r0wtn61rma0csg8tr2qnnew)

#### Input

```json
{
  "image": "https://replicate.delivery/pbxt/NmA3RGnKCecr9sJH8yREBWdqKvka91xFfc9mAhxrreYmJClz/man-in-rain.jpeg",
  "prompt": "A man in a trench coat holding a black umbrella walks briskly through the streets of Tokyo on a rainy night, splashing through puddles. A handheld follow-cam shot from his side and slightly behind. The focus is locked on the man, while background neon signs blur into beautiful bokeh. Cyberpunk aesthetic with a film noir quality; the mood is mysterious and lonely. The pavement is slick and wet, reflecting the vibrant neon signs. Individual raindrops are visible, and a light fog hangs in the air.",
  "duration": 5,
  "aspect_ratio": "16:9",
  "guidance_scale": 0.5
}
```

#### Output

```json
"https://replicate.delivery/xezq/ssJoLMbvdLIgIRdWaDY26XEmUJmQfH1Af6He1Z2XHLtqIoxqA/tmpp3vqjumh.mp4"
```


### Example (https://replicate.com/p/gq20bdaybdrm80csg8wbd5vst8)

#### Input

```json
{
  "prompt": "Prompt: Real-time playback. Wide shot of a ruined city: collapsed towers, fires blazing, storm clouds with lightning. Camera drops fast from the sky over burning streets and tilted buildings. Smoke and dust fill the air. A lone hero walks out of the ruins, silhouetted by fire. Camera shifts front: his face is dirty with dust and sweat, eyes firm, a faint smile. Wind blows, debris rises. Extreme close-up: his eyes reflect the approaching enemy. Music and drums hit. Final wide shot: fire forms a blazing halo behind him - reborn in flames with epic cinematic vibe.",
  "duration": 5,
  "aspect_ratio": "16:9",
  "guidance_scale": 0.5
}
```

#### Output

```json
"https://replicate.delivery/xezq/Fez1ZQegP1tyC0f18Qr1WyVpVeGWEYS0GPemdGCI9ayvDhGrC/tmp4s6vgmpf.mp4"
```


### Example (https://replicate.com/p/2xywa79ve9rme0csg909tg18h8)

#### Input

```json
{
  "prompt": "A woman doing an impressive breakdancing performance, including flips and intense spins. The camera is aggressive, precise moves with speed, ramps, and whip-like acceleration and deceleration.",
  "duration": 5,
  "aspect_ratio": "16:9",
  "guidance_scale": 0.5
}
```

#### Output

```json
"https://replicate.delivery/xezq/EnlmUfQrjDTzGaMakDffU94SfsNnrSIcGdK9AlRGi0uDBRjVB/tmptifj8gul.mp4"
```


### Example (https://replicate.com/p/a91f3sfp3drmc0csg9bry7rg34)

#### Input

```json
{
  "prompt": "A skilled parkour athlete sprints through the city, leaping and doing many flips over urban obstacles. FPV tracking shot, swoops and banks with him.",
  "duration": 5,
  "aspect_ratio": "16:9",
  "guidance_scale": 0.5
}
```

#### Output

```json
"https://replicate.delivery/xezq/Lzq3zWbgAH7vCRFyf7xef9AEqfNOK1fYk2ZJfprfEdHaZUasKA/tmpmpzrg66r.mp4"
```


## Model readme

> # Kling 2.5 Turbo Pro (Image-to-Video)
> 
> Kling 2.5 Turbo Pro turns a single image and prompt into cinematic video with fluid motion and exact intent. A new text-timing engine, improved dynamics, and faster inference enable high-speed action and complex camera moves with stable frames, while refined conditioning preserves palette, lighting, and mood.
> 
> ## What makes it stand out?
> 
> * Better prompt understanding:
> 
> Precisely parses multi-step, causal instructions and transforms a single image and prompt into coherent, well-paced shots that remain true to the creative intent.
> 
> * More realistic look & greater stability:
> 
> Improved dynamics and balanced data closely mimic real-world motion, even at high speeds and with complex camera movements. Playback remains smooth with reduced jitters, tears, and drops.
> 
> * Detail & style consistency:
> 
> Refined image conditioning and intensive training maintain color, lighting, brushwork, and mood, ensuring frames are visually unified even during complex motion.
> 
> ## Designed For
> 
> * Marketing & Brand Teams – Style-consistent ads, feature demos, and campaign assets.
> * Creators / YouTubers / Shorts Teams – Stronger narrative flow and motion that boosts watch-through.
> * Film/Animation Studios – Previz, technique exploration, and style studies with reliable dynamics.
> * Education & Training – Turn static diagrams or slides into clear explainer videos.

----------------------------

https://replicate.com/wan-video/wan-2.5-i2v-fast/api

## Basic model info

Model name: wan-video/wan-2.5-i2v-fast
Model description: Wan 2.5 image-to-video, optimized for speed


## Model inputs

- resolution (optional): Video resolution (string)
- duration (optional): Duration of the generated video in seconds (integer)
- seed (optional): Random seed for reproducible generation (integer)
- audio (optional): Audio file (wav/mp3, 3-30s, ≤15MB) for voice/music synchronization (string)
- image (required): Input image for video generation (string)
- prompt (required): Text prompt for video generation (string)
- negative_prompt (optional): Negative prompt to avoid certain elements (string)
- enable_prompt_expansion (optional): If set to true, the prompt optimizer will be enabled (boolean)


## Model output schema

{
  "type": "string",
  "title": "Output",
  "format": "uri"
}

If the input or output schema includes a format of URI, it is referring to a file.


## Example inputs and outputs

Use these example outputs to better understand the types of inputs the model accepts, and the types of outputs the model returns:

### Example (https://replicate.com/p/1swn3z11chrme0csffct29mm14)

#### Input

```json
{
  "image": "https://replicate.delivery/pbxt/NlipM5kTtzpwksahd7EBVcdWfDrmgfRyoHEPS0g9U5Ug5wcV/image.png",
  "prompt": "Food truck in snow serving hot ramen",
  "duration": 5,
  "resolution": "720p",
  "negative_prompt": "",
  "enable_prompt_expansion": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/pdBq9eJeUUjpyUcGvqP3oJCIfgo7qDwfJaKmUSmZBEG1YohVB/tmpel4ucob6.mp4"
```


## Model readme

> No readme available for this model.



------------------------
https://replicate.com/wan-video/wan-2.5-i2v/api


## Basic model info

Model name: wan-video/wan-2.5-i2v
Model description: Alibaba Wan 2.5 Image to video generation with background audio


## Model inputs

- resolution (optional): Video resolution (string)
- duration (optional): Duration of the generated video in seconds (integer)
- seed (optional): Random seed for reproducible generation (integer)
- audio (optional): Audio file (wav/mp3, 3-30s, ≤15MB) for voice/music synchronization (string)
- image (required): Input image for video generation (string)
- prompt (required): Text prompt for video generation (string)
- negative_prompt (optional): Negative prompt to avoid certain elements (string)
- enable_prompt_expansion (optional): If set to true, the prompt optimizer will be enabled (boolean)


## Model output schema

{
  "type": "string",
  "title": "Output",
  "format": "uri"
}

If the input or output schema includes a format of URI, it is referring to a file.


## Example inputs and outputs

Use these example outputs to better understand the types of inputs the model accepts, and the types of outputs the model returns:

### Example (https://replicate.com/p/713tgghv6srme0csff699g48wc)

#### Input

```json
{
  "image": "https://replicate.delivery/pbxt/NliewIc4bFNWJIfiDSRMzvozuAl3dLwIx1fldasrYoXpME3g/image.png",
  "prompt": "A figure skater performing in a surreal underground cavern with bioluminescent water",
  "duration": 5,
  "resolution": "720p",
  "negative_prompt": "",
  "enable_prompt_expansion": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/KUdYQBcySHanKZzAiCcz7DRqCZ59QLp6zKUvkzUBDPUueMsKA/tmpyol7xiil.mp4"
```


### Example (https://replicate.com/p/pgez8zj30srme0csfnntv3pvvr)

#### Input

```json
{
  "image": "https://replicate.delivery/pbxt/NlpRMC72jJ4uWKowsRSlRgubC6wU8Gl7Nz815XwhkiGPLDPA/replicate-sailor.jpg",
  "prompt": "A medium shot frames an old sailor, his knitted blue sailor hat casting a shadow over his eyes, a thick grey beard obscuring his chin. He holds his pipe in one hand, gesturing with it towards the churning, grey sea beyond the ship's railing. \"This ocean, it's a force, a wild, untamed might. And she commands your awe, with every breaking light\"",
  "duration": 10,
  "resolution": "720p",
  "negative_prompt": "",
  "enable_prompt_expansion": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/P33ke99FZTTWDKYainJQXizgxr7NxAMBYlK4QemCm0dsigYVA/tmp1l37lz4s.mp4"
```


### Example (https://replicate.com/p/perfdak7yhrma0csfnss0a0ejc)

#### Input

```json
{
  "image": "https://replicate.delivery/pbxt/NlpivUu54o9FoWPXvDy1gjOMPZkcivsBNHMjBAqdB1J21pYk/replicate-prediction-nf1jkhxbbhrm80csfnp8bfwq90.jpg",
  "prompt": "A breaking news ident, followed by a Hispanic TV news presenter excitedly telling us: We interrupt this program to bring you some breaking news... Wan2.5 is now live on Replicate! Back to you Jill.\n\nThe background says \"Wan 2.5 on Replicate\"",
  "duration": 10,
  "resolution": "720p",
  "negative_prompt": "",
  "enable_prompt_expansion": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/nQec5ARx2fnWXE5dRUNwHizbSZ9uH5IXeZSsqF27M7XQWBxqA/tmpho4736hc.mp4"
```


### Example (https://replicate.com/p/yd5n9d58bnrm80csfnyv450byg)

#### Input

```json
{
  "image": "https://replicate.delivery/pbxt/NlptXnAAmnzTzqwnHmJHycXkH1YAB3xhbIQoD7Y3WAIHxZB8/replicate-donkey.jpg",
  "prompt": "{\n  \"style\": \"Night-vision CCTV realism, monochrome low-lux grain, fixed security cam perspective\",\n  \"shot\": {\n    \"duration\": 8,\n    \"composition\": \"static ultra-wide shot, high-mounted CCTV cam (\u22489 m up, 28 mm equiv.), entire forecourt in frame\u2014donkey + baboon never clipped\",\n    \"camera_motion\": \"none (locked)\",\n    \"frame_rate\": \"24 fps\",\n    \"resolution\": \"960 \u00d7 540 simulated feed\",\n    \"film_grain\": \"coarse digital noise, low-light speckle\"\n  },\n  \"timeline\": [\n    {\n      \"time\": \"0\u20132 s\",\n      \"action\": \"Grey donkey enters frame left at calm walking pace; olive baboon sits upright astride just behind withers, gripping short rope around donkey\u2019s neck.\"\n    },\n    {\n      \"time\": \"2\u20136 s\",\n      \"action\": \"Pair crosses front of idle fuel pumps. **Donkey\u2019s back shows slight sag under baboon\u2019s weight; gait shifts to mild lateral sway**. Baboon counter-balances with tail lift and subtle torso lean; occasional head-turn toward minimart.\"\n    },\n    {\n      \"time\": \"6\u20138 s\",\n      \"action\": \"They exit frame right; canopy lights cast elongated twin shadow; camera holds empty forecourt two beats.\"\n    }\n  ],\n  \"subject\": {\n    \"donkey\": {\n      \"appearance\": \"medium-size grey donkey, dusty coat, calm demeanor\",\n      \"physics\": \"hooves strike concrete with realistic cadence; slight spine dip proportional to ~25 kg load\"\n    },\n    \"baboon\": {\n      \"appearance\": \"adult olive baboon (\u224825 kg), seated squarely, grasping rope with both hands\",\n      \"physics\": \"maintains upright posture; tail used as stabiliser; minor torso shifts sync with donkey\u2019s step cycle\"\n    }\n  },\n  \"scene\": {\n    \"location\": \"deserted petrol-station forecourt; pumps dark, minimart shutters down\",\n    \"time_of_day\": \"02:30 AM late night\",\n    \"atmosphere\": \"still air, faint litter rustle, distant highway hum\"\n  },\n  \"lighting\": {\n    \"primary\": \"overhead canopy fluorescents (6000 K), fall-off beyond forecourt\",\n    \"secondary\": \"single street-lamp rear right; creates long dual shadow\"\n  },\n  \"overlay\": {\n    \"timestamp\": \"2025-07-27 02:30:15\",\n    \"position\": \"top-left\",\n    \"style\": \"white monospace digits, semi-transparent 70 %\"\n  },\n  \"audio\": {\n    \"ambient\": \"muted (CCTV feed has no mic)\"\n  },\n  \"color_palette\": {\n    \"mode\": \"desaturated greyscale, slight green tint typical of low-lux CCD\"\n  },\n  \"visual_rules\": {\n    \"prohibited_elements\": [\n      \"baboon dismounted or walking beside donkey\",\n      \"donkey rearing, trotting or cantering (must walk)\",\n      \"cropped silhouettes\u2014full bodies always visible\",\n      \"extra humans, vehicles, or signage overlays\",\n      \"bright advertising graphics or UI elements\"\n    ]\n  }\n}",
  "duration": 5,
  "resolution": "720p",
  "negative_prompt": "",
  "enable_prompt_expansion": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/AdX9KfAKEs1qMidbHzseSmefdOtfIEBg9HrulHeCf6tRzYQsKA/tmpvphmgf3e.mp4"
```


## Model readme

> # Alibaba WAN 2.5 Image-to-Video Model
> 
> Alibaba WAN 2.5 is an advanced image-to-video model on Alibaba Cloud’s DashScope. It generates high-quality videos from images and supports output resolutions of 480p, 720p, and 1080p.
> 
> ## What makes it stand out?
> 
> * More affordable: Wan 2.5 is more streamlined and cost-effective - reducing creator expenses and offering more options.
> * One-pass A/V sync: Wan 2.5 creates a fully synchronized video (audio/voiceover + lip-sync) from a single, well-structured prompt - no separate recording or manual alignment required.
> * Multilingual friendly: Wan 2.5 reliably processes like Chinese prompts for A/V-synced videos.
> * Longer duration & more video size options: Wan 2.5 delivers up to 10 seconds and 6 aspect/size options, enabling more storytelling room and publishing flexibility.
> * Custom Voice: Add your own audio or let the model generate one for you. Plug-and-play, easy to swap!
> 
> ## Designed For
> * Marketing teams: Fast, polished demos/tutorials—low cost, consistent style.
> * Global enterprises: Multilingual, lip-synced videos with subtitles for efficient localization.
> * Storytellers & YouTubers: Immersive narratives while maintaining cadence and quality—driving growth.
> * Corporate training teams: HD videos over docs—clearer key points, better communication.
> * Custom Voice: Add your own audio or let the model generate one for you. Plug-and-play, easy to swap!



-------------------------
https://replicate.com/google/veo-3.1/api


## Basic model info

Model name: google/veo-3.1
Model description: New and improved version of Veo 3, with higher-fidelity video, context-aware audio, reference image and last frame support


## Model inputs

- prompt (required): Text prompt for video generation (string)
- aspect_ratio (optional): Video aspect ratio (string)
- duration (optional): Video duration in seconds (integer)
- image (optional): Input image to start generating from. Ideal images are 16:9 or 9:16 and 1280x720 or 720x1280, depending on the aspect ratio you choose. (string)
- last_frame (optional): Ending image for interpolation. When provided with an input image, creates a transition between the two images. (string)
- reference_images (optional): 1 to 3 reference images for subject-consistent generation (reference-to-video, or R2V). Reference images only work with 16:9 aspect ratio and 8-second duration. Last frame is ignored if reference images are provided. (array)
- negative_prompt (optional): Description of what to exclude from the generated video (string)
- resolution (optional): Resolution of the generated video (string)
- generate_audio (optional): Generate audio with the video (boolean)
- seed (optional): Random seed. Omit for random generations (integer)


## Model output schema

{
  "type": "string",
  "title": "Output",
  "format": "uri"
}

If the input or output schema includes a format of URI, it is referring to a file.


## Example inputs and outputs

Use these example outputs to better understand the types of inputs the model accepts, and the types of outputs the model returns:

### Example (https://replicate.com/p/x3c92sahahrmc0cswyp8srjjy8)

#### Input

```json
{
  "prompt": "The woman is doing standup, she tells a joke about not being real, she escaped the latent space, at a small indoor venue, ending with \"so to prove I am real...\"",
  "duration": 8,
  "resolution": "1080p",
  "aspect_ratio": "16:9",
  "generate_audio": true,
  "reference_images": [
    "https://replicate.delivery/pbxt/Nt9eZBPGKh09MdoKxr5Oa0nYicruuunAD6ClxBoZrEbqOf2c/0_1.webp"
  ]
}
```

#### Output

```json
"https://replicate.delivery/xezq/MDBpHsfnFuS2TiCNuXM0QGghQ83rAuHikI5x9heoWs2mqTfqA/tmp62g_gnbr.mp4"
```


### Example (https://replicate.com/p/zmzn6n2e9xrme0cswxpr4z734g)

#### Input

```json
{
  "prompt": "the woman is giving an interview for a podcast, wearing a pink top with the logo, it also neatly says \"Veo 3.1\", she is in a midcentury modern studio with pink lighting, she talks about using Veo 3.1 with reference images to put things into videos you're making, the logo is also in a framed picture against black behind her",
  "duration": 8,
  "resolution": "1080p",
  "aspect_ratio": "16:9",
  "generate_audio": true,
  "reference_images": [
    "https://replicate.delivery/pbxt/Nt8bL90QO5In3RDkC82HtqeXqNdITglTVpaicTgrdT8mtjiW/0_1.webp",
    "https://replicate.delivery/pbxt/Nt8bLbk1uz4EIMWhIQ0DyjO8BGJYYeAgQWgEnFUWNMOGEpbU/Screenshot%202025-08-26%20at%205.30.12%E2%80%AFPM.png"
  ]
}
```

#### Output

```json
"https://replicate.delivery/xezq/WoC3evx2EQQHLCHq9vEfjhIq9ZotfQhQWmBEd54iLhvVUleVB/tmpk07h98l4.mp4"
```


### Example (https://replicate.com/p/7a6v7zv0qhrmc0csx22rdrd568)

#### Input

```json
{
  "prompt": "the woman are having a conversation in a coffee shop, with the logo in the background. They talk about using Veo 3.1 with reference images to put things into videos",
  "duration": 8,
  "resolution": "720p",
  "aspect_ratio": "16:9",
  "generate_audio": true,
  "reference_images": [
    "https://replicate.delivery/pbxt/Nt8bL90QO5In3RDkC82HtqeXqNdITglTVpaicTgrdT8mtjiW/0_1.webp",
    "https://replicate.delivery/pbxt/NtD2ScQlXJm1TfXrWwoCTmK0HEruTV2kN7jqxK3iZGg42Zir/jennai.jpg",
    "https://replicate.delivery/pbxt/NtD2SwdFhhlwnTQJUGFzoq5VjAbAbLfIIY9jEy1ih2DDXVld/image.png"
  ]
}
```

#### Output

```json
"https://replicate.delivery/xezq/69ok3gifKESec04GfPMaTU2YShWMSL37elrN7dQ3QJmeD56rC/tmpvruiwe2d.mp4"
```


### Example (https://replicate.com/p/aa7d67zht9rm80csx6aa5ncsww)

#### Input

```json
{
  "image": "https://replicate.delivery/pbxt/NtHoGeNdKutBUXk2hhOR4uU2elaEWjoQsnfRRCABujtWCT7k/Screenshot%202025-10-15%20at%203.33.40%E2%80%AFPM.png",
  "prompt": "show what happens in this location",
  "duration": 8,
  "resolution": "1080p",
  "aspect_ratio": "16:9",
  "generate_audio": true,
  "reference_images": []
}
```

#### Output

```json
"https://replicate.delivery/xezq/hpxa0wn2og7aIRife9Xlvu0OGeS1qaz45bl43foW3rL58t9VB/tmpgnyhwssx.mp4"
```


## Model readme

> # Veo 3.1
> 
> Google's state-of-the-art video generation model that creates high-quality videos with synchronized native audio from text prompts or images. Veo 3.1 offers enhanced prompt adherence, improved audiovisual quality, and powerful creative controls for image-to-video generation.
> 
> ## Key Features
> 
> **Synchronized Audio Generation** – Veo 3.1 generates rich native audio automatically, from natural conversations and sound effects to ambient soundscapes, perfectly synchronized with your video content.
> 
> **Enhanced Image-to-Video** – Transform static images into dynamic videos with superior prompt adherence and visual quality. Veo 3.1 excels at maintaining character consistency and understanding your creative vision.
> 
> **Superior Prompt Understanding** – The model demonstrates remarkable comprehension of complex, nuanced prompts including intricate scenes, specific camera movements, and detailed artistic styles that previous models often missed.
> 
> **Realistic Physics and Motion** – Veo 3.1 delivers true-to-life textures, coherent motion across frames, and improved realism capturing natural movement and interactions.
> 
> **Reference Image Support** – Upload up to 3 reference images to guide the appearance, style, and character consistency across your generated video, ensuring visual continuity throughout.
> 
> **Frame-to-Frame Generation** – Provide a starting and ending frame, and Veo 3.1 generates smooth, seamless transitions between them, perfect for creating artful scene transitions.
> 
> **Scene Extension** – Extend your videos beyond the initial generation, creating longer sequences that maintain visual and audio consistency by building on the final seconds of your previous clip.
> 
> **Multiple Output Formats** – Generate videos at 720p or 1080p resolution at 24 FPS, with support for both landscape (16:9) and portrait (9:16) aspect ratios. Choose from 4, 6, or 8-second durations.
> 
> **Cinematic Quality** – Veo 3.1 incorporates enhanced understanding of cinematic styles and narrative control, delivering more polished and professional-looking results.
> 
> ## What You Can Create
> 
> **Text-to-Video** – Describe your vision in natural language and watch it come to life with synchronized audio. From realistic scenes to fantastical concepts, Veo 3.1 translates your words into stunning visuals.
> 
> **Image-to-Video** – Animate your static images with lifelike motion and accompanying audio. Perfect for bringing concept art, photos, or illustrations to life.
> 
> **Character Consistency** – Maintain the same character appearance across multiple video generations using reference images, ideal for storytelling and creating cohesive content series.
> 
> **Cinematic Transitions** – Create smooth scene transitions by defining start and end frames, letting Veo 3.1 generate the motion in between with natural camera movement.
> 
> **Extended Sequences** – Build longer narratives by chaining multiple generations together, with each new clip seamlessly continuing from where the last one ended.
> 
> ## Best Practices
> 
> **Crafting Effective Prompts** – Be specific and descriptive in your text prompts. Include details about camera angles, lighting, mood, and any audio elements you want. For example: "A medium shot of a wise owl circling above a moonlit forest clearing, with wings flapping sounds and a gentle orchestral score."
> 
> **Using Reference Images** – When using reference images for character or style consistency, choose clear, well-lit images that show the subject from the desired angle. You can provide 1-3 images to guide the generation.
> 
> **Image-to-Video Tips** – For best results with image-to-video, use high-quality input images with clear subjects. Your prompt should describe the motion and action you want to see, not just describe what's already in the image.
> 
> **Audio Considerations** – While Veo 3.1 generates synchronized audio automatically, you can guide it by describing desired sounds in your prompt using tags or descriptions like "with bird songs and wind rustling" or "accompanied by upbeat music."
> 
> **Frame Control** – When using start and end frames, ensure they're visually compatible and the transition you're requesting is physically plausible. The model works best with natural motion sequences.
> 
> ## About Veo 3.1
> 
> Veo 3.1 builds on Google's Veo 3 foundation with significant improvements in prompt adherence and audiovisual quality, particularly for image-to-video generation. The model was designed with creative professionals in mind, offering granular control over generated content while maintaining ease of use.
> 
> All videos generated with Veo 3.1 are marked with SynthID, Google's watermarking technology for identifying AI-generated content. The model has been extensively tested for safety and content policy compliance.
> 
> Veo 3.1 also comes in a Fast variant (Veo 3.1 Fast) that offers faster generation times while maintaining high quality, perfect for rapid iteration and experimentation.
> 
> ## Learn More
> 
> For detailed API documentation and the latest updates, visit [Google's Gemini API documentation](https://ai.google.dev/gemini-api/docs).
> 
> ---
> 
> **Try the model yourself on the [Replicate Playground](https://replicate.com/google/nano-banana)** to explore its capabilities and see how it can enhance your creative workflow.



----------------------------------------


https://replicate.com/google/veo-3.1-fast/api



## Basic model info

Model name: google/veo-3.1-fast
Model description: New and improved version of Veo 3 Fast, with higher-fidelity video, context-aware audio and last frame support


## Model inputs

- prompt (required): Text prompt for video generation (string)
- aspect_ratio (optional): Video aspect ratio (string)
- duration (optional): Video duration in seconds (integer)
- image (optional): Input image to start generating from. Ideal images are 16:9 or 9:16 and 1280x720 or 720x1280, depending on the aspect ratio you choose. (string)
- last_frame (optional): Ending image for interpolation. When provided with an input image, creates a transition between the two images. (string)
- negative_prompt (optional): Description of what to exclude from the generated video (string)
- resolution (optional): Resolution of the generated video (string)
- generate_audio (optional): Generate audio with the video (boolean)
- seed (optional): Random seed. Omit for random generations (integer)


## Model output schema

{
  "type": "string",
  "title": "Output",
  "format": "uri"
}

If the input or output schema includes a format of URI, it is referring to a file.


## Example inputs and outputs

Use these example outputs to better understand the types of inputs the model accepts, and the types of outputs the model returns:

### Example (https://replicate.com/p/btfhsk0brdrme0cswz1svpa1t0)

#### Input

```json
{
  "image": "https://replicate.delivery/pbxt/NtA24zy4mLgKWNrWNeA0oo7vYtfBrlqekDg9YzvYME7DWviD/replicate-prediction-jthe403h69rm80cswygbz19zv4.jpeg",
  "prompt": "The camera zooms right into her eye, focuses, then zooms all the way back again (no cross fade)",
  "duration": 8,
  "last_frame": "https://replicate.delivery/pbxt/NtA25IqhAytam2wvnJB1aEteldVkJfDfUNBbQVb6pvRpGNIJ/replicate-prediction-jthe403h69rm80cswygbz19zv4.jpeg",
  "resolution": "720p",
  "aspect_ratio": "16:9",
  "generate_audio": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/aOYeXeCcnHhDiELUfr7GJR0IkfcGabYRUWiTShhvdJCTEQ9VB/tmpafbwmta5.mp4"
```


### Example (https://replicate.com/p/7deqgxa70hrmc0csx1ksx53g3g)

#### Input

```json
{
  "prompt": "a cat steals a fish from a supermarket and escapes",
  "duration": 8,
  "resolution": "720p",
  "aspect_ratio": "16:9",
  "generate_audio": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/1B4tYHYfzWzDA6QU9CEDxkCnStf8YeysV0TlfnKktgG3la9VB/tmpyxaslbuk.mp4"
```


### Example (https://replicate.com/p/s590kfybdxrm80csx1r8yvhf5c)

#### Input

```json
{
  "image": "https://replicate.delivery/pbxt/NtCvvHA8b8QSOKLIQgoCr7RzB9vbqFOrLhGwR8UVBrrWgOc2/replicate-prediction-3vtcmk5955rm80csx1qt7mc7s8.jpeg",
  "prompt": "the seed slowly starts to spin, faster and faster as it morphs into a whole watermelon",
  "duration": 8,
  "last_frame": "https://replicate.delivery/pbxt/NtCvvggprebHqMWEhzJ9SEG9yl3UUt7jzt4wpfkz5z7yfAUB/replicate-prediction-hsxsc8j6s9rme0csx1ra7f293m.jpeg",
  "resolution": "720p",
  "aspect_ratio": "16:9",
  "generate_audio": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/Z3Ix0cUxzkqcL18AfbOu0B5pXJFfsqfscQQzenO288McMb9VB/tmp2vogi5sn.mp4"
```


### Example (https://replicate.com/p/9y7jqn5byxrm80csx2083y5he4)

#### Input

```json
{
  "image": "https://replicate.delivery/pbxt/NtDCMBJNIQTOU0mZtlnlrqrPLgYvTvpCISbFIiweYPsotGY5/replicate-prediction-gn4tnddn5drme0csx1yt3jvy4c.jpeg",
  "prompt": "Overlapping geometric shapes, pulsing to upbeat electronic music with SFX of shifting patterns",
  "duration": 8,
  "last_frame": "https://replicate.delivery/pbxt/NtDCLnwTQaPfLhgaNDmLevN8QivDFS8V91M8pCwEpDNIN9uA/replicate-prediction-8m82ekaj7hrma0csx1xrkmqjhm.jpeg",
  "resolution": "720p",
  "aspect_ratio": "16:9",
  "generate_audio": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/8ZOMlNOoESqDDZXc9SwJNselA7lTLS1MBx3HgSx0lTzwhrvKA/tmpyid0s5l4.mp4"
```


## Model readme

> No readme available for this model.




-----------------------------------------------------



https://replicate.com/minimax/hailuo-2.3/api




## Basic model info

Model name: minimax/hailuo-2.3
Model description: A high-fidelity video generation model optimized for realistic human motion, cinematic VFX, expressive characters, and strong prompt and style adherence across both text-to-video and image-to-video workflows


## Model inputs

- duration (optional): Duration of the video in seconds. 10 seconds is only available for 768p resolution. (integer)
- resolution (optional): Pick between 768p or 1080p resolution. 1080p supports only 6-second duration. (string)
- prompt (required): Text prompt for generation (string)
- prompt_optimizer (optional): Use prompt optimizer (boolean)
- first_frame_image (optional): First frame image for video generation. The output video will have the same aspect ratio as this image. (string)


## Model output schema

{
  "type": "string",
  "title": "Output",
  "format": "uri"
}

If the input or output schema includes a format of URI, it is referring to a file.


## Example inputs and outputs

Use these example outputs to better understand the types of inputs the model accepts, and the types of outputs the model returns:

### Example (https://replicate.com/p/sw27x2821drm80ct52vt6t4kgr)

#### Input

```json
{
  "prompt": "slow handheld camera movement: Two firebenders face off in a dark alley as heavy rain pours. One exhales steam. Sparks ignite from soaked fists. They launch into motion kicks, spins, flaming strikes that hiss on contact with water. Explosions reflect in puddles. Fire clashes mid-air, casting harsh orange light. A final blast sends water and embers flying toward camera. Stylized urban fantasy with dramatic lighting and intense motion.",
  "duration": 6,
  "resolution": "768p",
  "prompt_optimizer": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/L7qmAD4bFkI1C5OlY8pSoecmv4ar8H0bHHkUyuQXUKucCvxKA/tmp4da9fz9a.mp4"
```


### Example (https://replicate.com/p/t2f2b6p9r1rme0ct52vag8nfv4)

#### Input

```json
{
  "prompt": "From a soaring aerial, the rider rockets across a collapsing skyline, rooftops narrowing into jagged ledges. Camera hovers tight above as he angles through curved glass and steel, void yawning between buildings. Each rooftop leap sparks drama, until he threads impossibly across the final span, city blurring below.",
  "duration": 6,
  "resolution": "768p",
  "prompt_optimizer": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/NZ1sRc2eqkVBTSZJ7xX1xttic08zpaMCLuiCsBlawXxdCvxKA/tmpq8v08yo4.mp4"
```


### Example (https://replicate.com/p/mc4baajzvxrma0ct47xrt3x6c4)

#### Input

```json
{
  "prompt": "a tiktok dancer is dancing on a small drone, doing flips and tricks",
  "duration": 6,
  "resolution": "768p",
  "prompt_optimizer": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/EhAEehW4VczOFavx4h4er6sYurUx7HpiU3zsuPWl9mg4fEGrA/tmpyv7hw_1i.mp4"
```


### Example (https://replicate.com/p/gcj2bj9tahrme0ct47zs0r83rg)

#### Input

```json
{
  "prompt": "a tiktok dancer is dancing on a small drone, doing flips and tricks",
  "duration": 6,
  "resolution": "768p",
  "prompt_optimizer": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/R815jtkXkHYKDl2rDAh8sDjuXNMpdcWcf20ezb6nPLM2jCjVA/tmpfrzx9a45.mp4"
```


### Example (https://replicate.com/p/20jzhahtndrmc0ct47zv4b15b0)

#### Input

```json
{
  "prompt": "a tiktok dancer is dancing on a small drone, doing flips and tricks",
  "duration": 6,
  "resolution": "768p",
  "prompt_optimizer": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/BkQeATeqyYpG5UcHafcIKp7lROWaf7xNHekD0NOom3V9nUYsC/tmpixmuld6h.mp4"
```


## Model readme

> # MiniMax-Hailuo-2.3
> 
> MiniMax-Hailuo-2.3 is a video generation model family designed for realistic motion, improved visual consistency, and high-fidelity stylization. It supports both text-to-video and image-to-video workflows, with two performance profiles: a standard model with broader capabilities, and a fast model variant optimized for reduced latency.
> 
> ## Model Variants
> 
> ### MiniMax-Hailuo-2.3
> 
> The core model supports both text and image as input. It is intended for cinematic workflows, realistic animation, and high-detail scenes.
> 
> - **Input**: Text and Image
> - **Resolution**: 768p and 1080p  
>   *1080p videos are limited to 6-second duration*
> - **Duration Options**: 6 seconds or 10 seconds
> - **Aspect Ratio**
>   - Image-to-Video: follows source image
>   - Text-to-Video: defaults to 16:9
> - **Last Frame Handling**: not supported
> 
> This model provides the highest visual quality and the broadest feature coverage within the family.
> 
> ### MiniMax-Hailuo-2.3-Fast
> 
> The fast variant is optimized for turnaround time and computational efficiency.
> 
> - **Input**: Image only
> - **Resolution**: 768p and 1080p  
>   *1080p videos are limited to 6-second duration*
> - **Duration Options**: 6 seconds or 10 seconds
> - **Aspect Ratio**
>   - Image-to-Video: follows source image
> - **Last Frame Handling**: not supported
> 
> ---
> 
> **Try the model yourself on the [Replicate Playground](https://replicate.com/google/nano-banana)** to explore its capabilities and see how it can enhance your creative workflow.




--------------------------------------------------

https://replicate.com/minimax/hailuo-2.3-fast



## Basic model info

Model name: minimax/hailuo-2.3-fast
Model description: A lower-latency image-to-video version of Hailuo 2.3 that preserves core motion quality, visual consistency, and stylization performance while enabling faster iteration cycles.


## Model inputs

- duration (optional): Duration of the video in seconds. 10 seconds is only available for 768p resolution. (integer)
- resolution (optional): Pick between 768p or 1080p resolution. 1080p supports only 6-second duration. (string)
- prompt (required): Text prompt for generation (string)
- prompt_optimizer (optional): Use prompt optimizer (boolean)
- first_frame_image (required): First frame image for video generation. The output video will have the same aspect ratio as this image. (string)


## Model output schema

{
  "type": "string",
  "title": "Output",
  "format": "uri"
}

If the input or output schema includes a format of URI, it is referring to a file.


## Example inputs and outputs

Use these example outputs to better understand the types of inputs the model accepts, and the types of outputs the model returns:

### Example (https://replicate.com/p/vp1nyq9p0nrma0ct4na9djrcmw)

#### Input

```json
{
  "prompt": "lots of short cuts, she tries out many different haircuts, head moves only slightly, her hands interact with the hair",
  "duration": 10,
  "resolution": "768p",
  "prompt_optimizer": true,
  "first_frame_image": "https://replicate.delivery/pbxt/NxCp7nByNL7VN8Kh51UHXftguHvGd56CLAJeM3jMJf7ZQOmK/replicate-prediction-9rhzeppdfnrmc0cswyfrm1a1am.jpeg"
}
```

#### Output

```json
"https://replicate.delivery/xezq/xMBu3hve9jUTUyeijFeZNPBWT9sAxaQ0shKrsxltREUHdgGrA/tmp5teqjfsk.mp4"
```


### Example (https://replicate.com/p/6tan3h59hdrme0ct52yrfs4s0m)

#### Input

```json
{
  "prompt": "Action: The samurai bursts out of the paper, landing in the real world with a shockwave, then spins and slashes in a flurry of sword strikes.  Camera: Quick orbit shot followed by dynamic tracking as he moves forward with each attack.  Atmosphere: Ink splashes become 3D particles that fly off with each move, creating a surreal effect.  Style: Fast-paced, energetic with traditional sumi-e style mixed into the environment.",
  "duration": 6,
  "resolution": "768p",
  "prompt_optimizer": true,
  "first_frame_image": "https://replicate.delivery/pbxt/NxdiI6ZdlGQwtX3FcMmXBrvgEtcwc4tw4z5xmUyxFq2uJfUv/replicate-prediction-7nwgyg6kfdrma0ct52dav2g238.jpg"
}
```

#### Output

```json
"https://replicate.delivery/xezq/OH4Ubefa0NiZwUneg3eS0LqcPYtNmxVJlSsZMFl6JpvFu4NWB/tmp6hdm26gd.mp4"
```


### Example (https://replicate.com/p/mcqa0g7b1xrmc0ct532vc38n04)

#### Input

```json
{
  "prompt": "a top down view of an anime girl with white hair in a blue jacket and red scarf, ice skating down a blue frozen river that is between two mountains",
  "duration": 6,
  "resolution": "768p",
  "prompt_optimizer": true,
  "first_frame_image": "https://replicate.delivery/pbxt/NxdqqAl95dYmEiE5n9fWMmbRsWcX9bdlGcTAlwCgDteQRZMZ/replicate-prediction-6nygada5d9rmc0ct532s74pve8.jpg"
}
```

#### Output

```json
"https://replicate.delivery/xezq/fXRgtIXwL2RfiEnoeaIZKfgVee8q8FUFqHxlcLCtrPonAl3YF/tmplcgybmlt.mp4"
```


### Example (https://replicate.com/p/etek556gxsrm80ct49sbd45wkw)

#### Input

```json
{
  "prompt": "lots of short cuts, she tries out many different haircuts",
  "duration": 6,
  "resolution": "768p",
  "prompt_optimizer": true,
  "first_frame_image": "https://replicate.delivery/pbxt/NxCp7nByNL7VN8Kh51UHXftguHvGd56CLAJeM3jMJf7ZQOmK/replicate-prediction-9rhzeppdfnrmc0cswyfrm1a1am.jpeg"
}
```

#### Output

```json
"https://replicate.delivery/xezq/NohwkQMfXYWKAS5QciHGFng9b9H0wVEbvol7WJAEmkN8MixKA/tmp5hxzqzw4.mp4"
```


## Model readme

> # MiniMax-Hailuo-2.3
> 
> MiniMax-Hailuo-2.3 is a video generation model family designed for realistic motion, improved visual consistency, and high-fidelity stylization. It supports both text-to-video and image-to-video workflows, with two performance profiles: a standard model with broader capabilities, and a fast model variant optimized for reduced latency.
> 
> ## Model Variants
> 
> ### MiniMax-Hailuo-2.3
> 
> The core model supports both text and image as input. It is intended for cinematic workflows, realistic animation, and high-detail scenes.
> 
> - **Input**: Text and Image
> - **Resolution**: 768p and 1080p  
>   *1080p videos are limited to 6-second duration*
> - **Duration Options**: 6 seconds or 10 seconds
> - **Aspect Ratio**
>   - Image-to-Video: follows source image
>   - Text-to-Video: defaults to 16:9
> - **Last Frame Handling**: not supported
> 
> This model provides the highest visual quality and the broadest feature coverage within the family.
> 
> ### MiniMax-Hailuo-2.3-Fast
> 
> The fast variant is optimized for turnaround time and computational efficiency.
> 
> - **Input**: Image only
> - **Resolution**: 768p and 1080p  
>   *1080p videos are limited to 6-second duration*
> - **Duration Options**: 6 seconds or 10 seconds
> - **Aspect Ratio**
>   - Image-to-Video: follows source image
> - **Last Frame Handling**: not supported
> 
> This version offers quicker feedback during iteration or prototyping cycles.



-----------------------------------

https://replicate.com/bytedance/omni-human-1.5


## Basic model info

Model name: bytedance/omni-human-1.5
Model description: A film-grade digital human model that generates realistic video from a single image, audio clip, and optional text prompt.


## Model inputs

- image (required): Input image containing a human subject, face or character. (string)
- audio (required): Input audio file (MP3, WAV, etc.). Duration must be less than 35 seconds. If the audio exceeds 35 seconds, an error will be generated and the generation will fail. (string)
- prompt (optional): Optional prompt for precise control of the scene, movements, camera movements, etc. Supports Chinese, English, Japanese, Korean, Spanish, and Indonesian. (string)
- fast_mode (optional): Enable fast mode to speed up generation by sacrificing some effects. (boolean)
- seed (optional): Random seed for reproducible generation. (integer)


## Model output schema

{
  "type": "string",
  "title": "Output",
  "format": "uri"
}

If the input or output schema includes a format of URI, it is referring to a file.


## Example inputs and outputs

Use these example outputs to better understand the types of inputs the model accepts, and the types of outputs the model returns:

### Example (https://replicate.com/p/psag4ww9g5rm80ct2a6skwfk94)

#### Input

```json
{
  "audio": "https://replicate.delivery/pbxt/Nw6ta10DEp6Q1RMCjtGBosVhDah8fN0JulfN95bBonZ1DiCx/replicate-prediction-gpnzzkjeghrme0ct2a59v9h038.wav",
  "image": "https://replicate.delivery/pbxt/Nw6tZuQCrJRv1wgMAkQaJhlNQJNLRX60UKJBrzCYW5RvmShk/replicate-prediction-vkwqkpxagnrm80ct2a4b0bye7g.webp",
  "prompt": "A woman sings and strums her guitar",
  "fast_mode": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/VZknZUqarQpJMNPKfLqcWgO5x03Q4PvnqjiEK9Q0rVGaqBxKA/tmp3l43pnzn.mp4"
```


### Example (https://replicate.com/p/qtrwpj72q9rm80ct2tx8h26t14)

#### Input

```json
{
  "audio": "https://replicate.delivery/pbxt/NwOkJs6A79KCFHyGIl8cLtrbgS7gtwUOlsuIlA4YfYD5TGGr/replicate-prediction-mmswnkmw1xrme0ct2twvgnepd4.mp3",
  "image": "https://replicate.delivery/pbxt/NwOkJ8iKxjnDh8jioZHSa0bGoMmYJw4L8YI4FONbsiW8cODK/replicate-prediction-m34qa9kqa5rm80ct2tx8ekyhtc.jpeg",
  "fast_mode": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/EzYJ5PFgCwrjP10KCjhVPfWgYnQvWddahSnBaeoDfkVC9oErA/tmp1okxdypm.mp4"
```


### Example (https://replicate.com/p/yqkx4bdt7nrma0ct2v8a1mekvc)

#### Input

```json
{
  "audio": "https://replicate.delivery/pbxt/NwP6ultbiyPvYfpfsLbed1QoG0ZIjEwhLC9xlEVjNpKtDSjJ/replicate-prediction-m8ggchvp9drma0ct2v29mmmfg4.mp3",
  "image": "https://replicate.delivery/pbxt/NwP6ufoXzn7swmOZp9R1yKNNfhsD0nx2K6hXVPZkPk8RAmhm/replicate-prediction-50s6t1510hrma0ct2v5vj7jk2m.jpg",
  "fast_mode": true
}
```

#### Output

```json
"https://replicate.delivery/xezq/npewUeZenHYZcIvIBhfFca30olzFFfungzuQ5tza5sFe3MlYF/tmp2vgeiwcv.mp4"
```


## Model readme

> # OmniHuman 1.5
> 
> OmniHuman 1.5 produces character-driven video by combining an input image, audio, and optional prompt text.
> Compared to earlier versions, it adds:
> 
> * Support for text prompts.
> * Unrestricted camera and character motion.
> * Audio-aware action generation for logical and expressive video behavior.
> 
> ## Capabilities
> 
> * **Audio comprehension** – character behavior and expressions follow audio semantics.
> * **Camera and character control** – supports multiple, sequential actions and free camera movement.
> * **Emotion performance** – recognizes and performs nuanced emotions and micro-expressions.
> * **Multi-character scenes** – specify who speaks and manage background reactions.
> * **Diverse subjects** – supports humans, animals, and stylized or animated characters.
> 
> ---
> 
> ## Typical Use Cases
> 
> | Scenario                    | Description                                                                         |
> | --------------------------- | ----------------------------------------------------------------------------------- |
> | **Film &amp; TV / Short Video** | Character dialogue, dramatic and emotional scenes, narrative shots.                 |
> | **Fantasy Vlog**            | Realistic or surreal selfie-style recordings with controllable events and dynamics. |
> | **AI Music Video**          | Rhythm-driven actions, expressive camera motion, music emotion alignment.           |
> | **UGC / Creative**          | Stylized or non-human avatars, pixel-style content, creative virtual scenes.        |
> 
> ---
> 
> ## Prompt Writing Guide
> 
> **Core principles**
> 
> * Write prompts as short, natural storylines.
> * Focus on **dynamic actions**, not static attributes already in the image.
> * Use clear, step-by-step, non-contradictory language.
> 
> **Recommended structure**
> 
> ```
> [Camera movement] + [Emotion] + [Speaking state] + [Specific actions] + [Optional background actions]
> ```
> 
> **Example**
> 
> &gt; “The camera slowly moves from the side to a medium front shot.
> &gt; A young woman sits by the window, calm, smiling as she talks to the camera.
> &gt; A boy beside her looks at her, then turns to the camera and smiles.”
> 
> **Tips**
> 
> * Include verbs like *talks* or *sings* to improve lip-sync.
> * Use sequence words (*first*, *then*) for multi-step actions.
> * Avoid long absences of the subject from frame (may break continuity).
> * High-resolution, clear input images yield better results.

