import { styled } from "../../../styles/stitches.config";

export const ShowPassword = styled('span', {
    position: 'absolute',
    top: '12px',
    right: '16px',
    cursor: 'pointer',

    '& > svg': {
        color: '$dark500',
    }
})