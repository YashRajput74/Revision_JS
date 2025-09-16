const artists = [
    { id: 1, name: "Billie Eilish" },
    { id: 2, name: "The Weeknd" },
    { id: 3, name: "Ariana Grande" },
    { id: 4, name: "Drake" },
    { id: 5, name: "Ed Sheeran" },
    { id: 6, name: "Dua Lipa" },
    { id: 7, name: "Post Malone" },
    { id: 8, name: "Bruno Mars" },
    { id: 9, name: "Taylor Swift" },
    { id: 10, name: "Justin Bieber" },
    { id: 11, name: "Olivia Rodrigo" },
    { id: 12, name: "Shawn Mendes" },
    { id: 13, name: "Khalid" },
    { id: 14, name: "Lady Gaga" },
    { id: 15, name: "Sia" },
    { id: 16, name: "Imagine Dragons" },
    { id: 17, name: "Maroon 5" },
    { id: 18, name: "Camila Cabello" },
    { id: 19, name: "Halsey" },
    { id: 20, name: "Sam Smith" }
];

const songs = [
    { id: 1001, title: "Ocean Eyes", duration: 210, artistId: 1 },
    { id: 1002, title: "Blinding Lights", duration: 200, artistId: 2 },
    { id: 1003, title: "Bad Guy", duration: 190, artistId: 1 },
    { id: 1004, title: "7 rings", duration: 180, artistId: 3 },
    { id: 1005, title: "God's Plan", duration: 210, artistId: 4 },
    { id: 1006, title: "Shape of You", duration: 240, artistId: 5 },
    { id: 1007, title: "Don't Start Now", duration: 200, artistId: 6 },
    { id: 1008, title: "Circles", duration: 215, artistId: 7 },
    { id: 1009, title: "That's What I Like", duration: 205, artistId: 8 },
    { id: 1010, title: "Love Story", duration: 230, artistId: 9 },
    { id: 1011, title: "Peaches", duration: 210, artistId: 10 },
    { id: 1012, title: "Drivers License", duration: 220, artistId: 11 },
    { id: 1013, title: "Treat You Better", duration: 205, artistId: 12 },
    { id: 1014, title: "Talk", duration: 190, artistId: 13 },
    { id: 1015, title: "Poker Face", duration: 200, artistId: 14 },
    { id: 1016, title: "Cheap Thrills", duration: 195, artistId: 15 },
    { id: 1017, title: "Believer", duration: 210, artistId: 16 },
    { id: 1018, title: "Sugar", duration: 225, artistId: 17 },
    { id: 1019, title: "Havana", duration: 230, artistId: 18 },
    { id: 1020, title: "Without Me", duration: 205, artistId: 19 },
    { id: 1021, title: "Levitating", duration: 203, artistId: 6 },
    { id: 1022, title: "Save Your Tears", duration: 215, artistId: 2 },
    { id: 1023, title: "Positions", duration: 172, artistId: 3 },
    { id: 1024, title: "Intentions", duration: 194, artistId: 10 },
    { id: 1025, title: "Stay", duration: 141, artistId: 13 },
    { id: 1026, title: "Montero (Call Me By Your Name)", duration: 137, artistId: 19 },
    { id: 1027, title: "Easy On Me", duration: 224, artistId: 20 },
    { id: 1028, title: "Stitches", duration: 210, artistId: 12 },
    { id: 1029, title: "Uptown Funk", duration: 270, artistId: 8 },
    { id: 1030, title: "Thinking Out Loud", duration: 281, artistId: 5 }
];

const playlists = [
    { id: 900, name: "Chill Vibes", songIds: [1001, 1003, 1007, 1016, 1025] },
    { id: 901, name: "Party Hits", songIds: [1002, 1005, 1009, 1018, 1021] },
    { id: 902, name: "Top 40", songIds: [1004, 1006, 1010, 1012, 1022] },
    { id: 903, name: "Workout", songIds: [1005, 1008, 1017, 1020, 1026] },
    { id: 904, name: "Relaxing", songIds: [1001, 1003, 1011, 1015, 1027] },
    { id: 905, name: "Hits of 2020", songIds: [1002, 1011, 1014, 1019, 1023] },
    { id: 906, name: "Romantic", songIds: [1006, 1010, 1013, 1019, 1030] },
    { id: 907, name: "Feel Good", songIds: [1009, 1015, 1018, 1017, 1029] },
    { id: 908, name: "Indie Vibes", songIds: [1016, 1017, 1012, 1007, 1025] },
    { id: 909, name: "Pop Essentials", songIds: [1002, 1004, 1010, 1011, 1021] },
    { id: 910, name: "Dance Party", songIds: [1007, 1015, 1018, 1019, 1026] },
    { id: 911, name: "Mellow Beats", songIds: [1001, 1013, 1012, 1014, 1027] },
    { id: 912, name: "Late Night", songIds: [1003, 1010, 1015, 1019, 1028, 1028] },
    { id: 913, name: "Acoustic Hits", songIds: [1006, 1011, 1012, 1013, 1030] },
    { id: 914, name: "Epic Sounds", songIds: [1005, 1008, 1017, 1018, 1022] },
    { id: 915, name: "Fresh Drops", songIds: [1021, 1022, 1023, 1024, 1026] },
];

