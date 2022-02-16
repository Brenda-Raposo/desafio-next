import { styled } from '@stitches/react';

export const Container =  styled('div',
{
    backgroundColor: '#ededed',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

export const Area = styled('form',
{
    width: '400px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',

    'h1':{
        fontSize:'40px',
        color: '#999'
    },

});

export const DivInput = styled('div',
{
    backgroundColor: 'white',
    borderTop: 'solid 2px #999',
    marginBottom: '15px',
    display:'flex',
    padding:'15px'
});

export const Input = styled('input', 
{
    border: 'none',
    width:'100%',
    height:'auto',
    marginLeft:'10px',
    
    '&:focus': {
        boxShadow: '0 0 0 0',
        outline: '0'
    },

    '&::placeholder': {
        color: '#a6a6a6',
    },
});

export const Button = styled('button',
{
    width:'100%',
    cursor: 'pointer',
    backgroundColor: '#43dbcf',
    border: 'none',
    borderBottom: 'solid 2px #3fc5bc',
    padding: '15px',
    color: '#fff',

    '&:hover': {
        backgroundColor: '#4bbeb5',
    },
});