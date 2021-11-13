let topUrl = "https://api.jikan.moe/v3/top/anime";
//on load event listener
window.onload = (event) => {
  fetch(topUrl)
    .then(response => response.json())
    .then(response => console.log(response))
}
let fetchQuery = () => {
  let query = document.getElementById('searchTerm').value;
  if (!query) {

  } else {
    var baseUrl = new URL("https://api.jikan.moe/v3/search/anime?q="),
      params = {
        q: query
      }
    Object.keys(params).forEach(key => baseUrl.searchParams.append(key, params[key]))
    //we are appending the parameters to the url we defined to create a new url with our user inputted and static parameters.
    fetch(baseUrl)
      //once we fetch, we then take that response and parse it into json, we then use our callback for processing our data ( distribute() )
      .then(response => response.json())
      .then(data => processQuery(data))
  }
}
