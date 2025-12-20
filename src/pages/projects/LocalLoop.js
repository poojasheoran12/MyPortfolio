
// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";
// import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// export default function ThreeDev() {
//   const mountRef = useRef();

//   useEffect(() => {
//     const container = mountRef.current;
//     if (!container) return;

//     // ---------- Scene / Camera / Renderer ----------
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       35,
//       container.clientWidth / container.clientHeight,
//       0.1,
//       100
//     );
//     camera.position.set(3.2, 1.8, 3.2);

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(container.clientWidth, container.clientHeight);
//     renderer.setPixelRatio(window.devicePixelRatio || 1);
//     renderer.shadowMap.enabled = true;
//     // safe set color space (works with newer three)
//     try {
//       if ("outputColorSpace" in renderer && THREE.SRGBColorSpace) {
//         renderer.outputColorSpace = THREE.SRGBColorSpace;
//       }
//     } catch (e) {
//       // ignore - different three builds
//     }

//     container.appendChild(renderer.domElement);

//     // ---------- Lights ----------
//     const hemi = new THREE.HemisphereLight(0xffffff, 0x222222, 0.8);
//     scene.add(hemi);

//     const dir = new THREE.DirectionalLight(0xffffff, 1.25);
//     dir.position.set(5, 10, 5);
//     dir.castShadow = true;
//     dir.shadow.mapSize.set(2048, 2048);
//     dir.shadow.camera.near = 0.5;
//     dir.shadow.camera.far = 50;
//     scene.add(dir);

//     // subtle fill
//     const amb = new THREE.AmbientLight(0xffffff, 0.12);
//     scene.add(amb);

//     // ---------- Ground (shadow catcher) ----------
//     const ground = new THREE.Mesh(
//       new THREE.PlaneGeometry(40, 40),
//       new THREE.ShadowMaterial({ opacity: 0.2 })
//     );
//     ground.rotation.x = -Math.PI / 2;
//     ground.position.y = -1.15;
//     ground.receiveShadow = true;
//     scene.add(ground);

//     // ---------- Materials ----------
//     const greenMat = new THREE.MeshStandardMaterial({
//       color: new THREE.Color("#06E312"), // dark neon green requested
//       metalness: 0.06,
//       roughness: 0.25, // slightly glossy
//       clearcoat: 0.25,
//       clearcoatRoughness: 0.05,
//     });

//     const antennaMat = new THREE.MeshStandardMaterial({
//       color: new THREE.Color("#07d70f"),
//       metalness: 0.03,
//       roughness: 0.18,
//     });

//     const eyeMat = new THREE.MeshStandardMaterial({
//       color: 0x000000,
//       metalness: 0.1,
//       roughness: 0.6,
//       emissive: 0x0d0d0d,
//     });

//     // ---------- Helpers ----------
//     function makeCapsule(radius = 0.1, length = 0.6, material = greenMat) {
//       // capsule oriented along Y with center at origin
//       const g = new THREE.Group();

//       const cyl = new THREE.Mesh(
//         new THREE.CylinderGeometry(radius, radius, length, 32),
//         material
//       );
//       const top = new THREE.Mesh(new THREE.SphereGeometry(radius, 32, 16), material);
//       const bot = top.clone();

//       top.position.y = length / 2;
//       bot.position.y = -length / 2;

//       cyl.castShadow = top.castShadow = bot.castShadow = true;
//       cyl.receiveShadow = top.receiveShadow = bot.receiveShadow = true;

//       g.add(cyl, top, bot);
//       return g;
//     }

// //    function makeAntenna(xPos = 0.28, outward = 0.45, opts = {}) {
// //   // cylinder + small rounded tip sphere (positioned from base near dome)
// //   const radius = opts.radius ?? 0.035; // medium thickness
// //   const length = opts.length ?? 0.45;  // short
// //   const base = new THREE.Group();

// //   const cyl = new THREE.Mesh(
// //     new THREE.CylinderGeometry(radius, radius, length, 16),
// //     antennaMat
// //   );

// //   // Position cylinder upward from dome
// //   cyl.position.y = length / 2 - 0.05;
// //   cyl.castShadow = true;
// //   cyl.receiveShadow = true;

// //   const tip = new THREE.Mesh(
// //     new THREE.SphereGeometry(radius * 1.08, 14, 12),
// //     antennaMat
// //   );
// //   tip.position.y = length - 0.05;

// //   base.add(cyl, tip);

