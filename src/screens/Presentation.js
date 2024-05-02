import React from 'react';
import './styles.css';

function Presentation({ onNext }) {
  return (
    <div className="container">
      <br></br>
      <br></br>
      <h1>Introdução da plataforma:</h1>
      <p><strong>O software GPTS foi desenvolvido com o propósito de oferecer uma ferramenta imparcial para a pesquisa<br />
        do melhor lugar para estudar. Todas as respostas são mantidas de forma anônima, garantindo a confidencialidade<br />
        dos participantes. As instituições de ensino não terão acesso às informações.</strong></p>

      <p><strong>Por favor, responda ao formulário com atenção, seguindo os critérios estabelecidos abaixo:</strong></p>
      <p>5: Excelente - Total satisfação.<br />
        4: Muito bom - Com espaço para melhorias.<br />
        3: Bom - Algumas melhorias necessárias.<br />
        2: Regular - Melhorias significativas necessárias.<br />
        1: Insatisfatório - Mudanças drásticas necessárias.</p>
      <button className="presentation-button" onClick={onNext}>Prosseguir</button>
    </div>
  );
}

export default Presentation;
