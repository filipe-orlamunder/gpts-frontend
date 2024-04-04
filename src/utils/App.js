import React, { useState } from 'react';
import Login from '../screens/UserLogin';
import Presentation from '../screens/Presentation';
import Questions from '../screens/Questions';
import LoginAdmin from '../screens/AdminLogin';
import EndScreen from '../screens/EndScreen';
import AdminFunctions from './AdminFunctions';

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
      {currentPage === 'admin-functions' && <AdminFunctions onBack={handleBackToLogin} />}
    </div>
  );
}

export default App;
