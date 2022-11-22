var currentDayEl = $("#currentDay");
var containerEl = $(".container");
var saveBtnEl = $(".saveBtn");
var currentDay = moment().format("dddd, MMMM Do");
var pEl = $("<p>");
var currentTime = moment().format("k");


// Displays the current day at the top of the calender
pEl.append(currentDay)
currentDayEl.append(pEl);

// Adds dynamic color class to to the text area based on the current hour
// TODO: if the past, clear local storage for that specific hour
var hour9El = $(".hour-9");
if (currentTime < 9) {
    hour9El.addClass("future");
} else if (currentTime > 9) {
    hour9El.addClass("past");
    localStorage.setItem("hour-9", "");
} else {
    hour9El.addClass("present");
}

var hour10El = $(".hour-10");
if (currentTime < 10) {
    hour10El.addClass("future");
} else if (currentTime > 10) {
    hour10El.addClass("past");
    localStorage.setItem("hour-10", "");
} else {
    hour10El.addClass("present");
}

var hour11El = $(".hour-11");
if (currentTime < 11) {
    hour11El.addClass("future");
} else if (currentTime > 11) {
    hour11El.addClass("past");
    localStorage.setItem("hour-11", "");
} else {
    hour11El.addClass("present");
}

var hour12El = $(".hour-12");
if (currentTime < 12) {
    hour12El.addClass("future");
} else if (currentTime > 12) {
    hour12El.addClass("past");
    localStorage.setItem("hour-12", "");
} else {
    hour12El.addClass("present");
}

var hour13El = $(".hour-13");
if (currentTime < 13) {
    hour13El.addClass("future");
} else if (currentTime > 13) {
    hour13El.addClass("past");
    localStorage.setItem("hour-13", "");
} else {
    hour13El.addClass("present");
}

var hour14El = $(".hour-14");
if (currentTime < 14) {
    hour14El.addClass("future");
} else if (currentTime > 14) {
    hour14El.addClass("past");
    localStorage.setItem("hour-14", "");
} else {
    hour14El.addClass("present");
}

var hour15El = $(".hour-15");
if (currentTime < 15) {
    hour15El.addClass("future");
} else if (currentTime > 15) {
    hour15El.addClass("past");
    localStorage.setItem("hour-15", "");
} else {
    hour15El.addClass("present");
}

var hour16El = $(".hour-16");
if (currentTime < 16) {
    hour16El.addClass("future");
} else if (currentTime > 16) {
    hour16El.addClass("past");
    localStorage.setItem("hour-16", "");
} else {
    hour16El.addClass("present");
}

var hour17El = $(".hour-17");
if (currentTime < 17) {
    hour17El.addClass("future");
} else if (currentTime > 17) {
    hour17El.addClass("past");
    localStorage.setItem("hour-17", "");
} else {
    hour17El.addClass("present");
}


function saveSchedule() {
    // Takes the value of the textarea and save it to local storage
    localStorage.setItem("hour-9", hour9El.val());
    localStorage.setItem("hour-10", hour10El.val());
    localStorage.setItem("hour-11", hour11El.val());
    localStorage.setItem("hour-12", hour12El.val());
    localStorage.setItem("hour-13", hour13El.val());
    localStorage.setItem("hour-14", hour14El.val());
    localStorage.setItem("hour-15", hour15El.val());
    localStorage.setItem("hour-16", hour16El.val());
    localStorage.setItem("hour-17", hour17El.val());
}

function renderSchedule() {
    // Takes the local storage value and sets the text area of the corresponding hour to its value
    hour9El.text(localStorage.getItem("hour-9"));
    hour10El.text(localStorage.getItem("hour-10"));
    hour11El.text(localStorage.getItem("hour-11"));
    hour12El.text(localStorage.getItem("hour-12"));
    hour13El.text(localStorage.getItem("hour-13"));
    hour14El.text(localStorage.getItem("hour-14"));
    hour15El.text(localStorage.getItem("hour-15"));
    hour16El.text(localStorage.getItem("hour-16"));
    hour17El.text(localStorage.getItem("hour-17"));
}

renderSchedule();

saveBtnEl.on("click", saveSchedule);
