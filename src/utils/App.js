import React, { useEffect, useState } from 'react';
import Login from '../screens/UserLogin';
import Presentation from '../screens/Presentation';
import Questions from '../screens/Questions';
import LoginAdmin from '../screens/AdminLogin';
import EndScreen from '../screens/EndScreen';
import AdminFunctions from './AdminFunctions';
import axios from 'axios';

function AuthGuard({children}) {

  useEffect(() => {
    axios.get('http://localhost:3000/users', {headers: {
      Authorization: 'Bearer ' + localStorage.token
    }}).then(({data}) => {
      localStorage.setItem('user', data)
    }).catch(() => {
      alert('Sessão expirada!')
      localStorage.clear();
      window.location.href = '/login'
    })
  }, [])

  if(!localStorage.token) {
    window.location.href = '/login'
    return null;
  }

  return children
}

function App() {
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    setCurrentPage(window.location.pathname.replace('/', ''))
  }, [])

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
      {currentPage === 'presentation' && <AuthGuard><Presentation onNext={handleNextPage} /></AuthGuard>}
      {currentPage === 'questions' && <AuthGuard><Questions onEnd={handleNextPage} /></AuthGuard>}
      {currentPage === 'admin' && <LoginAdmin onBack={handleBackToLogin} />}
      {currentPage === 'end' && <AuthGuard><EndScreen onBackToLogin={handleBackToLogin} /></AuthGuard>}
      {currentPage === 'admin-functions' && <AuthGuard><AdminFunctions onBack={handleBackToLogin} /></AuthGuard>}
    </div>
  );
}

export default App;
