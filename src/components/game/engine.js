// engine.js
import * as THREE from 'three';

export const createScene = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('three-container').appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffff00, 5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0x00ffff, 5);
  directionalLight.position.set(10, 10, 10);
  scene.add(directionalLight);

  return { scene, camera, renderer };
};

export const disposeRenderer = (renderer) => {
  renderer.dispose();
};
