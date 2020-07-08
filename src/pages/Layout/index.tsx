import React, { useState } from "react";

import { TopBar } from "./styles";
import logojedi from "../../assets/jedilogo.svg";

import HomePage from "../../pages/HomePage";
import Posts from "../../pages/Posts";
import Albums from "../../pages/Albums";
import Todos from "../../pages/Todos";

import Footer from "../../components/Footer";

const Layout: React.FC = () => {
  const [pageSelected, setPageSelected] = useState<number>(0);
  return (
    <>
      <TopBar>
        <a href="/">
          <img src={logojedi} alt="Logo dos Padawans" />
        </a>

        <div>
          <button onClick={() => setPageSelected(1)}>POSTAGENS</button>
          <button onClick={() => setPageSelected(2)}>ALBUNS</button>
          <button onClick={() => setPageSelected(3)}>TODOs</button>
        </div>
      </TopBar>
      {pageSelected === 0 && <HomePage />}
      {pageSelected === 1 && <Posts />}
      {pageSelected === 2 && <Albums />}
      {pageSelected === 3 && <Todos />}
      <Footer />
    </>
  );
};
export default Layout;
