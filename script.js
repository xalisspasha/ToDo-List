const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");


const generateTemplate = (todo) => {
    const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span>
                   <i class="far fa-trash-alt delete"></i>
                   </li>`

    //list = list + html because add one (don't replace by another one)
    list.innerHTML += html;
}


// add todo
addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // add value and trim spaces with trim()
    const todo = addForm.add.value.trim();

    // if length = positive number (user write something) do it otherwise 0 (false) don't do
    if (todo.length) {
        generateTemplate(todo);

        // when add value afterthat reset input by reset()
        addForm.reset();
    }


})


// delete todo
list.addEventListener('click', e => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
})


// search filtered todo

const filteredTodos = (term) => {

    // if list item don't have the term which searched
    // convert html collections to array by Array.from()
    Array.from(list.children)

        // if we have only one line code can we write this without braces and return
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))

        .forEach((todo) => {
            // when add filtered class do display none
            todo.classList.add("filtered")
        })

    //if list item have the term which searched
    Array.from(list.children)

        .filter((todo) => {
            return todo.textContent.toLowerCase().includes(term)
        })

        .forEach((todo) => {
            // when remove filtered class do display
            todo.classList.remove("filtered")
        })



}

// input search event
search.addEventListener("keyup", () => {
    // term equal to search input value and trim spaces and change to lowercase if write uppercase to search
    const term = search.value.trim().toLowerCase();
    filteredTodos(term);
})