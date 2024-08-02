import { useEffect, useState } from "react";
import { Comment } from "../components/Comment";
import { Devider } from "../components/Devider";
import { Flex } from "../components/Flex";
import { Layout } from "../components/Layout";
import { LikeButton } from "../components/LikeButton";
import { LikeButtonVariant } from "../components/LikeButton/typed";
import { SizedBox } from "../components/SizedBox";
import { Typography } from "../components/Typography";
import getCommentsRequest from "../api/comments/getCommentsRequest";
import { Author, Data } from "../types";
import getAuthorsRequest from "../api/authors/getAuthorsRequest";

export function Main() {

    const [data, setData] = useState<Data[]>([])
    const [authors, setAuthors] = useState<{ [key: string]: Author }>({})

    useEffect(() => {
        init();
    }, [])

    async function init() {
        const authorsResponce = await getAuthorsRequest();
        let authorsObj: { [key: string]: Author } = {}
        authorsResponce.forEach((item: Author) => {
            authorsObj[item.id.toString()] = item
        })
        setAuthors(authorsObj)
        const responce = await getCommentsRequest(1)
        setData(responce.data)
    }

    if (!data.length) {
        return <Layout><Typography>Нет данных</Typography></Layout>
    }

    return <Layout>
        <SizedBox height={32} />
        <Flex>
            <Typography>
                {data.length + ' комментариев'}
            </Typography>
            <LikeButton type={LikeButtonVariant.disabled} count={data.map((item) => item.likes).reduce((a, b) => a + b, 0).toString()}></LikeButton>
        </Flex>
        <SizedBox height={8} />
        <Devider></Devider>
        <>
            {
                data.filter(item => !item.parent).map(item => <><SizedBox height={32} /><Comment id={item.id} text={item.text.trim()} likes={item.likes} authors={authors} author={item.author} data={data}></Comment></>)
            }
        </>
    </Layout>
}