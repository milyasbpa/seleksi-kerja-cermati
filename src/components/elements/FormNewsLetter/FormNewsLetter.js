import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, Grid, InputBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledInputBase = withStyles(() => ({
    input: {
        padding: '18.5px 14px',
        background: '#fff',
        boxSizing: 'border-box',
    }
}))(InputBase);

const StyledButton = withStyles(() => ({
    root: {
        backgroundColor: '#ff8000 !important',
        borderRadius: '0px !important',
        color: '#fff',
        height: '36px',
        fontSize: '12px',
        transition: 'none !important',
        '&:hover': {
            backgroundColor: 'none !important',
        },
    },
}))(Button);

export default function FormNewsLetter({buttontext,inputtext}) {
    return (
        <FormControl>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={10}>
                    <StyledInputBase fullWidth={true} placeholder={inputtext} />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <StyledButton disableRipple={true}>
                        {buttontext}
                    </StyledButton>
                </Grid>
            </Grid>
        </FormControl>
    )
}

FormNewsLetter.propTypes = {
    deksripsi: PropTypes.string,
    variantDeskripsi : PropTypes.string,
};