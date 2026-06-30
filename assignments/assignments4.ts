let transactions:number[]=[1,2,3,4,5,6,7,8];
let amount:number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000];
let creditAmt:number=0;
let debitAmt:number=0;
console.log("total number of debit and credit transactions completed :", +transactions.length);

for     (const value of amount){

    if (value > 0)
    {
        creditAmt=creditAmt+value;
    }
    else{
        debitAmt=debitAmt+value;
    }

}
// for(let i:number=0;i<amount.length;i++){
//     if( amount[i] >0){
//         creditAmt=creditAmt+amount[i];
//     }
//     else{
//         debitAmt=debitAmt+amount[i];
//     }
// }
console.log("total amoount credited", +creditAmt);
console.log("total amoount debited", +debitAmt);
console.log("Total amount remaining:", +(creditAmt+debitAmt))

for ( const value of amount){
    if(value > 10000 || value<-10000) 
        {
           console.log ("suspicious credit/ debit transaction with amount", +value)
        }
    else{}
}

/*for(let j:number=0;j<amount.length;j++){
    if(amount[j]>10000 || amount[j]<-10000)
    {
        console.log("suspicious credit/ debit transaction with amount", +amount[j]);
    }
    else{}*/


