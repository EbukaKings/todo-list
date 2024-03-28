const nums = [1, 1, 3];

let total = 0;


for (let i = 0; i < nums.length; i++ ) {
    const num = nums[i];
    total = total + num;

}
console.log(total);

const numDoubled = [];
 for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    numDoubled.push(num * 2);
 }
 console.log(numDoubled);

const todo = ['Pray', 'Make breakfast', 'Go for  class', 'Wash dishes'];
renderTodo()
function renderTodo() {
            let toDoListHTML = '';

            for (let i = 0; i < todo.length; i++) {
            const todoList = todo[i];
            const html = `<p>${todoList}
            <button onclick = "
            toDoListHTML.splice(0, 1);
            ">delete</button>
            </p>`;
            toDoListHTML += html;
            
            /*document.querySelector('.js-todo-button')
            .innerHTML = toDoListHTML;*/
            document.querySelector('.todo-list-container')
            .innerHTML = toDoListHTML;
        }
}

function addTodo() {
    const buttonElement = document.querySelector('.js-todo-button');
    const name = buttonElement.value
    todo.push(name);
    console.log(todo);
    buttonElement.value = '';

    renderTodo();

}
