var playlist = {
  Elton John: 'Tiny Dancer',
  Ed Sheeran: 'Galway Girl',
  Lady Gaga: 'Born This Way'
}
function updatePlaylist (playlist, name, title) {
  playlist[name] = title
  return playlist 
}

function removeFromPlaylist (title, name) {
delete name.title;
return playlist 
}