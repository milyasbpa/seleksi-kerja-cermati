import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

const StyledButton = withStyles(() => ({
    root: {
        backgroundColor: 'none !important',
        border: '2px solid #fff',
        borderRadius: '4px',
        color: '#fff',
        height: 45,
        transition: 'none !important',
        margin: '2rem auto',
        '&:hover': {
            backgroundColor: '#fff !important',
            border: '2px solid #fff',
            borderRadius: '2px',
            color: '#004a75',
        },
    },
}))(Button);

export default function ButtonPageHeader({ action }) {
    return (
        <>
            <Grid item xs={12}>
                <StyledButton disableRipple={true}>
                    <Typography variant="button">
                        {action}
                    </Typography>
                </StyledButton>
            </Grid>
        </>
    )
}

ButtonPageHeader.propTypes = {
    action: PropTypes.string,
};