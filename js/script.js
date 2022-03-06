// business logic
var malenames = ['kwasi', 'kwadwo', 'kwabena', 'kwaku', 'yow', 'kofi', 'kwame'];
var femalenames = ['akosua', 'adwoa', 'abenaa', 'akua', 'yaa', 'afua', 'ama'];
var daysofweek=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

// user interface
var year = parseInt(document.getElementById('year').value);
var month = parseInt(document.getElementById('month').value);
var day = parseInt(document.getElementById('day').value);
var gender = radioInfo();

var dayofweek = new Date(year + '/' + month + '/' + day);
var siku = dayofweek.getDay();
var Aname = "";

if (gender === 'male')
{
    Aname = male[siku];
}
else
{
    Aname = female[siku];
}






