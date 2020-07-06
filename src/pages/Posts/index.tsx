import React, { useEffect, useState } from "react";

import api from "../../services/api";
import { Container, BlackGlass, Input, Title } from "./styles";
import Footer from "../../components/Footer";

type IPosts = Array<{
  userId: number;
  id: number;
  title: "string";
  body: "string";
}>;

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPosts>([]);
  const [newInfo, setNewinfo] = useState(" ");

  useEffect(() => {
    try {
      if (newInfo === " ") {
        api.get(`posts`).then((response) => setPosts(response.data));
        console.log("ENTREI");
      } else {
        api
          .get(`posts?userId=${newInfo}`)
          .then((response) => setPosts(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }, [newInfo]);

  console.log(newInfo);
  return (
    <>
      <Container>
        <Title>
          <h1>POSTAGENS</h1>

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
          {posts.map((post) => (
            <div key={post.id}>
              <h6>{post.userId}</h6>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))}
        </BlackGlass>
      </Container>
      <Footer />
    </>
  );
};

export default Posts;
