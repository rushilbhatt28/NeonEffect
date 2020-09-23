const text = document.querySelector(".neonofff");
const splittext = text.textContent.split("");

let index = 0;
text.textContent = "";

for (let i = 0; i < splittext.length; i++) {
  text.innerHTML += `<span>${splittext[i]}</span>`;
}

setInterval(() => {
  if (index === splittext.length) {
    index = 0;
    const letters = document.querySelectorAll(".neonoff span");
    letters.forEach((items) => {
      items.classList.remove("neonon");
    });
  } else {
    const letter = document.querySelectorAll("span")[index];
    letter.classList.add("neonon");
    index++;
  }
}, 400);
