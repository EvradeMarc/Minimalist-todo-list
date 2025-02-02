// Sélection des éléments
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");

// Fonction pour ajouter une tâche
function addTask() {
  const taskText = prompt("Entrez la description de la tâche :");
  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    addButtons(li);
    taskList.appendChild(li);

    let activeTask = document.getElementById("activeTask").textContent;
    let plusUn = parseInt(activeTask) + 1;
    document.getElementById("activeTask").textContent = plusUn + "";
  }
}

//Fonction pour supprimer une tâche avec confirmation
function removeTaskWithConfirm(task) {
  const confirmRemove = confirm("Voulez-vous vraiment supprimer ?");
  if (confirmRemove) {
    task.remove();
  }
}

// Fonction pour ajouter des boutons Modifier et Supprimer
function addButtons(task) {
  const editBtn = document.createElement("button");
  editBtn.textContent = "Modifier";
  editBtn.className = "btn";
  editBtn.addEventListener("click", () => editTask(task));

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Supprimer";
  deleteBtn.className = "btn";
  
    deleteBtn.addEventListener("click", () => removeTaskWithConfirm(task));
  
  task.appendChild(editBtn);
  task.appendChild(deleteBtn);
}
// Écouteur d’événement sur le bouton Ajouter
addTaskBtn.addEventListener("click", addTask);

// Fonction pour marquer une tâche comme terminée
taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");

    let completedTask = document.getElementById("completedTask").textContent;
    let plusUn = parseInt(completedTask) + 1;
    document.getElementById("completedTask").textContent = plusUn + "";

    let activeTask = document.getElementById("activeTask").textContent;
    let moinsUN = parseInt(activeTask) - 1;
    document.getElementById("activeTask").textContent = moinsUN + "";
  }
});

// Fonction pour modifier une tâche
function editTask(task) {
  const newText = prompt(
    "Modifiez la description :",
    task.firstChild.textContent
  );
  if (newText) {
    task.firstChild.textContent = newText;
  }
}

// Barre de recherche
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", (event) => {
  const filter = event.target.value.toLowerCase();
  const tasks = taskList.getElementsByTagName("li");
  Array.from(tasks).forEach((task) => {
    const text = task.firstChild.textContent.toLowerCase();
    task.style.display = text.includes(filter) ? "" : "none";
  });
});
