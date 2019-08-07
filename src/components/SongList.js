import React, { Component } from 'react';
import { connect } from 'react-redux';
// selectSong is a "Named export" so it is dereferrenced
import { selectSong } from '../actions';

// class SongList extends React.Component {
class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return(
        <div className="item" key={song.title} >
          <div className="right floated content" >
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content" >
            {song.title}
          </div>
        </div>

      );
    });
  };

  render() {
    return(
      <div className="ui divided list" >
        {this.renderList()}
      </div>
    );
  }
}


// By returning songs from mapStateToProp,
// 'songs' will be available in the Component
// Pull what you want out of the store.
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// pass our component into connect
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);

