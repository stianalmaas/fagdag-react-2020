import styled, { createGlobalStyle } from "styled-components";
import sonatWebLibraryColors from "./webLibrary.colors";
import typography from "./typography";
import fontFace from "./font";


export const MenuList = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;

// oppg 4 - bruk attrs til å sette typography klasse
export const StyledMenuItem = styled.li.attrs(()=>({
    className: "sonat-typography__regular--xx-large--gray"
}))`
  a {
    padding: 0.4rem 0.4rem 0.4rem 2rem;
    text-decoration: none;
    display: block;
    color:  ${({ theme }) => theme.color};
  }

  a:hover {
    color:  ${({ theme }) => theme.hoverColor}; // oppg 3
    //oppgave 2: color: {({ darkMode }) => darkMode ? "--sonat-web-library-color-snow": "--sonat-web-library-color-coal" }; 
  }
`;

export const StyledSideBar = styled.aside`
  width: 228px;
  min-height: 100vh;
  background: ${({ theme }) => theme.backgroundColor}; // oppg 3
  //oppgave 2: background: {({ darkMode }) => darkMode ? "--sonat-web-library-color-coal": "--sonat-web-library-color-snow" }; 
  position: fixed;
  color: ${({ theme }) => theme.color}; // oppg 3
  //oppgave 2: color: {({ darkMode }) => darkMode ? "--sonat-web-library-color-gray": "--sonat-web-library-color-coal" }; 
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


export const AppContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

`;
