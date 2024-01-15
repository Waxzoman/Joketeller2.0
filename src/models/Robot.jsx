import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import robotScene from '../assets/3d/robot.glb'
import { act } from "@react-three/fiber";

export default function Robot({currentAnimation, ...props}) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(robotScene);
    const { actions } = useAnimations(animations, group);
    useEffect(() => {
        Object.values(actions).forEach((action) => action.stop());
        if (actions[currentAnimation]) {
            actions[currentAnimation].play();
        }
    }, [actions, currentAnimation]);
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group
                                name="Cylinder002_2"
                                position={[0, 2, 0]}
                                rotation={[0, 0, Math.PI / 2]}
                            >
                                <mesh
                                    name="Object_4"
                                    geometry={nodes.Object_4.geometry}
                                    material={materials.Grey}
                                />
                                <mesh
                                    name="Object_5"
                                    geometry={nodes.Object_5.geometry}
                                    material={materials.Red_light}
                                />
                                <mesh
                                    name="Object_6"
                                    geometry={nodes.Object_6.geometry}
                                    material={materials.Black}
                                />
                                <mesh
                                    name="Object_7"
                                    geometry={nodes.Object_7.geometry}
                                    material={materials.Cian}
                                />
                                <mesh
                                    name="Object_8"
                                    geometry={nodes.Object_8.geometry}
                                    material={materials.Orange}
                                />
                                <mesh
                                    name="Object_9"
                                    geometry={nodes.Object_9.geometry}
                                    material={materials.Light}
                                />
                                <mesh
                                    name="Object_10"
                                    geometry={nodes.Object_10.geometry}
                                    material={materials.Green}
                                />
                                <mesh
                                    name="Object_11"
                                    geometry={nodes.Object_11.geometry}
                                    material={materials.Dark_Green}
                                />
                                <mesh
                                    name="Object_12"
                                    geometry={nodes.Object_12.geometry}
                                    material={materials.Cooper}
                                />
                                <mesh
                                    name="Object_13"
                                    geometry={nodes.Object_13.geometry}
                                    material={materials.Silver}
                                />
                                <mesh
                                    name="Object_14"
                                    geometry={nodes.Object_14.geometry}
                                    material={materials.Yellow}
                                />
                            </group>
                            <group name="BezierCurve_3" position={[-1.3, 2, 0]} scale={0.3}>
                                <mesh
                                    name="Object_16"
                                    geometry={nodes.Object_16.geometry}
                                    material={materials.Black}
                                />
                                <mesh
                                    name="Object_17"
                                    geometry={nodes.Object_17.geometry}
                                    material={materials.Orange}
                                />
                            </group>
                            <group
                                name="Cylinder006_5"
                                position={[-1.3, -0.3, 0.1]}
                                rotation={[0, 0, Math.PI / 2]}
                                scale={[0.3, 0.1, 0.3]}
                            >
                                <mesh
                                    name="Object_19"
                                    geometry={nodes.Object_19.geometry}
                                    material={materials.Orange}
                                />
                                <group
                                    name="Cylinder009_4"
                                    position={[-2, 0, 0]}
                                    scale={[0.2, 1.2, 0.2]}
                                >
                                    <mesh
                                        name="Object_21"
                                        geometry={nodes.Object_21.geometry}
                                        material={materials.Grey}
                                    />
                                </group>
                            </group>
                            <group
                                name="Cylinder008_6"
                                position={[-1.3, 0.8, 0]}
                                rotation={[-0.1, 0, Math.PI / 2]}
                                scale={0.2}
                            >
                                <mesh
                                    name="Object_23"
                                    geometry={nodes.Object_23.geometry}
                                    material={materials.Grey}
                                />
                            </group>
                            <group
                                name="Cylinder010_7"
                                position={[-1.3, -0.9, 0.2]}
                                rotation={[0, 0, Math.PI / 2]}
                            >
                                <mesh
                                    name="Object_25"
                                    geometry={nodes.Object_25.geometry}
                                    material={materials.Grey}
                                />
                            </group>
                            <group
                                name="Cylinder011_8"
                                position={[-1.3, -0.9, 0.2]}
                                rotation={[0, 0, -Math.PI / 2]}
                                scale={-1}
                            >
                                <mesh
                                    name="Object_27"
                                    geometry={nodes.Object_27.geometry}
                                    material={materials.Grey}
                                />
                            </group>
                            <group
                                name="Cylinder012_9"
                                position={[-0.7, -1.2, 0.6]}
                                rotation={[-3.1, 0, Math.PI / 2]}
                                scale={[0.4, 0.3, 0.4]}
                            >
                                <mesh
                                    name="Object_29"
                                    geometry={nodes.Object_29.geometry}
                                    material={materials.Grey}
                                />
                                <mesh
                                    name="Object_30"
                                    geometry={nodes.Object_30.geometry}
                                    material={materials.Black}
                                />
                            </group>
                            <group
                                name="Cylinder013_10"
                                position={[-0.7, -1.2, -0.6]}
                                rotation={[-3.1, 0, Math.PI / 2]}
                                scale={[0.4, 0.3, 0.4]}
                            >
                                <mesh
                                    name="Object_32"
                                    geometry={nodes.Object_32.geometry}
                                    material={materials.Grey}
                                />
                                <mesh
                                    name="Object_33"
                                    geometry={nodes.Object_33.geometry}
                                    material={materials.Black}
                                />
                            </group>
                            <group
                                name="Cylinder016_12"
                                position={[1.3, -0.3, 0]}
                                rotation={[3.1, 0, Math.PI / 2]}
                                scale={[-0.3, -0.1, -0.3]}
                            >
                                <mesh
                                    name="Object_35"
                                    geometry={nodes.Object_35.geometry}
                                    material={materials.Orange}
                                />
                                <group
                                    name="Cylinder018_11"
                                    position={[-2, 0, 0]}
                                    scale={[0.2, 1.2, 0.2]}
                                >
                                    <mesh
                                        name="Object_37"
                                        geometry={nodes.Object_37.geometry}
                                        material={materials.Grey}
                                    />
                                </group>
                            </group>
                            <group
                                name="Cylinder017_13"
                                position={[1.3, 0.8, 0]}
                                rotation={[Math.PI, 0, Math.PI / 2]}
                                scale={-0.2}
                            >
                                <mesh
                                    name="Object_39"
                                    geometry={nodes.Object_39.geometry}
                                    material={materials.Grey}
                                />
                            </group>
                            <group
                                name="Cylinder019_14"
                                position={[1.3, -0.9, 0]}
                                rotation={[Math.PI, 0, Math.PI / 2]}
                                scale={-1}
                            >
                                <mesh
                                    name="Object_41"
                                    geometry={nodes.Object_41.geometry}
                                    material={materials.Grey}
                                />
                            </group>
                            <group
                                name="Cylinder020_15"
                                position={[1.3, -0.9, 0]}
                                rotation={[Math.PI, 0, -Math.PI / 2]}
                            >
                                <mesh
                                    name="Object_43"
                                    geometry={nodes.Object_43.geometry}
                                    material={materials.Grey}
                                />
                            </group>
                            <group
                                name="Cylinder021_16"
                                position={[0.7, -1.2, 0.6]}
                                rotation={[-3.1, 0, Math.PI / 2]}
                                scale={[0.4, 0.3, 0.4]}
                            >
                                <mesh
                                    name="Object_45"
                                    geometry={nodes.Object_45.geometry}
                                    material={materials.Grey}
                                />
                                <mesh
                                    name="Object_46"
                                    geometry={nodes.Object_46.geometry}
                                    material={materials.Black}
                                />
                            </group>
                            <group
                                name="Cylinder022_17"
                                position={[0.7, -1.2, -0.6]}
                                rotation={[-3.1, 0, Math.PI / 2]}
                                scale={[0.4, 0.3, 0.4]}
                            >
                                <mesh
                                    name="Object_48"
                                    geometry={nodes.Object_48.geometry}
                                    material={materials.Grey}
                                />
                                <mesh
                                    name="Object_49"
                                    geometry={nodes.Object_49.geometry}
                                    material={materials.Black}
                                />
                            </group>
                            <group name="Cube001_23" position={[0, -1.2, 0]}>
                                <mesh
                                    name="Object_51"
                                    geometry={nodes.Object_51.geometry}
                                    material={materials.Grey}
                                />
                                <mesh
                                    name="Object_52"
                                    geometry={nodes.Object_52.geometry}
                                    material={materials.Black}
                                />
                                <group
                                    name="BezierCircle_18"
                                    position={[-0.7, 0, 0]}
                                    rotation={[0, 0, Math.PI / 2]}
                                >
                                    <mesh
                                        name="Object_54"
                                        geometry={nodes.Object_54.geometry}
                                        material={materials.Rubber}
                                    />
                                </group>
                                <group
                                    name="BezierCircle001_19"
                                    position={[0.7, 0, 0]}
                                    rotation={[0, 0, Math.PI / 2]}
                                >
                                    <mesh
                                        name="Object_56"
                                        geometry={nodes.Object_56.geometry}
                                        material={materials.Rubber}
                                    />
                                </group>
                                <group name="Cube_22" position={[0, 1.2, 0]}>
                                    <mesh
                                        name="Object_58"
                                        geometry={nodes.Object_58.geometry}
                                        material={materials.Cian}
                                    />
                                    <mesh
                                        name="Object_59"
                                        geometry={nodes.Object_59.geometry}
                                        material={materials.Grey}
                                    />
                                    <mesh
                                        name="Object_60"
                                        geometry={nodes.Object_60.geometry}
                                        material={materials.Orange}
                                    />
                                    <mesh
                                        name="Object_61"
                                        geometry={nodes.Object_61.geometry}
                                        material={materials.Red_light}
                                    />
                                    <mesh
                                        name="Object_62"
                                        geometry={nodes.Object_62.geometry}
                                        material={materials.Light}
                                    />
                                    <mesh
                                        name="Object_63"
                                        geometry={nodes.Object_63.geometry}
                                        material={materials.Black}
                                    />
                                    <mesh
                                        name="Object_64"
                                        geometry={nodes.Object_64.geometry}
                                        material={materials.Green}
                                    />
                                    <mesh
                                        name="Object_65"
                                        geometry={nodes.Object_65.geometry}
                                        material={materials.Dark_Green}
                                    />
                                    <mesh
                                        name="Object_66"
                                        geometry={nodes.Object_66.geometry}
                                        material={materials.Cooper}
                                    />
                                    <mesh
                                        name="Object_67"
                                        geometry={nodes.Object_67.geometry}
                                        material={materials.Silver}
                                    />
                                    <mesh
                                        name="Object_68"
                                        geometry={nodes.Object_68.geometry}
                                        material={materials.Yellow}
                                    />
                                    <group
                                        name="Cylinder005_20"
                                        position={[-1.3, 0.8, 0]}
                                        rotation={[0, 0, Math.PI / 2]}
                                        scale={[0.3, 0.1, 0.3]}
                                    >
                                        <mesh
                                            name="Object_70"
                                            geometry={nodes.Object_70.geometry}
                                            material={materials.Orange}
                                        />
                                    </group>
                                    <group
                                        name="Cylinder015_21"
                                        position={[1.3, 0.8, 0]}
                                        rotation={[0, 0, -Math.PI / 2]}
                                        scale={[-0.3, 0.1, 0.3]}
                                    >
                                        <mesh
                                            name="Object_72"
                                            geometry={nodes.Object_72.geometry}
                                            material={materials.Orange}
                                        />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

