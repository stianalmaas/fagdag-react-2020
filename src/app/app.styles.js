import styled, { createGlobalStyle } from "styled-components";
import sonatWebLibraryColors from "./webLibrary.colors";
import typography from "./typography";
import fontFace from "./font";

// oppg 1 - fyll ut styling for de forskjellige styled-components
// oppg 2 - bruk props til å styre darkmode i menysystemet

export const MenuList = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;

// oppg 3. bruk theming variabler her
// oppg 4. bruk typographyklassene her (attrs)
export const StyledMenuItem = styled.li.attrs(() => ({
  className: 'sonat-typography__regular--medium--gray'
}))`
  a {
    font-weight: bold;
  }

  a:hover {
    font-size: 110%;
  }
`;

export const StyledSideBar = styled.aside`
  width: 228px;
  min-height: 100vh;
  position: fixed;
  padding: 1.5rem;
  font-weight: normal;
  line-height: 2rem;
  background-color: ${props => props.theme.backgroundColor};
  a {
    color: ${props => props.theme.color};
  }
  
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
  background-color: ${props => props.theme.backgroundColor};
  a {
    color: ${props => props.theme.color};
  }

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
