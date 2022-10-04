const lyricsSrcBtn= document.getElementById('lyricsSrcBtn');
const lyricsContainer=document.getElementById('lyricsContainer');


lyricsSrcBtn.addEventListener('click',(e)=>{
    const lyricsName=e.target.parentNode.childNodes[1].value;
    getLyrics(lyricsName)
})


const getLyrics=(lyrics) => {
    document.getElementById('loadText').style.display='block';

    fetch(`https://api.lyrics.ovh/suggest/${lyrics}`)
    .then(res => res.json())
    .then(data => {
    document.getElementById('loadText').style.display='none';

        let lyrics;
        const limit=data.data.slice(0,10)
        limit.map(resLyrics => {
            lyrics += 
            `<div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-9">
                        <h3 class="lyrics-name">${resLyrics.title}</h3>
                        <p class="author lead">Album by <span>${resLyrics.artist.name}</span></p>
                        <audio controls>  
                            <source src="${resLyrics.preview}" type="audio/mpeg">  
                        </audio> 
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button class="btn btn-success">Get Lyrics</button>
                    </div>
                </div>
            `;
        })

        lyricsContainer.innerHTML=lyrics;

    })
}



    