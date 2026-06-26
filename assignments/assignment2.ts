let result=customerDetails("John Doe",720,55000,true,35);
console.log(result);
function customerDetails(name: string, creditScore: number, income: number, isEmployed: boolean, debttoIncomeR: number) {
    if (creditScore > 750) {
        console.log("Approved");
            } 
            else if(creditScore>650 && creditScore<750){
                console.log("additionl checks performed");                
                     if(income>=50000){
                        console.log("considered");
                           if (isEmployed){
                            console.log("employed");
                               if (debttoIncomeR<40){
                             // console.log("loan is approved");
                                 return "loan is approved";
                                 }
                              else {
                                 console.log("loan is  not approved");
                                }
            }
        
            else 
            {console.log("unemployed");

            }
        
        }else 
        {
            console.log("not consider");
        }
    }
    else 
    {
        console.log("denied");
    }
}



