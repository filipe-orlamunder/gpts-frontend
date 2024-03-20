import React from 'react';

function Questions({ onEnd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicionar a lógica para enviar as respostas
    onEnd();
  };

  return (
    <div className="container">
      <h2>Pergunta</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nota">Nota (de 1 a 5):</label>
        <input type="number" id="nota" name="nota" min="1" max="5" required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Questions;
