// calculate grade b/w 0-100 

let marks = prompt("Enter the Grade");
if (marks >= 90 && marks <= 100) {
    console.log("A");
}
else if (marks >= 70 && marks <= 89) {
    console.log("B");
}
else if (marks >= 60 && marks <= 69) {
    console.log("C");
}
else if (marks >= 50 && marks <= 59) {
    console.log("D");
}
else {
    (marks >= 0 && marks <= 49)
    console.log("Fail");
}