import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [initForm, setInitForm] = useState(false);

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInitForm(true);
  };
  const handleCancel = () => {
    setInitForm(false);
  };
  return (
    <>
      <header>
        <h1>Gerenciador de senhas</h1>
      </header>
      <main>
        <form onSubmit={ handleClick }>
          {initForm ? <Form onCancel={ handleCancel } />
            : <button type="submit">Cadastrar nova senha</button>}
        </form>
      </main>
    </>
  );
}

export default App;
