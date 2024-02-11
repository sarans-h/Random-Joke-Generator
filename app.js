let button = document.querySelector("button");
let box = document.querySelector(".joke");

function addJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(function (response) {
      return response.json();
    })
    .then(function (compdata) {
      console.log(compdata);
      while (box.firstChild) {
        box.firstChild.remove();
      }
      let p = document.createElement("p");
      p.innerText = `${compdata.setup}`;
      let p2 = document.createElement("p");
      p2.innerText = `${compdata.punchline}`;
      box.append(p);

      setTimeout(() => {
        box.append(p2);
        button.innerText = "Next!";
      }, 2000);

      setTimeout(() => {
        box.innerHTML = "&#128514";
        button.innerText = "Make me laugh!";
      }, 60000);
    })
    .catch(function (e) {
      console.log(e);
    });
}

button.addEventListener("click", function () {
  addJoke();
});
