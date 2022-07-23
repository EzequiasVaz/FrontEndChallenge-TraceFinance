import { createStitches } from '@stitches/react'

export const { css, globalCss, styled, theme } = createStitches({
    theme: {
        colors: {
            background: 'hsla(0, 0%, 7%, 1)',
            white: 'hsla(0, 0%, 100%, 1)',
            dark300: 'hsla(0, 0%, 72%, 1)',
            dark500: 'hsla(0, 0%, 53%, 1)',
            dark800: 'hsla(0, 0%, 25%, 1)',
            dark900: 'hsla(0, 0%, 16%, 1)',
            dark900LowOpacity: 'hsla(0, 0%, 11%, 0.5)',
            dark950: 'hsla(0, 0%, 13%, 1)',
            primary500: 'hsla(164, 100%, 47%, 1)',
            feedbackError: 'hsla(357, 95%, 64%, 1)',
        },
        space: {
            1: '8px',
            2: '16px',
            3: '24px',
            4: '32px',
            5: '40px',
            6: '48px',
            7: '56px',
            8: '64px',
            9: '72px',
            10: '80px',
        },
        fontSizes: {
            1: '12px',
            2: '14px',
            3: '18px',
            4: '25px',
            5: '45px',
            mobile2: '16px',
            mobile3: '20px',
            mobile4: '24px',
            mobile5: '32px'
        },
        lineHeights: {
            1: '130%',
        },
        fontWeights: {
            2: '200',
            3: '300',
            4: '400',
            5: '500',
            6: '600',
            7: '700',
            8: '800',
        },

        transitions: {
        },


    },
    media: {
        bp1: '(max-width: 1439px)',
        bp2: '(max-width: 1216px)',
        bp3: '(max-width: 767px)',
    },
    utils: {
        mx: (value: string) => ({
            marginLeft: value,
            marginRight: value
        }),
        my: (value: string) => ({
            marginTop: value,
            marginBottom: value
        }),
        mb: (value: string) => ({
            marginBottom: value
        }),
        mt: (value: string) => ({
            marginTop: value
        }),
        px: (value: string) => ({
            paddingLeft: value,
            paddingRight: value
        }),
        py: (value: string) => ({
            paddingTop: value,
            paddingBottom: value
        })

    }
})