const taskInput = document.querySelector('.task-input input');
let todos = JSON.parse(localStorage.getItem('todo-list'));
let taskBox = document.querySelector('.task-box');

function showTodo() {
  let li = '';

  if (todos) {
    todos.forEach((todo, id) => {
      li += ` <li class="task">
                        <label for="${id}">
                        <input type="checkbox" id="${id}">
                        <p>${todo.name}</p>
                        </label>
                        <div class="settings">
                            <button>Delete</button>
                        </div>
                </li>`;

    });
    taskBox.innerHTML = li;
  }

}
showTodo();
taskInput.addEventListener("keyup", function (e) {
  let userTask = taskInput.value.trim();
  if (e.key === 'Enter' && userTask) {
    if (!todos) {
      todos = [];
    }
    taskInput.value = "";

    let taskInfo = { name: userTask, status: 'pending' };
    todos.push(taskInfo);
    localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodo();

  }
});

let clearButton = document.getElementsByClassName('clear-btn')[0];
clearButton.addEventListener('click', function () {
  localStorage.removeItem('todo-list');
  todos = [];
  showTodo();
  console.log(todos);
});



let moreOptions = document.getElementsByClassName('settings');

console.log(moreOptions);

for (let i = 0; i < moreOptions.length; i++) {
  moreOptions[i].addEventListener('click', function (e) {
    todos.splice(i, 1);
    localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodo();
    console.log(`inde ${i} and new arr =`, todos);
    location.reload();


  });
}


// for (let i = 0; i < moreOptions.length; i++) {
//   moreOptions[i].addEventListener('click', function (index) {
//     return function (e) {
//       todos.splice(index, 1);
//       localStorage.setItem('todo-list', JSON.stringify(todos));
//       showTodo();
//       console.log(`index ${index} and new arr =`, todos);
//     };
//   }(i));
// }


//



