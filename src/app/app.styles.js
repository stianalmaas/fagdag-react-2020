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
    color:  ${({ theme }) => theme.hoverColor};
  }
`;

export const StyledSideBar = styled.aside`
  width: 228px;
  min-height: 100vh;
  background: ${({ theme }) => theme.backgroundColor};
  position: fixed;
  color: ${({ theme }) => theme.color};
  padding: 1.5rem;
  font-weight: normal;
  line-height: 2rem;
`;

export const StyledMain = styled.main`
  display: block;
  width: calc(100% - 208px);
  flex: 1;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 3rem;
`;

export const GlobalStyle = createGlobalStyle`

  ${fontFace};
  ${typography};
  *,
*::before,
*::after{box-sizing:border-box;}

  :root {
    ${sonatWebLibraryColors};
    font-family: 'Roboto';
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

`;
