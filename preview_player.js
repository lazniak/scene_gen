// Scene Gen Preview Player
// Auto-synced slideshow with timeline montage

class PreviewPlayer {
    constructor() {
        this.scenes = [];
        this.currentSceneIndex = 0;
        this.isPlaying = false;
        this.audioElement = null;
        this.videoContainer = null;
        this.timelineBar = null;
        this.playButton = null;
        this.currentTimeDisplay = null;
        this.totalDuration = 0;
        this.timelineData = null;

        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupPlayer());
        } else {
            this.setupPlayer();
        }
    }

    setupPlayer() {
        const playerHTML = `
            <div id="preview-player" style="position: fixed; bottom: 20px; right: 20px; width: 400px; background: rgba(0,0,0,0.9); border-radius: 10px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); z-index: 9999; display: none;">
                <h3 style="margin: 0 0 15px 0; color: white; font-size: 16px;">🎬 Preview Player</h3>
                
                <div id="preview-video-container" style="width: 100%; height: 225px; background: #000; border-radius: 8px; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; position: relative;">
                    <img id="preview-frame" style="max-width: 100%; max-height: 100%; border-radius: 8px; display: none;">
                    <div id="preview-placeholder" style="color: #666; text-align: center;">
                        <div style="font-size: 48px; margin-bottom: 10px;">📽️</div>
                        <div>Waiting for frames...</div>
                    </div>
                    <div id="preview-scene-label" style="position: absolute; bottom: 10px; left: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px 10px; border-radius: 5px; font-size: 12px; display: none;"></div>
                </div>
                
                <div id="preview-timeline" style="width: 100%; height: 4px; background: rgba(255,255,255,0.2); border-radius: 2px; margin-bottom: 10px; cursor: pointer; position: relative;">
                    <div id="preview-progress" style="height: 100%; background: #4caf50; border-radius: 2px; width: 0%; transition: width 0.1s;"></div>
                </div>
                
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                    <button id="preview-play-btn" style="background: #4caf50; color: white; border: none; padding: 8px 20px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                        ▶️ Play
                    </button>
                    <div id="preview-time" style="color: white; font-size: 14px;">0:00 / 0:00</div>
                </div>
                
                <audio id="preview-audio" style="display: none;"></audio>
                
                <div style="color: #888; font-size: 11px; margin-top: 10px;">
                    Auto-synced with montage timeline
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', playerHTML);

        this.videoContainer = document.getElementById('preview-video-container');
        this.frameImage = document.getElementById('preview-frame');
        this.placeholder = document.getElementById('preview-placeholder');
        this.sceneLabel = document.getElementById('preview-scene-label');
        this.timelineBar = document.getElementById('preview-timeline');
        this.progressBar = document.getElementById('preview-progress');
        this.playButton = document.getElementById('preview-play-btn');
        this.currentTimeDisplay = document.getElementById('preview-time');
        this.audioElement = document.getElementById('preview-audio');
        this.playerElement = document.getElementById('preview-player');

        this.playButton.addEventListener('click', () => this.togglePlay());
        this.timelineBar.addEventListener('click', (e) => this.seek(e));
        this.audioElement.addEventListener('timeupdate', () => this.updateProgress());
        this.audioElement.addEventListener('ended', () => this.stop());

        this.checkForData();
    }

    async checkForData() {
        setInterval(async () => {
            try {
                if (window.statusData) {
                    this.updateFromStatus(window.statusData);
                }
            } catch (e) { }
        }, 2000);
    }

    updateFromStatus(data) {
        if (data.montage && data.montage.scenes) {
            this.timelineData = data.montage.scenes;
            this.totalDuration = this.timelineData.reduce((sum, scene) => sum + (scene.trim_duration || scene.duration || 5), 0);
        } else if (Array.isArray(data.montage)) {
            this.timelineData = data.montage;
            this.totalDuration = this.timelineData.reduce((sum, scene) => sum + (scene.trim_duration || scene.duration || 5), 0);
        }

        if (data.assets) {
            const sceneFrames = data.assets.filter(a => a.type && a.type.includes('Scene Start Frame'));
            if (sceneFrames.length > 0) {
                this.scenes = sceneFrames.map(frame => ({
                    name: frame.name,
                    file: frame.file,
                    type: frame.type
                }));

                if (this.timelineData && this.scenes.length > 0) {
                    this.playerElement.style.display = 'block';
                    this.updateTimeDisplay();
                }
            }
        }

        if (data.audio_file && !this.audioElement.src) {
            this.audioElement.src = data.audio_file;
        }
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        if (!this.scenes.length || !this.timelineData) {
            alert('No preview data available yet.');
            return;
        }

        this.isPlaying = true;
        this.playButton.textContent = '⏸️ Pause';

        if (this.audioElement.src) {
            this.audioElement.play();
        }

        this.updateFrame();
    }

    pause() {
        this.isPlaying = false;
        this.playButton.textContent = '▶️ Play';

        if (this.audioElement) {
            this.audioElement.pause();
        }
    }

    stop() {
        this.pause();
        this.audioElement.currentTime = 0;
        this.currentSceneIndex = 0;
        this.updateProgress();
    }

    seek(event) {
        const rect = this.timelineBar.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const percentage = x / rect.width;
        const newTime = percentage * this.totalDuration;

        this.audioElement.currentTime = newTime;
        this.updateProgress();
    }

    updateFrame() {
        if (!this.isPlaying) return;

        const currentTime = this.audioElement.currentTime;
        let accumulatedTime = 0;
        let sceneIndex = 0;

        for (let i = 0; i < this.timelineData.length; i++) {
            const sceneDuration = this.timelineData[i].trim_duration || this.timelineData[i].duration || 5;
            if (currentTime >= accumulatedTime && currentTime < accumulatedTime + sceneDuration) {
                sceneIndex = i;
                break;
            }
            accumulatedTime += sceneDuration;
        }

        if (sceneIndex !== this.currentSceneIndex && sceneIndex < this.scenes.length) {
            this.currentSceneIndex = sceneIndex;
            this.displayScene(sceneIndex);
        }

        requestAnimationFrame(() => this.updateFrame());
    }

    displayScene(index) {
        if (index >= this.scenes.length) return;

        const scene = this.scenes[index];
        const sceneData = this.timelineData[index];

        this.frameImage.src = scene.file;
        this.frameImage.style.display = 'block';
        this.placeholder.style.display = 'none';

        this.sceneLabel.textContent = `Scene ${index + 1}: ${sceneData.description || scene.name}`;
        this.sceneLabel.style.display = 'block';
    }

    updateProgress() {
        if (!this.totalDuration) return;

        const currentTime = this.audioElement.currentTime;
        const percentage = (currentTime / this.totalDuration) * 100;
        this.progressBar.style.width = `${percentage}%`;

        this.updateTimeDisplay();
    }

    updateTimeDisplay() {
        const current = this.formatTime(this.audioElement.currentTime || 0);
        const total = this.formatTime(this.totalDuration);
        this.currentTimeDisplay.textContent = `${current} / ${total}`;
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
}

const previewPlayer = new PreviewPlayer();
