import { styled } from "../../../styles/stitches.config"


export const FormSelectContainer = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '56px',
    backgroundColor: '$dark950',
    color: '$dark500',
    border: '1px solid $dark800',
    zIndex: '1',
    cursor: "pointer",
    fontSize: '$2',
    fontWeight: '$5',
    borderRadius: '8px',
    transition: '.5s border-color',
    '& > span': {
        position: 'absolute',
        top: '16px',
        right: '16px',
        width: '25px',
        height: '25px',
        backgroundImage: 'url("/assets/SelectOptionsIcon.svg")'
    },
    '&:hover': {
        border: '2px solid $dark500'
    },
    '&:focus': {
        border: '2px solid $white',
    },

    /*Quando clicar na seleção de país */
    '&.active': {
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px'
    },

    '&.active:hover': {
        border: '1px solid $dark800',
    },
    '&.active:focus': {
        border: '1px solid $dark800',
    },

    '&.active::after': {
        position: 'absolute',
        top: '-1px',
        height: '100%',
        content: '',
        width: '100%',
        borderTop: '2px solid $white',
        borderRight: '2px solid $white',
        borderLeft: '2px solid $white',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
    },

    '&.active > span': {
        transform: 'rotate(180deg)',
        filter: 'invert(100%) sepia(2%) saturate(6611%) hue-rotate(43deg) brightness(1008%) contrast(100%)',
    }, '&.invalid': {
        border: '1px solid $feedbackError',
    }, '&.invalid > input::placeholder': {
        color: '$feedbackError'
    }, '&.invalid > span': {
        filter: 'invert(58%) sepia(50%) saturate(7485%) hue-rotate(330deg) brightness(102%) contrast(96%)',
    }

})

export const FormSelect = styled('input', {
    background: 'none',
    zIndex: '100',
    width: '100%',
    height: '56px',
    color: '$dark500',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    fontSize: '$2',
    fontWeight: '$4',
    px: '16px',
    pointerEvents: 'none',
    caretColor: 'transparent',
    '&::placeholder': {
        fontSize: '$2',
        fontWeight: '$4',
        color: '$dark500'
    },
    '&::-webkit-input-placeholder &::-moz-placeholder &:-ms-input-placeholder &:-moz-placeholder': {
        fontSize: '$2',
        fontWeight: '$4',
        color: '$dark500'
    }, '&:focus': {
        cursor: 'none',
    },
    '& > li:hover': {
        color: "$white",
    }, '&:valid': {
        color: '$white'
    }

})

export const DivisorFormOptions = styled('div', {
    width: '96%',
    height: '1px',
    backgroundColor: '$dark800',
})

export const Options = styled('ul', {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: '54px',
    width: '100%',
    backgroundColor: '$dark950',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',

    '&.active::after': {
        position: 'absolute',
        height: '100%',
        content: '',
        width: '100%',
        borderRight: '2px solid $white',
        borderLeft: '2px solid $white',
        borderBottom: '2px solid $white',
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
        zIndex: '-1'
    },
})

export const SelectOptions = styled('li', {
    listStyle: 'none',
    width: '100%',
    py: '19px',
    px: '16px',
    cursor: "pointer",

    '&:hover': {
        color: '$white'
    },
    '&:focus': {
        color: '$white'
    }
})