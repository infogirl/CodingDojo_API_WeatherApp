$(document).ready(function() {
    $('button').click(function() {
        // your code here (build up your url)
        var city = $('#city').val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=inputyourAPIKey";
        console.log("hello world")
        $.get(url, function(res) {
            console.log(res)
            // your code here lets add teh results to the div html
            var information = "<p> Temperature:" + (res['main']['temp']) + "F</p><p>Details: " + (res['weather'][0]['description']) + "</p>";
            $("#weather").html(information);
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});
