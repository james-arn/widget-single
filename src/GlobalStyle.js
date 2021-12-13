import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  font-family: "Cabin", sans-serif;
  list-style: none;
}

.body {
  margin: 0px;
  background-color: #f9f9f9;
}

a {
    text-decoration: none;
    color: #3B755F;
    font-weight: 700;
  }

//Badge color themes
:root {
  --badge-color: #2e3a8c;
}

.blueTheme {
  --badge-color: #2e3a8c;
  --font-color: #F9F9F9
}

.greenTheme {
  --badge-color: #3B755F;
  --font-color: #F9F9F9
}

.beigeTheme {
  --badge-color: #F2EBDB;
  --font-color: #3B755F

}

.whiteTheme {
  --badge-color: #FFFFFF;
  --font-color: #3B755F
}

.blackTheme {
  --badge-color: #212121;
  --font-color: #F9F9F9

}

`;

export default GlobalStyle;
