


let todoList = [
  // {
  //   item:'',
  //  dueDate:''
  // },

  // {
  //   item:'Go To College',
  //   dueDate:'16/07/2024'
  //  }
];

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoIteam = inputElement.value;
  let todoDate= dateElement.value;
  todoList.push({item: todoIteam,dueDate: todoDate});
  inputElement.value = "";
  dateElement.value="" ;
  displayItems();
}

function displayItems() {
  let displayElement = document.querySelector(".todo-container");

  let newHtml = "";

  displayElement.innerText = "";
  for (let i = 0; i < todoList.length; i++) {

    // let iteam=todoList[i].item;
    // let dueDate=todoList[i].dueDate;
    let{item,dueDate}=todoList[i];
    newHtml += `
    
    <span> ${item}</span>
    <span> ${dueDate}</span>
    <button class="btn-dlt" onclick="todoList.splice(${i}, 1);
    displayItems();">Delete</button>
  
    `;

    displayElement.innerHTML = newHtml;
  }
}
