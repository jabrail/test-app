import { Box } from "./styled";
import { IProps } from "./typed";

export default function ({ width, height }: IProps) {
    return <Box $width={width} $height={height}></Box>
}