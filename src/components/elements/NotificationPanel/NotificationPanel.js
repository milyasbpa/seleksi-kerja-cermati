import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const NavPanel = withStyles(() => ({
    root: {
        backgroundColor: '#e5e5e5',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
    },
}))(Box)


export default function NotificationPanel() {
    return (
        <Grid container>
            <Grid item>
                <NavPanel>
                    <Box>
                    <p>By accessing and using this website you acknowledge that you have read and understand our Cookie Policy, Privacy Policy and our Term of Service</p>
                    </Box>
                </NavPanel>
            </Grid>
        </Grid>

    )
}
