var branchfilter;

/*function filter1()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
    //document.getElementById("hiddenVal").value = branchfilter;
    //document.getElementById("myForm").submit();
      branchfilter = "Zorg";
      jsonToArray(result);
  });
};*/

/*dropDown() to close dropdowncontent when a branch was clicked on*/
function filter2()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
		branchfilter = "ICT";
		jsonToArray(result);
		
		/*if dropdown is show, hide it*/
		checkDropDown();
		
  });
};

function filter3()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
		branchfilter = "Horeca";
		jsonToArray(result);
		
		/*if dropdown is show, hide it*/
		checkDropDown();
  });
};

function filter4()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
      branchfilter = "Agrarische";
    jsonToArray(result);
	
		/*if dropdown is show, hide it*/
		checkDropDown();
  });
};

/*function filter5()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
      branchfilter = "Ambacht";
    jsonToArray(result);
  });
};*/

function filter6()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Beveiliging";
    jsonToArray(result);
		
		/*if dropdown is show, hide it*/
		checkDropDown();
  });
};
function filter7()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Techniek";
    jsonToArray(result);
		
		/*if dropdown is show, hide it*/
		checkDropDown();
  });
};
function filter8()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Bouw";
    jsonToArray(result);
		
		/*if dropdown is show, hide it*/
		checkDropDown();
  });
};
function filter9()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Transport";
    jsonToArray(result);
		
		/*if dropdown is show, hide it*/
		checkDropDown();
  });
};

/*function filter10()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Contactcenters";
    jsonToArray(result);
  });
};*/

function filter11()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Detailhandel";
    jsonToArray(result);
		
		/*if dropdown is show, hide it*/
		checkDropDown();
  });
};
function filter12()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Overige / Uniforme beroepen";
    jsonToArray(result);
		
		/*if dropdown is show, hide it*/
		checkDropDown();
  });
};

function filter13()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Groothandel";
    jsonToArray(result);
		
		/*if dropdown is show, hide it*/
		checkDropDown();
  });
};

function filter14()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Schoonmaak";
    jsonToArray(result);
		
		/*if dropdown is show, hide it*/
		checkDropDown();
  });
};

/*function filter15()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Zakelijke dienstverlening";
    jsonToArray(result);
  });
};*/

function filter16()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Zorg & Welzijn";
    jsonToArray(result);
		
		/*if dropdown is show, hide it*/
		checkDropDown();
  });
};

function filter17()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Secretarieel / administratief";
    jsonToArray(result);
		
		/*if dropdown is show, hide it*/
		checkDropDown();
  });
};

/* Filter all AND onload when app starts*/
function filterFull()
{
    $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
    jsonToFullArrayFilter(result);
	
		/*if dropdown is show, hide it*/
		checkDropDown();
  });
};

function jsonToFullArrayFilter(result)
{
  var array = [];
  for(key in result)
  {
    if(result.hasOwnProperty(key))
    {
      array.push(result[key]);
    }
  }
  appendAllVacancies(array);
};

// Vertaal het JSON object, ontvangen in read, naar een Javascript array.
function jsonToArray(result)
{
  var array = [];
  for(key in result)
  {
    if(result.hasOwnProperty(key))
    {
      array.push(result[key]);
    }
  }
  appendArrayToApp4(array);
};

