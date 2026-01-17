const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-list a");

window.addEventListener(
  "scroll",
  () => {
    let currentSection = "";
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  },
  { passive: true }
);
/*----TOGGLE BUTTON----*/
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});
//*****CLOCK_WIDGET*****/
const time = document.getElementById("time-display");
const date = document.getElementById("date-display");
function Clock() {
  const now = new Date();
  const dayss = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const months = [
    "jan",
    "feb",
    "march",
    "april",
    "may",
    "jun",
    "jul",
    "aug",
    "sept",
    "oct",
    "nov",
    "dec",
  ];
  let days = now.getDay();
  let datte = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  let hours = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (mins < 10) mins = "0" + mins;
  if (secs < 10) secs = "0" + secs;
  time.textContent = `${hours}:${mins}:${secs}`;
  if (datte < 10) datte = "0" + datte;
  date.textContent = `${dayss[days]} ${datte} ${months[month]} ${year}`;
}
Clock();
setInterval(Clock, 1000);
//WEATHER-WIDGET
const weatherForm = document.getElementById("weather-form");
const cityInput = document.getElementById("weather-city");
const res = document.getElementById("weather-result");
const loc = document.querySelector(".weather-location");
const temp = document.querySelector(".weather-temp");
const desc = document.querySelector(".weather-desc");
const errorW = document.getElementById("weather-error");
const API_KEY = "2785bf9285eb182499df2a23eed3b1bc";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = cityInput.value.trim();
  if (name === "") {
    errorW.textContent = "please type a valid city name";
    errorW.hidden = false;
    return;
  }
  errorW.hidden = true;
  Getwea(name);
});
async function Getwea(Cityname) {
  try {
    const response = await fetch(
      `${API_URL}?q=${Cityname}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("city not found");
    const data = await response.json();
    loc.textContent = data.name;
    temp.textContent = `${data.main.temp.toFixed(1)}°C`;
    desc.textContent = data.weather[0].description;
    res.hidden = false;
  } catch (error) {
    errorW.textContent = error.message;
    errorW.hidden = false;
    res.hidden = true;
  }
}
//TASKS-WIDGET
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const deleteAll = document.getElementById('clear-all');
const deleteCmp = document.getElementById('clear-completed');
let tasks = [];
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskValue = taskInput.value.trim();
  if (taskValue === "") return;
  const taskObject = {
    id: "task_" + Date.now(),
    text: taskValue,
    completed: false,
  };
  tasks.push(taskObject);
  saveTasks();
  renderTask(taskObject);
  taskInput.value = "";
});
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function renderTask(taskObject) {
  const li = document.createElement("li");
  li.setAttribute("data-id", taskObject.id);
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  if (taskObject.completed) {
    checkbox.checked = true;
    li.classList.add("completed");
  }
  const label = document.createElement("label");
  label.append(checkbox, " ", taskObject.text);
  const deleteBTN = document.createElement("button");
  deleteBTN.className = "delete";
  deleteBTN.textContent = "x";
  li.appendChild(label);
  li.appendChild(deleteBTN);
  taskList.appendChild(li);
}
function loadTasks() {
  const data = localStorage.getItem("tasks");
  if (!data) tasks = [];
  else tasks = JSON.parse(data);
  tasks.forEach((task) => {
    renderTask(task);
  });
}
loadTasks();
taskList.addEventListener("click", (e) => {
  if (e.target.type === "checkbox") {
    const li = e.target.closest("li");
    const taskId = li.getAttribute("data-id");
    const task = tasks.find((task) => task.id === taskId);
    task.completed = e.target.checked;
    li.classList.toggle("completed");
    saveTasks();
  }
  if (e.target.className === "delete") {
    const li = e.target.closest("li");
    const taskid = li.getAttribute("data-id");
    tasks = tasks.filter((task) => task.id !== taskid);
    li.remove();
    saveTasks();
  }
});
deleteCmp.addEventListener('click',()=>{
  tasks = tasks.filter(task => task.completed === false);
  taskList.innerHTML = '';
  tasks.forEach(task=>{
    renderTask(task);
  })
  saveTasks();
});
deleteAll.addEventListener('click',()=>{
  if(confirm('Delete all tasks?')){
    tasks = [];
    taskList.innerHTML = '';
    saveTasks();
  }
});
//QUOTE-WIDGET
const quoteBtn = document.getElementById('new-quote');
const quotApi = 'https://api.quotable.io/random';
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
async function fetchQuote(){
  try{
    quoteText.textContent = 'loading...';
    const response = await fetch(quotApi);
    const data = await response.json();
    quoteText.textContent = data.content;
    quoteAuthor.textContent = data.author;
  }
  catch(error){
    quoteText.textContent = error.message;
  }
};
quoteBtn.addEventListener('click',fetchQuote);
fetchQuote();
const year = document.getElementById('year');
const now = new Date;
year.textContent = now.getFullYear();