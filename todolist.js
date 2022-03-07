const todoInput = document.querySelector("#todo_form input");
const todoButton = document.querySelector("#todo_button");

const todoBoard = document.querySelector("#todo_board");

todoButton.addEventListener("click",todoFormButton);

function todoFormButton() {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    //체크박스 이벤트리스너
    checkbox.addEventListener("click",todoCheck);
    checkbox.addEventListener("click",todoComplete);

    //내용
    const text = document.createTextNode(todoInput.value);

    //X버튼
    const buttonX = document.createElement("button");
    buttonX.textContent = "X";
    //X버튼 이벤트리스너
    buttonX.addEventListener("click",todoDelete);
    buttonX.addEventListener("click",todoComBtn);

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(buttonX);

    todoBoard.appendChild(li);
    todoInput.value="";

}
function todoCheck(event) {
    const checkbox = event.target
    if (event.target.checked){
        checkbox.parentNode.style.color = "lightgray";
    }
    else {
        checkbox.parentNode.style.color = "black";
    }
}
function todoDelete(event) {
    event.target.parentNode.remove();
}

let comArray=[];
function todoComplete(event) {
    const checkbox = event.target;
    const li = document.querySelector("li");
    const complete = document.querySelector("#complete");
    ul = new Array();
    for(let i=0; i<=ul.length;i++) {
        if(checkbox.checked) {//li.length는 전체 길이
            comArray.push(ul[i]);
        }
        else {
            comArray.pop(ul[i]);
        }
    }
    let comCount = comArray.length;
    complete.textContent = `오늘 완료한 할일 : ${comCount}개`;
}
function todoComBtn(event) {
    const checkbox = event.target;
    const complete = document.querySelector("#complete");
    let comCount = comArray.length;
    for(let i=0; i<=comArray.length;i++) {
        if(checkbox.checked) {
            complete.textContent = `오늘 완료한 할일 : ${comCount}개`;
            }
        else {
            complete.textContent = `오늘 완료한 할일 : ${comCount-1}개`;
        }
    }
}