// Voor iedere vacancyTitle in de Javascript array: maak een nieuw div element aan.
// Filter actief
function appendArrayToApp4(array)
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
		  if(branchfilter === "Zorg" && array[i + 1] === "Zorg")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#ca5695");
			$("#vacancy" + i).prepend("<img class='icon' src='img/zorg.png' alt='icon'/>");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }
		   else if(branchfilter === "Zorg" && array[i + 1] === "zorg")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#ca5695");
			$("#vacancy" + i).prepend("<img class='icon' src='img/zorg.png' alt='icon'/>");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }
		  else if(branchfilter === "ICT" && array[i + 1] === "ICT")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#20d3a7");
			$("#vacancy" + i).prepend("<img class='icon' src='img/ict.png' alt='icon'/>");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }
		  else if(branchfilter === "Horeca" && array[i + 1] === "Horeca")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			 $("#vacancy" + i).css("background-color", "#1b365d");
			$("#vacancy" + i).prepend("<img class='icon' src='img/horeca.png' alt='icon'/>");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }
		  else if(branchfilter === "Agrarische" && array[i + 1] === "Agrarische Sector")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#c7d320");
			$("#vacancy" + i).prepend("<img class='icon' src='img/agrarisch.png' alt='icon' />");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }
		  /*else if(branchfilter === "Ambacht" && array[i + 1] === "Ambacht")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#1b5d24");
			$("#vacancy" + i).prepend("<img id='icon' src='img/ambacht.png' alt='icon'/>");
			
		  }*/
		  else if(branchfilter === "Beveiliging" && array[i + 1] === "Beveiliging en Bewaking")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#3ab0be");
			$("#vacancy" + i).prepend("<img class='icon' src='img/beveiliging.png' alt='icon'/>");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }
		  else if(branchfilter === "Techniek" && array[i + 1] === "Industrie & Techniek")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#0c8ece");
			$("#vacancy" + i).prepend("<img class='icon' src='img/techniek.png' alt='icon'/>");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }
		  else if(branchfilter === "Bouw" && array[i + 1] === "Bouw")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#eb660a");
			$("#vacancy" + i).prepend("<img class='icon' src='img/bouw.png' alt='icon'/>");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }
		  else if(branchfilter === "Transport" && array[i + 1] === "Transport en logistiek")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#e3251a");
			$("#vacancy" + i).prepend("<img class='icon' src='img/transport en logistiek.png' alt='icon'/>");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }
		  else if(branchfilter === "Detailhandel" && array[i + 1] === "Detailhandel")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#ffda05");
			$("#vacancy" + i).prepend("<img class='icon' src='img/detailhandel.png' alt='icon'/>");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }
		  
		  
		  
		   else if(branchfilter === "Secretarieel / administratief" && array[i + 1] === "Secretarieel / administratief")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#4c2577");
			$("#vacancy" + i).prepend("<img class='icon' src='img/contactcenters.png' alt='icon'/>");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }

		  else if(branchfilter === "Schoonmaak" && array[i + 1] === "Schoonmaak")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#1b595d");
			$("#vacancy" + i).prepend("<img class='icon' src='img/schoonmaak.png' alt='icon'/>");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }

		  else if(branchfilter === "Groothandel" && array[i + 1] === "Groothandel")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#1b5d24");
			$("#vacancy" + i).prepend("<img class='icon' src='img/groothandel.png' alt='icon'/>");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }

		  else if(branchfilter === "Zakelijke dienstverlening" && array[i + 1] === "Zakelijke dienstverlening")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#343434");
			$("#vacancy" + i).prepend("<img class='icon' src='img/zakelijke dienstverlening.png' alt='icon'/>");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }

		  else if(branchfilter === "Zorg & Welzijn" && array[i + 1] === "Zorg & Welzijn")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#ca5695");
			$("#vacancy" + i).prepend("<img class='icon' src='img/zorg.png' alt='icon'/>");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }
		  
		  else if(branchfilter === "Overige / Uniforme beroepen" && array[i + 1] === "Overige / Uniforme beroepen")
		  {
			  $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
			$("#vacancy" + i).css("background-color", "#000000");
			$("#vacancy" + i).prepend("<img class='icon' src='img/overig.png' alt='icon'/>");
			$("#vacancy" + i).append("<div id='hiddenid'>" + array[i + 2] + "</div>"); /*vacancy id*/
		  }
		  
		  $("#vacancy" + i).click(function()
		  {
			xMousePoint = event.clientX;
			yMousePoint = event.clientY;
			vacancy = $(document.elementFromPoint(xMousePoint, yMousePoint)).children("#hiddenid").text();
			//alert(vacancy);
			readAll(vacancy); /*instead of title it gives number*/
		  });
	}
  }
};

// Filter alles laten zien AND when app starts
function appendAllVacancies(array)
{
	var vacancy;
	var t;
   
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
      $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>" + array[i] + "</div>");
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
      /*else if(array[i + 1] == "Ambacht")
      {
        $("#vacancy" + i).css("background-color", "#1b5d24");
        $("#vacancy" + i).prepend("<img class='icon' src='img/ambacht.png' alt='icon'/>");
      }*/
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
}