//function myAlbum(artistName: string, albumTitle: string){
//    return {artistName, albumTitle}
//}
//let album1 = myAlbum("Ali","Rang-e-Mohabbat");
//let album2 = myAlbum("Madad", "Roshan Andhera");
//let album3 = myAlbum("Ayaz","Mausam-e-Dil");
//console.log(album1);
//console.log(album2);
//console.log(album3);
//Number of tracks
function myAlbum2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album1 = myAlbum2("Ali", "Rang-e-Mohabbat", 30);
var album2 = myAlbum2("Madad", "Rosham-e-Andhera", 55);
var album3 = myAlbum2("Ayaz", "Musam-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
