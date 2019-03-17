var playlist = {Baa: "song"};

function updatePlaylist(playlist, artistName, songTitle) {
 
 playlist[artistName] = songTitle;

  return playlist;
}

updatePlaylist(song, darude, sandstorm);