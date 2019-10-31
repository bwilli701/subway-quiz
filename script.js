/*
 Author: Brandon Williams
 Description:
    A quiz that allows the user to select a line / direction on the Vienna
    subway, then enter the stations on that line from the starting station
    to the ending station.
  To do:
    1. Fix major bug; any click event causes all entered data to disappear.
    2. Eventually need to create a database so that station info doesn't
       have to be stored in arrays.
    3. This functionality can then be abstracted out so that user has
       a choice of selecting subway networks from other cities.
*/

"use strict";

var stationCounter = 0;
var reversed = false;
var visible = false;
var line;
var changedText = "";

var u1 = [
  "Oberlaa",
  "Neulaa",
  "Alaudagasse",
  "Altes Landgut",
  "Troststra&szlig;e",
  "Reumannplatz",
  "Keplerplatz",
  "Hauptbahnhof",
  "Taubstummengasse",
  "Karlsplatz",
  "Stephansplatz",
  "Schwedenplatz",
  "Nestroyplatz",
  "Praterstern",
  "Vorgartenstra&szlig;e",
  "Donauinsel",
  "Kaiserm&uuml;hlen",
  "Alte Donau",
  "Kagran",
  "Kagraner Platz",
  "Rennbahnweg",
  "Aderklaaer Stra&szlig;e",
  "Gro&szlig;feldsiedlung",
  "Leopoldau"
];

var u2 = [
  "Karlsplatz",
  "Museums-quartier",
  "Volkstheater",
  "Rathaus",
  "Schottentor",
  "Schottenring",
  "Taborstra&szlig;e",
  "Praterstern",
  "Messe-Prater",
  "Krieau",
  "Stadion",
  "Donaumarina",
  "Donaustadtbr&uuml;cke",
  "Stadlau",
  "Hardeggasse",
  "Donauspital",
  "Aspernstra&szlig;e",
  "Hausfeldstra&szlig;e",
  "Aspern Nord",
  "Seestadt"
];

var u3 = [
  "Ottakring",
  "Kendlerstra&szlig;e",
  "H&uuml;tteldorfer Stra&szlig;e",
  "Johnstra&szlig;e",
  "Schweglerstra&szlig;e",
  "Westbahnhof",
  "Zieglergasse",
  "Neubaugasse",
  "Volkstheater",
  "Herrengasse",
  "Stephansplatz",
  "Stubentor",
  "Landstra&szlig;e",
  "Rochusgasse",
  "Kardinal-Nagl-Platz",
  "Schlachthausgasse",
  "Erdberg",
  "Gasometer",
  "Zippererstra&szlig;e",
  "Enkplatz",
  "Simmering"
];

var u4 = [
  "H&uuml;tteldorf",
  "Ober St. Veit",
  "Unter St. Veit",
  "Braunschweiggasse",
  "Hietzing",
  "Sch&ouml;nbrunn",
  "Meidling Hauptstra&szlig;e",
  "L&auml;ngenfeldgasse",
  "Margareteng&uuml;rtel",
  "Pilgramgasse",
  "Kettenbr&uuml;ckengasse",
  "Karlsplatz",
  "Stadtpark",
  "Landstra&szlig;e",
  "Schwedenplatz",
  "Schottenring",
  "Ro&szlig;auer L&auml;nde",
  "Friedensbr&uuml;cke",
  "Spittelau",
  "Heiligenstadt"
];

var u6 = [
  "Siebenhirten",
  "Perfektastra&szlig;e",
  "Erlaaer Stra&szlig;e",
  "Alterlaa",
  "Am Sch&ouml;pfwerk",
  "Tscherttegasse",
  "Bahnhof Meidling",
  "Niederhofstra&szlig;e",
  "L&auml;ngenfeldgasse",
  "Gumpendorfer Stra&szlig;e",
  "Westbahnhof",
  "Burggasse",
  "Thaliastra&szlig;e",
  "Josefst&auml;dter Stra&szlig;e",
  "Alser Stra&szlig;e",
  "Michelbeuern",
  "W&auml;hringer Stra&szlig;e",
  "Nu&szlig;dorfer Stra&szlig;e",
  "Spittelau",
  "J&auml;gerstra&szlig;e",
  "Dresdner Stra&szlig;e",
  "Handelskai",
  "Neue Donau",
  "Floridsdorf"
];

