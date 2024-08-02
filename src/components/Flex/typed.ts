import { ReactElement } from "react";

export interface IProps {
    justify?: Justify;
    children: ReactElement | ReactElement[]
    direction?: Direction
    align?: FlexAlign
    wide?: boolean
    width?: string;
}

export enum Justify {
    spaceBetween = 'space-between',
    center = 'center',
    start = 'start'
}

export enum Direction {
    vertical = 'column',
    horizontal = 'row'
}
export enum FlexAlign {
    center = 'center',
    start = 'start',
    end = 'end'
}