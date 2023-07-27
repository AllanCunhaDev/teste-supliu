import { createGlobalStyle } from "styled-components";
import background from "../assets/background.png";

export const GlobalStyle = createGlobalStyle`


*{
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;

	font-family: 'Roboto', sans-serif;

}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body{
    line-height: 1;
	box-sizing: border-box;
	width: 100vw;
	height: 100vh;

    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
	
	cursor: default;

	
}

ol, ul {
	list-style: none;
}

button{
	cursor: pointer;
}

:root{

--color-pureWithe: #ffff;
--color-letters: #5b5b58;
--color-buttons: #4169e1;



}
`