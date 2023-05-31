var tryCount =3;
var userBalance = 1000;
var isContinue = true;
var hasCredit = false;
var userPassword = prompt("Set a new password: ");
var userSalary = prompt("Enter amount of your salary: ")
while(tryCount > 0) 
{
    var pass = prompt("Enter the password: ");
    if(userPassword === pass) 
    {
        console.log(`Welcome! \n Balance: ${userBalance}`);
        while(userBalance > 0)
        {
            var amount = Number(prompt("Amount: "));
            if(amount <= userBalance) 
            {
     userBalance -= amount;
     console.log(`Amount withdrawn: ${amount} \n Balance: ${userBalance}`);
     if(userBalance > 0)
     {
        isContinue = confirm("Do you want to continue? ")
        if(!isContinue)
        {
            console.log("Thanks for choosing us!")
            break;
        }
        
     }




     if( userBalance == 0) 
     {
        if(!hasCredit) 
        {
            var isCreditNeeded = confirm("Balance: 0 \n Do you want to take a credit?")
            if(isCreditNeeded)
            {
                var givenAmount = userSalary * 0.45 * 12;
                userBalance +=Math.floor(givenAmount - givenAmount * 0.02);
                console.log(`Credit transaction is done successfully. \n Balance: ${userBalance}`);
                hasCredit = true;
                continue;
            } 
        }
       
        console.log("See u next month...");
        break;
     }
            }
            else
            {
                if(!hasCredit) 
                {
                    var isCreditNeeded = confirm("Balance is not enough. \n Do you want to take a credit?")
                    if(isCreditNeeded)
                    {
                        var givenAmount = userSalary * 0.45 * 12;
                        userBalance +=Math.floor(givenAmount - givenAmount * 0.02);
                        console.log(`Credit transaction is done successfully. \n Balance: ${userBalance}`);
                        hasCredit = true;
                        continue;
                    } 
                }
            }
     
        }
     
    }
    else 
    {
        tryCount--;
        console.warn(`Password is incorrect. Attempts number: ${tryCount}`);
        if(tryCount == 0)
        {
            console.error("The card is blocked. Contact the bank.")
        }
    }
    if( userBalance == 0 || !isContinue) 
    {
       break;
    }
}