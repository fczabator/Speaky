import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { AppBar } from './components/AppBar';
import { Grommet } from 'grommet';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Grommet>
          <ThemeProvider theme={theme}>
            <Router>
              <AppBar />
              <Route exact path="/" component={Home} />
            </Router>
          </ThemeProvider>
        </Grommet>
      </div>
    );
  }
}

export default App;
