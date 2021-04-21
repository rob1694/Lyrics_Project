const lyric_API = 'https://api.lyrics.ovh/v1/';

document.addEventListener("DOMContentLoaded", function() {
    getLyrics('Nirvana', 'Come as You Are').then(displayExample)
})

function getLyrics(artist, song){
    return fetch(`${lyric_API}${artist}/${song}`)
        .then(resp => resp.json())
}

/* Create Elements in the dom
    <h2>Song Title</h2>
    <p>Lyrics</p>
*/
function createElements(lyricsOBJ, artist, song) {
    const div = document.createElement('div'),
    h2 = document.createElement('h2'),
    h3 = document.createElement('h3'),
    p = document.createElement('p');

    h2.textContent = artist;
    h3.textContent = song;
    p.textContent = lyricsOBJ.lyrics;

    div.appendChild(h2);
    div.appendChild(h3)
    div.appendChild(p);

    return div
}

/* On page load displayExample */
function displayExample(lyricsOBJ) {
    let artist = 'Nirvana', song = 'Come as You Are';
    const lyricsBar = document.getElementById("show-lyrics"),
    lyricsdiv = createElements(lyricsOBJ, artist, song);
    
    lyricsBar.appendChild(lyricsdiv);
}

/*clear lyrics function 
clearlyrics()*/
function clearLyrics() {
    document.getElementById("show-lyrics").innerHTML = "";
}

/* ShowLyrics funtion that displays example Lyrics then clears existing Lyrics then appends new lyrics.
    clear lyrics bar
    adds new lyrics and song based on enter
*/


