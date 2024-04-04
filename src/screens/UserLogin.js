import React, { useState } from 'react';
import './styles.css';
import Admin from './AdminLogin';

function Login({ onAdminLogin, onNext }) {
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const handleAdminLoginClick = () => {
    setShowAdminLogin(true);
    onAdminLogin();
  };

  return (
    <div className="body">
      <div className="rectangle">
        <div className="container">
          <h1 className="purple">Seja bem-vindo a plataforma GPTS: Great Place to Study</h1>
          <h5 className="black">Faça login com seu e-mail institucional <br /> e número da matrícula:</h5>
          <form>
            <label htmlFor="email">E-mail: </label>
            <input type="email" id="email" name="email" required />
            <br />
            <br />
            <label htmlFor="matricula">N° matrícula: </label>
            <input type="text" id="matricula" name="matricula" required />
            <br />
            <br />
            <button type="submit" onClick={onNext}>Login</button>
            <br />
            <br />
          </form>
          <p className="admin-text">É um administrador? <a href="#" onClick={handleAdminLoginClick}>Clique aqui.</a></p>
          {showAdminLogin && <Admin />}
        </div>
      </div>
    </div>
  );
}

export default Login;
