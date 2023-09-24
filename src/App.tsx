import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [initForm, setInitForm] = useState(false);
  const [services, setServices] = useState([]);
  const [hidePasswords, setHidePasswords] = useState(false);

  const handleAddService = (newService) => {
    setServices([...services, newService]);
    setInitForm(false);
  };

  const handleCancel = () => {
    setInitForm(false);
  };

  const handleRemoveService = (indexToRemove) => {
    const updatedServices = services.filter((_, index) => index !== indexToRemove);
    setServices(updatedServices);
  };

  return (
    <>
      <header>
        <h1>Gerenciador de senhas</h1>
      </header>
      <main>
        <label>
          <input
            type="checkbox"
            checked={ hidePasswords }
            onChange={ () => setHidePasswords(!hidePasswords) }
          />
          Esconder senhas
        </label>
        <form onSubmit={ () => {} }>
          {initForm ? (
            <Form
              onAddService={ handleAddService }
              onCancel={ handleCancel }
              hidePasswords={ hidePasswords }
            />
          ) : (
            <button type="button" onClick={ () => setInitForm(true) }>
              Cadastrar nova senha
            </button>
          )}
        </form>

        {services.length === 0 ? (
          <p>Nenhuma senha cadastrada</p>
        ) : (
          <ul className="password-display">
            {services.map((service, index) => (
              <li key={ index } className="password-manager">
                <a href={ service.url } target="_blank" rel="noopener noreferrer">
                  {service.serviceName}
                </a>
                <p>
                  Login:
                  {' '}
                  {service.login}
                </p>
                <p>
                  Senha:
                  {' '}
                  {hidePasswords ? '******' : service.password}
                </p>
                <button
                  data-testid="remove-btn"
                  onClick={ () => handleRemoveService(index) }
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export default App;
