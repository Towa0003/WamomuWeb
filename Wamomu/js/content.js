        function start() {
            console.log("ready!");
            $.getJSON('/Wamomuweb/wamomu/php/meals_details.php', function (data) {
                /* data will hold the php array as a javascript object */
                $.each(data, function (key, val) {
                    var tag = (val.date).substring(8, 10);
                    var monat = (val.date).substring(5, 7);
                    var jahr = (val.date).substring(0, 4);
                    console.log(val.date + "substring" + tag + " - " + monat + " - " + jahr);
                    $('div[id=Januar]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');




                });
            });
        }

        function buttonClick(i) {
            $.getJSON('/Wamomuweb/wamomu/php/meals_details.php', function (data) {
                $('ul').empty();
                $.each(data, function (key, val) {
                    if (val.date == i) {
                        $('ul').append('<li id="' + key + '">' + val.meal_id + ' ' + val.mealkind + ' ' + val.meal + ' ' + val.date + '</li>');
                        // $('div[id=Januar]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">1.</button>');




                    }
                });
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

        function measurements() {
            var start = true;
            var array = [];
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.moveTo(0, 0);
            var i = 0;
            $.getJSON('/Wamomuweb/wamomu/php/measurements_details.php', function (data) {
                /* data will hold the php array as a javascript object */
                $.each(data, function (key, val) {
                    array.push(val.mvalue);
                    var temp = Math.round(val.mvalue);
                    console.log(temp * 20 + "   " + i);
                    ctx.lineTo(i, temp * 10);
                    i += 20;
                    console.log(val.mvalue);
                });

            });
            ctx.stroke();

        }