import { ILoadingScreen } from "@babylonjs/core";

export class CustomLoadingScreen implements ILoadingScreen {
    //optional, but needed due to interface definitions
    public loadingUIBackgroundColor = "pink";
    public loadingImage = document.getElementById("loading");
    constructor(public loadingUIText: string) {}
    public displayLoadingUI() {
        this.loadingImage && this.loadingImage.classList.remove("hidden");
    }

    public hideLoadingUI() {
        this.loadingImage && this.loadingImage.classList.add("hidden");
    }
}
