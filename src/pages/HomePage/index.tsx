import React from "react";

import { Container, BlackGlass, StarWars, Fade } from "./styles";

const HomePage: React.FC = () => {
  console.log("HomePage");
  return (
    <Container>
      <BlackGlass>
        <div>
          <img
            src="https://www.pngkit.com/png/full/175-1756337_12-star-wars-sixth-scale-figure-obi-wan.png"
            alt="Padawan"
          />
        </div>

        <div>
          <Fade />
          <StarWars>
            <div>
              <div>
                <p>Episódio I</p>
                <h1>A AMEAÇA FANTASMA</h1>
              </div>

              <p>
                A República Galáctica está em grande tumulto. Em disputa estão
                os impostos sobre as rotas comerciais para os sistemas estelares
                exteriores.
              </p>

              <p>
                Na esperança de resolver o assunto com um bloqueio de
                implacáveis naves de guerra, a gananciosa federação de comércio
                interrompe todos os carregamentos para o pequeno planeta Naboo.
              </p>

              <p>
                Enquanto o Congresso da República debate incessantemente esta
                alarmante cadeia de acontecimentos, o Supremo Chanceler mandava
                secretamente dois Cavaleiros Jedi, guardiões da paz e da justiça
                na galáxia, para resolver o conflito...
              </p>
            </div>
          </StarWars>
        </div>
      </BlackGlass>
    </Container>
  );
};

export default HomePage;
