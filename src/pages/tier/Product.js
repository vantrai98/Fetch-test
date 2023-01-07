import styled from "styled-components";

import { Box, Icon } from "components";
import { LCoinIcon } from "assets/icons";
import { formatCoinNumber } from "utils";

const Root = styled.div`
  width: 200px;
  height: 240px;
  background: var(--bg-color);
  border: 1px solid #f1f1f5;
  box-shadow: 0px 12px 18px var(--shadow-color);
  border-radius: 4px;
  overflow: hidden;
`;

const Thumb = styled.img`
  width: 198px;
  height: 98px;
  object-fit: cover;
  object-position: center;
`;

const DiscountValue = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) =>
    props.$insufficientCoins
      ? "var(--font-darker-color)"
      : "var( --primary-secondary)"};
`;

const DiscountDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: var(--font-color);
  margin-top: 8px;
  max-height: ${(props) => (props.$insufficientCoins ? "48px" : "72px")};
  overflow-y: hidden;
`;

const InsufficientCoins = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: var(--primary-secondary);
  margin-top: 8px;
`;

export default function Product({ data, coinBalance }) {
  const { thumb, discountValue, discountDescription } = data;
  const insufficientCoins = discountValue > coinBalance;

  return (
    <Root>
      <Thumb src={thumb} />
      <Box padding="16px 16px 20px 16px" marginTop="-5px">
        <DiscountValue $insufficientCoins={insufficientCoins}>
          {insufficientCoins && <Icon src={LCoinIcon} marginRight="4px" />}
          {formatCoinNumber(discountValue)} Coins
        </DiscountValue>
        <DiscountDescription $insufficientCoins={insufficientCoins}>
          {discountDescription}
        </DiscountDescription>
        {insufficientCoins && (
          <InsufficientCoins>Insufficient coins</InsufficientCoins>
        )}
      </Box>
    </Root>
  );
}
