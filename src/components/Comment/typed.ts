import { Author, Data } from "../../types"

export interface IProps {
    id: number
    author: number
    text: string
    likes: number
    authors: { [key: string]: Author }
    items?: Data[]
    data: Data[]
}