let processTrending = (data) =>{
  let results = data.top;
  console.log(results);
  for (let i = 0; i < results.length; i++) {
    processTrendObject(results[i]);
  }
};
let processTrendObject = (anime) => {
  let container;
  //object containing all the create elements needed to make the div containing each anime for the sake of cleanliness.
  let createElement = {
    newA : document.createElement("a"),
    newDiv: document.createElement("Li"),
    newH3: document.createElement("h3"),
    newP: document.createElement("p"),
    newImg: document.createElement("img")
  };
  if(anime.rank % 2 == 0) {
    console.log("even");
    container = document.getElementById("animeCaro1")

  } else {
    container = document.getElementById("animeCaro2");
  }
  createElement.newDiv.className = "animeContainer";
  createElement.newImg.src = anime.image_url;
  createElement.newH3.appendChild(document.createTextNode(anime.title));
  createElement.newDiv.appendChild(createElement.newImg);
  createElement.newDiv.appendChild(createElement.newH3);
  createElement.newA.setAttribute("href", anime.url);
  createElement.newA.appendChild(createElement.newDiv);
  return container.appendChild(createElement.newA)
};
