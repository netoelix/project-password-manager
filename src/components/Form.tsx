function Form({ onCancel }) {
  const handleClick = (event) => {
    event.preventDefault();
    onCancel();
  };
  return (
    <div className="div-form">
      <div>
        <input type="text" name="" id="service-name" required />
        <label htmlFor="service-name">Nome do serviço</label>
      </div>
      <div>
        <input type="text" name="" id="login" required />
        <label htmlFor="login">Login</label>
      </div>
      <div>
        <input
          type="password"
          name=""
          id="password"
          minLength={ 8 }
          maxLength={ 16 }
          required
        />
        <label htmlFor="password">Senha</label>
      </div>
      <div>
        <input type="text" name="" id="url" />
        <label htmlFor="url">URL</label>
      </div>
      <div>
        <button type="submit">Cadastrar</button>
        <button onClick={ handleClick }>Cancelar</button>
      </div>
    </div>
  );
}
export default Form;
