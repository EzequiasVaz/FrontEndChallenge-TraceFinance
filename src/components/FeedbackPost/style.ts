import { styled } from "../../styles/stitches.config";

export const FeedbackPostContainer = styled('div', {
    width: '820px',
    height: '428px',
    backgroundColor: '$dark900LowOpacity',
    border: '2px solid #2A2A2A',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
})

export const UserIcon = styled('div', {
    width: '78px',
    height: '78px',
    borderRadius: '78px',
    backgroundColor: '$primary500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

export const UserIconName = styled('p', {
    fontSize: '$4',
    fontWeight: '$7',
    color: "$dark950",
})

export const MessagesContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
})

export const WelcomeMessage = styled('h2', {
    fontSize: '$5',
    fontWeight: '$8',
    color: '$white',
    textAlign: 'center',
})

export const WelcomeSubtitleMessage = styled('h5', {
    fontSize: '$3',
    fontWeight: '$2',
    color: '$white',
})