var tryCount =3;
var userBalance = 1000;
var isContinue = true;
var hasCredit = false;
var userPassword = prompt("Set a new password: ");
var userSalary = prompt("Enter amount of your salary: ")
var givenAmount = userSalary * 0.45 * 12;
while(tryCount > 0) 
{
    var pass = prompt("Enter the password: ");
    if(userPassword === pass) 
    {
        console.log(`Welcome! \n Balance: ${userBalance}`);
       var choice =  prompt("Choose 1(Cash) or 2(Loan payment)...");
       if( choice == 1)
       {

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
       
        console.log("Balance is over.See u next month...");
        break;
     }
            }
            
            else if (amount > userBalance)
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
                if(hasCredit)
                {
                    console.log("Balance is not enough. You've already taken out a loan.");
                    break;
                }
            }
     
        }
       }
 
       if(choice == 2) 
       {
        if(!hasCredit)
        {
          if( confirm("You don't have a credit to pay. Do you want to take a credit?"))
          {
            
                        userBalance +=Math.floor(givenAmount - givenAmount * 0.02);
                        console.log(`Credit transaction is done successfully. \n Balance: ${userBalance}`);
                        hasCredit = true;
                        continue;
          }

        }
        if(hasCredit)
        {
            while(givenAmount > 0)
            {
            var loanPayment =  userSalary * 0.45;
            if(loanPayment <= userBalance)
            {
                userBalance -= loanPayment;
                givenAmount -= loanPayment;
            console.log(`Loan payment:${loanPayment} \nBalance:${userBalance} \nUnpaid dept:${givenAmount} `);
            }
            if(loanPayment > userBalance)
            {
               givenAmount = givenAmount - userBalance;
               userBalance = 0;
                console.error(`Balance is over. Unpaid dept: ${givenAmount}`);
                break;
            }

            isContinue = confirm("Do you want to continue?");
            if(isContinue)
            {
                var loanPayment =  userSalary * 0.45;
            userBalance -= loanPayment;
            givenAmount -= loanPayment;
            console.log(`Loan payment:${loanPayment} \nBalance:${userBalance} \nUnpaid dept:${givenAmount}`);
            }
            if(givenAmount ==0)
            {
                hasCredit = false;
            }
            if(!isContinue)
            {
                console.log("Thanks for choosing us.");
                break;
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