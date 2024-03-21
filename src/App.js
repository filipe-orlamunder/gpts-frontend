import React, { useState } from 'react';
import './styles.css';
import Login from './Login';
import Presentation from './Presentation';
import Questions from './Questions';
import LoginAdmin from './LoginAdmin';
import EndScreen from './EndScreen';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleNextPage = () => {
    if (currentPage === 'login') {
      setCurrentPage('presentation');
    } else if (currentPage === 'presentation') {
      setCurrentPage('questions');
    } else if (currentPage === 'questions') {
      setCurrentPage('end');
    }
  };

  const handleAdminLogin = () => {
    setCurrentPage('admin');
  };

  const handleBackToLogin = () => {
    setCurrentPage('login');
  };

  return (
    <div>
      {currentPage === 'login' && <Login onAdminLogin={handleAdminLogin} onNext={handleNextPage} />}
      {currentPage === 'presentation' && <Presentation onNext={handleNextPage} />}
      {currentPage === 'questions' && <Questions onEnd={handleNextPage} />}
      {currentPage === 'admin' && <LoginAdmin onBack={handleBackToLogin} />}
      {currentPage === 'end' && <EndScreen onBackToLogin={handleBackToLogin} />}
    </div>
  );
}

export default App;
