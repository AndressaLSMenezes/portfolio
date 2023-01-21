import { ReactNode, useContext, useState, createContext } from "react";
import api from "../Service/api";
import { IProject, IUserContext } from "../Interfaces";

import project from "../Assets/images/projetoM1.png";
import nuKenzie from "../Assets/images/nu-kenzie.png";
import burguerKenzie from "../Assets/images/burguerKenzie.png";
import kenzieHub from "../Assets/images/KenzieHub.png";
import m4S3 from "../Assets/images/m4-s3.png";

interface IUserProvidersProps {
  children: ReactNode;
}

const AuthContext = createContext<IUserContext>({} as IUserContext);

export const AuthProvider = ({ children }: IUserProvidersProps) => {
  const [repositories, setRepositories] = useState({});

  const gitHubData = async () => {
    try {
      const response = await api.get("users/andressalsmenezes", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);

      setRepositories(response);
    } catch (error) {
      console.error(error);
    }
  };

  const projects: IProject[] = [
    {
      name: "Projeto Final Do Modulo 1",
      image: project,
      urlGithub:
        "https://github.com/Kenzie-Academy-Brasil-Developers/m1-entrega-capstone-ecommerce-AndressaLSMenezes",
      link: "https://kenzie-academy-brasil-developers.github.io/m1-entrega-capstone-ecommerce-AndressaLSMenezes/",
      about:
        "É um e-commerce de roupas desenvolvido para o projeto final do modulo 1 usando somente HTML, CSS e JS sem nehum framework.",
      techs: ["HTML", "CSS3", "JavaScript"],
      stack: "FrontEnd",
    },
    {
      name: "Nu Kenzie",
      image: nuKenzie,
      urlGithub:
        "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie-Andressa",
      link: "https://react-entrega-s1-template-nu-kenzie-andressa-nu-kenz-ejfxzwmh3.vercel.app/",
      about:
        "O NuKenzie serve para você fazer o controle de sua financias. Esse é meu primeiro projeto utilizando o React. ",
      techs: ["HTML", "CSS3", "JavaScript", "React"],
      stack: "FrontEnd",
    },
    {
      name: "Burguer Kenzie",
      image: burguerKenzie,
      urlGithub:
        "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-hamburgueria-da-kenzie-Andressa",
      link: "https://hamburgueria-three-plum.vercel.app/",
      about:
        "É um e-commerce de roupas desenvolvido para o projeto final do modulo 1 usando somente HTML, CSS e JS sem nehum framework",
      techs: ["HTML", "CSS3", "JavaScript"],

      stack: "FrontEnd",
    },
    {
      name: "Kenzie Hub",
      image: kenzieHub,
      urlGithub:
        "https://github.com/AndressaLSMenezes/react-entrega-kenzie-hub-andressa",
      link: "https://react-entrega-kenzie-hub-andressa.vercel.app/",
      about:
        "É um e-commerce de roupas desenvolvido para o projeto final do modulo 1 usando somente HTML, CSS e JS sem nehum framework",
      techs: [
        "JavaScript",
        "React",
        "Styled Components",
        "react-hook-form",
        "react-router-dom",
        "...",
      ],

      stack: "FrontEnd",
    },

    {
      name: "Produtos e Categorias",
      image: m4S3,
      urlGithub:
        "https://github.com/Kenzie-Academy-Brasil-Developers/m4-entrega-sprint-3-andressa",
      link: "",
      about:
        "",
      techs: ["JavaScript", "NodeJS", "expressJS", "ORM", "SQL", "PostgreSQL"],

      stack: "BackEnd",
    },
  ];

  return (
    <AuthContext.Provider
      value={{
        repositories,
        gitHubData,
        projects,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useUserContext() {
  const context = useContext(AuthContext);
  return context;
}
