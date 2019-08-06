// Action Creators
// Using a 'Named export' for each function
export const selectSong = song => {
  // return an action - 'type' is required
  return {
    type: "SONG_SELECTED",
    payload: {
      song: song
    }
  };
};
