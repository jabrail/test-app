import styled from "@emotion/styled";

export const AvatarWrapper = styled.div<{ $background: String }>`
        background-image: ${(props) => 'url(' + props.$background + ')'} ;    
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        width: 68px;
        height: 68px;
        border-radius: 50%;
    
`