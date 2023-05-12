// url for the Thrones API

const display = function display(fullName, title, imageUrl) {
  document.getElementById(
    "container"
  ).innerHTML += `<div  id="col"><p class="fw-bold">${fullName}</p><p>${title}</p></div>`;
  const img = document.createElement("img");
  img.src = imageUrl;
  img.style.width = `200px`;
  img.style.height = `200px`;
  /*document.getElementById(
    "row"
  ).innerHTML += `<div class="col-md-10 col-lg-2"><img src=imageUrl/></div>`;*/
  document.getElementById("col").appendChild(img);
};

const getCharacters = function getCharacters(data) {
  for (const character of data) {
    const { fullName, title, imageUrl } = character;
    //console.log(character.family);
    display(fullName, title, imageUrl);
  }
};
async function fetchData() {
  const response = await fetch("https://thronesapi.com/api/v2/Characters");
  if (response.status === 200) {
    const data = await response.json();
    getCharacters(data);
  }
}

fetchData();
