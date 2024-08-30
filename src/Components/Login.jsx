import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log("Envio");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div>
          <input type="email" placeholder="Email"></input>
          <FaUser className="icon" />
        </div>
        <div>
          <input type="password" placeholder="Senha"></input>
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueci a senha</a>{" "}
          {/*implementar um router, a biblioteca de rotemaneto pra redirecionar o usuario*/}
        </div>
        <button>Entrar</button>
        <div className="signup-link">
          <a href="#">Criar conta</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
