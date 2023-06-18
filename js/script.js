
const api_key = API_KEY
const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHTe0Wt2h1zlFbjYfvqShpg&maxResults=3&order=date&key=${api_key}`

fetch(url)
    .then((res)=> {
        return res.json()

        .then((data)=>{
            let videos = data.items
            let videoContainer = document.querySelector(".videoContainer")
            for(video of videos){
                videoContainer.innerHTML += 
                `
                <div class="col"
                    <div class="imageContainer card bg-dark" style="width: 25rem">
                        <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
                            <img src="${video.snippet.thumbnails.high.url}" class="card-img-top px-2">
                        </a>
                      <div class="card-body">
                        <p class="card-text text-light mx-3">${video.snippet.title}</p>
                      </div>
                    </div>
                </div>
                `
                
            }
        })
    })