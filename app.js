const bars = document.querySelector(".bars");
const range = document.querySelector(".range");

range.addEventListener("input", () => {
  let values = range.value;
  createBars(values);
  values = 0;
});

createBars = (values) => {
  removeBars();
  for (let i = 0; i < values; i++) {
    randomBarNumbers = Math.floor(Math.random() * 20 + 1);

    const div = document.createElement("div");

    div.classList.add("bar");
    div.style.height = randomBarNumbers * 18 + "px";
    bars.appendChild(div);
  }
};

removeBars = () => {
  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar) => {
    bar.remove();
  });
};

createBars(50);

let delay = 200;

const speedBar = document.querySelector(".speed");
speedBar.addEventListener("input", () => {
  delay = 300 - speedBar.value * 4;
});

function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

function swap(el1, el2) {
  console.log("In swap()");

  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}
