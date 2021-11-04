let baseUrl = "https://kitsu.io/api/edge";
let trendingUrl = "https://kitsu.io/api/edge/trending/anime"
let query;
// on load event listener
window.onload = (event) => {
  console.log("pageStartUp")
  fetch(trendingUrl)
    .then(response => response.json())
    .then(data => console.log(data))
  console.log("Trending Anime loaded")
}
document.getElementById("searchButton").addEventListener("click", function() {
  query = document.getElementById("searchTerm");
  console.log(query);
  var url = new URL("https://kitsu.io/api/edge/anime?filter[text]="),{
      parameters: {q: query},
      method:'GET',
      mode:'cors',
      headers:{
        Accept: 'application/vnd.api+json',
        Content-Type : 'application/vnd.api+json'
      },

    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    //we are appending the parameters to the url we defined to create a new url with our user inputted and static parameters.
  fetch(url)
    //once we fetch, we then take that response and parse it into json, we then use our callback for processing our data ( distribute() )
    .then(response => response.json())
    .then (data => console.log(data))
  });
