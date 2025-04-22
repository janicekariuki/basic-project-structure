
document.getElementById("akanNames").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get user input
    const DOB = document.getElementById("DOB").value;
    const gender = document.getElementById("gender").value;

    if (!DOB || !gender) {
        alert("Please provide both gender and date of birth.");
        return;
    }

    const birthDate = new Date(DOB);
    const dayOfTheWeek = birthDate.getDay(); // Use getDay() for weekday (0-6, Sunday-Saturday)

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let akanName = "";

    // Get the Akan name based on gender and day of the week
    if (gender === "male") {
        akanName = maleNames[dayOfTheWeek];
    } else if (gender === "female") {
        akanName = femaleNames[dayOfTheWeek];
    } else {
        alert("Invalid gender selected.");
        return;
    }

    // Display the Akan name
    document.getElementById("result").innerText = `Generated First Name: ${akanName}`;
});

// Function to calculate the day of the week based on the formula
function calculateDayOfWeek(datestring) {
    const date = new Date(datestring);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are 0-indexed, so we add 1
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

    return ((d % 7) + 7) % 7; // Normalize to a positive value between 0-6
}
