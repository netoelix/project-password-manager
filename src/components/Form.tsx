import { useState } from 'react';

function Form({ onCancel }) {
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    maxLength: false,
    hasLettersAndNumbers: false,
    hasSpecialCharacter: false,
  });

  const validPasswordClass = 'valid-password-check';
  const invalidPasswordClass = 'invalid-password-check';

  const handleClick = (event) => {
    event.preventDefault();
    onCancel();
  };

  const handleServiceNameChange = (event) => {
    const { value } = event.target;
    setServiceName(value);
    validateForm(value, login, password, url);
  };

  const handleLoginChange = (event) => {
    const { value } = event.target;
    setLogin(value);
    validateForm(serviceName, value, password, url);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    validateForm(serviceName, login, value, url);
  };

  const handleUrlChange = (event) => {
    const { value } = event.target;
    setUrl(value);
    validateForm(serviceName, login, password, value);
  };

  const validateForm = (serviceName, login, password, url) => {
    const isServiceNameValid = serviceName.trim() !== '';
    const isLoginValid = login.trim() !== '';
    const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,16}$/.test(password);
    const isUrlValid = true;

    const isFormCurrentlyValid = isServiceNameValid
     && isLoginValid && isPasswordValid && isUrlValid;
    setIsFormValid(isFormCurrentlyValid);

    // Verificações de senha
    setPasswordValidation({
      length: password.length >= 8,
      maxLength: password.length <= 16,
      hasLettersAndNumbers: /[a-zA-Z]/.test(password) && /[0-9]/.test(password),
      hasSpecialCharacter: /[^a-zA-Z0-9]/.test(password),
    });
  };
  return (
    <div className="div-form">
      <div>
        <input
          type="text"
          name=""
          id="service-name"
          required
          onChange={ handleServiceNameChange }
        />
        <label htmlFor="service-name">Nome do serviço</label>
      </div>
      <div>
        <input
          type="text"
          name=""
          id="login"
          required
          onChange={ handleLoginChange }
        />
        <label htmlFor="login">Login</label>
      </div>
      <div className="password-div">
        <input
          type="password"
          name=""
          id="password"
          pattern="^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,16}$"
          title="A senha deve ter letras, números e pelo menos um caractere especial."
          required
          onChange={ handlePasswordChange }
        />
        <label htmlFor="password">Senha</label>
        <div>
          <p
            className={ passwordValidation.length ? validPasswordClass
              : invalidPasswordClass }
          >
            Possuir 8 ou mais caracteres
          </p>
          <p
            className={ passwordValidation.maxLength
                 && passwordValidation.length ? validPasswordClass
              : invalidPasswordClass }
          >
            Possuir até 16 caracteres
          </p>
          <p
            className={ passwordValidation.hasLettersAndNumbers ? validPasswordClass
              : invalidPasswordClass }
          >
            Possuir letras e números
          </p>
          <p
            className={ passwordValidation.hasSpecialCharacter ? validPasswordClass
              : invalidPasswordClass }
          >
            Possuir algum caractere especial
          </p>
        </div>
      </div>
      <div>
        <input type="text" name="" id="url" onChange={ handleUrlChange } />
        <label htmlFor="url">URL</label>
      </div>
      <div>
        <button type="submit" disabled={ !isFormValid }>Cadastrar</button>
        <button onClick={ handleClick }>Cancelar</button>
      </div>
    </div>
  );
}
export default Form;
