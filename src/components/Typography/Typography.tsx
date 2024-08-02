import { TextWrapper } from "./styled";
import { IProps, TypographyVariant } from "./typed";

export default function ({ children, type = TypographyVariant.primary }: IProps) {
    return <TextWrapper $type={type}>
        {children}
    </TextWrapper>
}