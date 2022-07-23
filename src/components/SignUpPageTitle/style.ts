import { styled } from "../../styles/stitches.config";

export const PageTitleContainer = styled('div', {
    position: 'relative',
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

export const TitleContainer = styled('div', {
    width: '353px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',

    '@bp2': {
        alignItems: 'center',
        textAlign: 'center'
    }
})

export const PageTitle = styled('h1', {
    fontWeight: '$8',
    fontSize: '$5',

    '@bp3': {
        fontSize: '$mobile5'
    }
})

export const PageSubtitle = styled('p', {
    fontWeight: '$3',
    fontSize: '$3',

    '@bp3': {
        fontSize: '$mobile2'
    }
})

export const Divisor = styled('hr', {
    backgroundColor: '$primary500',
    height: '11px',
    width: '43px',
    border: 'none',
    borderRadius: '20px'
})