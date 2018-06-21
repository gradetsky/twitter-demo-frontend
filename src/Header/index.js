import React from "react";
import styled from "styled-components";
import Container from "../Container";
import { NavLink } from "react-router-dom";
import homeIcon from "./icon-home.svg";
import momentsIcon from "./icon-moments.svg";
import notificationsIcon from "./icon-notifications.svg";
import messagesIcon from "./icon-messages.svg";
import logo from "./logo.svg";
import searchIcon from "./icon-search.svg";
import userIcon from "./icon-user-logo.png";

const HeaderBlock = styled.header`
  width: 100%;
  height: 45px;
  background: #fff;
  display: flex;
  align-items: center;
  .row {
    align-items: center;
  }
`;

const NavBlock = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  & + * {
    margin-left: 25px;
  }
`;

const LinkIcon = styled.img`
  margin-right: 6px;
`;

const LinkText = styled.div`
  font-family: HelveticaNeue;
  font-size: 13px;
  font-weight: bold;
  color: #667580;
`;

const LogoHeader = styled.a`
  cursor: pointer;
  display: inline-block;
  margin: 0 auto;
  > img {
    display: block;
  }
`;

const SearchBlock = styled.div`
  position: relative;
  width: 220px;
  overflow: hidden;
  height: 32px;
`;

const SearchInput = styled.input.attrs({
  type: "text"
})`
  position: relative;
  z-index: 1;
  background: #f5f8fa;
  width: 220px;
  display: block;
  outline: 0;
  border: 1px solid #e6ecf0;
  border-radius: 100px;
  height: 30px;
  padding: 0 12px;
  font-size: 12px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
    color: #687b8a;
  }
`;

const SearchSubmit = styled.input.attrs({
  type: "submit"
})`
  display: block;
  position: absolute;
  z-index: 2;
  top: 8px;
  right: 12px;
  height: 16px;
  width: 16px;
  border: 0;
  outline: 0;
  font-size: 0;
  cursor: pointer;
  background: url(${searchIcon});
  background-size: cover;
  padding: 0;
`;

const UserLogo = styled.a`
  display: block;
  margin-left: 18px;
  height: 32px;
  width: 32px;
  cursor: pointer;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: #1da1f2;
  border: 1px solid #1da1f2;
  height: 32px;
  font-size: 14px;
  font-weight: bold;
  border: 0;
  outline: 0;
  cursor: pointer;
  color: white;
  margin-left: 15px;
  min-width: 70px;
`;

const Header = props => (
  <HeaderBlock>
    <Container>
      <div className="col-lg-4">
        <NavBlock>
          <Link to="/everyinteract">
            <LinkIcon src={homeIcon} alt="" />
            <LinkText>Home</LinkText>
          </Link>
          <Link to="/everyinteract/moments">
            <LinkIcon src={momentsIcon} alt="" />
            <LinkText>Moments</LinkText>
          </Link>
          <Link to="/everyinteract/notifications">
            <LinkIcon src={notificationsIcon} alt="" />
            <LinkText>Notifications</LinkText>
          </Link>
          <Link to="/everyinteract/messages">
            <LinkIcon src={messagesIcon} alt="" />
            <LinkText>Messages</LinkText>
          </Link>
        </NavBlock>
      </div>
      <div className="col-lg-4 center-lg">
        <LogoHeader>
          <img src={logo} alt="" />
        </LogoHeader>
      </div>
      <div className="col-lg-4">
        <HeaderLeft>
          <SearchBlock>
            <SearchInput placeholder="Search Twitter" />
            <SearchSubmit />
          </SearchBlock>
          <UserLogo>
            <img src={userIcon} alt="" />
          </UserLogo>
          <Button>Tweet</Button>
        </HeaderLeft>
      </div>
    </Container>
  </HeaderBlock>
);

export default Header;
