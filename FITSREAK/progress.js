const calendar = document.getElementById("calendar");
const monthText = document.getElementById("monthText");
const bars = document.getElementById("bars");

const infoTitle = document.getElementById("infoTitle");
const infoContent = document.getElementById("infoContent");
const totalGoalsText = document.getElementById("totalGoals");
const doneGoalsText = document.getElementById("doneGoals");
const percentGoalsText = document.getElementById("percentGoals");

// Load shared data
const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
const doneMap = JSON.parse(localStorage.getItem("doneGoals")) || {};

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();

monthText.innerText = now.toLocaleString("default", {
  month: "long",
  year: "numeric"
});

// Build calendar
const days = new Date(year, month + 1, 0).getDate();

for (let d = 1; d <= days; d++) {
  const cell = document.createElement("div");
  cell.innerText = d;
  cell.onclick = () => selectDay(d, cell);
  calendar.appendChild(cell);
}

// Default stats
updateOverallStats();
renderGraph();

// Click date
function selectDay(day, el) {
  document.querySelectorAll(".calendar div")
    .forEach(d => d.classList.remove("active"));
  el.classList.add("active");

  infoTitle.innerText = `Goals on ${day}`;
  infoContent.innerHTML = "";

  if (reminders.length === 0) {
    infoContent.innerHTML = "<p>No goals</p>";
    return;
  }

  reminders.forEach(g => {
    const row = document.createElement("p");
    row.innerHTML = `
      ${g.goal} — 
      <b style="color:${doneMap[g.id] ? '#16a34a' : '#dc2626'}">
        ${doneMap[g.id] ? 'Done' : 'Pending'}
      </b>`;
    infoContent.appendChild(row);
  });
}

// Overall stats
function updateOverallStats() {
  const total = reminders.length;
  const done = Object.values(doneMap).filter(v => v).length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  totalGoalsText.innerText = total;
  doneGoalsText.innerText = done;
  percentGoalsText.innerText = percent + "%";
}

// Graph
function renderGraph() {
  bars.innerHTML = "";
  for (let i = 0; i < 7; i++) {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = (30 + Math.random() * 90) + "px";
    bars.appendChild(bar);
  }
}
