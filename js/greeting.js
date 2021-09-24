const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){/*login창으로 이름받기*/
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);/*username입력받으면 로그인창 안보이게*/
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);/*웹브라우저에 username저장*/
  paintGreetings(savedUsername);
}
function paintGreetings(username){/*받은 username으로 환영창 open*/
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername===null){
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit",onLoginSubmit);
}else{
  paintGreetings(savedUsername);
}