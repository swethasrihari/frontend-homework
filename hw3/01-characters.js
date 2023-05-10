// url for the Thrones API

const display = function display(fullName, title, imageUrl) {
  const row = document.createElement("div");
  row.class = "flex-container";
  row.id = "row";
  document.getElementById("container").appendChild(row);
  document.getElementById(
    "row"
  ).innerHTML += `<div  id="col"><p class="fw-bold">${fullName}</p><p>${title}</p></div>`;
  const img = document.createElement("img");
  img.src = imageUrl;
  img.style.width = `200px`;
  img.style.height = `200px`;
  /*document.getElementById(
    "row"
  ).innerHTML += `<div class="col-md-10 col-lg-2"><img src=imageUrl/></div>`;*/
  document.getElementById("row").appendChild(img);
};

const getCharacters = function getCharacters(data) {
  for (const character of data) {
    const { fullName, title, imageUrl } = character;
    //console.log(character.family);
    display(fullName, title, imageUrl);
  }
};
async function fetchData() {
  let response = await fetch("https://thronesapi.com/api/v2/Characters");
  if (response.status === 200) {
    let data = await response.json();
    getCharacters(data);
  }
}

fetchData();
