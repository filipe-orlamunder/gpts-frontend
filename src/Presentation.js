import React from 'react';

function Presentation({ onNext }) {
  return (
    <div className="container">
      <h2>Apresentação</h2>
      <p>Bem-vindo ao GPTS - Great Place to Study!</p>
      <button onClick={onNext}>Seguir</button>
    </div>
  );
}

export default Presentation;
