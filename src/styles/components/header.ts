import { styled } from '..'

export const Container = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})

export const Cart = styled('div', {
    height: '3rem',
    width: '3rem',
    background: '$gray800',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    cursor: 'pointer',
    span: {
        position: 'absolute',
        top: '-0.5rem',
        right: '-0.5rem',
        background: '$green300',
        height: '1.5rem',
        width: '1.5rem',
        color: '$white',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '$sm',
        fontWeight: 'bold',
        border: '1px solid $gray800',
    }
})