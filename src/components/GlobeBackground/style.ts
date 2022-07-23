import { styled } from "../../styles/stitches.config"

export const ImageWrapper = styled('div', {
    '&.RegisterPage': {
        position: 'absolute',
        right: 'calc(-100vw + 85%)',
        top: '100px',
        zIndex: '-10',
        width: 'fit-content',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'right',
        '@bp1': {
            right: 'calc(-100vw + 72%)',
        }, '@bp2': {
            top: '-60px',
            left: 'auto',
            right: 'auto'
        }

    }, '&.FeedbackPage': {
        position: 'absolute',
        zIndex: '-10',
    }
})

export const BackgroundImage = styled('img', {
    '&.RegisterPage': {
        maxHeight: '780px',
        width: 'fit-content',
        '@bp2': {
            maxHeight: '350px'
        },
        '@bp3': {
            maxHeight: '320px'
        }
    },
    '&.FeedbackPage': {
        maxHeight: '800px',
        width: 'fit-content',
    }
})