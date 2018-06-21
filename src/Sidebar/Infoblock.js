import React from "react";
import styled from "styled-components";
import locationIcon from "./icon-location.svg";
import linkIcon from "./icon-link.svg";
import joinedIcon from "./icon-joined.svg";

const Infoblock = styled.div`
  display: flex;
`;

const Icon = styled.img`
  display: block;
`;

const Text = styled.div`
  margin-left: 5px;
  line-height: 28px;
  font-size: 14px;
  color: #657786;
`;

const Link = styled.a`
  margin-left: 5px;
  text-decoration: none;
  color: #1d81c2;
  font-size: 14px;
`;

export default ({ infotype, info }) => (
  <Infoblock>
    {infotype === "location" ? <Icon src={locationIcon} alt="" /> : null}
    {infotype === "link" ? <Icon src={linkIcon} alt="" /> : null}
    {infotype === "date" ? <Icon src={joinedIcon} alt="" /> : null}
    {infotype === "link" ? (
      <Link href={info}>{info}</Link>
    ) : (
      <Text>{info}</Text>
    )}
  </Infoblock>
);
