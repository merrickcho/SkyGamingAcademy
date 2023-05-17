fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHTe0Wt2h1zlFbjYfvqShpg&maxResults=1&order=date&key=AIzaSyA9eXX7MDgk8KsSBNuACIT07IJH8xl_YCY")
    .then((res)=> {
        return res.json()

        .then((data)=>{
            let videos = data.items
            let videoContainer = document.querySelector(".videoContainer")
            for(video of videos){
                videoContainer.innerHTML += 
                `
                <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank"><img src="${video.snippet.thumbnails.high.url}">
                <div class="text-light"><h4>${video.snippet.title}</h4></div>

                `
                
            }
        })
    })