// filter songs by artist..!
// get songs by playlist ..!
// 1. Filter songs by Artist A (artistId: 1)
// 2. Get all songs in the "Workout" playlist
// 3. List all song titles longer than 3 minutes
// 4. Group songs by artist name
// 5. Total play time of all songs in "My Favorites" playlist
//- remove any song from playlist
// - remove all the songs sung by any singer
function getSongByID(songsProvided, id) {
    for (let i = 0; i < songsProvided.length; i++) {
        if (songsProvided[i].id == id) {
            return songsProvided[i];
        }
    }
    return -1;
}

function getSongsByArtist(id) {
    let songsPresent = []
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].artistId == id) {
            songsPresent.push(songs[i]);
        }
    }
    return songsPresent;
}

function getSongsByPlaylist(idGiven) {
    let songsIDPresent = -1;
    let songsPresent = [];
    for (let i = 0; i < playlists.length; i++) {
        if (playlists[i].id == idGiven) {
            songsIDPresent = playlists[i].songIds;
        }
    }
    for (let i = 0; i < songs.length; i++) {
        for (let j = 0; j < songsIDPresent.length; j++) {
            if (songs[i].id == songsIDPresent[j]) {
                songsPresent.push(songs[i])
            }
        }
    }
    return songsPresent;
}

function renderSongsByTime(time) {
    let songsPresent = [];
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].duration > time) {
            songsPresent.push(songs[i]);
        }
    }
    return songsPresent;
}

function renderSongs(data) {
    let tpl = ``;
    for (let i = 0; i < data.length; i++) {
        tpl += `<div class="card">
        <p>${data[i].title}</p>
        </div>`
    }
    return tpl;
}

function renderTime(id) {
    let tpl = ``;
    let targatedPlaylist;
    for (let i = 0; i < playlists.length; i++) {
        if (playlists[i].id == id) {
            targatedPlaylist = playlists[i].songIds;
            break;
        }
    }

    for (let k = 0; k < targatedPlaylist.length; k++) {
        for (let j = 0; j < songs.length; j++) {
            if (targatedPlaylist[k] == songs[j].id) {

                tpl += `
                <div class="card">
                <p>${songs[j].title}:${songs[j].duration}s</p>
                </div>
                `;
            }
        }
    }
    return tpl;
}

function removeSongFromPlaylist(playlistId, songId) {
    let playlistSongs;
    for (let i = 0; i < playlists.length; i++) {
        if (playlists[i].id == playlistId) {
            playlistSongs = playlists[i].songIds;
            break;
        }
    }
    if(songId){
        const index = playlistSongs.indexOf(songId)
        if(index){
            playlistSongs.splice(index, 1)
        }
    }
    return playlistId;
}

function removeArtist(artistId) {
    let songsRemove = [];

    for (let i = 0; i < songs.length; i++) {
        if (songs[i].artistId == artistId) {
            songsRemove.push(songs[i]);
        }
    }
    for (let i = 0; i < playlists.length; i++) {
        for (let j = 0; j < songsRemove.length; j++) {
            removeSongFromPlaylist(playlists[i], songsRemove[j]);
        }
    }
    return songs;
}

function init() {
    document.querySelector(".allSongs").innerHTML = renderSongs(songs);
    document.querySelector(".byPlaylist").innerHTML = renderSongs(getSongsByPlaylist(903));
    document.querySelector(".byArtist").innerHTML = renderSongs(getSongsByArtist(3));
    document.querySelector(".longSongs").innerHTML = renderSongs(renderSongsByTime(210));
    document.querySelector(".timeOfSongs").innerHTML = renderTime(908);
    document.querySelector(".removeASong").innerHTML = renderSongs(getSongsByPlaylist(removeSongFromPlaylist(907, 1015)));
    // document.querySelector(".removeAllSongs").innerHTML = renderSongs(removeArtist(9));
}
init();