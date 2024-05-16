#! /usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let myPin = 2003
let myBalance = 500000

let pinAns = await inquirer.prompt (
    {
        name : "pin",
        message : "Please Enter your pin",
        type : "number",
    }
)
if (pinAns.pin !== myPin) {
    console.log ("Sorry Your pin is incorrect")
}

else {
    console.log ("Your pin is correct")
    let OperationAnswer = await inquirer.prompt ([
        {
            name : "operations",
            message : "Please Select an option",
            type : "list",
            choices : ["Withdraw","Fast Cash","Check Balance"]
        }
    ]); if (OperationAnswer.operations == "Withdraw"){
        let amountAns = await inquirer.prompt ([{
            name : "Amount",
            message : "Enter your amount",
            type : "number"
        }])
        if (amountAns.amount >= myBalance){
            console.log ("You have insufficient balance")
        }
        else {
            let balance = myBalance - amountAns.Amount
            console.log (`Your remainig account balance is ${balance}`)
        }
    }  
    else if (OperationAnswer.operations == "Fast Cash"){
        let FastCashAnswer = await inquirer.prompt ([
            {
                name : "amount",
                type : "List",
                choices : [10000 , 20000, 30000, 40000]
            }
        ]) 
              if (FastCashAnswer.amount <= myBalance){
                let balance2 = myBalance - FastCashAnswer.amount
                console.log(`Your remainig account balance is ${balance2}`)
              }
              else {
                console.log("You have insufficient amount")
              }
    }
    else {
        console.log(`your account balance is ${myBalance}`)
    }
}