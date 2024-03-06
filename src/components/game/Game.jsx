import React, { useState, useEffect } from 'react';
import { createScene, disposeRenderer } from './engine';
import { createCharacter } from './character';
import { createParticles, updateParticles } from './stars';
import { setupKeyboardControls } from './controller';
import Hud from '../hud/Hud';
import * as THREE from 'three';

export default function Game() {
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    // Configuração do Three.js
    const { scene, camera, renderer } = createScene();

    const character = createCharacter();
    scene.add(character);

    // Adicionar camadas de partículas
    const particles1 = createParticles(0x0000ff, 9, 30);
    scene.add(particles1);
    const particles2 = createParticles(0xffffff, 0.1, 1000);
    scene.add(particles2);
    const particles3 = createParticles(0x0000ff, 3, 10);
    scene.add(particles3);
    const particles4 = createParticles(0x00ff00, 5, 10);
    scene.add(particles4);
    const particles5 = createParticles(0xff00ff, 10, 15);
    scene.add(particles5);

    // Configuração inicial da câmera
    camera.position.z = 30;

    // Configurar controles do teclado
     setupKeyboardControls(character, particles1, setVelocity);
     setupKeyboardControls(character, particles2, setVelocity);
     setupKeyboardControls(character, particles3, setVelocity);
     setupKeyboardControls(character, particles4, setVelocity);
     setupKeyboardControls(character, particles5, setVelocity);

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    // Limpar o renderer ao desmontar o componente
    return () => {
      disposeRenderer(renderer);
    };
  }, []);

  return (
    <div>
      <div id="three-container" />
      <Hud velocity={velocity} /> {/* Renderizar o componente Hud */}
    </div>
  );
}