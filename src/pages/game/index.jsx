// /pages/jogo/index.jsx
import React from 'react';
import Engine from '../../components/game/Game';

const Jogo = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">

      {/* Adicione outros elementos da página do jogo aqui, se necessário */}
      
      <Engine />
    </div>
  );
};

export default Jogo;
