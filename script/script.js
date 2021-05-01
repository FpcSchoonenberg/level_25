const prepTaskOutput = async (data) => {
    data.forEach(task => {
        wrapTaskInHtml(task);
    });
}

const wrapTaskInHtml = (task) => {
    let newTaskContainer = document.createElement("div");
    newTaskContainer.className = "taskitem";

    let label = document.createElement('label');
    label.className = task._id;
    label.appendChild(document.createTextNode(task.description));

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = task._id;
    checkbox.addEventListener("click", () => {
        if (checkbox.checked === true) {
            document.getElementsByClassName(task._id)[1].style.textDecoration = "line-through";
            updateItem(true);
        } else {
            document.getElementsByClassName(task._id)[1].style.textDecoration = "none";
            updateItem(false);
        }
    })

    let trashCan = document.createElement("i");
    trashCan.id = task._id;
    trashCan.className = "fa fa-trash-o";
    trashCan.style.fontsize = "x-large";

    trashCan.addEventListener("click", deleteShowTasks)
    trashCan.addEventListener("mouseover", () => trashCan.classList.toggle("trashcancolor"));
    trashCan.addEventListener("mouseout", () => trashCan.classList.toggle("trashcancolor"))

    const taskContainer = document.getElementsByClassName("taskcontainer")
    newTaskContainer.appendChild(checkbox) + newTaskContainer.appendChild(label) + newTaskContainer.appendChild(trashCan)
    taskContainer[0].appendChild(newTaskContainer);
}


//delete screenoutput before adding content from new query
//functions are called in function addShowTask
const emptyTaskfield = async () => {
    document.getElementById("taskField").value = "";
    alert("Your list is to long. Live your life. ;)")
}
const deleteAllTasksFromBrowser = async () => {
    taskContainer = document.getElementsByClassName("taskcontainer")
    taskContainer[0].innerHTML = "";
}

//add listeners
const addListenerToTaskbutton = document.querySelector("button").addEventListener("click", addShowTasks);


//program starts here, show all saved tasks in the todo-list on screen
getAllTasks();






