import { bellIcon, homeIcon, personIcon, walletIcon } from "assets/icons";
import Icon from "components/Icon";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px 40px;
  border-top: 2px solid var(--grey-color);
  background: var(--bg-color);
`;

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background: none;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &::before {
    display: ${(props) => (props.$hasBadge ? "block" : "none")};
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: var(--red-color);
    right: 4px;
    top: 4px;
    content: "";
    border-radius: 6px;
  }
`;

export default function AppBar({ icon, children, ...props }) {
  return (
    <Root {...props}>
      <ButtonStyled>
        <Icon src={homeIcon} />
      </ButtonStyled>
      <ButtonStyled $hasBadge>
        <Icon src={bellIcon} />
      </ButtonStyled>
      <ButtonStyled>
        <Icon src={walletIcon} />
      </ButtonStyled>
      <ButtonStyled>
        <Icon src={personIcon} />
      </ButtonStyled>
    </Root>
  );
}
