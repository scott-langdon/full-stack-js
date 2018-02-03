var playlist = new Playlist(); 

var somebodytoldme = new Song("somebodytoldme", "the killers", "2:45"); 
var mrbrightside = new Song("mrbrightside", "the killers", "4:45"); 

var manofsteel = new Movie("man of steel", 2013, "2:23:00"); 

playlist.add(somebodytoldme);
playlist.add(mrbrightside);

playlist.add(manofsteel);

var playlistElement = document.getElementById("playlist");
playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play"); 
playButton.onclick = function(){
  playlist.play();
  playlist.renderInElement(playlistElement); 
}

var nextButton = document.getElementById("next"); 
nextButton.onclick = function(){
  playlist.next();
  playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop"); 
stopButton.onclick = function(){
  playlist.stop();
  playlist.renderInElement(playlistElement);
}