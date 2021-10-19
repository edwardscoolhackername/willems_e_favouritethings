
function close(){
    let box = document.querySelector(".lightbox"),
        song = document.querySelector(".playsong");

    box.classList.add("hidden");
    song.pause();
    song.currentTime = 0;
    
}

export { close };