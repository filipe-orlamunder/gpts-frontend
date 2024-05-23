import React, { useState } from 'react';
import './styles.css';
import Login from './Login';
import Presentation from './Presentation';
import Questions from './Questions';
import Admin from './Admin';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleNextPage = () => {
    if (currentPage === 'login') {
      setCurrentPage('presentation');
    } else if (currentPage === 'presentation') {
      setCurrentPage('questions');
    } else if (currentPage === 'questions') {
      setCurrentPage('admin');
    }
  };

  const handleAdminLogin = () => {
    setCurrentPage('admin');
  };

  const handleReport = () => {
    // Adicionar a lógica para gerar o relatório
    alert('Relatório gerado com sucesso!');
  };

  return (
    <div>
      {currentPage === 'login' && <Login onAdminLogin={handleAdminLogin} onNext={handleNextPage} />}
      {currentPage === 'presentation' && <Presentation onNext={handleNextPage} />}
      {currentPage === 'questions' && <Questions onEnd={handleNextPage} />}
      {currentPage === 'admin' && <Admin onReport={handleReport} />}
    </div>
  );
}

export default App;
