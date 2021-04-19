const lyric_API = 'https://api.lyrics.ovh/v1/';
let artist = '', song = '';

function getLyrics(artist, song){
fetch(`${lyric_API}${artist}/${song}`)
    .then(resp => resp.json())
    .then(data => console.log(data))
}

getLyrics('coldplay', 'Adventure of a Lifetime')
