import styled from "@emotion/styled";

export const Box = styled.div<{ $width?: number; $height?: number }>`
    width: ${props => props.$width}px;
    height: ${props => props.$height}px;
`