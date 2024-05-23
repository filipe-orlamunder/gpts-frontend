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


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
