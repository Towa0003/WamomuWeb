// Bei einem Klick auf einen Tag in einem Monat, werden die Daten der Mahlzeiten und Messwerte im content angezeigt, 
// der Graph für den jeweiligen Monat wird gezeichnet und die Messpunkte bzw. Striche der Mahlzeiten werden dargestellt 
function buttonClick(date) {
           $('ul').empty();
           $.getJSON('/Wamomuweb/wamomu/php/meals_details.php', function (data) {
               $.each(data, function (key, val) {
                   if (val.date == date) {
                       $('#contentOverviewUl').append('<li id="' + key + '">' + (val.time).substring(0, 5) + ' Uhr - ' + val.mealkind + ' : ' + val.meal + ' </li>');
                   }
               });
           });
           $.getJSON('/Wamomuweb/wamomu/php/measurements_details.php', function (data) {
               $.each(data, function (key, val) {
                   if (val.date == date) {
                       console.log(val.mvalue);
                       $('#contentOverviewUl').append('<li id="' + key + '">' + (val.time).substring(0, 5) + ' Uhr    -    Messwert : ' + val.mvalue + ' mg/dl  </li>');
                   }
               });
               mealStroke(date.substring(8, 10), date.substring(5, 7), userid);
               drawGraph(date.substring(8, 10), date.substring(5, 7), userid);
           });
       }