import { ILoadingScreen } from "@babylonjs/core";
import groundTextureUrl from "../assets/loading.gif";

export class CustomLoadingScreen implements ILoadingScreen {
    //optional, but needed due to interface definitions
    public loadingUIBackgroundColor = "pink";
    public loadingImage = document.getElementById("loading");

    constructor(public loadingUIText: string) {}

    public displayLoadingUI() {
        const loadingContainer = document.getElementById("loadingContainer");
        if (loadingContainer && this.loadingImage) {
            this.loadingImage.classList.remove("hidden");
            return;
        }
        const div = document.createElement("div");
        div.innerHTML = `
        <div id="loadingContainer">
          <h1>Loading...</h1>
          <img src="${groundTextureUrl}" />
      </div>
      `;
        this.loadingImage && this.loadingImage.appendChild(div);
    }

    public hideLoadingUI() {
        this.loadingImage && this.loadingImage.classList.add("hidden");
    }
}
