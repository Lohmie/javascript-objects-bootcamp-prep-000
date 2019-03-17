var boo = {Baa: "song"};

function updatePlaylist(playlist, artistName, songTitle) {
 
  playlist[artistName] = songTitle;

  return playlist;
}

Object.assign({}, meals, { breakfast: ['oatmeal', 'banana'] })

function removeFromPlaylist(playlist, artistName) {

  delete playlist.artistName;
  
  return playlist;
}