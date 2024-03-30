const clock = document.querySelector(".status-bar__clock")

function funcClock(){
    const date = new Date()

    const hours = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")

    clock.innerText = `${hours}:${minutes}`
}

funcClock()
setInterval(funcClock,1000)



