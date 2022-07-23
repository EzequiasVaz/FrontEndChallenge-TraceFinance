
import { globalCss } from "./stitches.config";


export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box', outline: 'none', lineHeight: '$1', fontFamily: 'Poppins' },
  body: {
    overflowX: 'hidden',
    background: '$background',
    color: '$white',
    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '$background'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '$dark900',
      borderRadius: '20px',
    },
    '#__next': {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      minHeight: '100vh',
      py: '77px',
      '@bp2': {
        flexDirection: 'column-reverse',
        gap: '$10',
      }
    },
  }
})