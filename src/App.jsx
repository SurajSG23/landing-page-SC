import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
function App() {
  return (
    <MainContainer>
      <Header />
      <hr />
      <Body />
      <hr />
      <Footer />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb, #60a5fa);
  color: white;
`;
