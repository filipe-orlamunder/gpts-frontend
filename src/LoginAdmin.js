import React from 'react';

function LoginAdmin({ onBack }) {
  const handleBackClick = () => {
    onBack(); // Chama a função fornecida pela prop para voltar à tela anterior
  };

  return (
    <div className="body">
      <div className="rectangle">
        <div className="container">
          <h1 className="purple">Prosseguir como administrador</h1>
          <h5 className="black">Faça login como administrador para <br/>o controle interno da plataforma:</h5>
          <form>
            <label htmlFor="email">E-mail: </label>
            <input type="email" id="email" name="email" required />
            <br/>
            <br/>
            <label htmlFor="senha">Senha: </label>
            <input type="text" id="senha" name="senha" required />
            <br/>
            <br/>
            <button type="submit">Login</button>
            <br/>
            <br/>
          </form>
          <p className="admin-text">É um aluno? <a href="#" onClick={handleBackClick}>Clique aqui.</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
