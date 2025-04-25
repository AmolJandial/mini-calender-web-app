const monthEl = document.getElementById("calender-month");
const weekEl = document.getElementById("calender-week");
const dayEl = document.getElementById("calender-day");
const yearEl = document.getElementById("calender-year");

const date = new Date();

const monthTextNode = document.createTextNode(
  date.toLocaleString("en", { month: "long" })
);

const weekTextNode = document.createTextNode(
  date.toLocaleString("en", { weekday: "long" })
);

const dayTextNode = document.createTextNode(date.getDay());

const yearTextNode = document.createTextNode(date.getFullYear());

monthEl.appendChild(monthTextNode);
weekEl.appendChild(weekTextNode);
dayEl.appendChild(dayTextNode);
yearEl.appendChild(yearTextNode);
