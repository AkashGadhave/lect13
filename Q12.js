
function electronics_shop_discounts() {
    let purchase_Amount = 500000;
    let laptop="laptop";
    let desktop="desktop";
    switch (desktop) {
        case laptop:
            if (purchase_Amount <= 38000) {
                let = discount_on_Laptop = purchase_Amount * (0.0 / 100);
                console.log("Dear Customer Your Discout Cost on Laptop is : " + discount_on_Laptop);
                let net_Amount_for_Laptop = (purchase_Amount - discount_on_Laptop);
                console.log("Dear Customer Please Pay The Amount For Laptop is : " + net_Amount_for_Laptop);
            }
            else if (purchase_Amount < 57000 && purchase_Amount >= 25000) {
                let discount_on_Laptop = purchase_Amount * (5.0 / 100);
                console.log("Dear Customer Your Discout Cost on Laptop is : " + discount_on_Laptop);
                let net_Amount_for_Laptop = (purchase_Amount - discount_on_Laptop);
                console.log("Dear Customer Please Pay The Amount For Laptop is : " + net_Amount_for_Laptop);
            }
            else if (purchase_Amount <= 100000 && purchase_Amount > 57000) {
                let discount_on_Laptop = purchase_Amount * (7.5 / 100);
                console.log("Dear Customer Your Discout Cost on Laptop is : " + discount_on_Laptop);
                let net_Amount_for_Laptop = (purchase_Amount - discount_on_Laptop);
                console.log("Dear Customer Please Pay The Amount For Laptop is : " + net_Amount_for_Laptop);
            }
            else {

                let discount_on_Laptop = purchase_Amount * (10 / 100);
                console.log("Dear Customer Your Discout Cost on Laptop is : " + discount_on_Laptop);
                let net_Amount_for_Laptop = (purchase_Amount - discount_on_Laptop);
                console.log("Dear Customer Please Pay The Amount For Laptop is : " + net_Amount_for_Laptop);
            }
            break;

        case desktop:
            if (purchase_Amount <= 25000) {
                let discount_on_Desktop_PC = purchase_Amount * (5.0 / 100);
                console.log("Dear Customer Your Discout Cost on Desktop PC is : " + discount_on_Desktop_PC);
                let net_Amount_for_Desktop_PC = (purchase_Amount - discount_on_Desktop_PC);
                console.log("Dear Customer Please Pay The Amount For Desktop PC is : " + net_Amount_for_Desktop_PC);
            }
            else if (purchase_Amount < 57000 && purchase_Amount >= 25000) {
                let discount_on_Desktop_PC = purchase_Amount * (7.5 / 100);
                console.log("Dear Customer Your Discout Cost on Desktop PC is : " + discount_on_Desktop_PC);
                let net_Amount_for_Desktop_PC = (purchase_Amount - discount_on_Desktop_PC);
                console.log("Dear Customer Please Pay The Amount For Desktop PC is : " + net_Amount_for_Desktop_PC);
            }
            else if (purchase_Amount <= 100000 && purchase_Amount > 57000) {
                let discount_on_Desktop_PC = purchase_Amount * (10 / 100);
                console.log("Dear Customer Your Discout Cost on Desktop PC is : " + discount_on_Desktop_PC);
                let net_Amount_for_Desktop_PC = (purchase_Amount - discount_on_Desktop_PC);
                console.log("Dear Customer Please Pay The Amount For Desktop PC is : " + net_Amount_for_Desktop_PC);
            }
            else {
                let discount_on_Desktop_PC = purchase_Amount * (15 / 100);
                console.log("Dear Customer Your Discout Cost on Desktop PC is : " + discount_on_Desktop_PC);
                let net_Amount_for_Desktop_PC = (purchase_Amount - discount_on_Desktop_PC);
                console.log("Dear Customer Please Pay The Amount For Desktop PC is : " + net_Amount_for_Desktop_PC);
            }
            default:
    }
}
electronics_shop_discounts();
console.log("Thank You ");