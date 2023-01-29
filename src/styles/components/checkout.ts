import { styled } from '..'


export const CartList = styled('div', {
    height: '100vh',
    width: '30rem',
    background: '$gray800',
    position: 'absolute',
    zIndex: 1,
    right: 0,
    boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
    button: {
        '&.close-btn': {
            background: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            margin: '1rem 1rem 1rem 27rem',
            cursor: 'pointer',
            borderRadius: '50%',
            transition: 'all ease 0.2s',
            padding: '0.25rem',
            '&:hover': {
                background: '$gray900'
            }
        },
    }
})

export const ListContainer = styled('div', {
    width: '80%',
    height: '90%',
    margin: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    button: {
        background: '$green500',
        color: '$white',
        width: '100%',
        fontWeight: 'bold',
        border: 0,
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontSize: '$md',
        transition: 'all ease 0.2s',
        '&:hover': {
            background: '$green300'
        },
        '&:disabled': {
            opacity: 0.7,
            cursor: 'not-allowed'
        }
    },
    h1: {
        fontSize: '$lg',
        color: '$gray100',
        lineHeight: 1.6,
    },
    div: {
        '&.details': {
            display: 'grid',
            grid: 'auto-flow dense / 1fr 1fr',
            gap: '1rem',
            span: {
                lineHeigth: 1.6,
                '&.qtd': {
                    fontSize: '$sm',
                    color: '$gray300'
                },
                '&.amount': {
                    marginLeft: 'auto',
                    color: '$gray300'
                },
                '&.value': {
                    fontSize: '$md',
                    fontWeight: 'bold',
                    color: '$gray300'
                },
                '&.price': {
                    marginLeft: 'auto',
                    fontSize: '$lg',
                    fontWeight: 'bold',
                    color: '$white'
                },
            }
        }
    }
})

export const List = styled('div', {
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    scrollBehavior: 'smooth',
    '&::-webkit-scrollbar': {
        display: 'none'
    },
    height: '100%',
    display: 'flex',
    gap: '1.5rem',
    flexDirection: 'column',
    alignItems: 'center'
})

export const Item = styled('div', {
    height: 94,
    width: '100%',
    display: 'flex',
    gap: '1.25rem',
    justifyContent: 'start',
    alignItems: 'center'
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
    maxWidth: 100,
    height: 93,
})

export const Details = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    height: '100%',
    span: {
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300',
        strong: {
            color: '$white'
        },
        '&.btn-remove': {
            marginTop: 'auto',
            color: '$green500',
            fontSize: '$sm',
            fontWeight: 'bold',
            cursor: 'pointer',
            '&:hover': {
                color: '$green300'
            }
        }
    }
})