$(document).ready(function () {
    //Set the time
    var specificDay = moment().format('MMMM Do YYYY');
    $("#currentDay").text(specificDay);

    //adding the colors for specfic time 
    function timeZone() {
        var eventTime = moment().format('h');
        // console.log(eventTime);
        var currentTime = $('.row');

        currentTime.each(function () {
            var match = parseInt($(this).attr('id'))
            if (match < 9) {
                match += 12;
            }
            // console.log(eventTime, match);
            let time = $(this)[0];
            if (eventTime === match) {
                $(time).addClass('present')
            } else if (eventTime > match) {
                $(time).addClass('past')
            } else if (eventTime < match) {
                $(time).addClass('future')
            }
        })
    }
    timeZone();
});

dailyInput = $("textarea");
// console.log(dailyInput);
saveButton = $("button");
// console.log(saveButton);


timeRow = $(".row");
// console.log(timeRow);

saveButton.click(function () {

    note = dailyInput.val();
    console.log(note);
//     noteTime = timeRow.attr("id");
//     console.log(noteTime);

//     if (noteTime && note) {
//         localStorage.setItem(noteTime, note);
//         location.reload();
//     }
});

// savedNote = $("textarea");
// for (i = 0; i < localStorage.length; i++) {
//     value = localStorage.value(i);

//     savedNote.innerHTML += '${value}<br />';
// }




















var timeSlot = ["", "", "", "", "", "", "", ""];

function loadData() {
    //grab timeslot data from local storage ‘get item’
    //loop thru timeSlot on screen
    //for each row on the screen check timeslot array for non empty string
    //set up eventTime, get the match < 9 ‘+=12’
    //calculate timeSlot index = to match - 9
    //if non empty string set textarea for row to string in the arrow pointed by index
    //
}
//function save data
function saveData() {
    //event handled when you click save button
    //event time
    //convert to military time ‘+12’
    //set index = military time - 9
    //save incoming text in array
    //save array in local storage
}