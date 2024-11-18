let lagAh2 = document.querySelector("#h2A");
let lagAUl = document.querySelector("#lagA");
let lagBh2 = document.querySelector("#h2B");
let lagBUl = document.querySelector("#lagB");


let lagAButton = document.querySelector("#addTeamNameA");
let lagAInput = document.querySelector("#teamNameAInput");

let lagBButton = document.querySelector("#addTeamNameB");
let lagBInput = document.querySelector("#teamNameBInput");

let playerInput = document.querySelector("#playerInput");
let playerButton = document.querySelector("#playerButton");


const changeTeamName = (team) => {
    team === "A" ? lagAh2.innerText = lagAInput.value : lagBh2.innerText = lagBInput.value
}

lagAButton.addEventListener("click", () => {changeTeamName("A")});
lagBButton.addEventListener("click", () => {changeTeamName("B")});

const changeTeamFunc = (event) => {
    let li = event.target.parentElement
    if (li.parentElement.id === "lagA" && document.querySelectorAll("#lagB li").length < 5) {
        lagBUl.append(li) 
    } else if (li.parentElement.id === "lagB" && document.querySelectorAll("#lagA li").length < 5) {
        lagAUl.append(li)
    }
}


const addTeamMember = () => {
    let li = document.createElement("li");
    li.textContent = playerInput.value;
    const deleteBtn = document.createElement("button");
    const changeTeam = document.createElement("button");
    const changeNameInput = document.createElement("input");
    const changeName = document.createElement("button");
    deleteBtn.textContent = "Delete"; 
    changeTeam.textContent = "Change Team";
    changeName.textContent = "Change Name";
    deleteBtn.addEventListener("click", (event) => {
            event.target.parentElement.remove();
    })

    changeTeam.addEventListener("click", (event) => {changeTeamFunc(event)});

    changeName.addEventListener("click", (event) => {
        console.log(event.target.parentElement.textContent);
        event.target.parentElement.textContent = event.target.previousElementSibling.value;
        li.append(deleteBtn, changeTeam,changeNameInput, changeName);    
    })

    li.append(deleteBtn, changeTeam,changeNameInput, changeName);

    document.querySelectorAll("#lagA li").length < 5 
        ? lagAUl.append(li) 
        : document.querySelectorAll("#lagB li").length < 5 
            ? lagBUl.append(li)
            : {};
}
playerButton.addEventListener("click", () => {addTeamMember()});

