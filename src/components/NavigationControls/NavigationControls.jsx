// No arquivo NavigationControls.jsx

import React, { useEffect } from 'react';
import { setupKeyboardControls } from '../game/controller';

const NavigationControls = ({ character, particlesArray, setVelocity }) => {
  const cleanUpRef = React.useRef();

  const handleButtonStart = (key) => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key }));
  };

  const handleButtonEnd = (key) => {
    document.dispatchEvent(new KeyboardEvent('keyup', { key }));
  };

  useEffect(() => {
    cleanUpRef.current = setupKeyboardControls(character, particlesArray, setVelocity);

    return () => {
      if (cleanUpRef.current) {
        cleanUpRef.current();
      }
    };
  }, [character, particlesArray, setVelocity]);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 10,
        left: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Botões estilizados para as setas */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <button
          onTouchStart={() => handleButtonStart('ArrowUp')}
          onTouchEnd={() => handleButtonEnd('ArrowUp')}
          style={buttonStyle}
        >
          &#8593;
        </button>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onTouchStart={() => handleButtonStart('ArrowLeft')}
          onTouchEnd={() => handleButtonEnd('ArrowLeft')}
          style={buttonStyle}
        >
          &#8592;
        </button>
        <button
          onTouchStart={() => handleButtonStart('ArrowDown')}
          onTouchEnd={() => handleButtonEnd('ArrowDown')}
          style={buttonStyle}
        >
          &#8595;
        </button>
        <button
          onTouchStart={() => handleButtonStart('ArrowRight')}
          onTouchEnd={() => handleButtonEnd('ArrowRight')}
          style={buttonStyle}
        >
          &#8594;
        </button>
      </div>

      {/* Botões estilizados para "w" e "s" */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <button
          onTouchStart={() => handleButtonStart('w')}
          onTouchEnd={() => handleButtonEnd('w')}
          style={buttonStyle}
        >
          W
        </button>
        <button
          onTouchStart={() => handleButtonStart('s')}
          onTouchEnd={() => handleButtonEnd('s')}
          style={buttonStyle}
        >
          S
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  width: '40px',
  height: '40px',
  fontSize: '16px',
};

export default NavigationControls;
