var div = document.querySelector("div")
div.tabIndex = 0

div.addEventListener("focusin", () => {
    div.classList.add("focused")
})
div.addEventListener("focusout", () => {
    div.classList.toggle("focused")
})

div.addEventListener("keydown", (event) => {
    var coordenadasDiv = div.getBoundingClientRect()
    const key = event.key
    console.log(key)

    if (key == "ArrowRight") {
        div.style.left = coordenadasDiv.left + div.clientWidth + "px"
    }
    if (key == "ArrowLeft") {
        div.style.left = coordenadasDiv.left - div.clientWidth + "px"
    }
    if (key == "ArrowUp") {
        div.style.top = coordenadasDiv.top - div.clientHeight + "px"
    }
    if (key == "ArrowDown") {
        div.style.top = coordenadasDiv.top + div.clientHeight + "px"
    }
})