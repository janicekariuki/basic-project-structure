
document.getElementById("akanNames").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get user input
    const DOB = document.getElementById("DOB").value;
    const gender = document.getElementById("gender").value;
    const result = document.getElementById("result").value
    if (!DOB || !gender) {
        alert("Please provide both gender and date of birth.");
        return;
    }

    const birthDate = new Date(DOB);
    if (isNaN(birthDate.getTime())) {
        alert("invalid date entered.")
        return
    }

    const dayOfTheWeek = birthDate.getDay()

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let akanName = "";


    if (gender === "male") {
        akanName = maleNames[dayOfTheWeek];
    } else if (gender === "female") {
        akanName = femaleNames[dayOfTheWeek];
    } else {
        alert("Invalid gender selected.");
        return;
    }

    
    document.getElementById("result").innerText = `Generated First Name: ${akanName}`;
});


function calculateDayOfWeek(datestring) {
    const date = new Date(datestring);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;

    const d = (
        (4 * CC - 2 * CC - 1) +  
        (45 * YY) +
        (1026 * (MM + 1)) +
        DD  
    ) % 7;

    return ((d % 7) + 7) % 7; 
}
