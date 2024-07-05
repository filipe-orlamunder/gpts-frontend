import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './styles.css';

function Login({ onAdminLogin, onNext}) {
  const [email, setEmail] = useState('');
  const [matricula, setMatricula] = useState('');
  const [erro, setErro] = useState('');

  useEffect(() => {
    if(localStorage.token) onNext()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErro('')
    axios.post('http://localhost:3000/auth/login', {
      email: email,
      matricula: matricula
    }).then(({data}) => {
      localStorage.setItem('token', data.access_token)
      onNext();
    }).catch((err) => {
      setErro('Verifique os dados informados e tente novamente')
    })
  };

  return (
    <div className="body">
      <div className="rectangle">
        <div className="container">
          <h1 className="purple">Seja bem-vindo a plataforma GPTS: Great Place to Study</h1>
          <h5 className="black">Faça login com seu e-mail institucional <br/> e número da matrícula:</h5>
          <form method='POST' action='/auth/login'onSubmit={handleSubmit}>
            <label htmlFor="email"> E-mail: </label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <br/>
            <br/>
            <label htmlFor="matricula"> N° matrícula: </label>
            <input type="text" id="matricula" name="matricula" value={matricula} onChange={(e) => setMatricula(e.target.value)} required />
            <br/>
            <p style={{color: 'red'}}>{erro}</p>
            <br/>
            <button type="submit">Entrar</button> 
            <br/>
            <br/>
          </form>
          <p className="admin-text">É um administrador? <a href="http://localhost:3001/admin" onClick={onAdminLogin}>Clique aqui.</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
