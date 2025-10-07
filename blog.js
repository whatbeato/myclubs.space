fetch(`news/${post}.md`)
.then(res => {
    console.log("fetch status -", res.status)
    return res.text()
})
.then(md => {
    console.log("md content:", md.slice(0, 100))
    const html = marked.parse(md)
    document.getElementById("content").innerHTML = html
})
.catch(err => {
    console.error("fetch error :c -", err)
})