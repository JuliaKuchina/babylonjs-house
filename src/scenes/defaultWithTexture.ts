import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
// import * as BABYLON from '@babylonjs/core';
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { CreateSceneClass } from "../createScene";
import { Mesh, SceneLoader } from "@babylonjs/core";
import { SkyMaterial } from "@babylonjs/materials";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";

// required imports
import "@babylonjs/core/Loading/loadingScreen";
import "@babylonjs/loaders/glTF";
import "@babylonjs/core/Materials/standardMaterial";
import "@babylonjs/core/Materials/Textures/Loaders/envTextureLoader";

// If you don't need the standard material you will still need to import it since the scene requires it.

import groundTextureUrl from "../../assets/john-o-nolan-o_gJAkcKJmM-unsplash.jpg";
import controllerModel from "../../assets/glb/haunted_house.glb";

export class DefaultSceneWithTexture implements CreateSceneClass {
    createScene = async (
        engine: Engine,
        canvas: HTMLCanvasElement
    ): Promise<Scene> => {
        // This creates a basic Babylon Scene object (non-mesh)
        const scene = new Scene(engine);

        // This creates and positions a free camera (non-mesh)
        const camera = new ArcRotateCamera(
            "my first camera",
            // 0,
            Math.PI / 1.9,
            Math.PI / 2.5,
            90,
            new Vector3(0, 0, 0),
            scene
        );
        const temp = new SkyMaterial("skyMaterial", scene);
        temp.backFaceCulling = false;

        const skybox = Mesh.CreateBox("skyBox", 1000.0, scene);
        skybox.material = temp;

        // This targets the camera to scene origin
        camera.setTarget(Vector3.Zero());

        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
        camera.useFramingBehavior = true;

        camera.upperBetaLimit = (Math.PI / 2) * 0.99;

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        const light = new HemisphericLight(
            "light",
            new Vector3(1, 1, 0),
            scene
        );

        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.8;

        const importResult = await SceneLoader.ImportMeshAsync(
            "",
            "",
            controllerModel,
            scene,
            undefined,
            ".glb"
        );

        importResult.meshes[0].scaling.scaleInPlace(100);

        // Our built-in 'ground' shape.
        const groundMaterial = new StandardMaterial("ground", scene);
        groundMaterial.diffuseTexture = new Texture(groundTextureUrl, scene);

        // Use CreateGroundFromHeightMap to create a height map of 200 units by 200
        // units, with 250 subdivisions in each of the `x` and `z` directions, for a
        // total of 62,500 divisions.
        const ground = Mesh.CreateGroundFromHeightMap(
            "ground",
            groundTextureUrl,
            400,
            400,
            250,
            0,
            5,
            scene,
            false
        );

        // When our new mesh is read, apply our material.
        ground.material = groundMaterial;

        return scene;
    };
}

export default new DefaultSceneWithTexture();
