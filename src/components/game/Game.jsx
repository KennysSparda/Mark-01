// ThreeJS.js
import React, { useEffect } from 'react';
import { createScene, disposeRenderer } from './engine';
import { createCharacter, rotateCharacter } from './character';
import { createParticles, createMainLine, updateMainLine, rotateParticles } from './stars';
import * as THREE from 'three';

export default function Game() {
  useEffect(() => {
    // Configuração do Three.js
    const { scene, camera, renderer } = createScene();

    // Adicionar um cubo giratório
    const character = createCharacter();
    scene.add(character);

    // Adicionar camadas de partículas e linha principal
    const particles1 = createParticles(0x4e00ff, 0.05, 1000);
    const particles2 = createParticles(0xffffff, 0.03, 1000);
    const particles3 = createParticles(0x00ff00, 0.02, 1000);
    const particles4 = createParticles(0xff0000, 0.04, 1000);
    const particles5 = createParticles(0xffff00, 0.03, 1000);
    const particles6 = createParticles(0x0000ff, 0.02, 1000);

    const mainLine = createMainLine();
    scene.add(mainLine);

    // Configuração inicial da câmera
    camera.position.z = 30;

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotacionar o cubo
      rotateCharacter(character);

      // Rotacionar as camadas de partículas
      rotateParticles(particles1);
      rotateParticles(particles2);
      rotateParticles(particles3);
      rotateParticles(particles4);
      rotateParticles(particles5);
      rotateParticles(particles6);

      // Atualizar a posição dos pontos da linha principal
      updateMainLine(mainLine);

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
