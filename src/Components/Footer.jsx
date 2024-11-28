import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <MainContainer>
      <div>All Rights Reserved &copy; Skill Connect | 2024</div>
    </MainContainer>
  );
};

export default Footer;

const MainContainer = styled.div`
  margin-top: auto;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
