import { Avatar } from "../Avatar";
import { Flex } from "../Flex";
import { Direction, FlexAlign, Justify } from "../Flex/typed";
import { LikeButton } from "../LikeButton";
import { LikeButtonVariant } from "../LikeButton/typed";
import { SizedBox } from "../SizedBox";
import { Typography } from "../Typography";
import { TypographyVariant } from "../Typography/typed";
import { IProps } from "./typed";

export default function Comment({ id, text, likes, authors, author, data }: IProps) {

    const items = data.filter(subItem => subItem.parent == id);

    return <Flex direction={Direction.vertical}>
        <Flex align={FlexAlign.start} wide={true}>
            <Avatar source={authors[author.toString()].avatar}></Avatar>
            <SizedBox width={20}></SizedBox>
            <Flex direction={Direction.vertical} align={FlexAlign.start} width="calc(100% - 68px)">
                <Flex justify={Justify.spaceBetween} wide={true}>
                    <Flex direction={Direction.vertical} justify={Justify.center}>
                        <Typography>timo_shka</Typography>
                        <Typography type={TypographyVariant.secondary}>1 час назад</Typography>
                    </Flex>
                    <LikeButton type={LikeButtonVariant.active} count={likes.toString()}></LikeButton>
                </Flex>
                <SizedBox height={20}></SizedBox>
                <Typography>
                    {text}
                </Typography>
            </Flex>
        </Flex>
        <>
            {
                items && items.length > 0 && items.map(item => <><SizedBox height={35} /><Flex justify={Justify.start} wide={true}><SizedBox width={32} /><Comment id={item.id} text={item.text.trim()} likes={item.likes} author={item.author} data={data} authors={authors}></Comment></Flex></>)
            }
        </>
    </Flex>
}