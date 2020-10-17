import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { CreateSceneClass } from "../createScene";
import { Mesh, MeshBuilder, SceneLoader } from "@babylonjs/core";

// If you don't need the standard material you will still need to import it since the scene requires it.

import { Texture } from "@babylonjs/core/Materials/Textures/texture";

import groundTextureUrl2 from "../../assets/john-o-nolan-o_gJAkcKJmM-unsplash.jpg";
import controllerModel from "../../assets/glb/haunted_house.glb";

export class DefaultSceneWithTexture implements CreateSceneClass {
    createScene = async (
        engine: Engine,
        canvas: HTMLCanvasElement
    ): Promise<Scene> => {
        // This creates a basic Babylon Scene object (non-mesh)
        let scene = new Scene(engine);
        scene.dispose();
        scene = new Scene(engine);
        scene.meshes && scene.meshes.forEach((x) => x.dispose());

        // This creates and positions a free camera (non-mesh)
        const camera = new ArcRotateCamera(
            "my first camera",
            Math.PI / 1.9,
            Math.PI / 2.5,
            150,
            new Vector3(0, 0, 0),
            scene
        );

        // This targets the camera to scene origin
        camera.setTarget(Vector3.Zero());

        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);

        camera.upperBetaLimit = (Math.PI / 2) * 0.99;

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        const light = new HemisphericLight(
            "light",
            new Vector3(1, 1, 0),
            scene
        );

        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.8;

        const tiledBox = MeshBuilder.CreateTiledBox(
            "box",
            { depth: 10, width: 8, height: 12 },
            scene
        );
        // Move the box upward 1/2 its height
        tiledBox.position.y = 6;
        tiledBox.position.x = -5;
        tiledBox.position.z = -4;
        scene.resetCachedMaterial();
        // Our built-in 'ground' shape.

        const oldMesh = scene.getMeshByName("hauntedHouse");
        if (oldMesh) {
            oldMesh.dispose();
        }

        const importResult = await SceneLoader.ImportMeshAsync(
            "",
            "",
            controllerModel,
            scene,
            undefined,
            ".glb"
        );

        const groundMaterial = new StandardMaterial("ground", scene);
        groundMaterial.diffuseTexture = new Texture(groundTextureUrl2, scene);

        // Use CreateGroundFromHeightMap to create a height map of 200 units by 200
        // units, with 250 subdivisions in each of the `x` and `z` directions, for a
        // total of 62,500 divisions.
        const ground = Mesh.CreateGroundFromHeightMap(
            "ground",
            groundTextureUrl2,
            800,
            800,
            0,
            0,
            0,
            scene,
            false
        );

        // When our new mesh is read, apply our material.
        ground.material = groundMaterial;

        return scene;
    };
}

export default new DefaultSceneWithTexture();
