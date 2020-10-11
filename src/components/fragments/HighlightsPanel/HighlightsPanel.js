import React from 'react';
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DescHighlightsPanel from '../../elements/DescHighlightsPanel';
import ContentHighlightsPanel from '../../elements/ContentHighlightsPanel';

const Container = withStyles(() => ({
    root: {
        backgroundColor: '#e5e5e5',
        width: '100%',
        textAlign: 'center',
        maxWidth: '1366px',
        padding: '1rem',
        boxSizing: 'border-box',
    }
}))(Box);

const deskripsi = [
    'How Can I Help You?',
    'Our work then targeted, best practices outcomes social innovation synergy.',
    'Venture philanthropy, revolutionary inclusive policymaker relief. User centered program areas scale'
]
const variantDeskripsi = ['h5', 'subtitle2', 'subtitle2']

const title = ['Consult', 'Design', 'Develop', 'Marketing', 'Manage', 'Evolve'];
const icon = ["fa fa-comments-o", "fa fa-paint-brush", "fa fa-cubes", "fa fa-bullhorn", "fa fa-tasks", "fa fa-line-chart"];
const content = [
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
            <DescHighlightsPanel deskripsi={deskripsi} variantDeskripsi={variantDeskripsi}/>
            <ContentHighlightsPanel content={content} icon={icon} title={title} />
        </Container>
    )
}
