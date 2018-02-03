function Movie(title, year, duration) {
  Media.call(this, title, duration);
  this.year = year;
}

// this sets it up with the defaults: title and duration 
Movie.prototype = Object.create(Media.prototype);

// then here it tags on the methods specific to the "Movie" constructor if called
Movie.prototype.toHTML = function() {
  var htmlString = '<li'; 
  if(this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>'; 
  htmlString += this.title; 
  htmlString += ' ( '; 
  htmlString += this.year; 
  htmlString += ' ) '; 
  htmlString += '<span class="duration">'; 
  htmlString += this.duration; 
  htmlString += '</span></li>';
  return htmlString; 
};