import styled, { createGlobalStyle } from "styled-components";
import theme from "styled-theming";
import sonatWebLibraryColors from "./webLibrary.colors";
import typography from "./typography";
import fontFace from "./font";
import { variables } from "./typography";

export const MenuList = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;

export const StyledMenuItem = styled.li`
  a {
    padding: 0.4rem 0.4rem 0.4rem 2rem;
    text-decoration: none;
    ${variables["sonat-typography__regular--xx-large--gray"]};
    display: block;
  }

  a:hover {
    color: var(--sonat-web-library-color-snow);
  }
`;

export const StyledSideBar = styled.aside`
  height: 100%;
  width: 200px;
  position: fixed;
  background-color: var(--sonat-web-library-color-coal);
  padding-top: 20px;
  margin: 0;
`;

export const GlobalStyle = createGlobalStyle`

  ${fontFace};
  ${typography};
  *,
*::before,
*::after{box-sizing:border-box;}

  :root {
    ${sonatWebLibraryColors};
    font-family: 'SofiaPro', sans-serif;
  }
  #root, body, html {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

const backgroundColor = theme("mode", {
  light: "var(--bob-web-library-color-mint20)",
  dark: "var(--bob-web-library-color-violet-darker)"
});

export const AppContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${backgroundColor};
`;
