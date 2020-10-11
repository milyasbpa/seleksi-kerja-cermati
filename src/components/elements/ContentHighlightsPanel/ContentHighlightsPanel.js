import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const ContentBox = withStyles(() => ({
    root: {
        border: '1px solid rgba(0,0,0,0.1)',
        textAlign: 'left',
        height: '12rem',
        boxSizing: 'border-box',
        padding: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
    }
}))(Box)

export default function ContentHighlightsPanel({content, icon, title}) {
    return (
        <>
            <Grid container spacing={2}>
                {title.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                        <ContentBox>
                            <Grid item xs={11}>
                                <Typography variant="body1">
                                    {item}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <i className={icon[index]} aria-hidden="true"></i>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="caption">
                                    {content[index]}
                                </Typography>
                            </Grid>
                        </ContentBox>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

ContentHighlightsPanel.propTypes = {
    content: PropTypes.array,
    icon : PropTypes.array,
    title : PropTypes.array,
};