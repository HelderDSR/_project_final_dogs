import React from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input";
import Button from "../Form/Button";
import UseForm from "../../Hooks/UseForm";
import { TOKN_POST, USER_GET } from "../../Api";

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if(token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch();
    const json = await response.json();
  }

  if (username.validate() && password.validate()) {
    async function handleSubmit(event) {
      event.preventDefault();

      if (username.validate() && password.validate()) {
        const { url, options } = TOKN_POST({
          username: username.value,
          password: password.value,
        });

        const response = await fetch(url, options);
        const json = await response.json();
        window.localStorage.setItem("token", json.token);
        getUser(json.token);
      }
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
