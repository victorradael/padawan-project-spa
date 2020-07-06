import styled, { css } from "styled-components";

interface DivProps {
  isFocused: boolean;
}

export const Container = styled.div`
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80");
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  min-height: 800px;
`;

export const BlackGlass = styled.div`
  height: 100%;
  width: 100%;
  min-height: 800px;
  background-color: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;

  padding: 32px;
`;

export const Box = styled.div<DivProps>`
  background-color: rgba(0, 14, 48, 0.7);
  padding: 32px;
  margin: 8px;
  border-radius: 8px;
  color: #fff;
  border: 0.2px solid transparent;
  transition: 0.7s;

  &:hover {
    background-color: rgba(0, 14, 48, 0.3);
  }

  ${(props) =>
    props.isFocused === true &&
    css`
      background-color: rgba(1, 212, 252, 0.3);
    `}

  ${(props) =>
    props.isFocused === false &&
    css`
      border: 2px solid red;
    `}
`;

export const Input = styled.input`
  background-color: transparent;
  color: #fff;
  border: 2px solid #01d4fc;
  border-radius: 8px;
  padding: 8px 16px;
  margin: 16px 0;
  box-sizing: border-box;
  width: 60%;

  &:focus {
    box-shadow: 0 0 0 0;

    outline: 0;
  }

  &::placeholder {
    color: #777;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  background-color: rgba(0, 0, 0, 0.7);
`;
