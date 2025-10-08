const params = new URLSearchParams(window.location.search);
const post = params.get("post")
if(!post) {
    document.getElementById("content").innerHTML = "<p>select a post :3</p>";   
} else {
    fetch(`news/${post}.md`)
    .then(res => res.text())
    .then(md => {
        document.getElementById("content").innerHTML = marked.parse(md)
    })
    .catch(err => {
        document.getElementById("content").innerHTML = `<p>something happened when loading the post :c - ${err}</p>`
    });
}