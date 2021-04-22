const lyric_API = 'https://api.lyrics.ovh/v1/';
let artist = 'Nirvana', song = 'Come as You Are';

document.addEventListener("DOMContentLoaded", function() {
    getLyrics(artist, song)
        .then(displayLyrics)
        const searchbtn = document.getElementById('Search-btn');
             searchbtn.addEventListener("click", (e) =>{
            e.preventDefault();
            const searchInfoA = getSearchInfoArtist(),
            searchInfoS = getSearchInfoSong();
            clearLyrics()
            getLyrics(searchInfoA, searchInfoS)
            .then(displayLyrics)
            clearSearchInfo()
        })
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
function displayLyrics(lyricsOBJ) {
    const lyricsBar = document.getElementById("show-lyrics"),
    lyricsdiv = createElements(lyricsOBJ, artist, song);
    
    lyricsBar.appendChild(lyricsdiv);
}

/*clear lyrics function 
clearlyrics()*/
function clearLyrics() {
    document.getElementById("show-lyrics").innerHTML = "";
}

function clearSearchInfo() {
    document.querySelector("#lyric-search").reset();
  }

/*clears existing Lyrics then appends new lyrics.
    clear lyrics bar
    adds new lyrics and song based on enter
*/

function getSearchInfoArtist() {
    let artistInput = document.querySelector('.Artist-input')

        artist = artistInput.value

        return artist;
    }

function getSearchInfoSong() {
        let songInput = document.querySelector('.Song-input');
    
            song = songInput.value
    
            return song;
        }
