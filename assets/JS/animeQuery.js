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

document.getElementById("searchButton").addEventListener("click", function() {
  query = document.getElementById("searchTerm").value
  console.log(query);
  console.log(`${baseUrl}/anime?filter[text]=${query}`);
  return fetchQuery();

});
let fetchQuery = () => {
  console.log(`${query}`);
  return fetch(`${baseUrl}/anime?filter[text]=${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json',
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
};
}
