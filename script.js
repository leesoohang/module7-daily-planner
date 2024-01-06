//display current day
var currentDay = dayjs().format("dddd, MMM DD YYYY")
$("#currentDay").text(currentDay)

//current hour
var currentHour = dayjs().hour()
//set hour array to get all the hours for timeblock
var hoursArray = []

// function addText() {
for (var i = 9; i < 23; i++) {
    hoursArray.push(i);

$.each(hoursArray, function(i, val) {
    var setHour = dayjs().hour(val)
    var hourText = dayjs(setHour).format("h A")
    $("#"+ val).text(hourText)
})}


// for (i = 9; i < 23; i++) {
//     function hour(i) {
//         var eventHour = dayjs().set('hour', i);
//     $("span").text(eventHour)
// }
// }

// var slot = dayjs(eventHour).format("h A")
//set up objects var schedule containing hour slots and black containers to fill in

// if hour in block < currentHour, timeblock background color gray

// if (eventHour == currentHour) {
//     $(".form-control").css("background-color", "#FA8072")}
//     else if (eventHour < currentHour) {
// $(".form-control").css("background-color", "#808080")}
// // if the time in time block == currentHour, timeblock backgroud color red
//         else {
// // if hour in block > currentHour, timeblock background color green
// $(".form-control").css("background-color", "#9ACD32")}

//local storage: getItem of the container with free text

//notification of item saved to local storage, may use function: after clicking the FA save button, notification appears

$("button").click(function notification(){
    $("#saved").fadeIn(1000);
    })

setInterval(function fadeOut(){
    $("#saved").fadeOut()
},1000)


//set the hour slots using each()


        
//hours show on the page    


        // $("span").attr("value", hoursArray[i])
    
    // function = $("span")[i].textContent


    // $("span").text(eventHour[i]);

    // function timeblock(i) {
    //     dayjs().hour(hoursArray[i])