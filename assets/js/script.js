// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
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

// Displays timeblock on page
// var hourEl = $("div");
// hourEl.addClass("hour");
// hourEl.text("09:00am"); // Change from hardcode




