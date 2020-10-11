// import internal modul
import React from 'react';
// import external modul
import { Box, Grid} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// import interneal elements
import ButtonPageHeader from '../../elements/ButtonPageHeader';
import DescPageHeader from '../../elements/DescPageHeader';
// import internal asset
import Image from '../../../assets/image/homepage.jpg';
import Logo from '../../../assets/image/logo.png';

const Container = withStyles(() => ({
    root: {
        background: `linear-gradient(0deg, rgba(0, 74, 117, 0.85), rgba(0, 74, 117, 0.85)), url(${Image})`,
        backgroundBlendMode: 'multiply',
        height: 500,
        width: '100%',
        textAlign: 'center',
        color: 'white',
        boxSizing: 'border-box',
    }
}))(Box);

const StyledGrid = withStyles(() => ({
    container: {
        maxWidth: '1366px',
        margin: '0 auto',
        height: 500,
    }
}))(Grid)

const useStyles = makeStyles(() => ({
    img: {
        height: '1.5rem',
        textAlign: 'left',
        margin: '1rem',
    }
}))

const desc = ["Hello! I'm Ilyas Bashirah", "Consult, Design, and Develop Websites", "Have Something great in mind? Feel free to contact me", "I'll help you to make it happen"];
const variantdesc = ["h5", "h5", "subtitle2", "subtitle2"]

export default function PageHeader() {
    const classes = useStyles();
    return (
        <Container>
            <Grid container>
                <img src={Logo} alt="logo" className={classes.img} />
            </Grid>
            <StyledGrid container alignContent='center' >
                <DescPageHeader desc={desc} variantdesc={variantdesc} />
                <ButtonPageHeader action="LET'S MAKE CONTACT" />
            </StyledGrid>
        </Container>
    )
}