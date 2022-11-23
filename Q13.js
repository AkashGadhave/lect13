let age = 75;
let gender ;

if (age >= 65 || gender == "female" ) {
    console.log( "Wronge Catagory");
}
else{

    let taxable_amount = prompt(`Enter the amount of your salary : `)

    if (taxable_amount <= 160000) {
        console.log(" No need to Pay The Income Tax : ");
    }
    else if (taxable_amount < 500000 && taxable_amount >= 160000) {
       let income_tax = ((taxable_amount) * 10/100 );
       console.log("Please Pay The Income tax : " , income_tax)
    }
    else if (taxable_amount < 800000 && taxable_amount >= 500000) {
        let income_tax = ((taxable_amount) * 20/100) + 34000 ;
        console.log("Please Pay The Income tax : " , income_tax)
    }
    else {
    
        let income_tax = ((taxable_amount) * 30/100 ) + 94000 ;
        console.log("Please Pay The Income tax : " , income_tax)
    }
}