/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#581fbd",
        brandHover: "#996DFF",

        "blue-gray-900": "#0F172A",
        ocupacity: "rgba(0, 0, 0, 0.75)",
      },
      fontFamily: {
        "Kumbh-Sans": ["Kumbh Sans"],
      },
      animation: {
        "waves-1": "wave1 3s ease-in-out infinite alternate",
        "waves-2": "wave2 3s ease-in-out infinite alternate",
        "waves-3": "wave3 3s ease-in-out infinite alternate",
        "wave-hand": "wavehand 2s ease-in-out infinite",
        "scale-Up":
          "up duration-500 ease-[(0.165, 0.840, 0.440, 1.000)] forwards delay-500",
      },
      keyframes: {
        wave1: {
          to: { transform: "translateX(25px)" },
        },
        wave2: {
          to: { transform: "translateX(-25px)" },
        },
        wave3: {
          to: { transform: "translateX(-25px)" },
        },
        wavehand: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        up: {
          "0%": "scale-y-0 translate-y-96",
          "50%": "scale-y-50 translate-y-72",
          "75%": "scale-y-75 translate-y-56",
          "90%": "scale-y-90 translate-y-36",

          "100%": "scale-y-100 translate-y-0",
        },
      },
    },
  },
  plugins: [],
};
