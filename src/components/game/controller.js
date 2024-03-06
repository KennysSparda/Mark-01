// controller.js
export const setupKeyboardControls = (character) => {
    const keys = {}; // Armazena as teclas pressionadas
  
    const handleKeyDown = (event) => {
      keys[event.key] = true;
  
      // Adicione lógica adicional se necessário
    };
  
    const handleKeyUp = (event) => {
      keys[event.key] = false;
  
      // Adicione lógica adicional se necessário
    };
  
    const updateCharacter = () => {
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
    };
  
    // Adicione event listeners para as teclas de seta
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
  
    // Retorne a função de atualização do personagem para ser chamada na animação
    return updateCharacter;
  };
  