import React from 'react';

const Hud = ({ velocity }) => {
  const integerVelocity = velocity.toFixed(2);

  // Cores baseadas na velocidade
  const getColor = () => {
    if (velocity > 30) {
      return 'red';
    } else if (velocity > 15) {
      return 'orange';
    } else {
      return 'green';
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'rgba(f, 0, f, 0.8)',
        padding: '15px',
        borderRadius: '15px',
        color: 'white',
        border: '4px solid white',
        boxShadow: '0px 0px 20px 0px purple',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
          Velocidade Atual: {integerVelocity}
        </p>
        <div
          style={{
            width: '150px',
            height: '10px',
            backgroundColor: getColor(),
            marginTop: '8px',
            borderRadius: '5px',
          }}
        ></div>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPGUZQi6kLtL-eHZm-3S3h9Ljwy-bR1txLA9U9y1CvQ&s" // Substitua pela URL do ícone desejado
        alt="Velocity Icon"
        style={{ width: '40px', height: '40px', marginLeft: '15px' }}
      />
    </div>
  );
};

export default Hud;
