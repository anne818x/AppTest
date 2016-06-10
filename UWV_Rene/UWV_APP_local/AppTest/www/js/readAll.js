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
  var minhours;
  var maxhours;
  var branch;
  var locations;

  for(i = 0; i < array.length; i += 8)
  {
    if(vacancy == array[i + 1])
    {
      description = array[i + 3];
      requirements = array[i + 4];
	  minhours = array[i + 7];
      maxhours = array[i + 5];
      branch = array[i + 2];
	  locations = array[i + 6];
    }
  }
  
  appendToDetailsPage(vacancy, description, requirements, maxhours, minhours, branch, locations);
};

// Voeg de specifieke gegevens toe aan het div element "chosenVacancy".
function appendToDetailsPage(vacancy, description, requirements, maxhours, minhours, branch, locations)
{
  $("#chosenVacancy").empty();
  $("#chosenVacancyAll").empty();
  //$("#chosenVacancy").append("<div id='vacancy' class='vacancy text'>"+ vacancy + "</div>");
  //details-scherm balk met icon + titel
  $("#chosenVacancy").append("<div id='vacancy' class='vacancy text'>"+ vacancy + " (" + id + ")</div>");
  $("#chosenVacancy").append("<div id='hiddenid'>" + id + "</div>");
 
	branch = branch.toLowerCase();
 
  /*if(branch == "Zorg")
  {
    $("#vacancy").css("background-color", "#ca5695");
        $("#vacancy").prepend("<img class='icon' src='img/zorg.png' alt='icon'/>");
  }
  else if(branch == "zorg")
  {
    $("#vacancy").css("background-color", "#ca5695");
        $("#vacancy").prepend("<img class='icon' src='img/zorg.png' alt='icon'/>");
  }
  else if(branch == "ICT")
  {
    $("#vacancy").css("background-color", "#20d3a7");
        $("#vacancy").prepend("<img class='icon' src='img/ict.png' alt='icon'/>");
  }
  else if(branch == "Horeca")
  {
     $("#vacancy").css("background-color", "#1b365d");
        $("#vacancy").prepend("<img class='icon' src='img/horeca.png' alt='icon'/>");
  }
  else if(branch == "Agrarische Sector")
  {
     $("#vacancy").css("background-color", "#c7d320");
        $("#vacancy").prepend("<img class='icon' src='img/agrarisch.png' alt='icon'/>");
  }
  else if(branch == "Ambacht")
  {
    $("#vacancy").css("background-color", "#1b5d24");
        $("#vacancy" ).prepend("<img class='icon' src='img/ambacht.png' alt='icon'/>");
  }
  else if(branch == "Beveiliging")
  {
    $("#vacancy" ).css("background-color", "#3ab0be");
        $("#vacancy" ).prepend("<img class='icon' src='img/beveiliging.png' alt='icon'/>");
  }
  else if(branch == "Industrie & Techniek")
  {
    $("#vacancy").css("background-color", "#0c8ece");
        $("#vacancy").prepend("<img class='icon' src='img/techniek.png' alt='icon'/>");
  }
  else if(branch == "Bouw")
  {
    $("#vacancy").css("background-color", "#eb660a");
        $("#vacancy").prepend("<img class='icon' src='img/bouw.png' alt='icon'/>");
  }
  else if(branch == "Transport en logistiek")
  {
    $("#vacancy").css("background-color", "#e3251a");
        $("#vacancy").prepend("<img class='icon' src='img/transport en logistiek.png' alt='icon'/>");
  }
  else if(branch == "Detailhandel")
  {
    $("#vacancy").css("background-color", "#ffda05");
        $("#vacancy").prepend("<img class='icon' src='img/detailhandel.png' alt='icon'/>");
  }
  else if(branch == "Contactcenters")
  {
    $("#vacancy").css("background-color", "#4c2577");
        $("#vacancy").prepend("<img class='icon' src='img/contactcenters.png' alt='icon'/>");
  }
  else if(branch == "Overige / Uniforme beroepen")
  {
    $("#vacancy").css("background-color", "#000000");
        $("#vacancy").prepend("<img class='icon' src='img/overig.png' alt='icon'/>");
  }
  else if(branch !== "Zorg" ||  branch !== "zorg" || branch !== "ICT" || branch !== "Horeca" || branch !== "Agrarische Sector" || branch !== "Ambacht" || branch !== "Beveiliging" || branch !== "Industrie & Techniek" || branch !== "Bouw" || branch !== "Transport en logistiek" || branch !== "Contactcenters" || branch !== "Detailhandel" || branch !== "Overige / Uniforme beroepen" || branch == "")
      {
       $("#vacancy").css("background-color", "#000000");
        $("#vacancy").prepend("<img class='icon' src='img/overig.png' alt='icon'/>");
      }*/
	  if(branch.indexOf('test') > -1)
  {
    $("#vacancy").css("background-color", "#ca5695");
        $("#vacancy").prepend("<img class='icon' src='img/zorg & welzijn.png' alt='icon'/>");
  }
  else if(branch.indexOf('zorg') > -1)
  {
    $("#vacancy").css("background-color", "#ca5695");
        $("#vacancy").prepend("<img class='icon' src='img/zorg & welzijn.png' alt='icon'/>");
  }
  else if(branch.indexOf('ict') > -1)
  {
    $("#vacancy").css("background-color", "#20d3a7");
        $("#vacancy").prepend("<img class='icon' src='img/ict.png' alt='icon'/>");
  }
  else if(branch.indexOf('horeca') > -1)
  {
     $("#vacancy").css("background-color", "#1b365d");
        $("#vacancy").prepend("<img class='icon' src='img/horeca.png' alt='icon'/>");
  }
  else if(branch.indexOf('sector') > -1)
  {
     $("#vacancy").css("background-color", "#c7d320");
        $("#vacancy").prepend("<img class='icon' src='img/agrarisch.png' alt='icon'/>");
  }
  else if (branch.indexOf('schoon') > -1)
  {
	  $("#vacancy").css("background-color", "#1b595d");
        $("#vacancy").prepend("<img class='icon' src='img/schoonmaak.png' alt='icon'/>");
  } 
  else if(branch.indexOf('groot') > -1)
  {
    $("#vacancy").css("background-color", "#1b5d24");
        $("#vacancy" ).prepend("<img class='icon' src='img/groothandel.png' alt='icon'/>");
  }
  else if(branch.indexOf('veil') > -1)
  {
    $("#vacancy" ).css("background-color", "#3ab0be");
        $("#vacancy" ).prepend("<img class='icon' src='img/beveiliging.png' alt='icon'/>");
  }
  else if(branch.indexOf('techniek') > -1)
  {
    $("#vacancy").css("background-color", "#0c8ece");
        $("#vacancy").prepend("<img class='icon' src='img/techniek.png' alt='icon'/>");
  }
  else if(branch.indexOf('bouw') > -1)
  {
    $("#vacancy").css("background-color", "#eb660a");
        $("#vacancy").prepend("<img class='icon' src='img/bouw.png' alt='icon'/>");
  }
  else if(branch.indexOf('logistiek') > -1)
  {
    $("#vacancy").css("background-color", "#e3251a");
        $("#vacancy").prepend("<img class='icon' src='img/transport en logistiek.png' alt='icon'/>");
  }
  else if(branch.indexOf('detail') > -1)
  {
    $("#vacancy").css("background-color", "#ffda05");
        $("#vacancy").prepend("<img class='icon' src='img/detailhandel.png' alt='icon'/>");
  }
  else if(branch.indexOf('tief') > -1)
  {
    $("#vacancy").css("background-color", "#4c2577");
        $("#vacancy").prepend("<img class='icon' src='img/contactcenters.png' alt='icon'/>");
  }
  else if(branch.indexOf('zakelijk') > -1)
  {
    $("#vacancy").css("background-color", "#343434");
        $("#vacancy").prepend("<img class='icon' src='img/zakelijke dienstverlening.png' alt='icon'/>");
  }
  else if(branch.indexOf('overig') > -1)
  {
    $("#vacancy").css("background-color", "#000000");
        $("#vacancy").prepend("<img class='icon' src='img/overig.png' alt='icon'/>");
  }
  //else if(branch !== "Zorg" ||  branch !== "zorg" || branch !== "ICT" || branch !== "Horeca" || branch !== "Agrarische Sector" || branch !== "Ambacht" || branch !== "Beveiliging" || branch !== "Industrie & Techniek" || branch !== "Bouw" || branch !== "Transport en logistiek" || branch !== "Contactcenters" || branch !== "Detailhandel" || branch !== "Overige / Uniforme beroepen" || branch == "")
  else
	  {
       $("#vacancy").css("background-color", "#000000");
        $("#vacancy").prepend("<img class='icon' src='img/overig.png' alt='icon'/>");
      }
	  

//Overige / Uniforme beroepen
  /*$("#chosenVacancyAll").append("<div class='text'><h4><u>Branch:</u></h4><p id='infoText'>" + branch + " </p></div>");
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Werk locatie</u></h4><p id='infoText'>" + locations + " </p id='infoText'></div>");
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Minimum uren per week:</u></h4><p id='infoText'>" + minhours + " </p id='infoText'></div>");
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Maximum uren per week:</u></h4><p id='infoText'>" + maxhours + " </p id='infoText'></div>");
<<<<<<< HEAD
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Omschrijving Werkzaamheden:</u></h4><p id='infoText'>" + description + "\n </p></div>");
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Eisen:</u></h4><p id='infoText'>" + requirements + "\n </p></div>");*/
=======
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Omschrijving Werkzaamheden:</u></h4><p id='infoText'> " + description + "</p></div>");
  $("#chosenVacancyAll").append("<div class='text'><p id='infoText'> </p></div>");
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Eisen:</u></h4><p id='infoText'>" + requirements + " </p></div>");
>>>>>>> origin/master
  
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Branch:</u></h4><p id='infoText'>" + branch + " </p></div>");
  //$("#chosenVacancyAll").append("<div class='text'><h4><u>Maximum uren per week:</u></h4><p id='infoText'>" + maxhours + " </p id='infoText'></div>");
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Omschrijving Werkzaamheden:</u></h4><p id='infoText'> " + description + "</p></div>");
  //$("#chosenVacancyAll").append("<div class='text'><p id='infoText'> </p></div>");
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Eisen:</u></h4><p id='infoText'>" + requirements + " </p></div>");
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Uren per week:</u></h4><p id='infoText'>" + minhours + " - " + maxhours + " </p id='infoText'></div>");
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Werk locatie</u></h4><p id='infoText'>" + locations + " </p id='infoText'></div>");
  

  switchToChosenVacancy();
};
