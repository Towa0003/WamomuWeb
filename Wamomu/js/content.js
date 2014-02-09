        function buttonClick(i) {
            $('ul').empty();
            $.getJSON('/Wamomuweb/wamomu/php/meals_details.php', function (data) {
                $.each(data, function (key, val) {
                    if (val.date == i) {
                        //$('#contentMealul').append('<li id="' + key + '">' + val.mealkind + ' ' + val.meal + ' </li>');
                        // $('div[id=Januar]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">1.</button>');
                        $('#contentOverviewUl').append('<li id="' + key + '">' + (val.time).substring(0, 5) + ' Uhr - ' +  val.mealkind + ' : ' + val.meal + ' </li>');
                    }
                });
            });
            $.getJSON('/Wamomuweb/wamomu/php/measurements_details.php', function (data) {
                $.each(data, function (key, val) {
                    if (val.date == i) {
                        //$('#contentMeasurementsul').append('<li id="' + key + '">' + (val.time).substring(0, 5) + ' Uhr    -    Messwert: ' + val.mvalue + ' </li>');
                        console.log(val.mvalue);
                        // $('div[id=Januar]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">1.</button>');
                        $('#contentOverviewUl').append('<li id="' + key + '">' + (val.time).substring(0, 5) + ' Uhr    -    Messwert : ' + val.mvalue + ' mg/dl  </li>');
                    }
                });
                drawGraph(i.substring(8, 10), i.substring(5, 7));
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

