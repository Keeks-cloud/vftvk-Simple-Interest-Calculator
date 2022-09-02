//Interest Rate Slider
function updateRate()
{
var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
//Compute Button
function compute()
{var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var principal = document.getElementById("principal").value;
document.getElementById("results").innerHTML=
    "If you deposit <mark>"+principal+
    "</mark>,<br>at an interest rate of <mark> "+rate+
    "% </mark>,<br>You will receive an amount of <mark> " +(principal * rate* years)/100+
    "</mark>,<br> in the year <mark>"+year;
  
//Alert and focus
    if (principal<1)
    {
        alert("Enter a positive number");
       document.getElementById("principal").focus();

    }
}
