import React from 'react'
import {Box} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const Container = withStyles(() => ({
    root:{
        height:'3rem',
        backgroundColor:'#004a75',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
    }
}))(Box);

// kurang icon
export default function PageFooter() {
    return (
        <Container>
            2018 Yuan Monos. All rights reserved.
        </Container>
    )
}
