import { FaWhatsapp } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-blue-gray-900 w-full h-[96vh] text-white font-semibold">
      <h2 className="w-full text-center text-2xl mt-24">Meus Contatos</h2>
      <div className="w-[90vw] flex flex-col items-end justify-center h-60">
        <a
          href="https://api.whatsapp.com/send?phone=5524999149290_blank"
          className="flex gap-2"
        >
          <FaWhatsapp />
          (24) 9 9914-9290
        </a>
        <a
          href="mailto:andressalsmenezes@gmail.com_blank"
          className="flex gap-2"
        >
          <AiOutlineMail /> andressalsmenezes@gmail.com
        </a>
        
        <a
          href="mailto:andressalsmenezes@gmail.com_blank"
          className="flex gap-2"
        >
          <AiOutlineMail /> andressalsmenezes@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
