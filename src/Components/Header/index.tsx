import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-screen h-20 bg-ocupacity row-center fixed z-50">
      <span className="w-11 h-11 bg-green-700 rounded-full sm:mr-3"></span>
      <nav className="w-[80%] h-full flex items-center justify-end text-slate-50 ">
        <button className="sm:hidden font-semibold text-3xl">
          <FaBars />
        </button>
        <div className="hidden sm:flex h-full items-center gap-5">
          <button className="btn-header">SOBRE MIM</button>
          <button className="btn-header">TECNOLOGIAS</button>
          <button className="btn-header">PROJETOS</button>
          <button className="btn-header">CONTATOS</button>
          <button className="btn-header">BAIXAR CV</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
