let processSeason = (data) =>{
  console.log(data);
  let results = data.anime;
  console.log("seasonLoaded");
  for (let i = 0; i < 8; i++) {
    processSeasonObject(results[i]);
  }
};
let processSeasonObject = (anime) => {
  let container = document.getElementById("mainCont")
  console.log(container);
  //object containing all the create elements needed to make the div containing each anime for the sake of cleanliness.
  let createElement = {
    newDiv: document.createElement("div"),
    newH3: document.createElement("h3"),
    newP: document.createElement("p"),
    newImg: document.createElement("img")
  };
  console.log(container);
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
