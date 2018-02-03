function Song(title, artist, duration) {
  Media.call(this, title, duration);
  this.artist = artist;
}

// this copies the references to the media's prototype properties methods to the songs prototype 
Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function() {
  var htmlString = '<li'; 
  if(this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>'; 
  htmlString += this.title; 
  htmlString += ' - '; 
  htmlString += this.artist; 
  htmlString += '<span class="duration">'; 
  htmlString += this.duration; 
  htmlString += '</span></li>';
  return htmlString; 
};