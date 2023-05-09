function checkage()
{
    var userType;
    var age =5
    if(age < 18){
    userType ='child'
    }
    else{
userType ='adult'
}
alert(userType)
}

function newage()   
{
var age =21
var userType = age < 18 ? 'Child' : 'Adult';
alert(userType)
}      

function checkday()

    var d = new [Date];
    switch(d.getDay()) {
        case 0:
            alert("Today is Sunday.");
            break;
case 1:
        alert("Today is Monday.");
        break;

case 2:
        alert("Today is Tuesday.");
        break;
    case 3:
        alert("Today is Wensday.");
        break;

    case 4:
        alert("Today is Thursday.");
        break;


    case 5:
        alert("Today is Friday.");
        break;

    case 6:
        alert("Today is Saturday.");
        break;

        default:
            alert("No information available for that day.");
            break;
        }

        function Mydate()
        {
            var d = new Date();

            switch(d.getDay()) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    alert("It is a weekday.");
                    break; 
                case 0:
                case 6:
                    alert("It is a weekend day.");
                    break;
                default: 
                    alert("Enjoy every day of your life.");
            }
        }
