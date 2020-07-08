import React, { useEffect, useState } from "react";

import api from "../../services/api";
import { Container, BlackGlass, Box, Input, Title } from "./styles";

type IPosts = Array<{
  userId: number;
  id: number;
  title: "string";
  completed: boolean;
}>;

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<IPosts>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [newInfo, setNewinfo] = useState(" ");

  useEffect(() => {
    try {
      if (newInfo === " ") {
        api.get(`posts`).then((response) => setTodos(response.data));
        console.log("ENTREI");
      } else {
        api
          .get(`posts?userId=${newInfo}`)
          .then((response) => setTodos(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }, [newInfo]);

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);

      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  console.log(todos);
  return (
    <Container>
      <Title>
        <h1>TO DOs</h1>
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
        {todos.map((todo) => (
          <Box
            key={todo.id}
            onClick={() => handleSelectItem(todo.id)}
            isFocused={selectedItems.includes(todo.id) ? true : false}
          >
            <h6>{todo.userId}</h6>
            <h1>{todo.title}</h1>
          </Box>
        ))}
      </BlackGlass>
    </Container>
  );
};

export default Todos;
