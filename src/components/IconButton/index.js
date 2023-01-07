import Icon from "components/Icon";
import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--bg-color);
  outline: none;
  border: none;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

export default function IconButton({ icon, children, ...props }) {
  return (
    <ButtonStyled {...props}>
      <Icon src={icon} />
    </ButtonStyled>
  );
}
