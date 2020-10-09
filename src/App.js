import React,{Fragment} from 'react';
import NotificationPanels from './components/containers/NotificationPanels';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
import Introduction from'./components/containers/Introduction';
import HighlightsPanel from './components/containers/HighlightsPanel';
import PageFooter from './components/containers/PageFooter';

function App() {
  return (
    <MuiThemeProvider theme={theme}> 
      <Fragment>
        <NotificationPanels>
          <Introduction />
          <HighlightsPanel />
          <PageFooter />
        </NotificationPanels>
    </Fragment>
    </MuiThemeProvider>
    
  );
}

export default App;
