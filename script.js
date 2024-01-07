//display current day
var currentDay = dayjs().format("dddd, MMM DD YYYY")
$("#currentDay").text(currentDay)

//set hour array to get all the hours for timeblock
var hoursArray = []

//use for loop and each function to add text based on the starting/ending hours with the desired format
for (var i = 9; i < 23; i++) {
    hoursArray.push(i);

//define conditons for color difference in timeblock, using isBefore/isAfter in dayjs   
if (dayjs().isAfter(dayjs().hour(i))) {
    $("#"+ i).next().css({"background-color": "#696969", "color": "#A9A9A9"})} //dimgrey,darkgry
    else if (dayjs().isBefore(dayjs().hour(i))) {
        $("#"+ i).next().css("background-color", "#FFA07A")} //lightsalmon
        else {
            $("#"+ i).next().css("background-color", "#98FB98")} //palegreen

$.each(hoursArray, function(i, val) {

    const setHour = dayjs().hour(val);
    var hourText = dayjs(setHour).format("h A");
    $("#"+ val).text(hourText);
    $("#" + val).next().val();
 $("button").click(function (event){
    event.preventDefault();    
//local storage: getItem of the container with free text if any
    if ($("#" + val).next().val()) {
   
//notification of item saved to local storage, key using event hour    
    localStorage.setItem(hourText, $("#" + val).next().val());
    // var eventItem = $("#" + val).next().val();
    // $("#" + val).next().text(eventItem);
    // localStorage.getItem(hourText);
   
    $("#saved").fadeIn(1000);}});
    $("#" + val).next().val(localStorage.getItem(hourText));
    localStorage.getItem(hourText)
} 
    
)
    }

    setInterval(function fadeOut(){
    $("#saved").fadeOut()}
    ,1000)
        

