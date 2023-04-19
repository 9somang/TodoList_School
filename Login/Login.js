const input = document.querySelector("#first");
const input_One = input.querySelector("input");
const password1 = document.querySelector("#second");
const password_One = password1.querySelector("input");
const form = document.querySelector(".inbutton");
console.log(input_One);

function handleSubMitId(event){
    console.log("Start-handleSubmitId");
    let currentId = input_One.value;
    let currentPassword = password_One.value;
    localStorage.setItem(currentId,currentPassword);
}

function init(){
    form.addEventListener("click",handleSubMitId);
    console.log("1");
}

init();