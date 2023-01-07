import Box from "components/Box";
import styled from "styled-components";

const Title = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: var(--primary-color);
  margin-left: 24px;
`;

export default function HorizontalList({
  title,
  data,
  renderItems,
  spacing = "24px",
}) {
  return (
    <Box>
      <Title>{title}</Title>
      <Box marginTop="24px" display="flex" width="100%" overflowX="auto">
        {data.map((item, index) => (
          <Box
            key={item.id}
            marginLeft={spacing}
            marginRight={index === data.length - 1 && spacing}
          >
            {renderItems(item, index, data)}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
