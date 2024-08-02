export interface IProps {
    children: string;
    type?: TypographyVariant;
}

export enum TypographyVariant {
    primary,
    secondary
}