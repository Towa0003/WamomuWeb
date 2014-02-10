 var meals = new Array();
 var mealsdate = new Array();
 var mealstime = new Array();
 var measurements = [];
 var measurementsdate = new Array();
 var measurementstime = new Array();
 var users = [];
 var userid = 0;
 var username;
 var cookie;

 function start() {
     console.log("ready!");
     cookie = document.cookie;
     username = cookie.substring(7, cookie.size)
     getuserid(username);
     console.log("username" + username)
     $.getJSON('/Wamomuweb/wamomu/php/meals_details.php', function (data) {
         /* data will hold the php array as a javascript object */
         var oldTag = 0;
         var oldMonat = 0;
         var oldJahr = 0;
         var tag = 0;
         var monat = 0;
         var jahr = 0;

         $.each(data, function (key, val) {
             //console.log(tag + "  " + monat + "  " + jahr)
             if (val.users_id == userid) {
                 tag = (val.date).substring(8, 10);
                 monat = (val.date).substring(5, 7);
                 jahr = (val.date).substring(0, 4);
                 console.log("UserID. " + userid + " exists!");
                 if (oldTag == tag && oldMonat == monat && oldJahr == jahr) {
                     //console.log("Date exists!");
                 } else if (monat == "01") {
                     //console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                     $('div[id=Januar]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                 } else if (monat == "02") {
                     //console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                     $('div[id=Februar]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                 } else if (monat == "03") {
                     //console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                     $('div[id=März]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                 } else if (monat == "04") {
                     //console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                     $('div[id=April]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                 } else if (monat == "05") {
                     //console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                     $('div[id=Mai]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                 } else if (monat == "06") {
                     //console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                     $('div[id=Juni]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                 } else if (monat == "07") {
                     //console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                     $('div[id=Juli]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                 } else if (monat == "08") {
                     //console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                     $('div[id=August]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                 } else if (monat == "09") {
                     //console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                     $('div[id=September]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                 } else if (monat == "10") {
                     //console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                     $('div[id=Oktober]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                 } else if (monat == "11") {
                     //console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                     $('div[id=November]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                 } else if (monat == "12") {
                     // console.log(val.date + " substring " + tag + " - " + monat + " - " + jahr);
                     $('div[id=Dezember]').append('<button onclick="buttonClick(' + "'" + val.date + "'" + ');">' + tag + '.</button>');
                 }
             }
             oldTag = tag;
             oldMonat = monat;
             oldJahr = jahr;
         });
         console.log("LETZTER TAG " + oldTag);
         //            Date-Objekt um die Messwerte des aktuellen Monats anzuzeigen
         var d = oldTag
         var m = oldMonat;
         drawGraph(d, m, userid);
         initializemeals();
         drawGraph(d, m, userid);
     });

 }

 function getuserid(user) {
     console.log("getuserid from " + user);
     $.getJSON('/Wamomuweb/wamomu/php/users_details.php', function (data) {
         /* data will hold the php array as a javascript object */
         $.each(data, function (key, val) {
             console.log(val.user + " == " + user + " USERID " + val.id);
             if (val.user == user) {
                 userid = val.id;
                 console.log("userid " + userid);
                 //setuserid(userid);

             }
         });
         console.log("userid" + userid);
     });
     console.log("userid" + userid); //geht nicht mehr

 }

 function setuserid(id) {
     console.log("id " + id)
     userid = id;
 }



 function initializemeals() {
     console.log("initializemeals");
     $.getJSON('/Wamomuweb/wamomu/php/meals_details.php', function (data) {
         /* data will hold the php array as a javascript object */
         $.each(data, function (key, val) {
             mealstime.push(val.time);
             mealsdate.push(val.date);

         });
         console.log(mealstime[1]); //geht noch
     });
     console.log(mealstime[1]); //geht nicht mehr
     checkWithMeasurement("01.01.01");
 }

 function checkWithMeasurement(mealdate) {
     $.getJSON('/Wamomuweb/wamomu/php/measurements_details.php', function (data) {
         /* data will hold the php array as a javascript object */
         $.each(data, function (key, val) {
             measurementstime.push(val.time);
             measurementstime.push(val.date);
         });

         $.each(measurementstime, function (key, val) {
             // if()
         });
         console.log(mealstime[1]); //geht noch
     });
 }