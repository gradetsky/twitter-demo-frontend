import React from "react";
import styled from "styled-components";
import moreIcon from "./icon-more.svg";
import Container from "../Container";
import StatsLink from "./StatsLink";

const StatsWrap = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0px 2px 2px #b0b8be;
  .col-lg-4:last-child {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

const FollowButton = styled.button`
  border: 1px solid #1da1f2;
  border-radius: 20px;
  background: white;
  cursor: pointer;
  font-weight: 700;
  color: #1da1f2;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  box-sizing: border-box;
`;

const StatsBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
`;

const MoreButton = styled.button`
  background-color: white;
  background-image: url(${moreIcon});
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  width: 4px;
  height: 14px;
  cursor: pointer;
`;

const StatsBar = props => (
  <StatsWrap>
    <Container>
      <div className="col-lg-offset-3" />
      <div className="col-lg-4">
        <StatsBlock>
          <StatsLink link="/everyinteract" title="Tweets" value="8,058" />
          <StatsLink link="/following" title="Following" value="721" />
          <StatsLink link="/followers" title="Followers" value="1815" />
          <StatsLink link="/likes" title="Likes" value="460" />
          <StatsLink link="/lists" title="Lists" value="2" />
        </StatsBlock>
      </div>
      <div className="col-lg-4">
        <FollowButton>Follow</FollowButton>
        <MoreButton />
      </div>
    </Container>
  </StatsWrap>
);

export default StatsBar;
