
function open() {
    let songcontainer = document.querySelector(".songinfo"),
        box = document.querySelector(".lightbox"),
        information = songcontainer.children,
        id = this.dataset.linkid;

    function getData() {
        fetch("../data.json")
        .then(res => res.json())
        .then(data => {
            buildabox(data);

        })
        .catch(error => console.error(error));
    }

    function buildabox(info) {
        
        let songchoice = Object.keys(info);


        information[0].textContent = songchoice[id].title;
    }

    getData();
    box.classList.remove("hidden");
}

export { open };