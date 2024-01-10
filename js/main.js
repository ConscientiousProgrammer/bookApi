let playground = document.getElementById("book"),
result = document.getElementById("result"),
load = document.getElementById("preloader");


load.style.display = "none";

const btn = document.getElementById('btn')
 btn.onclick=(e) =>{
    if (e.keyCode == 13) {
        document.getElementById("btn").click();
      };
    load.style.display = "block";
    fetch("https://www.googleapis.com/books/v1/volumes/?" +
    new URLSearchParams({
        q: playground.value,
        maxResult: 12,
    }),
    {
        method: "GET",
    }
    )
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        res.items.forEach(element => {
            result.innerHTML += `<li>${element.volumeInfo.title}</li>`;
        });
    })
    .finally(function () {
        load.style.display = "none";
      });
    newResult();
    checkForEnter();
};

function newResult () {
    result.innerHTML = "";
    btn();
}
