let baseUrl = "https://kitsu.io/api/edge";
let trendingUrl = "https://kitsu.io/api/edge/trending/anime"
// on load event listener
window.onload = (event) => {
  console.log("pageStartUp")
  fetch(trendingUrl)
    .then(response => response.json())
    .then(data => console.log(data))
  console.log("Trending Anime loaded")
};
let querySearch = () => {
  console.log("search starting");
  let query = document.getElementById('searchTerm').value;
  fetch(`${baseUrl}/anime?filter[text]=${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json',
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
}
