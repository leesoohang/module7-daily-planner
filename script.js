//display current day
var currentDay = dayjs().format("dddd, MMM DD YYYY")
$("#currentDay").text(currentDay)

//set hour array to get all the hours for timeblock
var hoursArray = []

//use for loop and each function to add text based on the starting/ending hours with the desired format
for (var i = 9; i < 23; i++) {
    hoursArray.push(i);

$.each(hoursArray, function(i, val) {
    const setHour = dayjs().hour(val);
    var hourText = dayjs(setHour).format("h A");
    $("#"+ val).text(hourText)
})

//define conditons for color difference in timeblock, using isBefore/isAfter in dayjs   
if (dayjs().isAfter(dayjs().hour(i))) {
    $("#"+ i).next().css({"background-color": "#696969", "color": "#A9A9A9"})} //dimgrey,darkgry
    else if (dayjs().isBefore(dayjs().hour(i))) {
        $("#"+ i).next().css("background-color", "#FFA07A")} //lightsalmon
        else {
            $("#"+ i).next().css("background-color", "#98FB98")} //palegreen
}
//local storage: getItem of the container with free text
//notification of item saved to local storage, may use function: after clicking the FA save button, notification appears


// var eventHour = document.querySelectorAll("span").value;
// var eventItem = document.querySelectorAll(".form-control").value;
// var eventList = {
//     eventHour: eventHour,
//     eventItem: eventItem

$("button").click(function (event){
    event.preventDefault();
    // var textInput = $("#"+ i).val();
    // var textVal = $("#"+ i).next().val();
    localStorage.setItem($("#"+ i).val(), $("#"+ i).next().val());
    var lsVal = localStorage.getItem($("#"+ i).val());
    $(this).siblings("input").text(lsVal);
    $("#saved").fadeIn(1000);
   })

setInterval(function fadeOut(){
    $("#saved").fadeOut()}
    ,1000);




