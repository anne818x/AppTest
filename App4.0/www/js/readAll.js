/*Page with details of vacancy*/

// Ontvang alle database gegevens van readAll.php als JSON object.
//vacancy is now a number
function readAll(vacancy)
{
  //readAll3 has more stuff from the database
  $.getJSON("http://uwvwajongstenden.nl/App/readAll3.php", function(result)
  {
    allJsonToArray(vacancy, result);
  });
};

// Vertaal het JSON object, ontvangen in readAll, naar een Javascript array.
//vacancy is now a number
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
  var id;
  var title;
  var branch;
  var description;
  var requirements;
  var maxhours;
  var locations;
  var minhours;
  var extradescription;
  var conditions;
  var oneskill;
  var twoskill;
  var threeskill;
  var fourskill;
  var fiveskill;
  

  for(i = 0; i < array.length; i += 15)
  {
    //if(vacancy == array[i + 1])
	//vacancy is now a number
	if(vacancy == array[i + 0])
    {
      id = array[i + 0];
	  title = array[i + 1];
	  branch = array[i + 2];
	  description = array[i + 3];
      requirements = array[i + 4];
	  maxhours = array[i + 5];
	  locations = array[i + 6];
	  minhours = array[i + 7];
      extradescription = array[i + 8];
	  conditions = array[i + 9];
	  oneskill = array[i + 10];
	  twoskill = array[i + 11];
	  threeskill = array[i + 12];
	  fourskill = array[i + 13];
	  fiveskill = array[i + 14];
	  

      
	  /*
		array_push($arr, $row["Vacaturenummer"] );
          array_push($arr, $row["Vacaturetitel"] );
          array_push($arr, $row["Branche"] );
          array_push($arr, $row["Functieomschrijving"] );
          array_push($arr, $row["Functieeisen"] );
		  array_push($arr, $row["Arbeidstijdmax"] );
		  array_push($arr, $row["Werklocatiespecificatie"] );
		  array_push($arr, $row["Arbeidstijdmin"] );
		  array_push($arr, $row["extrafunctieomschrijving"] );
		  array_push($arr, $row["Toelichtingarbeidsvoorwaarden"] );
		  array_push($arr, $row["Competentie1"] );
		  array_push($arr, $row["Competentie2"] );
		  array_push($arr, $row["Competentie3"] );
		  array_push($arr, $row["Competentie4"] );
		  array_push($arr, $row["Competentie5"] );
	  */
    }
  }

  appendToDetailsPage(id, title, branch, description, requirements, maxhours, locations, minhours, extradescription, conditions, oneskill, twoskill, threeskill, fourskill, fiveskill);
};

// Voeg de specifieke gegevens toe aan het div element "chosenVacancy".
function appendToDetailsPage(id, vacancy, branch, description, requirements, maxhours, locations, minhours, extradescription, conditions, oneskill, twoskill, threeskill, fourskill, fiveskill)
{
  $("#chosenVacancy").empty();
  $("#chosenVacancyAll").empty();
  //$("#chosenVacancy").append("<div id='vacancy' class='vacancy text'><p class='icontextDetails'>" + vacancy + " (" + id + ")</p></div>");
	$("#chosenVacancy").append("<div id='vacancy' class='vacancy text'><p class='icontextDetails'>" + vacancy + "</p></div>");
	$("#vacancy").append("<div id='hiddeniddetails'>" + id + "</div>"); /*vacancy id*/
  
  if(branch == "Zorg")
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
  else if(branch == "Beveiliging en Bewaking")
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
  else if(branch === "Secretarieel / administratief")
      {
        $("#vacancy").css("background-color", "#4c2577");
        $("#vacancy").prepend("<img class='icon' src='img/contactcenters.png' alt='icon'/>");
      }

      else if(branch === "Schoonmaak")
      {
        $("#vacancy").css("background-color", "#1b595d");
        $("#vacancy").prepend("<img class='icon' src='img/schoonmaak.png' alt='icon'/>");
      }

      else if(branch === "Groothandel")
      {
        $("#vacancy").css("background-color", "#1b5d24");
        $("#vacancy").prepend("<img class='icon' src='img/groothandel.png' alt='icon'/>");
      }

      else if(branch === "Zakelijke dienstverlening")
      {
          
        $("#vacancy").css("background-color", "#343434");
        $("#vacancy").prepend("<img class='icon' src='img/zakelijke dienstverlening.png' alt='icon'/>");
      }

      else if(branch === "Zorg & Welzijn")
      {
        $("#vacancy").css("background-color", "#ca5695");
        $("#vacancy").prepend("<img class='icon' src='img/zorg.png' alt='icon'/>");
      }

		 else if(branch === "Overige / Uniforme beroepen")
      {
         
        $("#vacancy").css("background-color", "#000000");
        $("#vacancy").prepend("<img class='icon' src='img/overig.png' alt='icon'/>");
      }
  else if(branch !== "Zorg" ||  branch !== "zorg" || branch !== "ICT" || branch !== "Horeca" || branch !== "Agrarische Sector" || branch !== "Ambacht" || branch !== "Beveiliging" || branch !== "Industrie & Techniek" || branch !== "Bouw" || branch !== "Transport en logistiek" || branch !== "Contactcenters" || branch !== "Detailhandel" || branch !== "Overige / Uniforme beroepen" || branch == "")
      {
       $("#vacancy").css("background-color", "#000000");
        $("#vacancy").prepend("<img class='icon' src='img/overig.png' alt='icon'/>");
      }
	  

//Overige / Uniforme beroepen 
	//id, title, 
	//branch, description, requirements, maxhours, locations, minhours, extradescription, conditions, oneskill, twoskill, threeskill, fourskill, fiveskill)
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Branch:</u></h4><p id='infoText'>" + branch + " </p></div>");
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Werk locatie</u></h4><p id='infoText'>" + locations + " </p id='infoText'></div>");
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Omschrijving Werkzaamheden:</u></h4><p id='infoText'> " + description + "\n" + extradescription + "</p></div>");
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Eisen:</u></h4><p id='infoText'>" + requirements + " </p></div>");
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Uren per week:</u></h4><p id='infoText'>" + minhours + " - " + maxhours + " </p id='infoText'></div>");
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Toelichting arbeidsvoorwaarden:</u></h4><p id='infoText'>" + conditions + " </p id='infoText'></div>");
  $("#chosenVacancyAll").append("<div class='text'><h4><u>Competenties:</u></h4><p id='infoText'> " + oneskill + "\n" + twoskill + "\n" + threeskill + "\n" + fourskill + "\n" + fiveskill + "</p></div>");
  

  switchToChosenVacancy();
};
