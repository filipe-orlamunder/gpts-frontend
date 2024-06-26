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
          <li onClick={() => handleOptionClick('register')}>Cadastrar alunos</li>
          <li onClick={() => handleOptionClick('remove')}>Remover alunos</li>
          <li onClick={() => handleOptionClick('report')}>Emissão de relatórios</li>
        </ul>
      </div>
      <div className="admin-content">
        <br></br>
        <h2 class="apresentacao">{activeOption === '' ? 'Selecione no menu lateral uma opção' : ''}</h2>

        {activeOption === 'register' && (
          <div>
            <h2>Cadastrar um aluno na plataforma:</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="matricula">Número de matrícula:</label>
                <input type="text" id="matricula" required />
              </div>
              <div className="form-group">
                <label htmlFor="institution">Instituição de ensino:</label>
                <select id="institution" value={selectedInstitution} onChange={handleInstitutionChange} required>
                  <option value="">Selecione a instituição</option>
                  <option value="Universidade Federal da Bahia">Universidade Federal da Bahia</option>
                  <option value="Universidade Nacional de Ciências Aplicadas">Universidade Nacional de Ciências Aplicadas</option>
                  <option value="Universidade Federal de Tecnologia Ambiental">Universidade Federal de Tecnologia Ambiental</option>
                  <option value="Universidade Federal de Santa Catarina">Universidade Federal de Santa Catarina</option>
                  <option value="Universidade do Estado de Santa Catarina">Universidade do Estado de Santa Catarina</option>
                </select>
              </div>
              <button className="admin-button" type="submit">Cadastrar</button>
            </form>
          </div>
        )}
        {activeOption === 'remove' && (
          <div>
            <h2>Remover o cadastro de um aluno:</h2>
            <form>
              <div className="form-group">
                <label htmlFor="emailRemove">E-mail:</label>
                <input type="email" id="emailRemove" required />
              </div>
              <button className="admin-button" type="submit">Remover</button>
            </form>
          </div>
        )}
        {activeOption === 'report' && (
          <div>
            <h2>Emitir relatório:</h2>
            <button className="admin-button">Emitir em PDF</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminFunctions;
