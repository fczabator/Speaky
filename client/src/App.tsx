import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home} from './screens/Home';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme';
import {createGlobalStyle} from 'styled-components';
import {Practice} from './screens/Practice';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Kalam');
    font-family: 'Kalam', cursive;
  }
`;
class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Router>
            <Route exact path="/" component={Home} />
            <Route path="/practice" component={Practice} />
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
