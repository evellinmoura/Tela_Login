import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  //armazena as entradas de usuarios
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // funcao chamada quando o envia o formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Login:", { username, password });
    console.log("Envio");
    // depois colocar via backend via axios ou fetch (ambos api)
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}></form>
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-data">
          <input
            type="email"
            placeholder="Email"
            //pega o valor que o usuario colocou (pega a acao com target, input alvo, e o valor)
            onChange={(e) => setUsername(e.target.value)}
          />

          <FaUser className="icon" />
        </div>
        <div className="input-data">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        {/*implementar um router, a biblioteca de rotemaneto pra redirecionar o usuario*/}
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueci a senha</a>
        </div>
        <button>Entrar</button>
        <div className="signup-link">
          <p>
            <a href="#">Criar conta</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
