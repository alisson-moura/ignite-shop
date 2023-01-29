import { styled } from "..";

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',
    margin: '0 auto',
maxWidth: 1180
})

export const ImageContainer = styled('div', {
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
        objectFit: 'cover'
    },
    width: '100%',
    maxWidth: 576,
    height: 656,
})

export const DetailsContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    h1: {
        fontSize: '$2xl',
        color: '$gray300',
    },
    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$green300'
    },
    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300'
    },
    button: {
        background: '$green500',
        color: '$white',
        fontWeight: 'bold',
        border: 0,
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontSize: '$md',
        marginTop: 'auto',
        transition: 'all ease 0.2s',
        '&:hover': {
            background: '$green300'
        },
        '&:disabled': {
            opacity: 0.7,
            cursor: 'not-allowed'
        }
    }
})