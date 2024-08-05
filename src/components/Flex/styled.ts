import styled from "@emotion/styled";
import { Direction, FlexAlign, Justify } from "./typed";

export const FlexWrapper = styled.div<{ $justifyContent: Justify; $direction: Direction; $align?: FlexAlign; $wide?: Boolean; $width?: String }> `
    display: flex;
    justify-content: ${props => props.$justifyContent};
    flex-direction: ${props => props.$direction};
    align-items: ${props => props.$align ? props.$align : 'center'};
    width: ${props => props.$wide ? '100%' : props.$width + ''};
`
