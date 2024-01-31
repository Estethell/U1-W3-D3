const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

const ulList = document.getElementById("firstUl");

let funzione1 = function () {
  const inputLista = document.getElementById("input1");
  const myData = {
    inserisciLista: inputLista.value,
  };
  let li = document.createElement("li");
  li.innerText = myData.inserisciLista;
  li.addEventListener("click", funzione2);
  ulList.appendChild(li);
  inputLista.value = "";
  console.log(ulList);
};

const buttonClick = document.getElementById("button1");
buttonClick.onclick = funzione1;

const funzione2 = function (e) {
  e.currentTarget.classList.add("addClass");
};
