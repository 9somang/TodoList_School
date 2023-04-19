const check_1 = document.querySelector("#login1");
const check_id = check_1.querySelector("input");
const check_2 = document.querySelector("#login2");
const check_password = check_2.querySelector("input");
const loginBtn = document.querySelector(".loginbutton");


function CheckValue(){
    const ID = check_id.value;
    const PASSWORD = check_password.value;
    if(localStorage.getItem(ID) == PASSWORD){
        alert(" 로그인 성공");
        location.href ="/index.html";
    }else{
        alert(" 로그인 실패");
    }   
}


function init(){
    loginBtn.addEventListener("click",CheckValue);

}


init();