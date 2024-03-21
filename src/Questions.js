import React, { useState } from 'react';
import './styles.css';

function Questions({ onEnd }) {
  const [nota, setNota] = useState(0);

  const handleNotaChange = (newNota) => {
    setNota(newNota);
  };

  const handleNextClick = () => {
    // Aqui você pode adicionar a lógica para processar a nota antes de prosseguir para a próxima etapa
    console.log("Nota selecionada:", nota);
    onEnd(); // Chama a função fornecida pela prop para avançar para a próxima etapa
  };

  return (
    <div className="container">
      <h1 className="purple">Estrutura física da universidade:</h1>
      <p className="question-text">Como você avalia a infraestrutura física da sua universidade em termos de acessibilidade, manutenção e conforto?</p>
      <div className="radio-group">
        <label>
          <input type="radio" name="nota" value="5" onChange={() => handleNotaChange(5)} checked={nota === 5} />
          5: Excelente - Total satisfação.
        </label>
        <br />
        <label>
          <input type="radio" name="nota" value="4" onChange={() => handleNotaChange(4)} checked={nota === 4} />
          4: Muito bom - Com espaço para melhorias.
        </label>
        <br />
        <label>
          <input type="radio" name="nota" value="3" onChange={() => handleNotaChange(3)} checked={nota === 3} />
          3: Bom - Algumas melhorias necessárias.
        </label>
        <br />
        <label>
          <input type="radio" name="nota" value="2" onChange={() => handleNotaChange(2)} checked={nota === 2} />
          2: Regular - Melhorias significativas necessárias.
        </label>
        <br />
        <label>
          <input type="radio" name="nota" value="1" onChange={() => handleNotaChange(1)} checked={nota === 1} />
          1: Insatisfatório - Mudanças drásticas necessárias.
        </label>
      </div>
      <br />
      <button onClick={handleNextClick}>Prosseguir</button>
    </div>
  );
}

export default Questions;
