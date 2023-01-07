import AppBar from "components/AppBar";
import styled from "styled-components";

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const AppContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

export default function Layout({ children }) {
  return (
    <Root>
      <AppContent>{children}</AppContent>
      <AppBar />
    </Root>
  );
}
