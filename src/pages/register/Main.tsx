import { useState } from "react";

import { Button } from "../../components/button-primary/styled";
import { ErroSuccess } from "../../components/erro-success/styled";
import { StyleMain } from "../../components/main/styled";

import axios from "axios";

export function Main() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  // setStatus({ type: "error", message: "Erro ao cadastrar" });
  // setStatus({ type: "success", message: "Sucesso ao cadastrar" });
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    checkForm();
  }

  async function checkForm() {
    if (userName.length < 3) {
      return setStatus({
        type: "erro",
        message: "O nome deve conter no mínimo 3 caracteres.",
      });
    }

    if (userPassword.length < 8) {
      return setStatus({
        type: "erro",
        message: "A senha deve conter no mínimo 8 caracteres.",
      });
    }

    if (userPassword !== userPasswordCheck) {
      return setStatus({
        type: "erro",
        message: "As senhas não coincidem.",
      });
    }
    setStatus({ type: "", message: "" });
    await sendForm();
  }

  async function sendForm() {
    try {
      axios
        .post("http://localhost:4000/user/cadaster", {
          name: userName,
          email: userEmail,
          password: userPassword,
        })
        .then((res) => {
          const { ok, why } = res.data;
          console.log(ok, why);
          ok === true
            ? setStatus({ type: "success", message: why })
            : setStatus({
                type: "erro",
                message: `${why}`,
              });
        })
        .catch((err) => {
          setStatus({
            type: "erro",
            message: `${err.response.data.why}`,
          });
        });
    } catch (err) {
      console.log("Catch final", err);
    }
  }

  return (
    <StyleMain>
      <section className="relative my-6 w-fit min-h-[400px] bg-zinc-50 rounded-2xl flex flex-col justify-center items-center pt-8 pb-4 px-20 gap-8 shadow-lg">
        <h2 className="font-bold text-2xl">Criar conta</h2>

        <ErroSuccess>
          {status.type !== "" && (
            <small className={status.type}>{status.message}</small>
          )}
        </ErroSuccess>

        <form
          className="flex flex-col gap-4 w-[280px]"
          autoComplete="on"
          onSubmit={handleSubmit}
          id="form"
        >
          <section className="flex flex-col">
            <label>Nome completo</label>
            <input
              className="py-1 px-2 rounded-lg border-2 border-zinc-200"
              placeholder="Seu nome completo"
              required
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            ></input>
          </section>

          <section className="flex flex-col">
            <label>Email</label>
            <input
              className="py-1 px-2 rounded-lg border-2 border-zinc-200"
              type="email"
              autoComplete="username"
              placeholder="exemplo@email.com"
              required
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
            ></input>
          </section>
          <section className="flex flex-col">
            <label>Senha</label>
            <input
              className="py-1 px-2 rounded-lg border-2 border-zinc-200"
              type="password"
              autoComplete="new-password"
              placeholder="********"
              required
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
            ></input>
          </section>

          <section className="flex flex-col">
            <label>Confirme a senha</label>
            <input
              className="py-1 px-2 rounded-lg border-2 border-zinc-200"
              type="password"
              autoComplete="new-password"
              placeholder="********"
              required
              onChange={(e) => setUserPasswordCheck(e.target.value)}
              value={userPasswordCheck}
            ></input>
          </section>
          <Button type="submit">Cadastrar</Button>
        </form>
        <small>
          Já possui conta?
          <a className="pl-1 text-[#2294d2]" href="/login">
            Clique aqui!
          </a>
        </small>
      </section>
    </StyleMain>
  );
}
