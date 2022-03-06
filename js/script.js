// business logic
var malenames = ['kwasi', 'kwadwo', 'kwabena', 'kwaku', 'yow', 'kofi', 'kwame'];
var femalenames = ['akosua', 'adwoa', 'abenaa', 'akua', 'yaa', 'afua', 'ama'];
var daysofweek=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

// user interface
function form(){
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
    alert('your birthday was on a ' + daysofweek(siku) + 'and your Akan name is ' + Aname);
    // document.getElementById('akan').innerHTML=your birthday was on a ' + daysofweek(siku) + 'and your Akan name is ' + Aname;
    

}





