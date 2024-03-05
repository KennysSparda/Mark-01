import React, { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-8">Menu</h1>

      <Link href="/game">
        <a className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Novo Jogo</a>
      </Link>

      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setShowSubMenu(!showSubMenu)}
      >
        Opções
      </button>

      {showSubMenu && (
        <div className="flex flex-col items-center mt-4">
          <button className="bg-gray-600 text-white px-4 py-2 rounded mb-2">
            Configurações
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded mb-2">
            Áudio
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded">
            Controles
          </button>
        </div>
      )}

      <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
        Continuar Jogo
      </button>

      <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">
        Sair do Jogo
      </button>
    </div>
  );
};

export default Menu;
