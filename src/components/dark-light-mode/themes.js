import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  backgroundColor: "white",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  backgroundColor: "black",
};

export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};

	}

`;
