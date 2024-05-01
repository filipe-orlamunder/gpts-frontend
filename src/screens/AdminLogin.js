import React, { useState } from 'react';
import './styles.css';
import AdminFunctions from '../utils/AdminFunctions';

function LoginAdmin({ onBack }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div className="body">
      <div className="rectangle">
        {!loggedIn ? (
          <div className="container">
            <h1 className="purple">Prosseguir como administrador</h1>
            <h5 className="black">Faça login como administrador para <br />o controle interno da plataforma:</h5>
            <form onSubmit={handleLogin}>
              <label htmlFor="email">E-mail: </label>
              <input type="email" id="email" name="email" />
              <br />
              <br />
              <label htmlFor="senha">Senha: </label>
              <input type="text" id="senha" name="senha" />
              <br />
              <br />
              <button type="submit">Login</button>
              <br />
              <br />
            </form>
            <p className="admin-text">É um aluno? <a href="#" onClick={onBack}>Clique aqui.</a></p>
          </div>
        ) : (
          <AdminFunctions onBack={onBack} />
        )}
      </div>
    </div>
  );
}

export default LoginAdmin;
