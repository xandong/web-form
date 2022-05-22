import axios from "axios";
import { useState } from "react";
import { Button } from "../../components/button-primary/styled";
import { ErroSuccess } from "../../components/erro-success/styled";
import { StyleMain } from "../../components/main/styled";

export function Main() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    checkForm();
  };

  async function checkForm() {
    if (userPassword.length < 8) {
      return setStatus({
        type: "erro",
        message: "A senha contem no mínimo 8 caracteres.",
      });
    }

    setStatus({
      type: "",
      message: "",
    });

    await sendForm();
  }

  async function sendForm() {
    try {
      axios
        .post("http://localhost:4000/login", {
          email: userEmail,
          password: userPassword,
        })
        .then((res) => {
          const { ok, why } = res.data;
          ok === true
            ? setStatus({ type: "success", message: why })
            : setStatus({
                type: "erro",
                message: `${why}`,
              });
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          setStatus({
            type: "erro",
            message: `${err.response.data.why}`,
          });
        });
    } catch (error) {
      console.log(`Catch final: ${error}`);
    }
  }

  return (
    <StyleMain>
      <section className="relative my-6 w-fit min-h-[400px] bg-zinc-50 rounded-2xl flex flex-col justify-center items-center pt-8 pb-4 px-20 gap-8 shadow-lg">
        <h2 className="font-bold text-2xl">Fazer login</h2>

        <ErroSuccess>
          {status.type !== "" && (
            <small className={status.type}>{status.message}</small>
          )}
        </ErroSuccess>

        <form
          onSubmit={handleSubmit}
          autoComplete="on"
          id="form"
          className="flex flex-col gap-4 w-[280px]"
        >
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
              className="w-full py-1 px-2 rounded-lg border-2 border-zinc-200"
              type="password"
              autoComplete="current-password"
              placeholder="********"
              required
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
            ></input>
          </section>
          <Button type="submit">Entrar</Button>
        </form>
        <small>
          Não possui conta?
          <a className="pl-1 text-[#2294d2]" href="/register">
            Clique aqui!
          </a>
        </small>
      </section>
    </StyleMain>
  );
}
