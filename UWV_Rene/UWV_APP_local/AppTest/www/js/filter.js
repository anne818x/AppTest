var number;

function filter1()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
      number = 1;
    jsonToArray(result);
  });
};

function filter2()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
      number = 2;
    jsonToArray(result);
  });
};

function filter3()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
      number = 3;
    jsonToArray(result);
  });
};

function filter4()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
      number = 4;
    jsonToArray(result);
  });
};

function filter5()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
      number = 5;
    jsonToArray(result);
  });
};

function filter6()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
      number = 6;
    jsonToArray(result);
  });
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
function appendArrayToApp4(array)
{
  $("#allVacancies").empty();
    showDialogScreen();
  $("#internal-popup").hide();
    

  for(i = 0; i < array.length; i++)
  {
      if(number === 1 && array[i + 1] === "1")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#c7d320");
        $("#vacancy" + i).prepend("<img class='icon' src='img/Icons-06.png' alt='icon'/>");
      }
      else if(number === 2 && array[i + 1] === "2")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#1b365d");
        $("#vacancy" + i).prepend("<img class='icon' src='img/Icons-01.png' alt='icon'/>");
      }
      else if(number === 3 && array[i + 1] == "3")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#eb660a");
        $("#vacancy" + i).prepend("<img class='icon' src='img/Icons-02.png' alt='icon'/>");
      }
      else if(number === 4 && array[i + 1] == "4")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#e3251a");
        $("#vacancy" + i).prepend("<img class='icon' src='img/Icons-03.png' alt='icon'/>");
      }
      else if(number === 5 && array[i + 1] == "5")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#0c8ece");
        $("#vacancy" + i).prepend("<img class='icon' src='img/Icons-04.png' alt='icon'/>");
      }
      else if(number === 6 && array[i + 1] == "6")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#ffda05");
        $("#vacancy" + i).prepend("<img class='icon' src='img/Icons-05.png' alt='icon'/>");
      }
  

      $("#vacancy" + i).click(function()
      {
        xMousePoint = event.clientX;
        yMousePoint = event.clientY;
        vacancy = $(document.elementFromPoint(xMousePoint, yMousePoint)).text();
        readAll(vacancy);
      });
    
  }
};
