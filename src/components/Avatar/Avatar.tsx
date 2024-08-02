import { AvatarWrapper } from './styled'
import { IProps } from './typed'

export default function ({ source }: IProps) {
    return <AvatarWrapper $background={source}></AvatarWrapper>
}