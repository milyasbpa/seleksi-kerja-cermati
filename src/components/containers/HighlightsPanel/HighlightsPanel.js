import React from 'react';
import { Grid, Box } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const Container = withStyles(() => ({
    root: {
        backgroundColor: '#e5e5e5',
        width:'100%',
        textAlign:'center',
        
    }
}))(Box)
const ContentBox = withStyles(() => ({
    root: {
        border:'1px solid black',
        borderRadius:'4px',
        textAlign:'left',
        // display:'flex',
        // justifyContent:'flex-start',
    }
}))(Box)

const StyledGrid = withStyles(() => ({
    container: {
        maxWidth: '1366px',
        margin: '0 auto',
    }
}))(Grid)

const title=['Consult','Design','Develop','Marketing','Manage','Evolve'];

const content=[
    'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework, social impact low-hanging fruit. Save the world, compelling revolutionary progress.',
    'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.',
    'Revolutionary circular, movements a org impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.',
    'Peaceful, vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.',
    'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.',
    'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Though leadership mass incarceration. Outcomes big data, fairness, social game-changer.',
]

export default function HighlightsPanel() {
    return (
        <Container>
            <StyledGrid container justify='center' spacing={2}>
                <Grid item xs={12} >
                    <h2>How Can I Help You?</h2>
                    <h4>
                        Our work then targeted, best practices outcomes social innovation synergy.
                        Venture philanthropy, revolutionary inclusive policymaker relief. User centered program areas scale
                    </h4>
                </Grid>
                {title.map((item,index) => (
                    <Grid item xs={12} sm={6} md={4}>
                    <ContentBox>
                        <p>{item}</p>
                        <p>{content[index]}</p>
                    </ContentBox>
                </Grid>
                ))}
            </StyledGrid>
        </Container>
    )
}
