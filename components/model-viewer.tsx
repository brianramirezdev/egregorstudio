'use client';

import { FC, Suspense, useLayoutEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Html, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface ViewerProps {
    url: string;
    width?: number | string;
    height?: number | string;
}

const Loader = () => (
    <Html center className="text-white opacity-50 text-sm">
        loading…
    </Html>
);

/* ================= MODEL ================= */

const LogoModel: FC<{ url: string }> = ({ url }) => {
    const group = useRef<THREE.Group>(null!);
    const { scene } = useGLTF(url);
    const { camera } = useThree();

    useLayoutEffect(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const sphere = box.getBoundingSphere(new THREE.Sphere());

        /* ---- centrar modelo ---- */
        scene.position.sub(sphere.center);

        /* ---- escalar (más pequeño y seguro) ---- */
        const scale = 1 / (sphere.radius * 1.5);
        scene.scale.setScalar(scale);

        /* ---- cámara anti-corte ---- */
        const cam = camera as THREE.PerspectiveCamera;
        const distance = (sphere.radius * scale) / Math.sin(THREE.MathUtils.degToRad(cam.fov * 0.5));

        cam.position.set(0, 0, distance * 2.5);
        cam.near = 0.01;
        cam.far = 1000;
        cam.lookAt(0, 0, 0);
        cam.updateProjectionMatrix();

        /* ---- material metálico ---- */
        scene.traverse((o: any) => {
            if (o.isMesh) {
                o.material = new THREE.MeshPhysicalMaterial({
                    color: new THREE.Color('#bfc3c8'),
                    metalness: 2,
                    roughness: 0.2,
                    envMapIntensity: 1.1,
                    clearcoat: 0.8,
                    clearcoatRoughness: 0.1,
                });

                o.castShadow = true;
                o.receiveShadow = true;
            }
        });
    }, [scene, camera]);

    /* ---- animacion ---- */
    /* ---- rotación suave continua ---- */
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        group.current.rotation.y = t * 0.35;
        group.current.rotation.x = Math.cos(t) * 0.12;
    });

    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    );
};

/* ================= VIEWER ================= */

const ModelViewer: FC<ViewerProps> = ({ url, width = '100%', height = '100%' }) => {
    return (
        <div style={{ width, height }} className="pointer-events-none select-none">
            <Canvas
                shadows
                camera={{ fov: 35 }}
                gl={{
                    antialias: true,
                }}
            >
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
                <directionalLight position={[-4, 2, -4]} intensity={0.6} />

                <Environment preset="studio" />

                <Suspense fallback={<Loader />}>
                    <LogoModel url={url} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ModelViewer;
