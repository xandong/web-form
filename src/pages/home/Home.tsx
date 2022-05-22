import { Button } from "../../components/button-primary/styled";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { StyleMain } from "../../components/main/styled";

export function Home() {
  return (
    <>
      <Header />
      <StyleMain>
        <h1 className="text-5xl font-semibold text-[#2294d2]">
          Bem vindo a One Blue
        </h1>
        <section className="flex items-center gap-20">
          <a href="/login">
            <Button>Entrar</Button>
          </a>
          <a href="/register">
            <Button>Cadastrar</Button>
          </a>
        </section>
      </StyleMain>
      <Footer />
    </>
  );
}
