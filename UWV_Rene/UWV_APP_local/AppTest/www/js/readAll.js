// Ontvang alle database gegevens van readAll.php als JSON object.
function readAll(vacancy)
{
  $.getJSON("http://uwvwajongstenden.nl/App/readAll.php", function(result)
  {
    allJsonToArray(vacancy, result);
  });
};

// Vertaal het JSON object, ontvangen in readAll, naar een Javascript array.
function allJsonToArray(vacancy, result)
{
  var array = [];
  for(key in result)
  {
    if(result.hasOwnProperty(key))
    {
      array.push(result[key]);
    }
  }
  getDetailsFromArray(vacancy, array);
}

// Filter de array op gegevens van de specifieke vacature.
function getDetailsFromArray(vacancy, array)
{
  var description;
  var requirements;
  var hours;
  var branch;

  for(i = 0; i < array.length; i++)
  {
    if(vacancy == array[i])
    {
      description = array[i + 2];
      requirements = array[i + 3];
      hours = array[i + 4];
      branch = array[i + 1];
    }
  }
  appendToDetailsPage(vacancy, description, requirements, hours, branch);
};

// Voeg de specifieke gegevens toe aan het div element "chosenVacancy".
function appendToDetailsPage(vacancy, description, requirements, hours, branch)
{
    

  $("#chosenVacancy").empty();
  $("#chosenVacancy").append("<div id='vacancy' class='vacancy text'>"+ vacancy + "</div>");

  if(branch == "Zorg")
  {
    $("#vacancy").css("background-color", "#c7d320");
    $("#vacancy").prepend("<img class='icon2' src='img/Icons-03.png' alt='icon'/>");
  }
  if(branch == "zorg")
  {
    $("#vacancy").css("background-color", "#c7d320");
    $("#vacancy").prepend("<img class='icon2' src='img/Icons-03.png' alt='icon'/>");
  }
  else if(branch == "ICT")
  {
    $("#vacancy").css("background-color", "#1b365d");
    $("#vacancy").prepend("<img class='icon2' src='img/Icons-01.png' alt='icon'/>");
  }
  else if(branch == "Horeca")
  {
    $("#vacancy").css("background-color", "#eb660a");
    $("#vacancy").prepend("<img class='icon2' src='img/Icons-02.png' alt='icon'/>");
  }
  else if(branch == "Agrarische Sector")
  {
    $("#vacancy").css("background-color", "#e3251a");
    $("#vacancy").prepend("<img class='icon2' src='img/Icons-03.png' alt='icon'/>");
  }
  else if(branch == "Ambacht")
  {
    $("#vacancy").css("background-color", "#0c8ece");
    $("#vacancy").prepend("<img class='icon2' src='img/Icons-04.png' alt='icon'/>");
  }
  else if(branch == "Beveiliging")
  {
    $("#vacancy").css("background-color", "#ffda05");
    $("#vacancy").prepend("<img class='icon2' src='img/Icons-05.png' alt='icon'/>");
  }
  else if(branch == "Industrie & Techniek")
  {
    $("#vacancy").css("background-color", "#ffda05");
    $("#vacancy").prepend("<img class='icon2' src='img/Icons-05.png' alt='icon'/>");
  }
  else if(branch == "Bouw")
  {
    $("#vacancy").css("background-color", "#ffda05");
    $("#vacancy").prepend("<img class='icon2' src='img/Icons-05.png' alt='icon'/>");
  }
  else if(branch == "Transport en logistiek")
  {
    $("#vacancy").css("background-color", "#ffda05");
    $("#vacancy").prepend("<img class='icon2' src='img/Icons-05.png' alt='icon'/>");
  }
  else if(branch == "Detailhandel")
  {
    $("#vacancy").css("background-color", "#ffda05");
    $("#vacancy").prepend("<img class='icon2' src='img/Icons-05.png' alt='icon'/>");
  }
  else if(branch == "Contactcenters")
  {
    $("#vacancy").css("background-color", "#ffda05");
    $("#vacancy").prepend("<img class='icon2' src='img/Icons-05.png' alt='icon'/>");
  }

  $("#chosenVacancy").append("<div class='text'><h4><u>Branch:</u></h4><p id='infoText'>" + branch + "</p></div>");
  $("#chosenVacancy").append("<div class='text'><h4><u>Aantal Uren Per Week:</u></h4><p id='infoText'>" + hours + "</p id='infoText'></div>");
  $("#chosenVacancy").append("<div class='text'><h4><u>Omschrijving Werkzaamheden:</u></h4><p id='infoText'>" + description + "</p></div>");
  $("#chosenVacancy").append("<div class='text'><h4><u>Eisen:</u></h4><p id='infoText'>" + requirements + "</p></div>");


  switchToChosenVacancy();
};
