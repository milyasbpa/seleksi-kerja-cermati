import React, { useState, useEffect } from 'react';
import { Box, Drawer, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DescNewsLetter from '../../elements/DescNewsLetter';
import FormNewsLetter from '../../elements/FormNewsLetter';

const Container = withStyles(() => ({
    root: {
        position: 'fixed',
        bottom: '0',
        left: '0',
    },
    paperAnchorDockedBottom: {
        maxWidth: '640px',
        backgroundColor: '#007bc1',
        color: '#fff',
        padding: '20px',
        boxSizing: 'border-box',
    },
}))(Drawer);

const CloseDiv = withStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        cursor: 'pointer',
    }
}))(Box);

const deskripsi = ['Get latest updates in web technologies','I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.']
const variantDeskripsi = ['h5','body2']

export default function NewsletterPanel() {
    const [close, setClose] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setClose(true);
        }, 10000);
    }, []);

    const handleClose = () => {
        setClose(true);
    }

    return (
        <Container transitionDuration={1000} variant="persistent"
            anchor="bottom"
            open={!close} >
            <CloseDiv onClick={handleClose}>
                <Typography variant="body1">
                    X
                </Typography>
            </CloseDiv>
            <DescNewsLetter deskripsi={deskripsi} variantDeskripsi={variantDeskripsi} />
            <FormNewsLetter buttontext='Count me in!' inputtext='Email address' />
        </Container>
    )
}
