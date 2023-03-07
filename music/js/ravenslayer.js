(function(){

  var t = {
    playlist: [
      {
        file: "tracks/01.mp3",
        thumb: "thumbs/01.jpg",
        trackName: "Dusk",
        trackArtist: "Tobu & Syndec",
        trackAlbum: "Single",
      },
      {
        file: "tracks/02.mp3",
        thumb: "thumbs/02.jpg",
        trackName: "Blank",
        trackArtist: "Disfigure",
        trackAlbum: "Single",
      },
      {
        file: "tracks/03.mp3",
        thumb: "thumbs/03.jpg",
        trackName: "Fade",
        trackArtist: "Alan Walker",
        trackAlbum: "Single",
      }
    ]
  }

  $(".jAudio").jAudio(t);

})();