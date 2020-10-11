// import internal modul
import React from 'react';
import PropTypes from 'prop-types';
// import external modul
import { Box, Button, CssBaseline, Drawer, Grid, Typography } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// import internal component
import NewsletterPanel from '../../fragments/NewsletterPanel';

const drawerHeight = 60;

const StyledBox = withStyles(() => ({
    root: {
        width: '100%',
        overflowX:'hidden',
    }
}))(Box);

const StyledButton = withStyles(() => ({
    root: {
        backgroundColor: '#007bc1',
        color:'#fff',
        transition: 'none !important',
        '&:hover': {
            backgroundColor: '#007bc1 !important',
        },
    },
}))(Button);

const StyledGrid = withStyles(() => ({
    container: {
        maxWidth: '720px',
        margin: '0 auto',
    }
}))(Grid)

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'height'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginTop: drawerHeight,
        transition: theme.transitions.create(['margin', 'height'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaper: {
        height: drawerHeight,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '720px',
        margin: '0 auto',
    },
}));

export default function NotificationPanel({ children }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="persistent"
                anchor="top"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <StyledGrid container alignItems='center'>
                    <Grid item xs={12} sm={10}>
                        <Typography variant="subtitle2">
                            By accessing and using this website you acknowledge that you have read and understand our Cookie Policy, Privacy Policy and our Term of Service
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <StyledButton disableRipple={true} onClick={handleDrawerClose}>
                            <Typography variant="subtitle2">
                                Got it
                            </Typography>
                        </StyledButton>
                    </Grid>
                </StyledGrid>
            </Drawer>

            <StyledBox
                position="static"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                {children}
            </StyledBox>
            <NewsletterPanel />
        </div>
    )
};

NotificationPanel.propTypes = {
    children: PropTypes.node
};