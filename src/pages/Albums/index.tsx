import React, { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import api from "../../services/api";
import { Container, BlackGlass, Input, Title } from "./styles";

type IPosts = Array<{
  userId: number;
  id: number;
  title: "string";
}>;

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<IPosts>([]);
  const [newInfo, setNewinfo] = useState(" ");

  useEffect(() => {
    try {
      if (newInfo === " ") {
        api.get(`posts`).then((response) => setAlbums(response.data));
        console.log("ENTREI");
      } else {
        api
          .get(`posts?userId=${newInfo}`)
          .then((response) => setAlbums(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }, [newInfo]);

  return (
    <>
      <Container>
        <Title>
          <h1>ALBUNS</h1>
          <Input
            type="number"
            min="1"
            max="10"
            placeholder="Pesquise aqui pelo id usuário de 1 à 10."
            value={newInfo}
            onChange={(e) => setNewinfo(e.target.value)}
          />
        </Title>
        <BlackGlass>
          <div>
            {albums.map((album) => (
              <div key={album.id}>
                <h6>{album.userId}</h6>
                <img
                  src="https://moldura-pop.s3.sa-east-1.amazonaws.com/imagens-proprietarias/99931797-B2famFbO6ppgpqK_2q8btWdeQr5VLF35-cropped-1x1-browser.png"
                  alt="MaliaIti"
                />
                <h1>{album.title}</h1>
              </div>
            ))}
          </div>
        </BlackGlass>
      </Container>
      <Footer />
    </>
  );
};

export default Albums;