// //   // Move left/right outward a bit for better V shape
// //   base.position.set(xPos, 1.00, 0);

// //   // ⭐ TRUE OUTWARD TILT (V shape)
// //   // outward = amount of tilt (radians), default 0.45 ≈ 26°
// //   base.rotation.z = xPos > 0 ? outward : -outward;

// //   // ⭐ slight backward tilt (looks better)
// //   base.rotation.x = -0.06;

// //   return base;
// // }
// function makeAntenna(xPos = 0.28, opts = {}) {
//   const radius = opts.radius ?? 0.035;
//   const length = opts.length ?? 0.45;

//   const g = new THREE.Group();

//   // Cylinder
//   const cyl = new THREE.Mesh(
//     new THREE.CylinderGeometry(radius, radius, length, 20),
//     antennaMat
//   );
//   cyl.position.y = length / 2;
//   cyl.castShadow = true;
//   g.add(cyl);

//   // Tip sphere
//   const tip = new THREE.Mesh(
//     new THREE.SphereGeometry(radius * 1.1, 16, 12),
//     antennaMat
//   );
//   tip.position.y = length - 0.02;
//   g.add(tip);

//   // Position antenna at top of head
//   g.position.set(xPos, 0.9, 0);

//   // ⭐ GENTLE outward tilt (10–15°)
//   // Instead of aiming far outward, we look only a little outward.
//   const outwardX = xPos > 0 ? xPos + 0.05 : xPos - 0.05;
//   const target = new THREE.Vector3(outwardX, 1.1, 0.05);

//   g.lookAt(target);

//   // Fix orientation (cylinder default is vertical)
//   g.rotateX(Math.PI / 2);

//   return g;
// }



//     // ---------- Build mascot ----------
//     // model group
//     const model = new THREE.Group();

//     // Body — slightly wider cylinder (as requested)
//     const bodyRadius = 0.55;
//     const bodyHeight = 0.90;
//     const body = new THREE.Mesh(new THREE.CylinderGeometry(bodyRadius, bodyRadius, bodyHeight, 64), greenMat);
//     body.castShadow = true;
//     body.receiveShadow = true;

//     // Head: dome sphere + a thin flat ring to create the flat seam look
//     const headGroup = new THREE.Group();
    
//     // const dome = new THREE.Mesh(new THREE.SphereGeometry(0.55, 64, 32), greenMat);
//     // dome.castShadow = true;
//     // dome.receiveShadow = true;
//     // dome.position.y = 0.62;
//     const dome = new THREE.Mesh(
//   new THREE.SphereGeometry(
//     0.55,        // radius
//     48,          // width segments
//     32,          // height segments
//     0,           // phiStart
//     Math.PI * 2, // full circle
//     0,           // thetaStart
//     Math.PI / 2  // HALF sphere (top dome)
//   ),
//   greenMat
// );

// dome.castShadow = true;
// dome.receiveShadow = true;

// // KEEP YOUR ORIGINAL POSITION
// dome.position.y = 0.40;


//     // slight flat cylinder to make bottom of dome look flattened
//     const headFlat = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.56, 0.06, 64), greenMat);
//     headFlat.position.y = 0.36;
//     headFlat.castShadow = true;
//     headFlat.receiveShadow = true;

//     headGroup.add(dome);

//     // Eyes (small black spheres with a faint emissive)
//     const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 12), eyeMat);
//     const eyeR = eyeL.clone();
//    // Eyes moved forward so they are fully visible on half-sphere dome
// eyeL.position.set(-0.18, 0.63, 0.56);
// eyeR.position.set(0.18, 0.63, 0.56);

//     headGroup.add(eyeL, eyeR);

//     // Antennas — medium thickness, short, slight outward tilt (~12°)
//    const antennaL = makeAntenna(-0.20);
// const antennaR = makeAntenna(0.20);
// headGroup.add(antennaL, antennaR);

//     headGroup.add(antennaL, antennaR);

//     // Position head on top of body (slightly overlapping)
//     headGroup.position.y = 0.10;

//     // Arms — straight, capsule-like, pointing downward and closer to body
//     const armRadius = 0.095;
//     const armLength = 0.72;
//     const armL = makeCapsule(armRadius, armLength, greenMat);
//     const armR = makeCapsule(armRadius, armLength, greenMat);

//     // keep arms vertical (pointing down). Place them slightly closer to body sides
//     armL.position.set(-(bodyRadius + 0.06), 0.0, 0);
//     armR.position.set((bodyRadius + 0.06), 0.0, 0);
//     // small rotation to align smooth seam outward slightly if needed
//     armL.rotation.z = 0;
//     armR.rotation.z = 0;

