import { Content, LayoutWrapper } from "./styled";
import { IProps } from "./typed";

export default function ({ children }: IProps) {

    return <LayoutWrapper>
        <Content>
            {children}
        </Content>
    </LayoutWrapper>
}