import { IProps, LikeButtonVariant } from "./typed";
import { Flex } from "../Flex";
import { Typography } from "../Typography";
import { ImageWrappet } from "./styled";
import { LikeIcon } from "./LikeIcon";

export default function ({ type = LikeButtonVariant.default, count }: IProps) {

    return <Flex>
        <ImageWrappet>
            <LikeIcon disabled={type == LikeButtonVariant.disabled} isActive={type == LikeButtonVariant.active}></LikeIcon>
        </ImageWrappet>
        <Typography>
            {count}
        </Typography>
    </Flex>
}