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
  .sonat-typography__${type}--${fontSize}--${color} {  font-size: ${
    sizes[fontSize]
  };
    color: var(--sonat-web-library-color-${color});
    ${getFontWeight(type)};     
  }
  `;

// prettier has a problem with formatting the code in the following function, hence the following:
// prettier-ignore
const createTypographyCss = ({ type, fontSize, color }) => css`
  font-size: ${sizes[fontSize]};
  color: var(--sonat-web-library-color-${color});
  ${getFontWeight(type)};
`;

const generate = () => {
  let style = ``;
  const variables = {};
  // let listAllClasses = '';
  types.forEach(type => {
    colors.forEach(color => {
      Object.keys(sizes).forEach(fontSize => {
        style += createTypography({ type, color, fontSize });
        variables[
          `sonat-typography__${type}--${fontSize}--${color}`
        ] = createTypographyCss({ type, color, fontSize });
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

/* Lookup
* sonat-typography__semibold--large--violet
 sonat-typography__semibold--medium-1--violet
 sonat-typography__semibold--medium--violet
 sonat-typography__semibold--small--violet
 sonat-typography__semibold--x-small--violet
 sonat-typography__semibold--large--lighter-grey
 sonat-typography__semibold--medium-1--lighter-grey
 sonat-typography__semibold--medium--lighter-grey
 sonat-typography__semibold--small--lighter-grey
 sonat-typography__semibold--x-small--lighter-grey
 sonat-typography__semibold--large--light-grey
 sonat-typography__semibold--medium-1--light-grey
 sonat-typography__semibold--medium--light-grey
 sonat-typography__semibold--small--light-grey
 sonat-typography__semibold--x-small--light-grey
 sonat-typography__semibold--large--coal
 sonat-typography__semibold--medium-1--coal
 sonat-typography__semibold--medium--coal
 sonat-typography__semibold--small--coal
 sonat-typography__semibold--x-small--coal
 sonat-typography__semibold--large--snow
 sonat-typography__semibold--medium-1--snow
 sonat-typography__semibold--medium--snow
 sonat-typography__semibold--small--snow
 sonat-typography__semibold--x-small--snow
 sonat-typography__regular--large--violet
 sonat-typography__regular--medium-1--violet
 sonat-typography__regular--medium--violet
 sonat-typography__regular--small--violet
 sonat-typography__regular--x-small--violet
 sonat-typography__regular--large--lighter-grey
 sonat-typography__regular--medium-1--lighter-grey
 sonat-typography__regular--medium--lighter-grey
 sonat-typography__regular--small--lighter-grey
 sonat-typography__regular--x-small--lighter-grey
 sonat-typography__regular--large--light-grey
 sonat-typography__regular--medium-1--light-grey
 sonat-typography__regular--medium--light-grey
 sonat-typography__regular--small--light-grey
 sonat-typography__regular--x-small--light-grey
 sonat-typography__regular--large--coal
 sonat-typography__regular--medium-1--coal
 sonat-typography__regular--medium--coal
 sonat-typography__regular--small--coal
 sonat-typography__regular--x-small--coal
 sonat-typography__regular--large--snow
 sonat-typography__regular--medium-1--snow
 sonat-typography__regular--medium--snow
 sonat-typography__regular--small--snow
 sonat-typography__regular--x-small--snow
 sonat-typography__bold--large--violet
 sonat-typography__bold--medium-1--violet
 sonat-typography__bold--medium--violet
 sonat-typography__bold--small--violet
 sonat-typography__bold--x-small--violet
 sonat-typography__bold--large--lighter-grey
 sonat-typography__bold--medium-1--lighter-grey
 sonat-typography__bold--medium--lighter-grey
 sonat-typography__bold--small--lighter-grey
 sonat-typography__bold--x-small--lighter-grey
 sonat-typography__bold--large--light-grey
 sonat-typography__bold--medium-1--light-grey
 sonat-typography__bold--medium--light-grey
 sonat-typography__bold--small--light-grey
 sonat-typography__bold--x-small--light-grey
 sonat-typography__bold--large--coal
 sonat-typography__bold--medium-1--coal
 sonat-typography__bold--medium--coal
 sonat-typography__bold--small--coal
 sonat-typography__bold--x-small--coal
 sonat-typography__bold--large--snow
 sonat-typography__bold--medium-1--snow
 sonat-typography__bold--medium--snow
 sonat-typography__bold--small--snow
 sonat-typography__bold--x-small--snow
* */
