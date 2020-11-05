$(document).ready(function () {
    //Set the time
    var specificDay = moment().format('MMMM Do YYYY');
    $("#currentDay").text(specificDay);

    //adding the colors for specfic time 
    function timeZone() {
        var eventTime = moment().format('h');
        console.log(eventTime);
        var currentTime = $('.row');

        currentTime.each(function () {
            var match = parseInt($(this).attr('id'))
            if (match < 9) {
                match += 12;
            }
            console.log(eventTime, match);
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