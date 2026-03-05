document.addEventListener("DOMContentLoaded", loadGoals);

function loadGoals(){
  const container = document.getElementById("goalsContainer");
  const empty = document.getElementById("emptyState");

  const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
  container.innerHTML = "";

  if(reminders.length === 0){
    empty.style.display = "block";
    updateStats();
    return;
  }

  empty.style.display = "none";

  reminders.forEach((item, index)=>{
    const div = document.createElement("div");
    div.className = "goal";
    div.innerHTML = `<span>${item.goal}</span><b>Pending</b>`;
    div.onclick = ()=>toggleGoal(div);
    container.appendChild(div);
  });

  updateStats();
}

function toggleGoal(goal){
  goal.classList.toggle("done");
  goal.querySelector("b").innerText =
    goal.classList.contains("done") ? "Done" : "Pending";
  updateStats();
}

function updateStats(){
  const goals = document.querySelectorAll(".goal");
  const done = document.querySelectorAll(".goal.done").length;
  const total = goals.length;
  const percent = total === 0 ? 0 : Math.round(done/total*100);

  document.getElementById("percent").innerText = percent+"%";
  document.getElementById("done").innerText = done;
  document.getElementById("total").innerText = total;
}
