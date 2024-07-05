import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import AdminFunctions from '../utils/AdminFunctions';

function LoginAdmin({ onBack }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  useEffect(() => {
    if(localStorage.token) onBack()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErro('')
    axios.post('http://localhost:3000/auth/loginAdmin', {
      email: email,
      senha: senha,
    }).then(({data}) => {
      localStorage.setItem('token', data.access_token)
      onBack();
    }).catch((err) => {
      setErro('Verifique os dados informados e tente novamente')
    })
  };

  return (
    <div className="body">
      <div className="rectangle">
        (
          <div className="container">
            <h1 className="purple">Prosseguir como administrador</h1>
            <h5 className="black">Faça login como administrador para <br />o controle interno da plataforma:</h5>
            <form method='POST' action='auth/loginAdmin' onSubmit={handleSubmit}>
              <label htmlFor="email">E-mail: </label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <br />
              <br />
              <label htmlFor="senha">Senha: </label>
              <input type="text" id="senha" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
              <br />
              <p style={{color: 'red'}}>{erro}</p>
              <br />
              <button type="submit">Login</button>
              <br />
              <br />
            </form>
            <p className="admin-text">É um aluno? <a href="http://localhost:3001/login" onClick={onBack}>Clique aqui.</a></p>
          </div>
        )
      </div>
    </div>
  );
}

export default LoginAdmin;
