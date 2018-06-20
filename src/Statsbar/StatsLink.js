import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StatsLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
  flex-grow: 1;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  &:after {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.3s ease;
    background: #1da1f2;
    height: 0px;
  }
  &:hover {
    &:after {
      height: 4px;
    }
  }
  &.active {
    &:after {
      height: 4px;
    }
  }
`;

const StatsTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #707e88;
`;

const StatsValue = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #788a98;
  margin-top: 2px;
  transition: all 0.3s ease;
  ${StatsLink}:hover & {
    color: #1da1f2;
  }
  ${StatsLink}.active & {
    color: #1da1f2;
  }
`;

export default ({ title, value, link }) => (
  <StatsLink to={link}>
    <StatsTitle>{title}</StatsTitle>
    <StatsValue>{value}</StatsValue>
  </StatsLink>
);
