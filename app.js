

// 1) Kérdezz rá a „totalDistanceToTravel” értékére, és mentsd el a választ egy változóba.
var totalDistanceToTravel = prompt('Hány kilométer távolságot kíván megtenni? Adjon meg egy számot!');

// 2) Kérdezz rá az „averageLitersOverHundred” értékére, és mentsd el a választ egy változóba.
var averageLitersOverHundred = prompt('Mi az űrhajó átlagos fogyasztása literben? Adjon meg egy számot!');

// 3) Kérdezz rá a „tankCapacity” értékére, és mentsd el a választ egy változóba.
var tankCapacity = prompt('Mi az űrhajó üzemanyagtartályának űrtartalma literben? Adjon meg egy számot!');

// 4) Végezd el a számítást (hívd meg a „calculateFuelToOffload” függvényt).
function calculateFuelToOffload() {
    // Számítsd ki a szükséges üzemanyag-mennyiséget
    var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
  
    // Számítsd ki a leeresztendő üzemanyag-mennyiséget
    var fuelToOffload = tankCapacity - requiredFuel;
  
    alert('Az utazáshoz szükséges üzemanyag-mennyiség: ' + requiredFuel + ' L\n' + 'Leadandó üzemanyag-mennyiség: ' + fuelToOffload + ' L');
}

calculateFuelToOffload();

// 5) Írd ki az eredményt a felhasználónak.