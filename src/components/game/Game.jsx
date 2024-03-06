// Game.jsx
import React, { useEffect } from 'react';
import { createScene, disposeRenderer } from './engine';
import { createCharacter, rotateCharacter } from './character';
import { createParticles, updateParticles } from './stars';
import { setupKeyboardControls } from './controller';
import * as THREE from 'three';

export default function Game() {
  useEffect(() => {
    // Configuração do Three.js
    const { scene, camera, renderer } = createScene();

    const character = createCharacter();
    scene.add(character);

    // Adicionar camadas de partículas
    const particles1 = createParticles(0x4e00ff, 0.05, 1000);
    scene.add(particles1);

    // Configuração inicial da câmera
    camera.position.z = 30;

    // Configurar controles do teclado
    const updateCharacter = setupKeyboardControls(character);

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);

      // Atualizar o personagem com os controles do teclado
      updateCharacter();

      // Atualizar as camadas de partículas para simular movimento da câmera através delas
      updateParticles(particles1);

      renderer.render(scene, camera);
    };

    animate();

    // Limpar o renderer ao desmontar o componente
    return () => {
      disposeRenderer(renderer);
    };
  }, []);

  return <div id="three-container" />;
}
