import React, { useState } from 'react';
import './AdminFunctions.css';

function AdminFunctions() {
  const [activeOption, setActiveOption] = useState('');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="admin-container">
      <div className="admin-menu">
        <div className={`menu ${activeOption === '' ? 'closed' : ''}`} onClick={() => handleOptionClick('')}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul>
          <li onClick={() => handleOptionClick('register')}>Cadastrar Alunos</li>
          <li onClick={() => handleOptionClick('remove')}>Remover Alunos</li>
          <li onClick={() => handleOptionClick('report')}>Emissão de Relatório</li>
        </ul>
      </div>
      <div className="admin-content">
        {activeOption === 'register' && (
          <div>
            <h2>Cadastrar Alunos</h2>
            <form>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
              <label htmlFor="matricula">Número de Matrícula:</label>
              <input type="text" id="matricula" required />
              <button>Cadastrar</button>
            </form>
          </div>
        )}
        {activeOption === 'remove' && (
          <div>
            <h2>Remover Alunos</h2>
            <form>
              <label htmlFor="emailRemove">Email:</label>
              <input type="email" id="emailRemove" required />
              <button>Remover</button>
            </form>
          </div>
        )}
        {activeOption === 'report' && (
          <div>
            <h2>Emissão de Relatório</h2>
            <button>Emitir Relatório</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminFunctions;
