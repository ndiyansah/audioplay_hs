import logo from './logo.svg';
import {Fragment} from 'react';
import AudioPlayers from './containers/AudioPlayers';
import GlobalStyle from './theme/GlobalStyle';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AudioPlayers />
    </Fragment>
  );
}

export default App;
