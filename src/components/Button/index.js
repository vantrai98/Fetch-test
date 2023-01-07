import styled from "styled-components";

const ButtonStyled = styled.button`
  dislay: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 60px;
  background: var(--primary-color);
  border-radius: 4px;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: var(--primary-font-color);
  &:hover {
    cursor: pointer;
  }
`;

export default ButtonStyled;
