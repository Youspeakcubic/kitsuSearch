//declaring create elements to add the data to our website later.
let container = document.getElementById('mainCont');
const newDiv = document.createElement("div");
newDiv.className = "animeContainer"
const newH1 = document.createElement("h1");
const newP = document.createElement("p");
const newImg = document.createElement("img")
//this function just gets each array item or anime and then sends it to the process object function.
let processQuery = (data) => {
    let results = data.results;
    results.forEach(element => processObject(element));
};
//process object is responsible for using each of the anime objects and creating elements containing the data and appending it to our main container on our site.
let processObject = (anime) => {
 const createTitle = document.createTextNode(anime.title);
 newH1.appendChild(createTitle);
 newDiv.appendChild(createTitle)
 container.appendChild(newDiv);

}
