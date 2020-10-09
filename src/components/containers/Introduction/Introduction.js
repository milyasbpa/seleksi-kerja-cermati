import React from 'react';
import { Box, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Image from '../../../public/image/homepage.jpg';

const StyledBox = withStyles(() => ({
    root: {
        background:`linear-gradient(0deg, rgba(0, 74, 117, 0.5), rgba(0, 74, 117, 0.5)), url(${Image})`,
        height: 400,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    }
}))(Box);
const StyledBox2 = withStyles(() => ({
    root: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
    }
}))(Box);

const StyledButton = withStyles(() => ({
    root: {
        backgroundColor: 'none !important',
        border:'2px solid #fff',
        borderRadius:'4px',
        color: '#fff',
        transition: 'none !important',
        '&:hover': {
            backgroundColor: '#fff !important',
            border:'2px solid #fff',
        borderRadius:'4px',
        color:'#004a75',
        },
    },
}))(Button);


export default function Introduction() {
    return (
        <StyledBox>
            <StyledBox2>
                <h2>Hello! I'm Ilyas Bashirah</h2>
                <h2>Consult, Design, and Develop Websites</h2>
                <h3>
                    Have Something great in mind? Feel free to contact me
                    I'll help you to make it happen
                </h3>
                <StyledButton disableRipple={true}>
                    LET'S MAKE CONTACT
                </StyledButton>
            </StyledBox2>
        </StyledBox>
    )
}