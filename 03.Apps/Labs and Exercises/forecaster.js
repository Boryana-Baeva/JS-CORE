function attachEvents() {

    $('#submit').click(function () {

        $.get('https://judgetests.firebaseio.com/locations.json')
            .then(getLocation)
            .catch(showError);

        function getLocation(locations) {
            $('span').remove();
            let url = 'https://judgetests.firebaseio.com/forecast/';
            let requestedLocation = $('#location').val();
            let code = '';
            for (let location of locations) {
                if (location.name === requestedLocation) {
                    code = location.code;

                }
            }
            if(code == ''){
                $('#forecast').text("Error");
            }

            $.get(`${url}today/${code}.json `)
                .then(showCurrentForecast);

            $.get(`${url}upcoming/${code}.json `)
                .then(show3DayForecast);

            function showCurrentForecast(currentForecast) {
                $('#forecast').css('display', 'inline');

                let locationName = currentForecast.name;
                let forecast = currentForecast.forecast;
                let low = forecast.low;
                let high = forecast.high;
                let condition = forecast.condition;
                let degrees = '&#176';
                let symbol = '';
                switch (condition) {
                    case 'Sunny':symbol = '&#x2600';break;
                    case 'Partly sunny':symbol = '&#x26C5';break;
                    case 'Overcast':symbol = '&#x2601';break;
                    case 'Rain':symbol = '&#x2614';break;
                }
                let currentDiv = $('#current');
                let symbolSpan = $(`<span>${symbol}</span>`).addClass('condition symbol');
                let conditionSpan = $('<span>').addClass('condition');
                let locationSpan = $(`<span>${locationName}</span>`).addClass('forecast-data');
                let temperatureSpan = $(`<span>${low}${degrees}/${high}${degrees}</span>`).addClass('forecast-data');
                let weatherSpan = $(`<span>${condition}</span>`).addClass('forecast-data');

                conditionSpan.append(locationSpan);
                conditionSpan.append(temperatureSpan);
                conditionSpan.append(weatherSpan);
                currentDiv.append(symbolSpan);
                currentDiv.append(conditionSpan);

            }

            function show3DayForecast(upcomingForecasts) {
                let upcomingDiv = $('#upcoming');
                let upcomingSpan = '';
                for (let forecast of upcomingForecasts.forecast) {
                    upcomingSpan = $('<span>').addClass('upcoming');
                    upcomingDiv.append(upcomingSpan);

                    let low = forecast.low;
                    let high = forecast.high;
                    let condition = forecast.condition;
                    let degrees = '&#176';
                    let symbol = '';
                    switch (condition) {
                        case 'Sunny':symbol = '&#x2600';break;
                        case 'Partly sunny':symbol = '&#x26C5';break;
                        case 'Overcast':symbol = '&#x2601';break;
                        case 'Rain':symbol = '&#x2614';break;
                    }

                    let symbolSpan = $(`<span>${symbol}</span>`).addClass('symbol');
                    let temperatureSpan = $(`<span>${low}${degrees}/${high}${degrees}</span>`).addClass('forecast-data');
                    let weatherSpan = $(`<span>${condition}</span>`).addClass('forecast-data');
                    upcomingSpan.append(symbolSpan);
                    upcomingSpan.append(temperatureSpan);
                    upcomingSpan.append(weatherSpan);

                }


            }
            $('#location').val('');

        }

        function showError() {
            $('#forecast').css('display', 'inline');
            $('#forecast').text("Error");
        }
    });
}