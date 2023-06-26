class bankAccount{
    constructor (accountTitle, accountNumber, amount){
        this.title = accountTitle;
        this.number = accountNumber;
        this.amount = amount;
    }

    balance(currentAmount){
        this.amount += currentAmount
    }

}

class bankAccount2 extends bankAccount{
    constructor(accountTitle, accountNumber, amount,pincode){
        super(accountTitle,accountNumber,amount)
        this.pincode = pincode;
    }
    withdraw(withdrawAmount){
        this.amount -= withdrawAmount
    }
}

// let amjad = new bankAccount('Amjad Khan', 3273872387, 2100)
let amjad = new bankAccount2('Amjad Khan', 3273872387, 2100, 3444)
let asif = new bankAccount('Asif Zafar', 3232234387, 4500)

asif.balance(400)
amjad.withdraw(500)


console.log(amjad)
console.log(asif)










