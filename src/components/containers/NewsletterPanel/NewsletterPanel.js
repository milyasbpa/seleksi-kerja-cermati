import React, { useState } from 'react';
import { Box, Drawer } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const Container = withStyles(() => ({
    root: {
        position: 'fixed',
        bottom: '0',
        left: '0',
    },
    paperAnchorDockedBottom: {
        maxWidth:'640px',
        backgroundColor: '#007bc1',
        color: '#fff',
      },
}))(Drawer);

const CloseDiv = withStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        cursor:'pointer',
    }
}))(Box);

export default function NewsletterPanel() {
    const [close, setClose] = useState(false);

    const handleClose = () => {
        setClose(true);
    }

    return (

        <Container variant="persistent"
            anchor="bottom"
            open={!close} >
            <CloseDiv onClick={handleClose}>
                x
            </CloseDiv>
            <h2>Get latest updates in web technologies</h2>
            <p>I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.</p>
        </Container>
    )
}
