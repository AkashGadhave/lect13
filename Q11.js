
function discounts(){
    let total_cost = 15000;
    let discount;
    let amount_paid;
    let amount_pay = (total_cost - discount);
    if (total_cost <= 2000){
        discount = total_cost * (5/100);
        console.log("Dear Customer Your Discount Cost of Item is :" + discount);
        let amount_pay = (total_cost - discount);
        console.log("Dear Customer Please Pay the amount :" + amount_pay);
        console.log("Thank You");
    }
    else if (total_cost < 5000 && total_cost >= 2000){
        discount = total_cost * (25/100);
        console.log("Dear Customer Your Discount Cost of Item is :" + discount);
        let amount_pay = (total_cost - discount);
        console.log("Dear Customer Please Pay the amount :" + amount_pay);
        console.log("Thank You");
    }
    else if (total_cost < 10000 && total_cost >= 5000){
        discount = total_cost * (35/100);
        console.log("Dear Customer Your Discount Cost of Item is :" + discount);
        let amount_pay = (total_cost - discount);
        console.log("Dear Customer Please Pay the amount :" + amount_pay);
        console.log("Thank You");
}
else {
    discount = total_cost * (35/100);
        console.log("Dear Customer Your Discount Cost of Item is :" + discount);
        let amount_pay = (total_cost - discount);
        console.log("Dear Customer Please Pay the amount :" + amount_pay);
        console.log("Thank You");
}
}

discounts();
