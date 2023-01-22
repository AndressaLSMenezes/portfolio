import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import logo from "../../Assets/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [menuActiveMobile, setMenuActiveMobile] = useState(false);

  return (
    <header className="w-screen h-20 bg-blue-gray-900 row-center fixed z-50">
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

          <nav
            className={
              !menuActiveMobile
                ? "hidden md:nav-div-desktop"
                : "nav-div-mobile md:nav-div-desktop"
            }
          >
            <a href="#start" className="btn-header mt-8">
              INICIO
            </a>
            <a href="#aboutMe" className="btn-header">
              SOBRE MIM
            </a>
            <a href="#technology" className="btn-header">
              TECNOLOGIAS
            </a>
            <a href="#projects" className="btn-header">
              PROJETOS
            </a>
            <a href="#contacts" className="btn-header">
              CONTATOS
            </a>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vQA5Hx8sQ8kKCaOyUWdr2zvBK-5lF_cDlVQawgf27SNbZZjLDHsBYuRC4Irbjrp5gADOxrCBeEEG1ZY/pub"
              rel="noreferrer"
              target="_blank"
              className="btn-header"
            >
              CURRÍCULO
            </a>
          </nav>
        </nav>
      </div>
    </header>
  );
};

export default Header;
