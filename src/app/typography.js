import { css } from "styled-components";

const sizes = {
  "xx-large": "2.25rem",
  "x-large": "1.875rem",
  large: "1.125rem",
  "medium-1": "1rem",
  medium: "0.875rem",
  small: "0.75rem",
  "x-small": "0.625rem"
};

const types = ["semibold", "regular", "bold"];
const colors = ["gray", "coal", "snow"];

const getFontWeight = type => {
  switch (type) {
    case "semibold":
      return "font-weight: 400";
    case "bold":
      return "font-weight: 700";
    default:
      return "";
  }
};

const createTypography = ({ type, fontSize, color }) =>
  `
  //Oppg 4 fyll inn her
    .sonat-typography__${type}--${fontSize}--${color} {
      ${getFontWeight(type)};
      font-size: ${sizes[fontSize]};
      color: ${color};
      a {
        color: ${color};
      }
    }
  `;


const generate = () => {
  let style = ``;
  const variables = {};
  // let listAllClasses = '';
  types.forEach(type => {
    colors.forEach(color => {
      Object.keys(sizes).forEach(fontSize => {
        style += createTypography({ type, color, fontSize });

      });
    });
  });
  // console.log(listAllClasses);
  return {
    css: css`
      ${style}
    `,
    variables
  };
};

const typo = generate();
export const { variables } = typo;
export const { css: compiledCss } = typo;
export default typo.css;
export const fontSizes = sizes;
