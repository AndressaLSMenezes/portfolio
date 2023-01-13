import Waves from "../Waves";

import myPhoto from "../../Assets/images/myPhoto.jpg";

const FirstSection = () => {
  return (
    <section className="col-center w-full pt-28  min-h-[85vh] relative text-white justify-between bg-blue-gray-900" id="start">
      <div className=" text-xl col-center gap-8 font-semibold w-11/12 sm:flex-row-reverse sm:justify-around">
        <figure className="w-36 h-36 sm:w-60 sm:h-60 overflow-hidden rounded-full">
          <img src={myPhoto} alt="Minha foto" />
        </figure>
        <div className="">
          <p className="text-2xl font-semibold mb-5">
            Oi, tudo bem???<span className="animate-wave-hand">👋🏿</span>
          </p>
          <p>
            Meu nome é{" "}
            <span className="text-brand font-bold">Andressa Menezes</span>.
          </p>
          <p>Sou desenvolvedora Full Stack</p>
        </div>
      </div>
      <p className="mt-36 mb-20 font-medium text-lg text-center w-5/6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        exercitationem expedita omnis iure commodi velit tempora quisquam quam,
        molestias quia, consequuntur eligendi laudantium perspiciatis qui
        distinctio assumenda ab labore sapiente?
      </p>

      <Waves color="#581fbd" />
    </section>
  );
};

export default FirstSection;
