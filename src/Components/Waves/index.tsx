// import waveOne from "../../Assets/images/wave(1).svg";
// import waveTwo from "../../Assets/images/wave(2).svg";
// import waveThree from "../../Assets/images/wave(3).svg";

interface Props {
  color: string;
}

const Waves = ({ color }: Props) => {
  return (
    <div className="w-full sticky bottom-0 h-32">
      {/* <img src={waveThree} alt="" className="waves animate-waves-1" />
      <img src={waveOne} alt="" className="waves animate-waves-2 " /> */}
      {/* <img src={waveTwo} alt="" className="waves bottom-0" /> */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-2 animate-waves-1"
      >
        <path
          fill={color}
          fill-opacity="0.4"
          d="M0,96L34.3,133.3C68.6,171,137,245,206,261.3C274.3,277,343,235,411,197.3C480,160,549,128,617,101.3C685.7,75,754,53,823,69.3C891.4,85,960,139,1029,144C1097.1,149,1166,107,1234,96C1302.9,85,1371,107,1406,117.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-3 animate-waves-2"
      >
        <path
          fill={color}
          fill-opacity="0.6"
          d="M0,32L40,58.7C80,85,160,139,240,170.7C320,203,400,213,480,202.7C560,192,640,160,720,144C800,128,880,128,960,138.7C1040,149,1120,171,1200,165.3C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 310"
        className="absolute bottom-0"
      >
        <path
          fill={color}
          fill-opacity="1"
          d="M0,160L40,181.3C80,203,160,245,240,224C320,203,400,117,480,117.3C560,117,640,203,720,240C800,277,880,267,960,234.7C1040,203,1120,149,1200,112C1280,75,1360,53,1400,42.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Waves;
