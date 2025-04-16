function showMessage (){
    let age = 19;
    let Name = "james";

    if (age >= 18) {
        alert("hello" + Name + "you can now drive :] ");
    }
    else {
        alert("hello kid," + "you are too young to drive")
        let years = 18 - age;
        alert("please come back after" + years + "years")
    }
    let sum= 0;
    for (let i = 0; i <= 10; i = i + 1) {
        sum = sum + i;
    }
    alert(sum);
}



function changeColor() {
    document.getElementById("main").style.backgroundColor = "green";
}

function resetColor() {
    document.getElementById("main").style.backgroundColor = "black"
}