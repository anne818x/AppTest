/*Refresh function uses this one*/

// Ontvang vacancyTitle en categoryID, van read.php als JSON object.
/*function read()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
    jsonToArray(result);
  });
};*/

/* Show all when app refreshes*/
function read()
{
    $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
    jsonToFullArrayRefresh(result);
	
		/*if dropdown is show, hide it*/
		checkDropDown();
  });
};

function jsonToFullArrayRefresh(result)
{
  var array = [];
  for(key in result)
  {
    if(result.hasOwnProperty(key))
    {
      array.push(result[key]);
    }
  }
  appendArrayToApp(array);
};



// Vertaal het JSON object, ontvangen in read, naar een Javascript array.
/*function jsonToArray(result)
{
  var array = [];
  for(key in result)
  {
    if(result.hasOwnProperty(key))
    {
      array.push(result[key]);
    }
  }
  appendArrayToApp(array);
};*/

// Voor iedere vacancyTitle in de Javascript array: maak een nieuw div element aan.
//Na refresh laat hele lijst weer zien
function appendArrayToApp(array)
{
    var vacancy;
	
	$("#allVacancies").empty();
  $("#footerLine").empty();
    
    showDialogScreen();
      $("#footerLine").append("<div id='footer'></div>");

  $("#footer").append("<div id='email'><input id='inputEmail' class='input' onclick='removeValue(this.id);' type='email' value='Jouw emailadres'></input></div>");
  $("#footer").append("<div id='phone'><input id='inputPhone' class='input' onclick='removeValue(this.id);' type='tel' value='Jouw telefoonnummer'></input></div>");
  $("#footer").append("<div id='reactButton'><img onclick='checkCorrectInput();' src='img/react.png' alt='react'/></div>");
    $("#footerLine").hide();
    $("#chosenVacancy").hide();
    
    $("#filterbox").show();
    $("#internal-popup").hide();
	
  for(i = 0; i < array.length; i++)
  {
    if(i % 3 == 0)
    {
      $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'><div class='icontext'>"+ array[i] + "</div></div>");
	  $("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/

      if(array[i + 1] == "Zorg")
      {
        $("#vacancy" + i).css("background-color", "#ca5695");
        $("#vacancy" + i).prepend("<img class='icon' src='img/zorg.png' alt='icon'/>");
      }
      else if(array[i + 1] == "zorg")
      {
        $("#vacancy" + i).css("background-color", "#ca5695");
        $("#vacancy" + i).prepend("<img class='icon' src='img/zorg.png' alt='icon'/>");
      }
      else if(array[i + 1] == "ICT")
      {
        $("#vacancy" + i).css("background-color", "#20d3a7");
        $("#vacancy" + i).prepend("<img class='icon' src='img/ict.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Horeca")
      {
        $("#vacancy" + i).css("background-color", "#1b365d");
        $("#vacancy" + i).prepend("<img class='icon' src='img/horeca.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Agrarische Sector")
      {
        $("#vacancy" + i).css("background-color", "#c7d320");
        $("#vacancy" + i).prepend("<img class='icon' src='img/agrarisch.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Ambacht")
      {
        $("#vacancy" + i).css("background-color", "#1b5d24");
        $("#vacancy" + i).prepend("<img class='icon' src='img/ambacht.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Beveiliging en Bewaking")
      {
        $("#vacancy" + i).css("background-color", "#3ab0be");
        $("#vacancy" + i).prepend("<img class='icon' src='img/beveiliging.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Industrie & Techniek")
      {
        $("#vacancy" + i).css("background-color", "#0c8ece");
        $("#vacancy" + i).prepend("<img class='icon' src='img/techniek.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Bouw")
      {
        $("#vacancy" + i).css("background-color", "#eb660a");
        $("#vacancy" + i).prepend("<img class='icon' src='img/bouw.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Transport en logistiek")
      {
        $("#vacancy" + i).css("background-color", "#e3251a");
        $("#vacancy" + i).prepend("<img class='icon' src='img/transport en logistiek.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Contactcenters")
      {
        $("#vacancy" + i).css("background-color", "#4c2577");
        $("#vacancy" + i).prepend("<img class='icon' src='img/contactcenters.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Detailhandel")
      {
        $("#vacancy" + i).css("background-color", "#ffda05");
        $("#vacancy" + i).prepend("<img class='icon' src='img/detailhandel.png' alt='icon'/>");
      }
	    else if(array[i + 1] == "Overige / Uniforme beroepen")
      {
        $("#vacancy" + i).css("background-color", "#000000");
        $("#vacancy" + i).prepend("<img class='icon' src='img/overig.png' alt='icon'/>");
      }
	  
	  else if(array[i + 1] == "Secretarieel / administratief")
      {
        $("#vacancy" + i).css("background-color", "#4c2577");
        $("#vacancy" + i).prepend("<img class='icon' src='img/contactcenters.png' alt='icon'/>");
      }

      else if(array[i + 1] == "Schoonmaak")
      {
        $("#vacancy" + i).css("background-color", "#1b595d");
        $("#vacancy" + i).prepend("<img class='icon' src='img/schoonmaak.png' alt='icon'/>");
      }

      else if(array[i + 1] == "Groothandel")
      {
        $("#vacancy" + i).css("background-color", "#1b5d24");
        $("#vacancy" + i).prepend("<img class='icon' src='img/groothandel.png' alt='icon'/>");
      }

      else if(array[i + 1] == "Zakelijke dienstverlening")
      {
          
        $("#vacancy" + i).css("background-color", "#343434");
        $("#vacancy" + i).prepend("<img class='icon' src='img/zakelijke dienstverlening.png' alt='icon'/>");
      }

      else if(array[i + 1] == "Zorg & Welzijn")
      {
         $("#vacancy" + i).css("background-color", "#ca5695");
        $("#vacancy" + i).prepend("<img class='icon' src='img/zorg.png' alt='icon'/>");
      }
	  
	  //Overige / Uniforme beroepen
       else if(array[i + 1] !== "Zorg" ||  array[i + 1] !== "zorg" || array[i + 1] !== "ICT" || array[i + 1] !== "Horeca" || array[i + 1] !== "Agrarische Sector" || array[i + 1] !== "Ambacht" || array[i + 1] !== "Beveiliging" || array[i + 1] !== "Industrie & Techniek" || array[i + 1] !== "Bouw" || array[i + 1] !== "Transport en logistiek" || array[i + 1] !== "Contactcenters" || array[i + 1] !== "Detailhandel" || array[i + 1] !== "Overige / Uniforme beroepen")
      {
        $("#vacancy" + i).css("background-color", "#000000");
        $("#vacancy" + i).prepend("<img class='icon' src='img/overig.png' alt='icon'/>");
      }

      $("#vacancy" + i).click(function()
      {
        xMousePoint = event.clientX;
        yMousePoint = event.clientY;
        //vacancy = $(document.elementFromPoint(xMousePoint, yMousePoint)).text();
		vacancy = $(document.elementFromPoint(xMousePoint, yMousePoint)).children("#hiddenid").text();
		//alert(vacancy);
		readAll(vacancy); /*instead of title it gives number*/
      });
    }
  }
};
