export interface IProject {
  name: string;
  image: string;
  urlGithub: string;
  link: string;
  about: string;
  techs: string[];
  stack: string;
}

export interface IUserContext {
  projects: IProject[];
}
