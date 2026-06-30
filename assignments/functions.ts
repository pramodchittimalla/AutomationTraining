//function without parameter and without return type
/*function login(){
    console.log("open the browser");
    console.log("enter url ww.amazon.com");
    console.log("enter the UserName as Pramod");
    console.log("enter the Password as pramod123");
    console.log( "click on login button");
}
login();*/
//function with parameter and without return type

/*function loginDetails(username: String, password:String)
{
    console.log("open the browser");
    console.log("enter url www.pramod.com");
    console.log(`enter username as ${username} and password as ${password}`)
    console.log("click on login");
}

loginDetails ("pramodkumar" , "pramod123")*/

//function with parameter and with return type
/*function loginDetails(username: String, password:String):number
{
    console.log("open the browser");
    console.log("enter url www.pramod.com");
    console.log(`enter username as ${username} and password as ${password}`);
    console.log("click on login");
    console.log("click on account balance");
    const accountbalance: number = 25000;
    return accountbalance;
}

console.log (loginDetails("pramod", "pramod123"))*/

/*function with out parameter and with return type*/
 function getcurrentyear():number{
    let date= new Date();
    return date.getFullYear();
 }
 console.log(getcurrentyear())