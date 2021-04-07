import './style.css';
// import * as THREE from 'three';
import { PerspectiveCamera, Scene, BoxGeometry, MeshBasicMaterial, Mesh, WebGLRenderer } from 'three';

// Scene
const scene = new Scene();

// Red cube
const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({ color: 0xff0000 });
const mesh = new Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600
};

// Camera
const camera = new PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.querySelector('#webgl-wrapper');
const renderer = new WebGLRenderer({
  canvas
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);