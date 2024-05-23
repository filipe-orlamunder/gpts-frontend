import React from 'react';
import './styles.css';

function Login() {
  return (
    <div className="body">
      <div className="rectangle">
        <div className="container">
          <h1 className="purple">Seja bem-vindo a plataforma GPTS: Great Place to Study</h1>
          <h5 className="black">Faça login com seu e-mail institucional <br/> e número da matrícula:</h5>
          <form>
            <label htmlFor="email">E-mail: </label>
            <input type="email" id="email" name="email" required />
            <br/>
            <br/>
            <label htmlFor="matricula">N° matrícula: </label>
            <input type="text" id="matricula" name="matricula" required />
            <br/>
            <br/>
            <button type="submit">Login</button>
            <br/>
            <br/>
          </form>
          <p className="admin-text">É um administrador? <a href="#">Clique aqui.</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
