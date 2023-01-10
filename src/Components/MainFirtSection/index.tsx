import Waves from "../Waves";

const FirstSection = () => {
  return (
    <section className="mt-8 col-center w-full pt-24  min-h-[85vh] relative text-white justify-between bg-blue-gray-900">
      <div className=" text-xl col-center gap-8 font-semibold w-[90%] sm:flex-row-reverse sm:justify-around ">
        <span className="w-36 h-36 bg-purple-800 sm:w-56 sm:h-56"></span>
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
        <p className="mt-24 mb-20 font-medium text-lg text-center w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          exercitationem expedita omnis iure commodi velit tempora quisquam
          quam, molestias quia, consequuntur eligendi laudantium perspiciatis
          qui distinctio assumenda ab labore sapiente?
        </p>

      <Waves color="#581fbd"/>
    </section>
  );
};

export default FirstSection;
