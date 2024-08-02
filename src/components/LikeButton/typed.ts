export interface IProps {
    type?: LikeButtonVariant
    count: string
}

export enum LikeButtonVariant {
    default,
    active,
    disabled
}

export interface LikeIconProps {
    isActive?: boolean
    disabled?: boolean
}