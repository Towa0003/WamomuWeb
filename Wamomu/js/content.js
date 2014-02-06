        function start() {
            console.log("ready!");
            $.getJSON('/Wamomuweb/wamomu/php/meals_details.php', function (data) {
                /* data will hold the php array as a javascript object */
                var oldTag = 0;
                var oldMonat = 0;
                var oldJahr = 0;
                $.each(data, function (key, val) {
                    var tag = (val.date).substring(8, 10);
                    var monat = (val.date).substring(5, 7);
                    var jahr = (val.date).substring(0, 4);
                    if (oldTag == tag && oldMonat == monat && oldJahr == jahr) {
                        console.log("Date exists!");
                    } else if (monat == "01") {
                        console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                        $('div[id=Januar]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                    } else if (monat == "02") {
                        console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                        $('div[id=Februar]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                    } else if (monat == "03") {
                        console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                        $('div[id=März]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                    } else if (monat == "04") {
                        console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                        $('div[id=April]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                    } else if (monat == "05") {
                        console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                        $('div[id=Mai]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                    } else if (monat == "06") {
                        console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                        $('div[id=Juni]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                    } else if (monat == "07") {
                        console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                        $('div[id=Juli]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                    } else if (monat == "08") {
                        console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                        $('div[id=August]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                    } else if (monat == "09") {
                        console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                        $('div[id=September]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                    } else if (monat == "10") {
                        console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                        $('div[id=Oktober]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                    } else if (monat == "11") {
                        console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                        $('div[id=November]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                    } else if (monat == "12") {
                        console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                        $('div[id=Dezember]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                    }
                    oldTag = tag;
                    oldMonat = monat;
                    oldJahr = jahr;
                });
            });

            measurements();

            var days = new Date().getFullYear() % 4 == 0 ? 366 : 365;

            //            alert(days);

        }

        function buttonClick(i) {
            $.getJSON('/Wamomuweb/wamomu/php/meals_details.php', function (data) {
                $('ul').empty();
                $.each(data, function (key, val) {
                    if (val.date == i) {
                        $('#contentMealul').append('<li id="' + key + '">' + val.mealkind + ' ' + val.meal + ' </li>');
                        $('#contentMeasurementsul').append('<li id="' + key + '">' + val.time + ' ' + val.mvalue + ' </li>');
                        // $('div[id=Januar]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">1.</button>');
                        $('#contentOverviewUl').append('<li id="' + key + '">' + val.mealkind + ' ' + val.meal + ' </li>');
                        $('#contentOverviewUl').append('<li id="' + key + '">' + val.time + ' ' + val.mvalue + ' </li>');
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

        function grid() {
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            for (var i = 0; i < 21; i++) {
                ctx.moveTo(0, i * 30);
                ctx.lineTo(2000, i * 30);
            }

            ctx.strokeStyle = '#919191'
            ctx.lineWidth = 0.6;
            ctx.closePath();
            ctx.stroke();


        }

        function measurements() {
            grid();
            var start = true;
            var array = [];
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.strokeStyle = '#65A6D1'
            ctx.font = "10px sans-serif";
            var i = 0;

            $.getJSON('/Wamomuweb/wamomu/php/measurements_details.php', function (data) {
                /* data will hold the php array as a javascript object */
                $.each(data, function (key, val) {
                    var tag = (val.date).substring(8, 10);
                    array.push(val.mvalue);
                    var temp = Math.round(val.mvalue);
                    console.log(temp + "   " + i);
                    ctx.lineTo(i, 250 - (temp * 2));
                    ctx.fillText(tag, i, 190);
                    ctx.fillText((val.time).substring(0, 5), i - 12, 200);
                    i += 40;
                    console.log(val.mvalue);
                });
                ctx.lineWidth = 2.5;

                ctx.stroke();
            });


        }