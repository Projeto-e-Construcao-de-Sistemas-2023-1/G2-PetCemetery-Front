import React, { useState } from 'react';
import '../Styles/login.css';
import { useNavigate  } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const navegacao = useNavigate();
  navegacao('/Login')
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vou fazer o back End aqu idepois pra mandar a chamada pro pessoal do springboot
    console.log(`Email: ${email}, Senha: ${senha}`);
  }

  /* O link que tá no botao de login irá sair depois que a validação estiver na lógica ali na função do login*/
  return (
    <div className="login-container"> {}
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}> {}
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </label>
        <Link to="/Home">
          <button type="submit">Login</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;