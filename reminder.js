let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
let editIndex = null;

const list = document.getElementById("reminderList");

document.addEventListener("DOMContentLoaded", renderReminders);

/* OPEN / CLOSE FORM */
function openForm(){
  document.getElementById("formBox").style.display = "block";
}

function closeForm(){
  document.getElementById("formBox").style.display = "none";
  clearForm();
}

/* SAVE */
function saveReminder(){
  const goal = document.getElementById("goalInput").value.trim();
  const time = document.getElementById("timeInput").value;

  if(!goal || !time){
    closeForm();
    return;
  }

  if(editIndex === null){
    reminders.push({goal,time});
    setAlarm(goal,time);
  }else{
    reminders[editIndex] = {goal,time};
    editIndex = null;
  }

  localStorage.setItem("reminders", JSON.stringify(reminders));
  closeForm();
  renderReminders();
}

/* RENDER */
function renderReminders(){
  list.innerHTML = "";

  reminders.forEach((item,index)=>{
    list.innerHTML += `
      <div class="reminder-item">
        <b>${item.goal}</b>
        <small>⏰ ${item.time}</small>
        <div class="actions">
          <button onclick="editReminder(${index})">Edit</button>
          <button onclick="deleteReminder(${index})">Delete</button>
        </div>
      </div>
    `;
  });
}

/* EDIT */
function editReminder(index){
  document.getElementById("goalInput").value = reminders[index].goal;
  document.getElementById("timeInput").value = reminders[index].time;
  editIndex = index;
  openForm();
}

/* DELETE */
function deleteReminder(index){
  reminders.splice(index,1);
  localStorage.setItem("reminders", JSON.stringify(reminders));
  renderReminders();
}

/* CLEAR FORM */
function clearForm(){
  document.getElementById("goalInput").value = "";
  document.getElementById("timeInput").value = "";
}

/* ALARM */
function setAlarm(goal,time){
  const [h,m] = time.split(":");
  const now = new Date();
  const alarm = new Date();
  alarm.setHours(h,m,0);

  if(alarm < now) alarm.setDate(alarm.getDate()+1);

  setTimeout(()=>{
    alert("🔔 Time for: " + goal);
  }, alarm - now);
}
