// Add your code here
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const registrationStatus = document.getElementById("registrationStatus");
const programmingLanguages = document.getElementById("programmingLanguages");
const operatingSystems = document.getElementById("operatingSystems");
const fullStackWebDevelopment = document.getElementById(
  "fullStackWebDevelopment"
);
const anythingElse = document.getElementById("anythingElse");

const printInput = function printInput() {
  console.log(`Full Name : ${fullName.value}`);
  console.log(`Email : ${email.value}`);
  console.log(`Registration Status : ${registrationStatus.value}`);
  console.log("Courses taken :");
  if (programmingLanguages.checked) {
    console.log("Programming Languages");
  }
  if (operatingSystems.checked) {
    console.log("Operating Systems");
  }
  if (fullStackWebDevelopment.checked) {
    console.log("full Stack Web Development");
  }
  console.log(`Anything else? ${anythingElse.value}`);
};

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  printInput();
});
