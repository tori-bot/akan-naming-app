// business logic
var malenames = ['kwasi', 'kwadwo', 'kwabena', 'kwaku', 'yow', 'kofi', 'kwame'];
var femalenames = ['akosua', 'adwoa', 'abenaa', 'akua', 'yaa', 'afua', 'ama'];
var daysofweek=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

// user interface
function radioInfo() {
    var radio = document.getElementsByName('gender');
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked==true) {
            var gender = radio[i].value;
return gender;
        }
    }
}
function getInfo() {
    var year = parseInt(document.getElementById('year').value);
    var month = parseInt(document.getElementById('month').value);
    var day = parseInt(document.getElementById('day').value);
    var gender = radioInfo();

    var dayofweek = new Date(year + '/' + month + '/' + day);
    var siku = dayofweek.getDay();
    var name = "";

    if (gender === 'male')
    {
        name = male[siku];
    }
    else
    {
        name = female[siku];
    }
    alert('your birthday was on a ' + dayofweek[siku] + ' and your Akan name is ' + name);
     document.getElementById('akan').innerHTML= 'your birthday was on a ' + dayofweek[siku] + 'and your Akan name is ' + name;
    }








