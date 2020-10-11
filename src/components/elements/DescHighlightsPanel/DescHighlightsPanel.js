import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const ContainerDesc = withStyles(() => ({
    root: {
        backgroundColor: '#e5e5e5',
        width: '100%',
        textAlign: 'center',
        maxWidth: '1366px',
        padding: '1rem',
        boxSizing: 'border-box',
        margin: '1rem 0',
    },
}))(Box);

export default function DescHighlightsPanel({ deskripsi,variantDeskripsi }) {
    return (
        <ContainerDesc>
            {deskripsi.map((item, _) => (
                <Typography key={_} variant={variantDeskripsi[_]}>
                    {item}
                </Typography>
            ))}
        </ContainerDesc>
    )
}

DescHighlightsPanel.propTypes = {
    deksripsi: PropTypes.array,
    variantDeskripsi : PropTypes.array,
};