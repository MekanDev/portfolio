let video = document.getElementById("background-video")
let source = document.getElementsByTagName("source")[0]
let card = document.getElementsByClassName("card")[0]
let userInfo = document.getElementsByClassName("user-info")[0]


let count = 1

function changeMode() {
    if (count % 2 == 0) {
        source.src = "./media/video/dark.mp4"
        card.style.backgroundColor = "rgb(52, 48, 48)"
        userInfo.style.color = "white"
        count += 1
    }
    else {
        source.src = "./media/video/light.mp4"
        card.style.backgroundColor = "rgb(206, 204, 204)"
        userInfo.style.color = "black"
        count += 1
    }
    video.load()
}