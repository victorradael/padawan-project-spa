import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { BottomBar } from "./styles";

const Footer: React.FC = () => {
  return (
    <>
      <BottomBar>
        <a href="https://www.linkedin.com/in/victorradael/">
          <FaLinkedin size={40} color="#01d4fc" />
        </a>
        <a href="https://github.com/victorradael">
          <FaGithub size={40} color="#01d4fc" />
        </a>
        <a href="https://twitter.com/VictorRadael">
          <FaTwitter size={40} color="#01d4fc" />
        </a>
      </BottomBar>
    </>
  );
};

export default Footer;
