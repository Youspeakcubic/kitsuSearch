let topUrl = "https://api.jikan.moe/v3/top/anime";
let seasonUrl = "https://api.jikan.moe/v3/season"
//on load event listener
window.onload = (event) => {
  fetch(topUrl)
    .then(response => response.json())
    .then(data => processTrending(data))
  fetch(seasonUrl)
    .then(response => response.json())
    .then(data => processSeason(data))
}
let fetchQuery = (pageNum) => {
  let query = document.getElementById('searchTerm').value;
  if (!query) {

  } else {
    var baseUrl = new URL("https://api.jikan.moe/v3/search/anime?q="),
      params = {
        q: query,
        page: pageNum,
        limit:10
      }
    Object.keys(params).forEach(key => baseUrl.searchParams.append(key, params[key]))
    //we are appending the parameters to the url we defined to create a new url with our user inputted and static parameters.
    fetch(baseUrl)
      //once we fetch, we then take that response and parse it into json, we then use our callback for processing our data ( distribute() )
      .then(response => response.json())
      .then(data => processQuery(data))
  }
}
