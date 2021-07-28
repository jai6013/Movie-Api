  async function getMovieInfo() {
    const movie = document.getElementById("movie").value;
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?t=${movie}&apikey=fa85e1bb`
      );
      const data = await response.json();
      if(data.Response == false){
          let imgDiv = document.getElementById("appendMe")
          let image = document.createElement("img")
          img.src = "https://img-premium.flaticon.com/png/512/1156/premium/1156361.png?token=exp=1627505192~hmac=8010bf1e0858e4dd9f4490068ece0cc6"
          imgDiv.append(image)
      } else{
          show(data)        
      }
} catch (err) {
    console.log("error")
    }
  }

  function show(data) {
    let img_div = document.getElementById("appendMe")
    let img = document.createElement("img")
    img.src = data.Poster
    img_div.append(img)
    let title = document.getElementById("title")
    title.innerHTML = `Title : ${data.Title}`
    let imdb = document.getElementById("imdb")
    if(data.imdbRating > "8.5"){
        imdb.innerHTML = `Imdb Rating : ${data.imdbRating} [recommended]`
    }else{
        imdb.innerHTML = `Imdb Rating : ${data.imdbRating}`
    }
    let release = document.getElementById("release")
    release.innerHTML = `Released : ${data.Year}`
}
