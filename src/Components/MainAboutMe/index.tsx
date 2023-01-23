import Waves from "../Waves";

const AboutMe = () => {
  return (
    <section
      className="col-center w-full pt-20 min-h-screen sm:min-h-[110vh] relative text-white justify-between bg-[#34006B]"
      id="aboutMe"
    >
      <h2 className="font-bold text-4xl mb-16 sm:mb-none">Sobre mim</h2>
      <div className="col-center pb-28 mb-28 font-medium text-lg text-center w-10/12 md:w-1/2 gap-5">
        <p>
          Meu nome é Andressa, tenho 19 anos e sou de Angra Dos Reis no Rio de
          Janeiro.
        </p>
        <p>
          Quando criança jogava muitos jogos de estratégia e lógica. Aprendi
          sozinha a jogar Sudoku, um jogo que consistia em um quadrado dividido
          em 9 partes, onde era necessário preencher com números de 1 a 9, mas
          sem que repetisse o mesmo número dentro de sua parte, na horizontal ou
          na vertical.
        </p>
        <p>
          Quando fiz 15 anos passei para o curso de Técnico de Mecânica no
          CEFET-RJ, lá percebi o quanto que eu gostava de lógica, mas não tanto
          de Mecânica em si. Um ano depois do início do curso veio a pandemia e
          foi quando conheci a programação e me apaixonei, pois me senti
          voltando a infância quando jogava Sudoku, já que era necessário pensar
          além da parte onde estava codando e pensar no código e projeto por
          inteiro.
        </p>

        <p>
          Foi no ano passado que concluí o técnico e iniciei meus estudos na
          Kenzie Academy Brasil no curso de desenvolvimento fullstack que se
          divide nos seis primeiros meses de frontend e outros seis de backend.
        </p>

        <p>
          No front aprendi HTML, CSS responsivo, JavaScript, consumo de API,
          Typescript, React e algumas bibliotecas como Styled Components,
          React-Router-Dom, Axios e entre outras.
        </p>
        <p>
          No back-end aprendi a desenvolver API Rest utilizando o NodeJs,
          express, Typescript, TypeORM, ORM, SQL e PostgresSQL.
        </p>
        <p>
          Fora as hard skills também aprendi e desenvolvi muitas soft skills
          como trabalhar em grupos utilizando metodologias ágeis como Scrum e
          Kanban e aprendi também a como achar e resolver problemas com
          facilidade seja no meu ou no código de outras pessoas.
        </p>
      </div>

      <Waves color="#581fbd" />
    </section>
  );
};

export default AboutMe;
