import React from "react";

import { TopBar } from "./styles";
import logojedi from "../../assets/jedilogo.svg";

const NavBar: React.FC = () => {
  return (
    <>
      <TopBar>
        <a href="/">
          <img src={logojedi} alt="Logo dos Padawans" />
        </a>

        <div>
          <a href="/posts">POSTAGENS</a>
          <a href="/albums">ALBUNS</a>
          <a href="/todos">TODOs</a>
        </div>
      </TopBar>
    </>
  );
};

export default NavBar;
