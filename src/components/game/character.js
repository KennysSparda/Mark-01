// character.js
import * as THREE from 'three';

export const createCharacter = () => {
  // Base triangular
  const baseGeometry = new THREE.CylinderGeometry(0, 2, 2, 3, 1);
  const baseMaterial = new THREE.MeshPhongMaterial({ color: 0x4e00ff, emissive: 0x3400ff });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);

  // Pirâmide superior
  const coneGeometry1 = new THREE.ConeGeometry(2, 4, 3);
  const coneMaterial1 = new THREE.MeshPhongMaterial({ color: 0x4e00ff, emissive: 0x3400ff });
  const cone1 = new THREE.Mesh(coneGeometry1, coneMaterial1);
  cone1.position.set(0, 3, 0); // Ajuste a posição para alinhar a base

  // Pirâmide inferior
  const coneGeometry2 = new THREE.ConeGeometry(2, 4, 3);
  const coneMaterial2 = new THREE.MeshPhongMaterial({ color: 0x4e00ff, emissive: 0x3400ff });
  const cone2 = new THREE.Mesh(coneGeometry2, coneMaterial2);
  cone2.position.set(0, -1, 0); // Ajuste a posição para alinhar a base
  cone2.rotation.x = Math.PI; // Inverta a rotação para alinhar as bases

  // Grupo para unir as pirâmides
  const character = new THREE.Group();
  character.add(base, cone1, cone2);

  return character;
};

export const rotateCharacter = (character) => {
  character.rotation.y += 0.01;
};
