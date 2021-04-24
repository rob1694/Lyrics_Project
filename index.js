const lyric_API = 'https://api.lyrics.ovh/v1/';
let artist = 'Nirvana', song = 'Come as You Are';

document.addEventListener("DOMContentLoaded", function() {
    getLyrics(artist, song)
        .then(displayLyrics)
        replaceLyrics()
        displayComment()
    })

function getLyrics(artist, song){
    return fetch(`${lyric_API}${artist}/${song}`)
        .then(resp => resp.json())
}

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

function displayLyrics(lyricsOBJ) {
    const lyricsBar = document.getElementById("show-lyrics"),
    lyricsdiv = createElements(lyricsOBJ, artist, song);
    
    lyricsBar.appendChild(lyricsdiv);
}

function clearLyrics() {
    document.getElementById("show-lyrics").innerHTML = "";
}

function clearSearchInfo() {
    document.querySelector("#lyric-search").reset();
  }

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

function replaceLyrics(){
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
}

/*
create p tag with comment input
append p tag on click
add event listener that displays comment
reset comment form after click
*/

function createComment(comments) {
    const section = document.getElementById('comments-section')
    const comment = document.createElement('p'),
    div = document.createElement('div')

    comment.textContent = comments

    section.appendChild(div)
    div.appendChild(comment)

    return div
}

function getComment() {
    let commentInput = document.querySelector('.comment-control');

        comment = commentInput.value

        return comment;
    }

function clearCommentInput() {
    document.querySelector('#comments-form').reset();
}

function displayComment() {
    const submit = document.getElementById('submit-btn');
        
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const comment = getComment();
        createComment(comment);
        clearCommentInput();
    })
}

