//display current day
var currentDay = dayjs().format("dddd, MMM DD YYYY")
$("#currentDay").text(currentDay)

//current hour
var currentHour = dayjs().format("h A")
var eventHour = dayjs()
//set up objects var schedule containing hour slots and black containers to fill in

//design container of two columns in one row and a button

// if hour in block < currentHour, timeblock background color gray

if (eventHour == dayjs().hour()) {
    $(".form-control").css("background-color", "#FA8072")}
    else if (eventHour < currentHour) {
$(".form-control").css("background-color", "#808080")}
// if the time in time block == currentHour, timeblock backgroud color red
        else {
// if hour in block > currentHour, timeblock background color green
$(".form-control").css("background-color", "#9ACD32")}

//local storage: getItem of the container with free text

//notification of item saved to local storage, may use function: after clicking the FA save button, notification appears

$("button").click(function notification(){
    $("#saved").fadeIn(1000);
    })

setInterval(function fadeOut(){
    $("#saved").fadeOut()
},1000)

//dayjs(eventHour).to(a)