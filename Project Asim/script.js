const task_btn = document.querySelector(".task-btn");
const task_section = document.querySelector(".task-section");
const task_manager_cross = document.querySelector(".task-manager-cross");
const task_input = document.querySelector("#task");
const add_task = document.querySelector(".add-task");
const tasks_container = document.querySelector(".tasks-container").querySelector("ol");

let task_done=[];
let delete_btn=[];
let new_task;

// ----- Toggle The Task Manager
task_btn.addEventListener("click",()=>{
    toggleTaskManager();
});
task_manager_cross.addEventListener("click",function(){
    toggleTaskManager();
});
function toggleTaskManager(){
    task_section.classList.toggle("show-TM");
}

// ------- Add task -----------
add_task.addEventListener("click", function(){
    
    let task_string = `<li>
    <div class="task">
      <p class="task-text ">${task_input.value}</p>
      <div>
        <button class="btn task-done">Done</button>
        <button class="btn task-delete">X</button>
      </div>
    </div>
  </li>`;

  tasks_container.insertAdjacentHTML ("beforeend",task_string);

//   add event listener on the newly added task

addListenerOnAddBtn();

// add event listner on the delete button

addListneronDeleteBtn();

// close the Task Manager after adding the new Task
toggleTaskManager();

//--- empty the task input
task_input.value = "";

});

function addListenerOnAddBtn(){
    let new_task_arr = tasks_container.childNodes;
     new_task = new_task_arr[new_task_arr.length-1];
     task_done=new_task.querySelector(".task-done");

     //console.log(task_done.parentNode.parentNode)

    task_done.addEventListener("click", function(e){
        console.log(e.currentTarget);
        e.currentTarget.parentNode.parentNode.querySelector(".task-text").classList.add("task-complete");
    });
}
function addListneronDeleteBtn(){
    delete_btn = new_task.querySelector(".task-delete");
    console.log(delete_btn);

    delete_btn.addEventListener("click",function(e){
        console.log(e.currentTarget);
        e.currentTarget.parentNode.parentNode.parentNode.remove();
    });
}


    
    


