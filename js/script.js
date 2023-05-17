// AIzaSyA9eXX7MDgk8KsSBNuACIT07IJH8xl_YCY
// UCHTe0Wt2h1zlFbjYfvqShpg

// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHTe0Wt2h1zlFbjYfvqShpg&maxResults=10&order=date&key=AIzaSyA9eXX7MDgk8KsSBNuACIT07IJH8xl_YCY

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
console.log("hello")

fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHTe0Wt2h1zlFbjYfvqShpg&maxResults=10&order=date&key=AIzaSyA9eXX7MDgk8KsSBNuACIT07IJH8xl_YCY")
    .then((res)=> {
        return res.json()

        .then((data)=>{
            let videos = data.items
            let videoContainer = document.querySelector(".videoContainer")
            for(video of videos){
                videoContainer.innerHTML += 
                `<a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank"><img src="${video.snippet.thumbnails.medium.url}"><a>`
                
            }
        })
    })
    // .then((video)=> {
    //     // let vidThumnail = video.items.snippet.thumnails.high
    //     // let vidId = video.items.id.videoId
    //     // let vidTitle = video.items.snippet.title

    //     console.log(video.items.snippet.title)
    //     console.log(vidId)
    //     console.log(vidTitle)
    // })

