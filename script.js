const url =
  "https://icilondelawebradio.ice.infomaniak.ch/icilondelawebradio-128.mp3";

jsmediatags.read(url, {
  onSuccess: function (tag) {
    console.log("Titre :", tag.tags.title);
    console.log("Artiste :", tag.tags.artist);
    console.log("Album :", tag.tags.album);
    console.log("Année :", tag.tags.year);
    console.log("Genre :", tag.tags.genre);
  },
  onError: function (error) {
    console.log(error);
  },
});
