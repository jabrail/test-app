import styled from "@emotion/styled";
import { TypographyVariant } from "./typed";

export const TextWrapper = styled.span<{ $type: TypographyVariant }>`
    color: ${props => variantToColorMapper[props.$type]};
    font-size: 16px;
`

const variantToColorMapper = {
    [TypographyVariant.primary]: '#FFFFFF',
    [TypographyVariant.secondary]: '#8297AB'
}