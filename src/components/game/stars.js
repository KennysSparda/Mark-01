// stars.js
import * as THREE from 'three';

export const createParticles = (color, size, maxRadius) => {
  const particleGeometry = new THREE.BufferGeometry();
  const particleMaterial = new THREE.PointsMaterial({ color, size });

  const particles = new THREE.Points(particleGeometry, particleMaterial);
  particles.rotation.y = Math.random() * Math.PI; // Rotacionar aleatoriamente para melhor visualização

  const particlePositions = new Float32Array(1000 * 3);
  for (let i = 0; i < particlePositions.length; i += 3) {
    const radius = Math.random() * maxRadius;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2 - 1) * 0.5);
    particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
    particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    particlePositions[i + 2] = radius * Math.cos(phi);
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  return particles;
};

export const createMainLine = () => {
  const mainLineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
  const mainLineGeometry = new THREE.BufferGeometry();
  const mainLinePositions = new Float32Array(12 * 3);
  mainLineGeometry.setAttribute('position', new THREE.BufferAttribute(mainLinePositions, 3));

  const mainLine = new THREE.Line(mainLineGeometry, mainLineMaterial);
  return mainLine;
};

export const updateMainLine = (mainLine) => {
  const time = Date.now() * 0.001;
  for (let i = 0; i < mainLine.geometry.attributes.position.array.length; i += 3) {
    mainLine.geometry.attributes.position.array[i] = Math.sin(time * (i / 6 + 1)) * 30;
    mainLine.geometry.attributes.position.array[i + 1] = Math.cos(time * (i / 6 + 1)) * 30;
    mainLine.geometry.attributes.position.array[i + 2] = 0;
  }

  mainLine.geometry.attributes.position.needsUpdate = true;
};

export const rotateParticles = (particles) => {
  particles.rotation.y += 0.005;
};
