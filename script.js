let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["January","February","March","April","May","June","July","August",
            "September","October","November","December"];

let monthYear = document.getElementById("monthYear");
showCalendar(currentMonth,currentYear);

function showCalendar(month,year){
    let firstDay =(new Date(year,month).getDay());
    let daysMonth = 32 - new Date(year,month, 32).getDate(); 

    //calendar
    let calTable = document.getElementById("calendar");

    //clear prev cells
    calTable.innerHTML = "";

    monthYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    //all cells
    let date = 1; 
    for (let i=0;i<6;i++){
        let row = document.createElement("tr");

        //create single cells
        for (let j = 0; j < 7;j++){
            if (i==0 && j < firstDay){
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysMonth){
                break;
            }
            else{
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                /*if (date === today.getDate() && year === today.getFullYear() && month == today.getMonth()) {
                    cell.classList.add("bg-info");
                }*///color current date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
            //append row to calendar
            calTable.appendChild(row);
        }


    }
}
