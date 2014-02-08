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