//     // Legs — short capsule like reference, centered under body with flat-ish bottom
//     const legRadius = 0.115;
//     const legLength = 0.46;
//     const legL = makeCapsule(legRadius, legLength, greenMat);
//     const legR = makeCapsule(legRadius, legLength, greenMat);
//     // position legs a bit inward to match the reference proportions
//     legL.position.set(-0.14, -1.02, 0);
//     legR.position.set(0.14, -1.02, 0);

//     // assemble groups
//     const bodyGroup = new THREE.Group();
//     bodyGroup.add(body, headGroup);

//     model.add(bodyGroup, armL, armR, legL, legR);

//     // set model base above ground
//     model.position.y = 0.4;

//     // add subtle contact shadow: a very soft dark disc under model
//     const shadowGeo = new THREE.CircleGeometry(0.9, 32);
//     const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, opacity: 0.08, transparent: true });
//     const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
//     shadowMesh.rotation.x = -Math.PI / 2;
//     shadowMesh.position.y = -1.14;
//     scene.add(shadowMesh);

//     scene.add(model);

//     // ---------- Animation ----------
//     let rafId = null;
//     const clock = new THREE.Clock();

//     function animate() {
//       const t = clock.getElapsedTime();
//       // slow yaw + small bob
//       model.rotation.y = t * 0.22;
//       model.position.y = 0.4 + Math.sin(t * 1.1) * 0.02;

//       renderer.render(scene, camera);
//       rafId = requestAnimationFrame(animate);
//     }
//     animate();

//     // ---------- Controls ----------
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.target.set(0, 0.15, 0);
//     controls.update();

//     // ---------- Resize ----------
//     const onResize = () => {
//       if (!container) return;
//       camera.aspect = container.clientWidth / container.clientHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(container.clientWidth, container.clientHeight);
//     };
//     window.addEventListener("resize", onResize);

//     // ---------- GLB Export ----------
//     window.exportAndroidGLB = () => {
//       try {
//         const exporter = new GLTFExporter();
//         // make sure world matrices are updated
//         scene.updateMatrixWorld(true);
//         exporter.parse(
//           model,
//           (result) => {
//             // result may be JSON or ArrayBuffer if binary
//             if (result instanceof ArrayBuffer) {
//               const blob = new Blob([result], { type: "model/gltf-binary" });
//               const url = URL.createObjectURL(blob);
//               const a = document.createElement("a");
//               a.href = url;
//               a.download = "android.glb";
//               a.click();
//               URL.revokeObjectURL(url);
//             } else {
//               // JSON glTF
//               const output = JSON.stringify(result, null, 2);
//               const blob = new Blob([output], { type: "application/json" });
//               const url = URL.createObjectURL(blob);
//               const a = document.createElement("a");
//               a.href = url;
//               a.download = "android.gltf";
//               a.click();
//               URL.revokeObjectURL(url);
//             }
//           },
//           { binary: true }
//         );
//       } catch (err) {
//         console.error("Export error:", err);
//         alert("Export failed — check console.");
//       }
//     };

//     // ---------- Cleanup ----------
//     return () => {
//       cancelAnimationFrame(rafId);
//       window.removeEventListener("resize", onResize);
//       if (controls) controls.dispose();
//       if (renderer && renderer.domElement) {
//         container.removeChild(renderer.domElement);
//       }
//       // dispose geometries & materials (optional thorough cleanup)
//       scene.traverse((obj) => {
//         if (obj.isMesh) {
//           obj.geometry?.dispose?.();
//           obj.material?.dispose?.();
//         }
//       });
//     };
//   }, []);

//   return (
//     <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
//       <div ref={mountRef} style={{ flex: 1 }} />
//       <div style={{ padding: 16, textAlign: "center", background: "transparent" }}>
//         <button
//           onClick={() => {
//             if (window.exportAndroidGLB) window.exportAndroidGLB();
//             else alert("Exporter not ready yet — wait a second and retry.");
//           }}
//           style={{
//             background: "#06E312",
//             color: "#000",
//             padding: "12px 20px",
//             borderRadius: 10,
//             border: "none",
//             cursor: "pointer",
//             fontWeight: 700,
//             boxShadow: "0 6px 18px rgba(6,227,18,0.14)",
//           }}
//         >
//           Download Android.glb
//         </button>
//       </div>
//     </div>
//   );
// }
