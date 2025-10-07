fetch("news/test.md")
.then(res => res.text())
.then(text => {
    console.log(text)
    document.body.innerHTML = text
}
)