import { styled } from "../../styles/stitches.config"

export const PrincipalTitle = styled('h1', {
    fontSize: '$5',
    fontWeight: '$7',
    color: '$white',
})

export const SecondaryTitle = styled('h3', {
    fontSize: '$3',
    fontWeight: '$3',
    color: '$white',
})

export const FormComponent = styled('div', {
    backgroundColor: '$dark900LowOpacity',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px',
    height: '100%',
    width: '706px',
    px: '77px',
    py: '32px',

    '@bp3': {
        width: '95%',
        px: '5%'
    }
})

export const Form = styled('form', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '552px',
    gap: '16px',

    //mudando a cor do button quando o form for valido
    '&:valid > button[type="submit"]': {
        color: '$dark950',
        backgroundColor: '$primary500',
        cursor: 'pointer'
    },

    '@bp3': {
        width: '100%'
    }
})

export const AlignCenterDiv = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'center',

})

export const FormComponentTitle = styled('h2', {
    fontSize: '$4',
    fontWeight: '$7',
})

export const FormComponentSubtitle = styled('p', {
    fontSize: '$2',
    fontWeight: '$3',
})

export const FormLabelAndInputDiv = styled('div', {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '$dark950',
    position: 'relative',
    border: '1px solid $dark800',
    borderRadius: '8px',
    height: '56px',
    transition: '.5s',

    //marcação do focus na div
    '&:hover': {
        border: '2px solid $dark500',
    },
    '&:focus-within': {
        border: '2px solid $white',
    },

    //Modificando e removendo placeholder/icone calendario do input[date] 
    '& > input[type="date"]': {
        cursor: 'text'
    },
    '& > input[type="date"]::before': {
        content: '',
        width: '100%',
        height: '100%',
        color: 'transparent'
    },

    '& > input[type="date"]:focus': {
        color: '$white'
    },

    '& > input[type="date"]:valid': {
        color: '$white'
    },

    '& > input[type="date"]:focus::before': {
        display: 'none',
        color: '$white'
    },

    '& > input[type="date"]:valid::before': {
        display: 'none',
        color: '$white'
    },
    '& > input[type="date"]::-webkit-calendar-picker-indicator': {
        display: 'none'
    },
    '&.invalid': {
        border: '1px solid $feedbackError',
        mb: '24px',
    },
    '&.invalid > label': {
        color: '$feedbackError'
    },

})


export const FormLabel = styled('label', {
    fontSize: '$2',
    fontWeight: '$4',
    color: '$dark500',
    position: 'absolute',
    left: '16px',
    pointerEvents: 'none',
    transition: '.5s',

    '&.has-content': {
        fontSize: '$1',
        top: '5px',
    }
})

export const FormInput = styled('input', {
    color: '$dark500',
    fontWeight: '$4',
    width: '100%',
    fontSize: '$2',
    backgroundColor: '$dark950',
    border: 'none',
    paddingTop: '20px',
    px: '16px',

    '&:focus': {
        color: '$white',
    },
    '&:valid': {
        color: '$white',
    },
    [`&:focus ~ ${FormLabel}`]: {
        fontSize: '$1',
        top: '5px',
    },
    [`&:valid ~ ${FormLabel}`]: {
        fontSize: '$1',
        top: '5px',
    },
    '&.has-content::before': {
        display: 'none',

    },



})

export const ErrorSpan = styled('span', {
    position: 'absolute',
    bottom: '-24px',
    fontSize: '$1',
    color: "$feedbackError",

}
)


export const Button = styled('button', {
    backgroundColor: '$dark900',
    color: '$dark500',
    height: '56px',
    border: 'none',
    outline: 'none',
    fontSize: '$2',
    fontWeight: '$5',
    borderRadius: '8px',
    cursor: 'not-allowed'
})

export const CheckBoxInputDiv = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px'
})

export const CheckBox = styled('input', {
    '&[type="checkbox"]': {
        appearance: 'none',
        width: '20px',
        height: '20px',
        backgroundColor: 'none',
        border: '2px solid $dark300',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    '&[type="checkbox"]:checked': {
        border: '2px solid $primary500',
        backgroundColor: '$primary500'
    },
    '&[type="checkbox"]:checked::before': {
        content: `url(assets/CheckBox_checked.svg)`,
    }
})

export const CheckBoxLabel = styled('label', {
    fontSize: '$2',
    fontWeight: '$3'
})





