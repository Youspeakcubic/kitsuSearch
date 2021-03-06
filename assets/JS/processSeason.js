let processSeason = (data) => {
  let results = data.anime;
  for (let i = 0; i < 15; i++) {
    if (i <= 4){
    processSeasonObject(results[i], document.getElementById("seasonCont1"));
    }
    else if (i >= 5 && i <= 10) {
      processSeasonObject(results[i], document.getElementById("seasonCont2"))
    }
    else if (i >= 10) {
      processSeasonObject(results[i], document.getElementById("seasonCont3"))
    }
  }
};
let processSeasonObject = (anime, domElement) => {
  //object containing all the create elements needed to make the div containing each anime for the sake of cleanliness.
  let createElement = {
    newA : document.createElement("a"),
    newDiv: document.createElement("div"),
    textContainer: document.createElement("div"),
    newH3: document.createElement("h3"),
    newP: document.createElement("p"),
    newImg: document.createElement("img"),
  };
  createElement.newDiv.className = "animeContainer";
  createElement.textContainer.className = "AnimeTextContainer";
  createElement.newP.className = "animeTitle";
  createElement.newImg.src = anime.image_url;
  createElement.newH3.appendChild(document.createTextNode(`${anime.title}`));
  createElement.newP.appendChild(document.createTextNode(anime.synopsis));
  createElement.textContainer.appendChild(createElement.newH3);
  createElement.textContainer.appendChild(createElement.newP);
  createElement.newDiv.appendChild(createElement.newImg);
  createElement.newDiv.appendChild(createElement.textContainer);
  createElement.newA.setAttribute("href", anime.url);
  createElement.newA.appendChild(createElement.newDiv);
  return domElement.appendChild(createElement.newA)
};
