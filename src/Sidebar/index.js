import React from "react";
import styled from "styled-components";
import tickIcon from "./icon-tick.svg";
import Infoblock from "./Infoblock";

const Wrap = styled.div`
  margin-top: 45px;
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #14171a;
  margin-right: 5px;
`;

const NicknameBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #697787;
  font-weight: 400;
  margin-top: 5px;
`;

const Nickname = styled.div`
  font-size: 14px;
`;

const NicknameFollows = styled.div`
  margin-left: 10px;
  font-size: 12px;
`;

const Description = styled.div`
  max-width: 240px;
  font-size: 14px;
  font-weight: 400;
  color: #14171a;
  margin-top: 15px;
  line-height: 20px;
`;

const InfoArea = styled.div`
  margin-top: 15px;
  > div {
    display: flex;
    justify-contnet: flex-start;
    align-items: center;
  }
  > div + * {
    margin-top: 10px;
  }
`;

const ButtonBlock = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  min-width: 130px;
  height: 40px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #1da1f2;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

const Sidebar = props => (
  <Wrap>
    <TitleBlock>
      <Title>Every Interaction</Title>
      <img src={tickIcon} alt="" />
    </TitleBlock>
    <NicknameBlock>
      <Nickname>@EveryInteract</Nickname>
      <NicknameFollows>Follows you</NicknameFollows>
    </NicknameBlock>
    <Description>
      UX Design studio focused problem solving creativity. Design to us is how
      can we make things *work* amazing.
    </Description>
    <InfoArea>
      <Infoblock infotype="location" info="London, Uk" />
      <Infoblock infotype="link" info="everyinteract.com" />
      <Infoblock infotype="date" info="Joined May 2008" />
    </InfoArea>
    <ButtonBlock>
      <Button>Tweet to</Button>
      <Button>Message</Button>
    </ButtonBlock>
  </Wrap>
);

export default Sidebar;
