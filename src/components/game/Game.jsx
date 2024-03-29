import React, { useState, useEffect } from 'react';
import { createScene, disposeRenderer } from './engine';
import { createCharacter, animationCharacter } from './character';
import { createParticles, updateParticles } from './stars';
import { setupKeyboardControls } from './controller';
import Hud from '../hud/Hud';
import NavigationControls from '../NavigationControls/NavigationControls'
import * as THREE from 'three';

export default function Game() {
  const [velocity, setVelocity] = useState(0);

  const character = createCharacter();

  // Adicionar camadas de partículas em um array
  const particlesArray = [
    createParticles(0xffffff, 2, 1000),
    createParticles(0x0000ff, 1, 5000),
    createParticles(0xff00ff, 0.5, 10000),
  ];

  useEffect(() => {
    // Configuração do Three.js
    const { scene, camera, renderer } = createScene();


    scene.add(character);
    animationCharacter(character);



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
        updateParticles(particles, 0); // Ajuste a velocidade conforme necessário
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
      <NavigationControls character={character} particlesArray={particlesArray} setVelocity={setVelocity} />
    </div>
  );
}
