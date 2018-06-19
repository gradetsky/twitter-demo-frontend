import React from "react";
import styled from "styled-components";
import Container from "../Container";
import canopyImage from "../Canopy/header-bg.png";
import userImage from "../Canopy/icon-user-logo.png";

const CanopyWrap = styled.div`
  height: 380px;
  width: 100%;
  background: url(${canopyImage});
  background-size: cover;
  position: relative;
  > .container {
    position: relative;
    height: 100%;
  }
`;

const UserLogo = styled.img`
  position: relative;
  cursor: pointer;
  left: 0px;
  bottom: -80px;
  height: 210px;
  width: 210px;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  max-width: 100%;
`;

const Canopy = props => (
  <CanopyWrap>
    <Container>
      <div className="col-lg-4">
        <UserLogo src={userImage} />
      </div>
    </Container>
  </CanopyWrap>
);

export default Canopy;
