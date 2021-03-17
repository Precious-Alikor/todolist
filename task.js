let todoactivity = [];
const main = document.getElementById("main");
const todoactivityDiv = document.getElementById("todoactivity");
const todoinput = document.getElementById("todoinput");
const btn = document.getElementById("btn");

//function for adding content 
const addContent = () => {
    todoactivityDiv.innerHTML = "";
    todoactivity.forEach((item) => {
        const div = document.createElement("div");
        div.id = "todocontainer";
        div.innerHTML = `
        <input type="checkbox"/>
        <p>${item.description}</p>
        <a href="#"><i class="fas fa-trash bin" onclick="deletebtn(${item.id})"></i></a>
        `
        todoactivityDiv.append(div);
    })
}

btn.addEventListener("click", () => {
    if(todoinput.value == ""){
        alert("Cannot be left empty");
    }
    else{
        const todo = {};
        todo.description = todoinput.value;
        // console.log(todoinput.value);
        todoactivity.push(todo);
        addContent();
        todoinput.value = "";
    }
})

const deletebtn = (id) => {
    const filteredarray = todoactivity.filter((item) => id != item.id);
    todoactivity = filteredarray;
    addContent();
}