import { useState } from "react";

export default function Search(prop) {
  const [input, setInput] = useState("");
  let fullName = [];
  let title = [];
  let imageUrl = [];
  for (let i = 0; i < prop.character.family.length; i++) {
    fullName[i] = prop.character.family[i].fullName;
    title[i] = prop.character.family[i].title;
    imageUrl[i] = prop.character.family[i].imageUrl;
  }
  //console.log(fullName, title, imageUrl);
  function searchFunction() {
    let { name } = "";
    for (let i = 0; i < fullName.length; i++) {
      if (input === "") return "Please Enter Name";
      else if (fullName[i].toLowerCase() === input.toLowerCase()) {
        name = fullName[i];
      }
      if (name !== "") return name;
      else return "Not found";
    }
  }
  //console.log(fam);
  return (
    <main className="container">
      <form>
        <h1>Search page</h1>
        <label for="searchInput">Enter Full Name </label>
        <input
          type="text"
          id="searchInput"
          onChange={(e) => setInput(e.target.value)}
        />
        <p>{input}</p>
        <span>{searchFunction()}</span>
      </form>
    </main>
  );
}
