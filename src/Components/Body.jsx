import React from "react";
import styled from "styled-components";
const Body = () => {
  return (
    <MainContainer>
      <div style={{textAlign:'center',paddingTop:'20px'}}><h2>Welcome Back, USERNAME</h2></div>
      <div className="body">
        {/* <a href="" target="_blank"> */}
          <div class="card">
            <b></b>
            <img src="https://github.com/SurajSG23/landing-page-SC/raw/main/src/assets/classes.png" alt="interview" />
            <div class="content">
              <p class="title">
                <h3>Access Virtual Lessons</h3>
                <br />
              </p>
            </div>
          </div>
        {/* </a> */}
        <div class="card">
          <b></b>
          <img src="https://github.com/SurajSG23/landing-page-SC/raw/main/src/assets/interview.png" alt="interview" />
          <div class="content">
            <p class="title">
              <h3>AI-Operated Interview</h3>
              <br />
            </p>
          </div>
        </div>
        <div class="card">
          <b></b>
          <img src="https://github.com/SurajSG23/landing-page-SC/raw/main/src/assets/resume.png" alt="interview" />
          <div class="content">
            <p class="title">
              <h3>Generate My Resume</h3>
              <br />
              <span>Coming soon...</span>
            </p>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Body;

const MainContainer = styled.div`
  width: 100%;
  min-height: 78.2vh;
  margin: 1px 0;
  display: flex;
  flex-direction: column;
  a{
    all: unset;
  }
  .card {
    position: relative;
    width: 300px;
    height: 400px;
    background: #f00;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }

  .card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #1e3a8a, #2563eb);
    border-radius: 20px;
  }

  .card::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #1e3a8a, #2563eb);
    filter: blur(30px);
    border-radius: 20px;
  }

  .card b {
    position: absolute;
    inset: 6px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    border-radius: 20px;
  }

  .card img {
    position: relative;
    z-index: 3;
    scale: 0.8;
    transition: 0.5s;
    width: 110%;
    border-radius: 20px;
  }

  .card:hover img {
    scale: 0.8;
    opacity: 0.9;
    transform: translateY(-70px);
  }

  .card .content {
    position: absolute;
    z-index: 3;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0);
    transition: 0.5s;
  }

  .card:hover .content {
    transform: scale(1);
    bottom: 25px;
  }

  .content .title {
    position: relative;
    color: #fff;
    font-weight: 500;
    line-height: 1em;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
  }

  .content .title span {
    font-weight: 300;
    font-size: 0.7em;
  }

  .content .sci {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 5px;
  }

  .sci li {
    list-style: none;
  }

  .sci li .fa-brands {
    width: 14px;
  }

  .sci li .fa-facebook {
    width: 10px;
  }

  .sci li a {
    position: relative;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    background: rgba(0, 0, 0, 0.2);
    fill: currentColor;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: 0.5s;
  }

  .sci li a:hover {
    fill: currentColor;
    color: rgba(255, 255, 255, 1);
  }

  .body {
    width: 80vw;
    min-height: 60vh;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto 0 auto;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 20px 0;
  }
`;
