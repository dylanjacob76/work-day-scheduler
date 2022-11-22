// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

var currentDayEl = $("#currentDay");
var containerEl = $(".container");

// Displays the current day at the top of the calender
var currentDay = moment().format("dddd, MMMM Do");
var pEl = $("<p>");
pEl.append(currentDay)
currentDayEl.append(pEl);

// Creates current time variable
var currentTime = moment().format("k");
console.log(currentTime);

// Adds dynamic color class to to the text area based on the current hour
// TODO: if the past, clear local storage for that specific hour
var hour9El = $(".hour-9");
if (currentTime < 9) {
    hour9El.addClass("future");
} else if (currentTime > 9) {
    hour9El.addClass("past");
} else {
    hour9El.addClass("present");
}

var hour10El = $(".hour-10");
if (currentTime < 10) {
    hour10El.addClass("future");
} else if (currentTime > 10) {
    hour10El.addClass("past");
} else {
    hour10El.addClass("present");
}

var hour11El = $(".hour-11");
if (currentTime < 11) {
    hour11El.addClass("future");
} else if (currentTime > 11) {
    hour11El.addClass("past");
} else {
    hour11El.addClass("present");
}

var hour12El = $(".hour-12");
if (currentTime < 12) {
    hour12El.addClass("future");
} else if (currentTime > 12) {
    hour12El.addClass("past");
} else {
    hour12El.addClass("present");
}

var hour13El = $(".hour-13");
if (currentTime < 13) {
    hour13El.addClass("future");
} else if (currentTime > 13) {
    hour13El.addClass("past");
} else {
    hour13El.addClass("present");
}

var hour14El = $(".hour-14");
if (currentTime < 14) {
    hour14El.addClass("future");
} else if (currentTime > 14) {
    hour14El.addClass("past");
} else {
    hour14El.addClass("present");
}

var hour15El = $(".hour-15");
if (currentTime < 15) {
    hour15El.addClass("future");
} else if (currentTime > 15) {
    hour15El.addClass("past");
} else {
    hour15El.addClass("present");
}

var hour16El = $(".hour-16");
if (currentTime < 16) {
    hour16El.addClass("future");
} else if (currentTime > 16) {
    hour16El.addClass("past");
} else {
    hour16El.addClass("present");
}

var hour17El = $(".hour-17");
if (currentTime < 17) {
    hour17El.addClass("future");
} else if (currentTime > 17) {
    hour17El.addClass("past");
} else {
    hour17El.addClass("present");
}

// on click of the save button save to local storage

