

function grades()

{
    let marks = 79;
    if (marks >= 90){
        console.log("Your Grade is A");
    }
    else if (marks < 90 && marks >= 70){
        console.log("Your Grade is B");
    }
    else if (marks < 70 && marks >= 50){
        console.log("Your Grade is C");
    }
    else {
        console.log("Your Grade is D")
    }
}

grades();