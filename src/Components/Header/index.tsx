import "./index.css";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import logo from "../../Assets/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [menuActiveMobile, setMenuActiveMobile] = useState(false);

  return (
    <header className="w-screen h-20 bg-ocupacity row-center fixed z-50">
      <div className="flex justify-between items-center w-11/12">
        <img src={logo} alt="Minha foto" className="h-8 rounded-full md:mr-3" />
        <nav className="w-[80%] h-full flex items-center justify-end text-slate-50">
          {!menuActiveMobile ? (
            <button
              className="md:hidden font-semibold text-3xl"
              onClick={() => {
                setMenuActiveMobile(true);
              }}
            >
              <FaBars />
            </button>
          ) : (
            <button
              className="md:hidden font-semibold text-3xl"
              onClick={() => {
                setMenuActiveMobile(false);
              }}
            >
              <IoClose />
            </button>
          )}

          <div
            className={
              !menuActiveMobile
                ? "hidden md:nav-div-desktop"
                : "nav-div-mobile md:nav-div-desktop"
            }
          >
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