function ChangeLayout()
{
  document.getElementById("message").innerHTML = "";


  if (document.getElementById("u1").checked == true)
  {
    line = u1;
    //document.getElementById("direction").style.backgroundColor = "red";
    document.body.style.backgroundColor = "red";
    if (reversed == false)
    {
      document.getElementById("direction").innerHTML = "Oberlaa - Leopoldau";
      stationCounter = 0;
    }
    else
    {
      document.getElementById("direction").innerHTML = "Leopoldau - Oberlaa";
      stationCounter = line.length - 1;
    }
  }
  if (document.getElementById("u2").checked == true)
  {
    line = u2;
    document.body.style.backgroundColor = "purple";
    if (reversed == false)
    {
      document.getElementById("direction").innerHTML = "Karlsplatz - Seestadt";
      stationCounter = 0;
    }
    else
    {
      document.getElementById("direction").innerHTML = "Seestadt - Karlsplatz";
      stationCounter = line.length - 1;
    }
  }
  if (document.getElementById("u3").checked == true)
  {
    line = u3;
    document.body.style.backgroundColor = "orange";
    if (reversed == false)
    {
      document.getElementById("direction").innerHTML = "Ottakring - Simmering";
      stationCounter = 0;
    }
    else
    {
      document.getElementById("direction").innerHTML = "Simmering - Ottakring";
      stationCounter = line.length - 1;
    }
  }
  if (document.getElementById("u4").checked == true)
  {
    line = u4;
    document.body.style.backgroundColor = "green";
    if (reversed == false)
    {
      document.getElementById("direction").innerHTML = "H&uuml;tteldorf - Heiligenstadt";
      stationCounter = 0;
    }
    else
    {
      document.getElementById("direction").innerHTML = "Heiligenstadt - H&uuml;tteldorf";
      stationCounter = line.length - 1;
    }
  }
  if (document.getElementById("u6").checked == true)
  {
    line = u6;
    document.body.style.backgroundColor = "brown";
    if (reversed == false)
    {
      document.getElementById("direction").innerHTML = "Siebenhirten - Floridsdorf";
      stationCounter = 0;
    }
    else
    {
      document.getElementById("direction").innerHTML = "Floridsdorf - Siebenhirten";
      stationCounter = line.length - 1;
    }
  }
}

function Test()
{
  document.getElementById("message").innerHTML = "";

  for (var i = 0; i < u6.length; i++)
  {
    document.getElementById("message").innerHTML += u6[i] + ", ";
  }
}

function ChangeDirection()
{
  if (reversed == false)
  {
    reversed = true;
  }
  else
  {
    reversed = false;
  }
  document.getElementById("message").innerHTML = "";
}

function CompareVals()
{
  var textInput;

  textInput = document.getElementById("txt");
  //document.getElementById("message").innerHTML = "";

  //Convert special characters ß, ä, ö, ü to html entities
  textInput.value = ConvertToEntities(textInput.value);
  //window.alert(changedText);
  if (changedText.toLowerCase() == line[stationCounter].toLowerCase())
  {
    document.getElementById("message").innerHTML += line[stationCounter] + "<br>";
    textInput.value = "";

    if (reversed == false)
    {
      stationCounter += 1;
    }
    else
    {
      stationCounter -= 1;
    }
    if (stationCounter == line.length ||
        stationCounter == -1)
    {
      document.getElementById("message").innerHTML = "Fertig!!!" + "<br><br>" +
      document.getElementById("message").innerHTML;
    }
  }
  //window.alert(stationCounter);
}

function ConvertToEntities(text)
{
  //Search string for special chars
  changedText = text.replace(/ß/g, "&szlig;");
  changedText = changedText.replace(/ä/g, "&auml;");
  changedText = changedText.replace(/ö/g, "&ouml;");
  changedText = changedText.replace(/ü/g, "&uuml;");

  return text;
}

function ShowHideMap()
{
  if (visible == false)
  {
    document.getElementById("pic").style.visibility = "visible";
    visible = true;
  }
  else
  {
    document.getElementById("pic").style.visibility = "hidden";
    visible = false;
  }
}

/*document.getElementById("u1").addEventListener("click", ChangeLayout);
document.getElementById("u2").addEventListener("click", ChangeLayout);
document.getElementById("u3").addEventListener("click", ChangeLayout);
document.getElementById("u4").addEventListener("click", ChangeLayout);
document.getElementById("u6").addEventListener("click", ChangeLayout);*/
document.addEventListener("click", ChangeLayout);
document.getElementById("change").addEventListener("click", ChangeDirection);
//document.addEventListener("input", Test);
document.addEventListener("input", CompareVals);
document.getElementById("vis").addEventListener("click", ShowHideMap);
