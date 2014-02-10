        function buttonClick(date) {
            $('ul').empty();
            $.getJSON('/Wamomuweb/wamomu/php/meals_details.php', function (data) {
                $.each(data, function (key, val) {
                    if (val.date == date) {
                        //$('#contentMealul').append('<li id="' + key + '">' + val.mealkind + ' ' + val.meal + ' </li>');
                        // $('div[id=Januar]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">1.</button>');
                        $('#contentOverviewUl').append('<li id="' + key + '">' + (val.time).substring(0, 5) + ' Uhr - ' +  val.mealkind + ' : ' + val.meal + ' </li>');
                    }
                });
            });
            $.getJSON('/Wamomuweb/wamomu/php/measurements_details.php', function (data) {
                $.each(data, function (key, val) {
                    if (val.date == date) {
                        //$('#contentMeasurementsul').append('<li id="' + key + '">' + (val.time).substring(0, 5) + ' Uhr    -    Messwert: ' + val.mvalue + ' </li>');
                        console.log(val.mvalue);
                        // $('div[id=Januar]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">1.</button>');
                        $('#contentOverviewUl').append('<li id="' + key + '">' + (val.time).substring(0, 5) + ' Uhr    -    Messwert : ' + val.mvalue + ' mg/dl  </li>');
                    }
                });
                drawGraph(date.substring(8, 10), date.substring(5, 7), userid);
            });
        }

        function json() {
            $.getJSON('/Wamomuweb/wamomu/php/meals_details.php', function (data) {
                /* data will hold the php array as a javascript object */
                $.each(data, function (key, val) {
                    $('ul').append('<li id="' + key + '">' + val.meal_id + ' ' + val.mealkind + ' ' + val.meal + ' ' + val.date + '</li>');

                });
            });
        }

