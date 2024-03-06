export const setupKeyboardControls = (character, particles, setVelocity) => {
    const keys = {};
    let speed = 1; // Velocidade inicial
    const accelerationRate = 1; // Taxa de aceleração
    const decelerationRate = 0.5; // Taxa de desaceleração
  
    const updateParticles = () => {
      // Lógica de atualização das partículas
      const positions = particles.geometry.attributes.position.array;
  
      for (let i = 2; i < positions.length; i += 3) {
        positions[i] += speed; // Ajuste a velocidade conforme necessário
  
        // Se a partícula passar a câmera, reposicione em um lugar aleatório
        if (positions[i] > 1000) {
          positions[i] = -1000;
          positions[i - 2] = (Math.random() - 0.5) * 2000;
          positions[i - 1] = (Math.random() - 0.5) * 2000;
        }
      }
  
      particles.geometry.attributes.position.needsUpdate = true;
    };
  
    const handleKeyDown = (event) => {
      keys[event.key] = true;
    };
  
    const handleKeyUp = (event) => {
      keys[event.key] = false;
    };
  
    const updateCharacter = () => {
      // Lógica de atualização do personagem
      if (keys['ArrowRight']) {
        // Rotacionar a nave para a esquerda
        character.rotation.y += 0.05;
      }
  
      if (keys['ArrowLeft']) {
        // Rotacionar a nave para a direita
        character.rotation.y -= 0.05;
      }
  
      if (keys['ArrowDown']) {
        // Rotacionar a nave para cima
        character.rotation.x += 0.05;
      }
  
      if (keys['ArrowUp']) {
        // Rotacionar a nave para baixo
        character.rotation.x -= 0.05;
      }
  
      if (keys['w']) {
        speed = Math.min(speed + accelerationRate, 100); // Limitar a velocidade máxima
        setVelocity(speed); // Atualizar o estado da velocidade
      } else if (keys['s']) {
        speed = Math.max(speed - decelerationRate, 0);
        setVelocity(speed); // Atualizar o estado da velocidade
      }
    };
  
    const animate = () => {
      updateCharacter();
      updateParticles();
      requestAnimationFrame(animate);
    };
  
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
  
    animate();
  };
  