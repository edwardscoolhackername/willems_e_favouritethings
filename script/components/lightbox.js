
function open() {
    let songcontainer = document.querySelector(".songinfo"),
        box = document.querySelector(".lightbox"),
        information = songcontainer.children;

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
        
        let songchoice = Object.keys(info),
            link = document.querySelector;
       

        songchoice.forEach(song => {
            information[0].textContent = info[song].title;
        })

    }

    getData();
    box.classList.remove("hidden");
}

export { open };