const form = document.querySelector("#myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop reload
  console.log(form.elements);
});
