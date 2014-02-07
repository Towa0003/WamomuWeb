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
            //            Date-Objekt um die Messwerte des aktuellen Monats anzuzeigen
            var today = new Date();
            var d = today.getDate();
            var m = today.getMonth() + 1;
            measurements(d, m);
        }

        function buttonClick(i) {
            $('ul').empty();
            $.getJSON('/Wamomuweb/wamomu/php/meals_details.php', function (data) {
                $.each(data, function (key, val) {
                    if (val.date == i) {
                        $('#contentMealul').append('<li id="' + key + '">' + val.mealkind + ' ' + val.meal + ' </li>');
                        // $('div[id=Januar]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">1.</button>');
                        $('#contentOverviewUl').append('<li id="' + key + '">' + val.mealkind + ' ' + val.meal + ' </li>');
                    }
                });
            });
            $.getJSON('/Wamomuweb/wamomu/php/measurements_details.php', function (data) {
                $.each(data, function (key, val) {
                    if (val.date == i) {
                        $('#contentMeasurementsul').append('<li id="' + key + '">' + (val.time).substring(0, 5) + ' Uhr    -    Messwert: ' + val.mvalue + ' </li>');
                        console.log(val.mvalue);
                        // $('div[id=Januar]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">1.</button>');
                        $('#contentOverviewUl').append('<li id="' + key + '">' + (val.time).substring(0, 5) + ' Uhr    -    Messwert: ' + val.mvalue + ' </li>');
                    }
                });
                measurements(i.substring(8, 10), i.substring(5, 7));

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
            for (var i = 0; i < 9; i++) {
                ctx.moveTo(0, i * 30);
                ctx.lineTo(1300, i * 30);
            }

            ctx.strokeStyle = '#919191'
            ctx.lineWidth = 0.6;
            ctx.closePath();
            ctx.stroke();


        }

        function measurements(day, month) {
            console.log("ONCLICK: " + day + ". " + month);
            var start = true;
            var array = [];
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, c.width, c.height);
            grid();
            ctx.font = "10px sans-serif";
            var i = 10;

            $.getJSON('/Wamomuweb/wamomu/php/measurements_details.php', function (data) {
                /* data will hold the php array as a javascript object */
                ctx.strokeStyle = '#65A6D1'
                ctx.beginPath();
                $.each(data, function (key, val) {
                    // Wenn der übergebene Monat dem der Werte aus der Datenbank entspricht -> Linien zeichnen
                    if (month == (val.date).substring(5, 7)) {
                        var tag = (val.date).substring(8, 10);
                        array.push(val.mvalue);
                        var temp = Math.round(val.mvalue);
                        console.log(temp + "   " + i);

                        // Linien zu den Messwerten zeichnen
                        ctx.lineTo(i, 250 - (temp * 2));
                        ctx.lineWidth = 2.5;

                        // Tag und Uhrzeit an Graphen schreiben
                        ctx.fillStyle = "#000";
                        ctx.fillText(tag, i, 190);
                        ctx.fillText((val.time).substring(0, 5), i - 8, 200);
                        i += 40;
                    } else {
                        // Ansonsten nichts zeichnen
                    }
                });
                ctx.stroke();
                ctx.closePath();

                // Punkte an den Messwerten zeichnen
                i = 10;
                $.each(data, function (key, val) {
                    // Wenn der übergebene Monat dem der Werte aus der Datenbank entspricht -> Punkte an Messwert zeichnen
                    if (month == (val.date).substring(5, 7)) {
                        array.push(val.mvalue);
                        var temp = Math.round(val.mvalue);
                        // Angeklickter Tag wird hervorgehoben
                        if (day == (val.date).substring(8, 10)) {
                            ctx.fillStyle = "#00FF00"; // Füllung Kreis
                            ctx.strokeStyle = '#006300'; // Kontur Kreis
                            ctx.beginPath();
                            ctx.arc(i, 250 - (temp * 2), 6, 2 * Math.PI, false);
                            ctx.closePath();
                        }
                        // Ansonsten andere Tage werden normal dargestellt
                        else {
                            ctx.fillStyle = "#65A6D1"; // Füllung Kreis
                            ctx.strokeStyle = '#2B7CB3'; // Kontur Kreis
                            ctx.beginPath();
                            ctx.arc(i, 250 - (temp * 2), 6, 2 * Math.PI, false);
                            ctx.closePath();
                        }
                        ctx.fill();
                        ctx.lineWidth = 1;
                        ctx.stroke();
                        i += 40;

                    } else {
                        // Ansonsten nichts zeichnen
                    }
                });
            });


        }