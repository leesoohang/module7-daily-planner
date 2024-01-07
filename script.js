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
;
//set up the function to fill in hour slot in timeblocks with the hours set using dayjs
$.each(hoursArray, function(i, val) {

    const setHour = dayjs().hour(val);
    var hourText = dayjs(setHour).format("h A");
    $("#"+ val).text(hourText);
    $("#" + val).next().val();
//set up the click event that store data in local storage 
    $("button").click(function (event){
    event.preventDefault();    
//only store items when there is text in the box
    if ($("#" + val).next().val()) {
//notification of item saved to local storage, key using event hour    
    localStorage.setItem(hourText, $("#" + val).next().val());   
    $("#saved").fadeIn(1000);}});
    $("#" + val).next().val(localStorage.getItem(hourText));
    localStorage.getItem(hourText)
}

)
    }
//notification floats for a second
    setInterval(function fadeOut(){
    $("#saved").fadeOut()}
    ,1000)
        

