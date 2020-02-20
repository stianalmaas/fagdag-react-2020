import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 4px 10px;
  margin: 0px 4px;
  font-weight: ${props => props.active ? "bold" : "normal"};
`;
