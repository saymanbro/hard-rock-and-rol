const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function(){
   fetch("https://api.lyrics.ovh/suggest/summer")
   .then(res => res.json())
   .then(data => {
        const show = data.data[5];
          const name = show.artist;
         document.getElementById('singer-name').innerText = name.name;
         const album = show.album;
       document.getElementById('album-name').innerText = album.title;
       const getLyrics = document.getElementById('get-lyrics');
getLyrics.addEventListener('click', function(){
    fetch('https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime')
    .then(res => res.json())
    .then(data => {
        const lyrics = data.lyrics;
        document.getElementById('display-lyrics').innerText = lyrics
    })
})
   })
})


