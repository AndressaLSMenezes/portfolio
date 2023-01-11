import { ReactNode, useContext, useState, createContext } from "react";
import api from "../Service/api";

interface IUserContext {
  repositories: any;
  gitHubData(): void
}

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

  return (
    <AuthContext.Provider
      value={{
        repositories,
        gitHubData
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