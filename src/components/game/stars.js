// stars.js
import * as THREE from 'three';

export const createParticles = (color, size, numParticles) => {
  const particleGeometry = new THREE.BufferGeometry();
  const particleMaterial = new THREE.PointsMaterial({ color, size });

  const particles = new THREE.Points(particleGeometry, particleMaterial);

  const particlePositions = new Float32Array(numParticles * 3);
  for (let i = 0; i < particlePositions.length; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 2000; // Distribua as estrelas em um grande intervalo
    particlePositions[i + 1] = (Math.random() - 0.5) * 2000;
    particlePositions[i + 2] = (Math.random() - 0.5) * 2000;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  return particles;
};

export const updateParticles = (particles, speed) => {
  const positions = particles.geometry.attributes.position.array;

  for (let i = 2; i < positions.length; i += 3) {
    positions[i] += speed; // Ajuste a velocidade como necessário

    // Se a partícula passar a câmera, reposicione em um lugar aleatório
    if (positions[i] > 1000) {
      positions[i] = -1000;
      positions[i - 2] = (Math.random() - 0.5) * 2000;
      positions[i - 1] = (Math.random() - 0.5) * 2000;
    }
  }

  particles.geometry.attributes.position.needsUpdate = true;
};

// Remova a função rotateParticles
