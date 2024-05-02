import React, { useState } from 'react';
import './styles.css';
import EndScreen from './EndScreen';

function Question1({ onNext }) {
  const [nota, setNota] = useState(0);

  const handleNotaChange = (event) => {
    setNota(parseInt(event.target.value));
  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="purple">Estrutura física da universidade:</h1>
      <p className="question-text"><strong>Considerando a importância da infraestrutura física para a qualidade da experiência acadêmica,<br></br> como você avalia a infraestrutura da universidade em termos de acessibilidade, manutenção e conforto?<br></br> Ao ponderar sobre essa questão, leve em consideração aspectos como a facilidade de acesso para todos os membros da <br></br>comunidade acadêmica, a eficácia da manutenção das instalações e o nível de conforto proporcionado<br></br> em diferentes áreas do campus.</strong></p>
      <br></br>
      <div className="radio-group">
        {[1, 2, 3, 4, 5].map((option) => (
          <div key={option} className="radio-option">
            <input type="radio" name="nota" value={option} onChange={handleNotaChange} checked={nota === option} />
            <label className="radio-label">
              {option}: {getOptionText(option)}
            </label>
          </div>
        ))}
      </div>
      <br />
      <button className="questions-button" onClick={onNext}>Prosseguir</button>
    </div>
  );
}

function Question2({ onNext }) {
  const [nota, setNota] = useState(0);

  const handleNotaChange = (event) => {
    setNota(parseInt(event.target.value));
  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="purple">Limpeza dos ambientes:</h1>
      <p className="question-text"><strong>Considerando a importância da higiene e manutenção dos ambientes para garantir um ambiente propício ao aprendizado e à pesquisa,<br></br> como você avalia a higiene e manutenção dos ambientes da sua universidade, incluindo banheiros, salas de aula e laboratórios?<br></br> Ao ponderar sobre essa questão, leve em consideração a limpeza e conservação dos espaços, a disponibilidade de materiais e equipamentos em<br></br> condições adequadas de uso, bem como a eficiência dos serviços de manutenção em responder prontamente<br></br> as necessidades emergenciais.</strong></p>
      <br></br>
      <div className="radio-group">
        {[1, 2, 3, 4, 5].map((option) => (
          <div key={option} className="radio-option">
            <input type="radio" name="nota" value={option} onChange={handleNotaChange} checked={nota === option} />
            <label className="radio-label">
              {option}: {getOptionText(option)}
            </label>
          </div>
        ))}
      </div>
      <br />
      <button className="questions-button" onClick={onNext}>Prosseguir</button>
    </div>
  );
}

function Question3({ onNext }) {
  const [nota, setNota] = useState(0);

  const handleNotaChange = (event) => {
    setNota(parseInt(event.target.value));
  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="purple">Experiência com as aulas:</h1>
      <p className="question-text"><strong>Considerando a relevância do desempenho e competência dos professores para a qualidade do ensino e aprendizado,<br></br> como você avalia o desempenho e competência dos professores em seu curso?<br></br> Ao refletir sobre essa questão, leve em consideração aspectos como a clareza na apresentação do conteúdo, <br></br>a capacidade de estimular o interesse dos alunos, a disponibilidade para tirar dúvidas e fornecer<br></br> feedback construtivo, bem como a expertise no campo de atuação.</strong></p>
      <br></br>
      <div className="radio-group">
        {[1, 2, 3, 4, 5].map((option) => (
          <div key={option} className="radio-option">
            <input type="radio" name="nota" value={option} onChange={handleNotaChange} checked={nota === option} />
            <label className="radio-label">
              {option}: {getOptionText(option)}
            </label>
          </div>
        ))}
      </div>
      <br />
      <button className="questions-button" onClick={onNext}>Prosseguir</button>
    </div>
  );
}

function Question4({ onNext }) {
  const [nota, setNota] = useState(0);

  const handleNotaChange = (event) => {
    setNota(parseInt(event.target.value));
  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="purple">Experiência com as aulas:</h1>
      <p className="question-text"><strong>Considerando a importância da abordagem de ensino para o desenvolvimento acadêmico dos estudantes,<br></br> como você avalia a abordagem de ensino adotada pelos professores?<br></br> Ao refletir sobre essa questão, leve em consideração aspectos como a diversidade de métodos pedagógicos utilizados,<br></br> a interação em sala de aula, o estímulo ao pensamento crítico e a aplicação prática do conteúdo.</strong></p>
      <br></br>
      <br></br>
      <div className="radio-group">
        {[1, 2, 3, 4, 5].map((option) => (
          <div key={option} className="radio-option">
            <input type="radio" name="nota" value={option} onChange={handleNotaChange} checked={nota === option} />
            <label className="radio-label">
              {option}: {getOptionText(option)}
            </label>
          </div>
        ))}
      </div>
      <br />
      <button className="questions-button" onClick={onNext}>Prosseguir</button>
    </div>
  );
}

function Question5({ onNext }) {
  const [nota, setNota] = useState(0);

  const handleNotaChange = (event) => {
    setNota(parseInt(event.target.value));
  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="purple">Experiência com as aulas:</h1>
      <p className="question-text"><strong>Considerando a pontualidade para o bom funcionamento do ambiente acadêmico, como você avalia o cumprimento<br></br> dos horários e cronogramas estabelecidos no calendário acadêmico da instituição?<br></br> Ao ponderar sobre essa questão, leve em consideração aspectos como a regularidade das aulas e atividades, a disponibilidade dos professores<br></br>nos horários previstos, bem como a atualização e transparência das informações<br></br> relacionadas aos eventos acadêmicos.</strong></p>
      <br></br>
      <div className="radio-group">
        {[1, 2, 3, 4, 5].map((option) => (
          <div key={option} className="radio-option">
            <input type="radio" name="nota" value={option} onChange={handleNotaChange} checked={nota === option} />
            <label className="radio-label">
              {option}: {getOptionText(option)}
            </label>
          </div>
        ))}
      </div>
      <br />
      <button className="questions-button" onClick={onNext}>Prosseguir</button>
    </div>
  );
}

function getOptionText(option) {
  switch (option) {
    case 1:
      return "Insatisfatório - Mudanças drásticas necessárias.";
    case 2:
      return "Regular - Melhorias significativas necessárias.";
    case 3:
      return "Bom - Algumas melhorias necessárias.";
    case 4:
      return "Muito bom - Com espaço para melhorias.";
    case 5:
      return "Excelente - Total satisfação.";
    default:
      return "";
  }
}

function Questions() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    if (currentPage === 5) {
      setCurrentPage('end');
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      {currentPage === 1 && <Question1 onNext={handleNext} />}
      {currentPage === 2 && <Question2 onNext={handleNext} />}
      {currentPage === 3 && <Question3 onNext={handleNext} />}
      {currentPage === 4 && <Question4 onNext={handleNext} />}
      {currentPage === 5 && <Question5 onNext={handleNext} />}
      {currentPage === 'end' && <EndScreen />}
    </div>
  );
}

export default Questions;
