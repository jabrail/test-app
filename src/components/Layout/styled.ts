import styled from "@emotion/styled";
import img from "./../../assets/images/background.webp";

export const LayoutWrapper = styled.div`
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    background-color: #101F25;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    overflow-x: none;
`

export const Content = styled.div`
    max-width: 562px;
    width: 100%;
`