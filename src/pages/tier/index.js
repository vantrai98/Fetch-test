import { chevronLeftIcon } from "assets/icons";
import { Box, HorizontalList, IconButton } from "components";
import { useState } from "react";
import styled from "styled-components";
import BalanceCoinCard from "./BalanceCoinCard";
import Product from "./Product";

const Header = styled.div`
  background-color: var(--primary-color);
  padding: 28px 24px;
  height: 396px;
`;

const TierName = styled.h1`
  font-size: 32px;
  color: var(--primary-font-color);
  font-weight: 600;
  line-height: 40px;
  margin-top: 16px;
`;

const TierDescription = styled.p`
  font-size: 16px;
  color: var(--font-lighter-color);
  letter-spacing: -0.5px;
  line-height: 24px;
  margin-top: 8px;
`;

const fakeProductData = [
  {
    id: 1,
    category: "Petrol",
    products: [
      {
        id: 1,
        thumb: "/images/thumb-1.png",
        discountValue: 15,
        discountDescription:
          "50% discount for every $100 top-up on your Shell Petrol Card",
      },
      {
        id: 2,
        thumb: "/images/thumb-2.png",
        discountValue: 1000,
        discountDescription: "70% discount top-up on your Shell Petrol Card",
      },
    ],
  },
  {
    id: 2,
    category: "Rental Rebate",
    products: [
      {
        id: 3,
        thumb: "/images/thumb-3.png",
        discountValue: 20,
        discountDescription: "Get $20 Rental rebate",
      },
      {
        id: 4,
        thumb: "/images/thumb-4.png",
        discountValue: 15,
        discountDescription: "Get $500 Rental rebate",
      },
    ],
  },
  {
    id: 3,
    category: "Food and Beverage",
    products: [
      {
        id: 5,
        thumb: "/images/thumb-5.png",
        discountValue: 25,
        discountDescription: "NTUC Fairprice $50 Voucher",
      },
      {
        id: 6,
        thumb: "/images/thumb-6.png",
        discountValue: 5,
        discountDescription: "Free Cold Stone Sundae at any flavour!",
      },
    ],
  },
];

export default function TierPage() {
  const [state] = useState({
    coinBalance: 340,
    productData: fakeProductData,
  });

  const { coinBalance, productData } = state;

  return (
    <Box paddingBottom="40px">
      <Header>
        <IconButton icon={chevronLeftIcon} />
        <TierName>Silver Tier</TierName>
        <TierDescription>
          In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
          exclusive rewards.
        </TierDescription>
      </Header>

      <Box paddingLeft="16px" paddingRight="16px" marginTop="-176px">
        <BalanceCoinCard coinBalance={coinBalance} />
      </Box>

      {productData.map((item, index) => (
        <Box key={item.id} marginTop={index === 0 ? "24px" : "48px"}>
          <HorizontalList
            title={item.category}
            data={item.products}
            renderItems={(item) => (
              <Product data={item} coinBalance={coinBalance} />
            )}
          />
        </Box>
      ))}
    </Box>
  );
}
