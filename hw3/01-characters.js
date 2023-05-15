// url for the Thrones API
const display = function display(data) {
  const section = document.getElementById('section');
  section.classList.add(
    'elements',
    'd-flex',
    'flex-wrap',
    'justify-content-center'
  );
  data.forEach((character) => {
    const { fullName, title, imageUrl } = character;

    const characterRow = document.createElement('div');
    characterRow.classList.add('character');

    const imageRow = document.createElement('div');
    imageRow.classList.add('image');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.width = `225px`;
    img.style.height = `225px`;

    const nameTitleRow = document.createElement('div');
    const fullNameH3 = document.createElement('h3');
    fullNameH3.textContent = fullName;
    const titleP = document.createElement('p');
    titleP.textContent = title;
    nameTitleRow.appendChild(fullNameH3);
    nameTitleRow.appendChild(titleP);
    imageRow.appendChild(img);
    characterRow.appendChild(imageRow);
    characterRow.append(fullNameH3);
    characterRow.appendChild(titleP);
    section.appendChild(characterRow);
  });
};

async function fetchData() {
  const response = await fetch('https://thronesapi.com/api/v2/Characters');
  if (response.status === 200) {
    const data = await response.json();
    display(data);
  }
}

fetchData();
