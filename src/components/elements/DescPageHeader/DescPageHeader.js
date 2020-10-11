import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Typography} from '@material-ui/core';

export default function DescPageHeader({ desc, variantdesc }) {
    return (
        <>
            {desc.map((descitem, id) => (
                <Grid key={id} item xs={12}>
                    <Typography variant={variantdesc[id]}>
                        {descitem}
                    </Typography>
                </Grid>
            ))}
        </>
    )
}

DescPageHeader.propTypes = {
    desc: PropTypes.array,
    variantdesc: PropTypes.array,
};