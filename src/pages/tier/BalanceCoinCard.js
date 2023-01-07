import styled from "styled-components";
import { Box, Button, Icon } from "components";
import { chevronRightBlueIcon } from "assets/icons";

const Root = styled.div`
  border: 1px solid #fafafb;
  border-radius: 8px;
  padding: 24px;
  background-image: url("/images/coin-balance-card-bg.png");
  background-position: center;
  background-color: var(--bg-color);
  box-shadow: 0px 12px 18px var(--shadow-color);
`;

const BalanceCoinLabel = styled.p`
  color: var(--font-lighter-color);
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
`;

const BalanceCoinValue = styled.p`
  color: var(--primary-color);
  font-size: 48px;
  letter-spacing: -0.5px;
  margin-top: 8px;
`;

const UpTierProgress = styled.div`
  height: 5px;
  background: var(--grey-color);
  border-radius: 2.5px;
  position: relative;
  margin-top: 33px;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 60%;
    height: 100%;
    background: var(--primary-secondary);
    border-radius: 2.5px;
  }
`;

const UpTierTip = styled.p`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: var(--font-color);
  margin-top: 34px;
`;

const TierBenefitLink = styled.a`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: var(--primary-secondary);
  display: row;
  align-items: center;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const UpdatedDate = styled.p`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.5px;
  color: var(--font-lighter-color);
  margin: 16px auto 0px;
`;

export default function BalanceCoinCard({ coinBalance }) {
  return (
    <Root>
      <BalanceCoinLabel>Available Coin balance</BalanceCoinLabel>
      <BalanceCoinValue>{coinBalance}</BalanceCoinValue>
      <UpTierProgress />
      <UpTierTip>
        You have paid rental fee for $1,200.
        <br />
        Pay more $800 to achieve Gold Tier.
      </UpTierTip>
      <Box marginTop="16px">
        <TierBenefitLink>
          View tier benefits
          <Icon src={chevronRightBlueIcon} marginLeft="9px" />
        </TierBenefitLink>
      </Box>
      <Box marginTop="24px" display="flex" justifyContent="center">
        <Button>My Coupons</Button>
      </Box>
      <UpdatedDate>Updated : 02/11/2021</UpdatedDate>
    </Root>
  );
}
