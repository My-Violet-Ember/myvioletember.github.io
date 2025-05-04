(function(){

  var t = {
    playlist: [
      {
        file: "tracks/MissingYou.m4a",
        thumb: "thumbs/missing_you.png",
        trackName: "Missing You",
        trackArtist: "My Violet Ember",
        trackAlbum: "Missing You",
      },
      {
        file: "tracks/MissingYouAcoustic.m4a",
        thumb: "thumbs/missing_you_acoustic.png",
        trackName: "Missing You (Acoustic Version)",
        trackArtist: "My Violet Ember",
        trackAlbum: "Missing You",
      }
    ]
  }

  $(".jAudio").jAudio(t);

})();