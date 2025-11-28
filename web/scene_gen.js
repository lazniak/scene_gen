import { app } from "/scripts/app.js";
import { api } from "/scripts/api.js";

app.registerExtension({
	name: "SceneGen.VideoPlayer",
	async beforeRegisterNodeDef(nodeType, nodeData, app) {
		if (nodeType.comfyClass === "SceneGenVideoPlayer") {
			const onExecuted = nodeType.prototype.onExecuted;
			nodeType.prototype.onExecuted = function (message) {
				onExecuted?.apply(this, arguments);

				if (message && message.videos) {
                    // Remove previous video widgets
                    if (this.widgets) {
                        for (let i = this.widgets.length - 1; i >= 0; i--) {
                            if (this.widgets[i].name === "video_preview") {
                                this.widgets[i].onRemove?.();
                                this.widgets.splice(i, 1);
                            }
                        }
                    }
                    
                    const videoData = message.videos[0];
                    const url = api.apiURL("/view?filename=" + encodeURIComponent(videoData.filename) + "&type=" + videoData.type + "&subfolder=" + encodeURIComponent(videoData.subfolder));
                    
                    const videoEl = document.createElement("video");
                    videoEl.controls = true;
                    videoEl.autoplay = true;
                    videoEl.loop = true;
                    videoEl.muted = false;
                    videoEl.src = url;
                    videoEl.style.width = "100%";
                    videoEl.style.height = "auto";
                    videoEl.style.maxHeight = "500px";
                    
                    // Container
                    const container = document.createElement("div");
                    container.style.width = "100%";
                    container.style.display = "flex";
                    container.style.justifyContent = "center";
                    container.style.alignItems = "center";
                    container.appendChild(videoEl);

                    // Add widget
                    // Note: addDOMWidget is a method on LGraphNode in ComfyUI's LiteGraph
                    this.addDOMWidget("video_preview", "HTML", container, {
                        serialize: false,
                        hideOnZoom: false
                    });
                    
                    // Resize node to fit video
                    const targetWidth = this.size[0];
                    const targetHeight = targetWidth * (9/16) + 50; // Approx 16:9 + controls
                    this.setSize([targetWidth, Math.max(this.size[1], targetHeight)]);
                    
                    // Force redraw
                    app.graph.setDirtyCanvas(true, true);
				}
			};
		}
	},
});

