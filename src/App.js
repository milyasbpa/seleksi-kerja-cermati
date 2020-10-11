// import internal modul
import React, { Fragment } from 'react';
// import external modul
import { MuiThemeProvider } from '@material-ui/core/styles';
// import internal component sesuai abjad
import HighlightsPanel from './components/fragments/HighlightsPanel';
import NotificationPanel from './components/layouts/NotificationPanel';
import PageHeader from './components/fragments/PageHeader';
import PageFooter from './components/fragments/PageFooter';
// import style
import theme from './styles/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Fragment>
        <NotificationPanel>
          <PageHeader />
          <HighlightsPanel />
          <PageFooter />
        </NotificationPanel>
      </Fragment>
    </MuiThemeProvider>
  );
}

export default App;
