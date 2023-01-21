import { FaWhatsapp } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const LastSection = () => {
  return (
    <section
      className="bg-blue-gray-900 w-full text-white font-semibold col-center"
      id="contacts"
    >
      <h2 className=" text-2xl mt-24">Meus Contatos</h2>
      <div className="col-center my-16 gap-5">
        <a
          href="https://api.whatsapp.com/send?phone=5524999149290/"
          rel="noreferrer"
          target="_blank"
          className="col-center gap-2"
        >
          <FaWhatsapp className="text-4xl" />
          <p>(24) 9 9914-9290</p>
        </a>
        <a
          href="mailto:andressalsmenezes@gmail.com/"
          rel="noreferrer"
          target="_blank"
          className="col-center gap-2"
        >
          <AiOutlineMail className="text-4xl" />
          <p>andressalsmenezes@gmail.com</p>
        </a>

        <a
          href="https://github.com/AndressaLSMenezes/"
          rel="noreferrer"
          target="_blank"
          className="col-center gap-2"
        >
          <BsGithub className="text-4xl" />
          <p>AndressaLSMenezes</p>
        </a>

        <a
          href="https://www.linkedin.com/in/andressalsmenezes/"
          className="col-center gap-2"
          rel="noreferrer"
          target="_blank"
        >
          <BsLinkedin className="text-4xl" />
          <p>andressalsmenezes@gmail.com</p>
        </a>
      </div>
    </section>
  );
};

export default LastSection;
