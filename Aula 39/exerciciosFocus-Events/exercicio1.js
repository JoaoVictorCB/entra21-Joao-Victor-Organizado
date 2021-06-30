var div = document.querySelector("div")
div.tabIndex = 0

var txtArea = document.createElement("textarea")
txtArea.style.display = "none"
txtArea.classList.add("firstDiv")

div.after(txtArea)

div.addEventListener("focusin", (e) => {
    div.style.display = "none"
    txtArea.style.display = "block"
})
txtArea.addEventListener("focusout", (e) => {
    txtArea.style.display = "none"
    div.style.display = "block"
    div.innerText = txtArea.value
})