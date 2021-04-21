const lyric_API = 'https://api.lyrics.ovh/v1/';
let artist = '', song = '';

function getLyrics(artist, song){
    return fetch(`${lyric_API}${artist}/${song}`)
        .then(resp => resp.json())
}

/* On page load displayExample */
function displayExample() {
    return getLyrics('Nirvana', 'Come As You Are')
}

displayExample();
/* Create Elements in the dom
    <h2>Song Title</h2>
    <p>Lyrics</p>
*/
function createElements(lyrics, titleInput) {
    const div = createElements('div'),
    h2 = document.createElement('h2'),
    p = document.createElement('p');

    h2.textContent = titleInput;
    p.textContent = lyrics;

    div.appendChild(h2);
    div.appendChild(p);

    return div
}

/*clear lyrics function 
clearlyrics()*/

/* ShowLyrics funtion that displays example Lyrics then clears existing Lyrics then appends new lyrics.
    clear lyrics bar
    adds new lyrics and song based on enter
*/


