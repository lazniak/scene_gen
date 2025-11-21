# Scene Gen ComfyUI Node

[![Scene Gen Demo](https://img.youtube.com/vi/wtxXUM1-4F8/0.jpg)](https://youtube.com/shorts/wtxXUM1-4F8)

A custom node for ComfyUI that uses Google's Gemini 3 Pro models to generate scene prompts and images from audio input.

## Features
- **Audio Analysis**: Analyzes audio input to understand genre, vibe, and rhythm.
- **Prompt Generation**: Generates creative scene descriptions based on the audio.
- **Image Generation**: Generates images (frames) for each prompt using Gemini Image models.
- **Parallel Processing**: Generates multiple frames concurrently for speed.

## Installation
1.  Clone this repository into your `ComfyUI/custom_nodes/` directory.
2.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

## Usage
1.  **Get API Key**: Obtain a Google GenAI API key from [Google AI Studio](https://aistudio.google.com/).
2.  **Add Node**: Search for "Scene Gen" in ComfyUI.
3.  **Connect Inputs**:
    -   **audio**: Connect an audio output from a "Load Audio" node.
    -   **api_key**: Paste your API key.
    -   **prompt_instruction**: Describe the general scene or style you want.
    -   **frame_count**: Number of frames to generate.
    -   **model_text**: Default `gemini-3-pro-preview`.
    -   **model_image**: Default `gemini-3-pro-preview-image`.
4.  **Connect Outputs**:
    -   **prompt_list**: Connect to a text viewer or saver.
    -   **image_list**: Connect to "Preview Image" or "Save Image".

