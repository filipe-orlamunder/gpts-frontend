import React, { useState } from 'react';
import './styles.css';
import EndScreen from './EndScreen'; // Importe o componente EndScreen

function Question1({ onNext }) {
const [nota, setNota] = useState(0);

const handleNotaChange = (event) => {
setNota(parseInt(event.target.value));
};

return (
<div className="container">
  <h1 className="purple">Estrutura física da universidade:</h1>
  <p className="question-text">Como você avalia a infraestrutura física da sua universidade em termos de acessibilidade, manutenção e conforto?</p>
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
  <button onClick={onNext}>Prosseguir</button>
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
  <h1 className="purple">Limpeza dos ambientes:</h1>
  <p className="question-text">Como você avalia a higiene e manutenção dos ambientes da universidade, incluindo banheiros, salas de aula e laboratórios?</p>
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
  <button onClick={onNext}>Prosseguir</button>
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
  <h1 className="purple">Experiência com as aulas:</h1>
  <p className="question-text">Como você avalia o desempenho e competência dos professores em seu curso?</p>
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
  <button onClick={onNext}>Prosseguir</button>
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
  <h1 className="purple">Experiência com as aulas:</h1>
  <p className="question-text">Como você avalia a abordagem de ensino adotada pelos professores e instrutores na instituição?</p>
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
  <button onClick={onNext}>Prosseguir</button>
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
  <h1 className="purple">Experiência com as aulas:</h1>
  <p className="question-text">Como você avalia o cumprimento dos horários e cronogramas estabelecidos no calendário acadêmico da instituição?</p>
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
  <button onClick={onNext}>Prosseguir</button>
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
  {currentPage === 'end' && <EndScreen />} {/* Renderize EndScreen quando currentPage for 'end' */}
</div>
);
}

export default Questions;
