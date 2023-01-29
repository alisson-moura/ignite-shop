import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,
    h1: {
        fontSize: '$2xl',
        color: '$gray100',
    },
    p: {
        fontSize: '$xl',
        lineHeight: 1.8,
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem'
    },
    a: {
        marginTop: '5rem',
        display: 'block',
        textDecoration: 'none',
        fontSize: '$lg',
        color:'$green500',
        '&:hover': {
            color: '$green300',
        }
    }
})

export const ImageContainer = styled('div', {
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
        objectFit: 'cover'
    },
    width: '100%',
    height: '100%',
    maxWidth: 140,
    maxheight: 140,
    padding: '0.25rem',
    marginTop: '2rem',
    marginLeft: '-3rem'
})

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
})