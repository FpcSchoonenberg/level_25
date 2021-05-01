
const addShowTasks = async () => {
    try {
        await addTask();
        await deleteAllTasksFromBrowser();
        await getAllTasks();
        await emptyTaskfield();
        
    }
    catch {
        (console.log("function addShowTasks error"))
    }
}

const deleteShowTasks = async () => {
    try {
        await deleteItemById();
        await deleteAllTasksFromBrowser();
        await getAllTasks();        
    }
    catch {
        console.log("function deleteShowTasks error")        
    }
}

const addTask = async () => {
    try {
        let data = { description: document.getElementById("taskField").value  , done: false }
        let response = await fetch("http://localhost:3000", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }            
        })
        
    }
    catch {
        console.log("function addTask error")
    }
}

const getAllTasks = async () => {
    try {
        let response = await fetch("http://localhost:3000", {
            method: "GET",
            headers: new Headers({ 'content-type': 'application/json' })
        })
        let data = await response.json();
        console.log(data);
        await prepTaskOutput(data);
    }    
    catch {
        console.log("function GetAllTasks error")
    }
}

const deleteItemById = async () => {
    try {
        let response = await fetch(`http://localhost:3000/${event.target.id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            }
        })
    }
    catch {
        console.log("function deleteItemById error")
    }
}

const updateItem = async (boolean) => {
    try {        
        const updateTask = {"done": boolean}
        const response = await fetch(`http://localhost:3000/${event.target.className}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        });
        const data = await response.json();
        console.log(data);
    }
    catch {
        console.log(" funtion updateItem went wrong")
    }
}






