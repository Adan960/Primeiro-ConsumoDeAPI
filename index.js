function gerar(){
    axios.get("https://api.thecatapi.com/v1/images/search").then(response => {
    let link = response.data
    let cat = link[0].url
    let foto = document.getElementById("imagem").src = cat
    console.log(cat)
}).catch(err => {
    console.log(err)
})
}