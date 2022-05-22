/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../assets/logo.png";

export function Header() {
  return (
    <header className="w-full h-20 bg-zinc-50 flex items-center justify-around relative shadow-sm">
      <a
        rel="noreferrer"
        className="absolute left-20"
        href="https://oneblue.io/"
        target="_blank"
      >
        <img className="w-[64px]" src={logo} alt="logo da One Blue" />
      </a>
      <nav className="absolute right-20 ">
        <ul className="list-none flex content-center gap-12 text">
          <a
            className="hover:text-[#2294D2] font-semibold
        focus:text-[#2294D2] transition-colors ease-in"
            href="/login"
          >
            Entrar
          </a>
          <a
            className="hover:text-[#2294D2] font-semibold
            focus:text-[#2294D2] transition-colors ease-in"
            href="/register"
          >
            Cadastrar
          </a>
        </ul>
      </nav>
    </header>
  );
}
