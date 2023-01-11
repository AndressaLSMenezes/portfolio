import { FaBars } from "react-icons/fa";
import logo from "../../Assets/images/logo.png";

const Header = () => {
  return (
    <header className="w-screen h-20 bg-ocupacity row-center fixed z-50">
      <div className="flex justify-between items-center w-11/12">
        <img src={logo} alt="" className="h-8 rounded-full sm:mr-3" />
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
      </div>
    </header>
  );
};

export default Header;
