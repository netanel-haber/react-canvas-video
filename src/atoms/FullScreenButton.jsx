import React from "react";
import styled from "styled-components";

import { flexCenter } from "../consts";
import { FullScreen } from "./icons";

export const FullScreenButton = ({ toggleFullScreen }) => (
  <Button onClick={() => toggleFullScreen((fs) => !fs)}>
    <FullScreen />
  </Button>
);

const Button = styled.div`
  ${flexCenter}
  cursor: pointer;
  margin: 0 10px;
`;
