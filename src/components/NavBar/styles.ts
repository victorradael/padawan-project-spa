import styled from "styled-components";

export const TopBar = styled.nav`
  width: 100%;

  background-image: url("https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80");

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-bottom: 0.2px solid #01d4fc;

  img {
    padding: 8px;
    margin: 8px 0 8px 40px;

    height: 48px;
    width: 48px;
    color: #333;
  }
  div {
    padding: 16px;
    width: 100%;

    a {
      text-decoration: none;
      text-align: center;
      margin: 4px 24px;
      border-bottom: solid 2px transparent;
      font-weight: bold;

      color: #333;
      transition: 0.5s;

      &:hover {
        border-bottom: solid 2px #333;
      }
    }

    border-radius: 30px 0 0 30px;

    transition: background 4s;

    &:hover {
      background: linear-gradient(
        to top,
        transparent,
        aqua 25%,
        white 50%,
        aqua 75%,
        transparent
      );
    }
  }
`;
