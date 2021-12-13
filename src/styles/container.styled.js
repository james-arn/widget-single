import styled from "styled-components";

export const ContainerStyled = styled.div`
  /* =======
typography
=========*/

  .title {
    font-size: 30px;
    font-weight: 700;
  }

  /* =======
layout
=========*/

  //overall
  .container {
    background-color: #f9f9f9;
  }

  .container-outer {
    width: 331px;
    box-shadow: 10px 42px 32px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    margin: 1em auto;
  }

  .container-inner {
    width: 258px;
    margin: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    text-align: center;
    margin-bottom: 0;
  }

  .title-line {
    margin: 1em 0;
    height: 2px;
    width: 100%;
    background: #b0b0b0;
  }

  @media (min-width: 900px) {
    .container-outer {
      width: 851px;
      height: 419px;
    }

    .container-inner {
      width: 779px;
      justify-content: flex-start;
    }

    .body {
      width: 779px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .title {
      align-self: flex-start;
    }
  }
`;
