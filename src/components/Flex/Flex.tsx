import { FlexWrapper } from "./styled";
import { Direction, IProps, Justify } from "./typed";

export default function ({ justify = Justify.spaceBetween, direction = Direction.horizontal, align, wide, width, children }: IProps) {
    return <FlexWrapper $justifyContent={justify} $direction={direction} $align={align} $wide={wide} $width={width}>
        {children}
    </FlexWrapper>
}