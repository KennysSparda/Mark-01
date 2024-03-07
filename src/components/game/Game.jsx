import React, { useState, useEffect } from 'react';
import { createScene, disposeRenderer } from './engine';
import { createCharacter, animationCharacter } from './character';
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
    animationCharacter(character);

    // Adicionar camadas de partículas em um array
    const particlesArray = [
      createParticles(0x0000ff, 0.1, 1000),
      createParticles(0xff00ff, 0.1, 1000),
      createParticles(0xffffff, 0.1, 1000),
    ];

    // Adicionar as partículas à cena
    particlesArray.forEach((particles) => {
      scene.add(particles);
    });

    // Configuração inicial da câmera
    camera.position.z = 30;

    // Configurar controles do teclado
    setupKeyboardControls(character, particlesArray, setVelocity);

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);

      // Atualizar as partículas
      particlesArray.forEach((particles) => {
        updateParticles(particles, 3); // Ajuste a velocidade conforme necessário
      });

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
      <Hud velocity={velocity} />
    </div>
  );
}
