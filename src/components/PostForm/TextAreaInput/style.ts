import { styled } from "../../../styles/stitches.config"



export const TextAreaContainer = styled('div', {
    width: '100%',
    height: '92px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '$dark950',
    position: 'relative',
    border: '1px solid $dark800',
    borderRadius: '8px',
    transition: '.5s',
    px: '16px',
    py: '8px',
    '&:hover': {
        border: '2px solid $dark500',
    },
    '&:focus-within': {
        border: '2px solid $white',
    },
    '&:focus-within > label': {
        fontSize: '$1',
    }, '&.invalid': {
        position: 'relative',
        mb: '24px',
        border: '1px solid $feedbackError',
    }, '&.invalid > label': {
        color: '$feedbackError',
    }, '&.invalid > span': {
        left: '0',
    }
})

export const TextAreaLabel = styled('label', {
    position: "absolute",
    fontSize: '$2',
    fontWeight: '$4',
    color: '$dark500',
    left: '16px',
    pointerEvents: 'none',
    transition: '.5s',
})

export const TextArea = styled('textarea', {
    background: 'none',
    border: 'none',
    width: '100%',
    height: '100%',
    color: '$white',
    resize: 'none',
    mt: '18px',
    fontSize: '$2',
    fontWeight: '$3',
    [`&:valid ~ ${TextAreaLabel}`]: {
        fontSize: '$1'
    },
    '&::-webkit-scrollbar': {
        width: '5px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '$dark950'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '$dark900',
        borderRadius: '20px',
    }
})