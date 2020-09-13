import styled from "styled-components";

import { BAR_HEIGHT } from "../consts";

export const Canvas = styled.canvas<{ poster: string }>`
width: 100%;
${({ poster }): string => `background-image: url(${poster});`}
max-height: calc(100vh - ${BAR_HEIGHT} - 1px);
background-color: black;
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
cursor: pointer;
`;
