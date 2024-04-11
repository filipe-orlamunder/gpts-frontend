import React, { useState } from 'react';
import './AdminFunctions.css';

function AdminFunctions() {
  const [activeOption, setActiveOption] = useState('');
  const [selectedInstitution, setSelectedInstitution] = useState('');
  
  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const handleInstitutionChange = (event) => {
    setSelectedInstitution(event.target.value);
  };

  return (
    <div className="admin-container">
      <div className="admin-menu">
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
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="matricula">Número de Matrícula:</label>
                <input type="text" id="matricula" required />
              </div>
              <div className="form-group">
                <label htmlFor="institution">Instituição de Ensino:</label>
                <select id="institution" value={selectedInstitution} onChange={handleInstitutionChange} required>
                  <option value="">Selecione a instituição</option>
                  <option value="Universidade Tecnológica Federal do Sul dos Campos">Universidade Tecnológica Federal do Sul dos Campos</option>
                  <option value="Universidade Nacional de Ciências Aplicadas">Universidade Nacional de Ciências Aplicadas</option>
                  <option value="Universidade Federal de Tecnologia Ambiental">Universidade Federal de Tecnologia Ambiental</option>
                  <option value="Universidade Federal de Santa Catarina">Universidade Federal de Santa Catarina</option>
                  <option value="Universidade do Estado de Santa Catarina">Universidade do Estado de Santa Catarina</option>
                </select>
              </div>
              <button type="submit">Cadastrar</button>
            </form>
          </div>
        )}
        {activeOption === 'remove' && (
          <div>
            <h2>Remover Alunos</h2>
            <form>
              <div className="form-group">
                <label htmlFor="emailRemove">Email:</label>
                <input type="email" id="emailRemove" required />
              </div>
              <button type="submit">Remover</button>
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