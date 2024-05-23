import React from 'react';

function Admin({ onReport }) {
  const handleReport = () => {
    // Adicionar a lógica para gerar o relatório
    onReport();
  };

  return (
    <div className="container">
      <h2>Tela do Administrador</h2>
      <button onClick={handleReport}>Gerar Relatório</button>
    </div>
  );
}

export default Admin;
