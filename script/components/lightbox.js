
function open() {
    let songcontainer = document.querySelector(".songinfo"),
        box = document.querySelector(".lightbox"),
        information = songcontainer.children,
        targetlink = this.className.split(" ")[1];

    function getData() {
        fetch("../data.json")
        .then(res => res.json())
        .then(data => {
            buildabox(data);
            console.log(data);

        })
        .catch(error => console.error(error));
    }

    function buildabox(info) {
        
        let songchoice = Object.keys(info);
       

        songchoice.forEach(song => {
            information[0].textContent = info[targetlink].title;
            information[1].textContent = info[targetlink].genre;
            information[2].src = `audio/${info[targetlink].music}`;
            information[3].src = `dist/${info[targetlink].albumart}`;
            information[4].textContent = info[targetlink].description;
        })

    }

    getData();
    box.classList.remove("hidden");
}

export { open };