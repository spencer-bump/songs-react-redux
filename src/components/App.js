import React from 'react';
import actions from '../actions';
import reducers from '../reducers';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
  return(
    <div className="ui contianer grid" >
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
