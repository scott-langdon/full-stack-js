 $(document).ready(function(){
  $('button').click(function(){
    $('button').removeClass('selected');
    $(this).addClass("selected");
    const flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; 
    const animal = $(this).text();
    const flickrOptions = {
      tags: animal,
      format: "json"
    };
    const displayPhotos = function(data){
      var photoHTML = '<ul>'; 
      $.each(data.items, function(i, photo){
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="'+ photo.link +'" class="image">';
        photoHTML += '<img src="'+ photo.media.m +'"></a></li>'; 
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    };
    $.getJSON(flickerAPI, flickrOptions, displayPhotos); 
  });
}); //ends ready
