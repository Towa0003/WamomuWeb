        // Horizontale Rasterlinien für den Canvas werden gezeichnet
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
        // Graphische Anzeige der Messwerte und darstellung dieser Messwerte als Punkte und anzeige des Datums und der Uhrzeit
        // Der aktuell ausgewählte Messwert wird Graphisch hervorgehoben
        function drawGraph(day, month, uid) {
            console.log("ONCLICK: " + day + ". " + month + " USER: " + uid);
            var start = true;
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.font = "10px sans-serif";
            var i = 10;
            grid();

            $.getJSON('/Wamomuweb/wamomu/php/measurements_details.php', function (data) {
                /* data will hold the php array as a javascript object */
                ctx.strokeStyle = '#2B7CB3'
                ctx.beginPath();
                $.each(data, function (key, val) {
                    if (val.users_id == uid) {
                        // Wenn der übergebene Monat dem der Werte aus der Datenbank entspricht -> Linien zeichnen
                        if (month == (val.date).substring(5, 7)) {
                            var tag = (val.date).substring(8, 10);
                            var temp = Math.round(val.mvalue);

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
                    }
                });
                ctx.stroke();
                ctx.closePath();

                // Punkte an den Messwerten zeichnen
                i = 10;
                $.each(data, function (key, val) {
                    if (val.users_id == uid) {
                        // Wenn der übergebene Monat dem der Werte aus der Datenbank entspricht -> Punkte an Messwert zeichnen
                        if (month == (val.date).substring(5, 7)) {
                            var temp = Math.round(val.mvalue);
                            // Angeklickter Tag wird hervorgehoben
                            if (day == (val.date).substring(8, 10)) {
                                ctx.fillStyle = "#F99224"; // Füllung Kreis
                                ctx.strokeStyle = '#000000'; // Kontur Kreis
                                ctx.beginPath();
                                ctx.arc(i, 250 - (temp * 2), 8, 2 * Math.PI, false);
                                ctx.closePath();

                            }
                            // Ansonsten andere Tage werden normal dargestellt
                            else {
                                ctx.fillStyle = "#A1D9FF"; // Füllung Kreis
                                ctx.strokeStyle = '#2B7CB3'; // Kontur Kreis
                                ctx.beginPath();
                                ctx.arc(i, 250 - (temp * 2), 6, 2 * Math.PI, false);
                                ctx.closePath();
                            }
                            ctx.fill();
                            ctx.lineWidth = 1.5;
                            ctx.stroke();
                            i += 40;

                        } else {
                            // Ansonsten nichts zeichnen
                        }
                    }
                });
            });

        }
// Die Mahlzeiten zwischen den Messwerten, werden durch einen Strich gekennzeichnet und die Uhrzeit wird hingeschrieben
        function mealStroke(day, month, uid) {

            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.font = "10px sans-serif";
            var i = 10;

            $.getJSON('/Wamomuweb/wamomu/php/meals_details.php', function (data) {
                /* data will hold the php array as a javascript object */
                ctx.strokeStyle = '#FF8400'
                $.each(data, function (key, val) {
                    if (val.users_id == uid) {
                        // Wenn der übergebene Monat dem der Werte aus der Datenbank entspricht -> Linien zeichnen
                        if (month == (val.date).substring(5, 7)) {
                            if (day == (val.date).substring(8, 10)) {
                                // Linien zur Mahlzeit zeichnen
                                ctx.beginPath();
                                ctx.moveTo(i + 20, 0);
                                ctx.lineTo(i + 20, 180);
                                ctx.closePath();

                                // Tag und Uhrzeit an Messwert schreiben
                                ctx.fillStyle = "#FF8400";
                                ctx.fillText((val.meal).substring(0, 45), i+22, 168);
                                ctx.fillText((val.time).substring(0, 5), i +22, 178);

                                ctx.lineWidth = 2.5;
                                ctx.closePath();
                                ctx.stroke();
                            } else {
                                // Ansonsten nichts zeichnen
                            }
                            i += 80;
                        }
                    }
                });
            });
        }