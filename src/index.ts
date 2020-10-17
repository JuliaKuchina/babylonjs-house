import { Engine } from "@babylonjs/core/Engines/engine";
import { getSceneModuleWithName } from "./createScene";
import { CustomLoadingScreen } from "./CustomLoadingScreen";

const getModuleToLoad = (): string | undefined => {
    // ATM using location.search
    if (!location.search) {
        return;
    } else {
        return location.search.substr(location.search.indexOf("scene=") + 6);
    }
};

export const babylonInit = async (name?: string): Promise<void> => {
    // get the module to load
    const moduleName = getModuleToLoad();
    const createSceneModule = await getSceneModuleWithName(name || moduleName);

    // Execute the pretasks, if defined
    await Promise.all(createSceneModule.preTasks || []);
    // Get the canvas element
    const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
    // Generate the BABYLON 3D engine
    const engine = new Engine(canvas, true);

    const loadingScreen = new CustomLoadingScreen("I'm loading!!");
    // replace the default loading screen
    engine.loadingScreen = loadingScreen;
    // show the loading screen
    engine.displayLoadingUI();

    /*
     * create your scene over here
     */

    // Create the scene
    const scene = await createSceneModule.createScene(engine, canvas);

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(async function () {
       await scene.render();
    });
    // hide the loading screen when you want to
    engine.hideLoadingUI();
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
};

babylonInit().then(() => {
    // scene started rendering, everything is initialized
});
const button = document.getElementById("toggle") as HTMLElement;
console.log("button", button);
let name = "defaultWithTexture";

button.onclick = async () => {
    console.log("onclick");
    name =
        name === "defaultWithTexture"
            ? "defaultWithTextureMesh"
            : "defaultWithTexture";
    await babylonInit(name);
};

// button.addEventListener("onclick", async () => {
//     console.log('onclick')
//     babylonInit("defaultWithTextureMesh");
// });
