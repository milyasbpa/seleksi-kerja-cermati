import React from 'react';
import PropTypes from 'prop-types';
import {Box, Typography} from '@material-ui/core';

export default function DescNewsLetter({deskripsi,variantDeskripsi}) {
    return (
        <Box marginBottom='2rem'>
           {deskripsi.map((desc,index) => (
                <Typography variant={variantDeskripsi[index]}>
                    {desc}
                </Typography>
            ))} 
        </Box>
    )
}

DescNewsLetter.propTypes = {
    deksripsi: PropTypes.array,
    variantDeskripsi : PropTypes.array,
};