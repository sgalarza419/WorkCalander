$(document).ready(function () {
    //Set the time
    var specificDay = moment().format('MMMM Do YYYY');
    $("#currentDay").text(specificDay);

    //adding the colors for specific time
    function timeZone() {
        var eventTime = moment().hour();
        //console.log(eventTime);
        var currentTime = $('.row');

        currentTime.each(function () {
            var match = parseInt($(this).attr('id'))
            if (match < 9) {
                match += 12;
            }
            // console.log(eventTime,match);
            let time = $(this)[0];
            if (eventTime === match) {
                $(time).addClass('present')
            } else if (eventTime > match) {
                $(time).addClass('past')
            } else if (eventTime < match) {
                $(time).addClass('future')
            }
        });
    }
    timeZone();

    dailyInput = $("textarea"); //variable is an array
    saveButton = $("button") // variable is an array
    timeRow = $(".row"); // variable is an array

    // for (i = 0; i < 10 ; i++);
    // localStorage.setItem(timeRow[i], dailyInput[i]);
    // console.log(dailyInput);
    // console.log(saveButton);
    // console.log(timeRow);

    // noteTime = timeRow.attr("id");



    saveButton.click(function () {


        noteTime = $(this).parent().attr("id");
        note = $(this).prev().val();
        // console.log(noteTime);
        // console.log(note);

        if (noteTime && note) {
            localStorage.setItem(noteTime, note);
            note = dailyInput.text();
            // location.reload();
        }
    });


    for (i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        value = localStorage.getItem(key);

        $("textarea").each(function () {
            if ($(this).attr("id") == key) {
                $(this).text(value);
                console.log(value);
            };
        })
    }
});