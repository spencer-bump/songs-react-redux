import React from 'react';
import actions from '../actions';
import reducers from '../reducers';
import SongList from './SongList';

const App = () => {
  return(
    <div>
      <SongList />
    </div>
  );
};

export default App;
