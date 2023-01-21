import Waves from "../Waves";

import myPhoto from "../../Assets/images/myPhoto.jpg";

const FirstSection = () => {
  return (
    <section
      className="col-center w-full pt-32 min-h-screen relative text-white justify-between bg-[#18181B]"
      id="start"
    >
      <div className="w-11/12 pb-10 col-center mb-14 relativejustify-between">
        <div className=" text-xl col-center gap-8 font-semibold w-full pb-5 sm:flex-row-reverse sm:justify-around">
          <figure className="w-36 h-36 sm:w-60 sm:h-60 overflow-hidden rounded-full">
            <img src={myPhoto} alt="Minha foto" />
          </figure>
          <div className="mb-20">
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
      </div>

      <Waves color="#34006B" />
    </section>
  );
};

export default FirstSection;

// .two {
//   transform:scale(1);
//   .modal-background {
//     background:rgba(0,0,0,.0);
//     animation: fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
//     .modal {
//       opacity:0;
//       animation: scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
//     }
//   }
//   + .content {
//     animation: scaleBack .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
//   }
//   &.out {
//     animation: quickScaleDown 0s .5s linear forwards;
//     .modal-background {
//       animation: fadeOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
//       .modal {
//          animation: scaleDown .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
//       }
//     }
//     + .content {
//       animation: scaleForward .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
//     }
//   }
// }
