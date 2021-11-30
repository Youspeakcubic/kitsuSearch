container = document.getElementById("mainCont");
//this function just gets each array item or anime and then sends it to the process object function.
let processQuery = (data) => {
  container.innerHTML = "";
  let animeHeader = document.createElement("h1");
  animeHeader.appendChild(document.createTextNode(`Search results for "${document.getElementById('searchTerm').value}":`));
  animeHeader.className = "animeHeader";
  container.appendChild(animeHeader);

  let results = data.results;
  for (let i = 0; i < results.length; i++) {
    processObject(results[i]);
  }
};
let processObject = (anime) => {
  //object containing all the create elements needed to make the div containing each anime for the sake of cleanliness.
  let createElement = {
    newDiv: document.createElement("div"),
    newH3: document.createElement("h3"),
    newP: document.createElement("p"),
    newImg: document.createElement("img")
  };
  createElement.newDiv.className = "animeContainer";
  createElement.newP.className = "animeTitle";
  createElement.newImg.src = anime.image_url;
  createElement.newH3.appendChild(document.createTextNode(anime.title));
  createElement.newP.appendChild(document.createTextNode(anime.synopsis));
  createElement.newDiv.appendChild(createElement.newImg);
  createElement.newDiv.appendChild(createElement.newH3);
  createElement.newDiv.appendChild(createElement.newP);
  return container.appendChild(createElement.newDiv)
};
document.getElementById("paginationQuery").style.display = "block";
