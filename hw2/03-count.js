// Add your code here
const searchWord = document.getElementById("search-word");
const content = document.getElementById("content");
const sentence = document.getElementById("content").innerHTML;
const regex = new RegExp(searchWord, "gi");

const findAndHighlight = function findAndHighlight() {
  if (searchWord.value !== "") {
    let words = content.innerHTML.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i] === searchWord.value) {
        words[i] = words[i].replace(
          /(<mark class="highlight">|<\/mark>)/gim,
          ""
        );
        words[i] = words[i].replace(
          words[i],
          '<mark class="highlight">$&</mark>'
        );
        console.log("Highlighting");
      }
      console.log(searchWord.value);
    }
    content.innerHTML = words.join(" ");
  } else {
    content.innerHTML = sentence;
  }
};
const enterKeyPressed = function enterKeyPressed(eventNo) {
  if (eventNo.keyCode === 13) {
    content.innerHTML = sentence;
  }
};
const handleInput = function handleInput() {
  console.log(searchWord.value);
  findAndHighlight();
};

searchWord.addEventListener("input", handleInput);
