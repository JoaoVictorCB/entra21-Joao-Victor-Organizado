async function getCatsBreeds() {

    let response = await fetch(`https://api.thecatapi.com/v1/breeds`, {
        headers: {
            "x-api-key": "ea2c9cfc-5fe7-46fa-adf1-9c741d90259a"
        }
    })

    let drop = await response.json();

    let catNames = []

    for (let item of drop) {
        catNames.push(item.name)
    }
    return catNames

}

async function pushCatsBreeds() {
    names = await getCatsBreeds()
    for (let name of names) {
        document.querySelector(".catsbreeds").insertAdjacentHTML("beforeend", `<option>${name}</option>`)
    }
}

pushCatsBreeds()

let select = document.querySelector("select")
select.addEventListener("change", () => {
    select.innerHTML = ""
    submit()
})

function submit() {
    let select = document.querySelector("#breed")
    localStorage.setItem("raca", JSON.stringify(select.value))
    location.reload()
}


async function getCat() {
    for (let i = 1; i <= 10; i++) {
        let url1 = "https://api.thecatapi.com/v1/images/search?breed_ids=" + JSON.parse(localStorage.getItem("raca"))
        let response = await fetch(url1, {
            headers: {
                "x-api-key": "ea2c9cfc-5fe7-46fa-adf1-9c741d90259a"
            }
        });

        if (!response.ok) {
            return console.log("A requisição falhou!")
        }

        let body = await response.json();

        createCatImage(body[0].url);

        function createCatImage(url) {
            const img = document.createElement("img");
            img.src = url;
            img.style.width = "500px"
            img.style.height = "300px"
            document.body.append(img);
        }
    }
}

getCat();