function Bank() {
    this.accounts = [];

    this.addAccount = function (account) {
        this.accounts.push(account);
    }

    this.getAccount = function () {
        return this.accounts;
    }
}

function Account(firsName, lastName, id, amount = 100) {
    this.firstName = firsName;
    this.lastName = lastName;
    this.id = id;

    this.amount = amount;

    this.max = 100000;
    this.min = 100;

    this.deposit = function(amount) {
        this.amount += amount; 
    };

    this.withdraw = function(amount) {
        isSuccesful = false;
        if (this.amount < this.max && this.amount > this.min) {
            this.amount -= amount;
            isSuccesful = true;
        } return isSuccesful;
    };

    this.balance = function() {
        return this.amount;
    };

    this.transfer = function(account, amount) {
        isSuccesful = false;
        if (this.withdraw(amount)) {
            account.amount += amount;
            isSuccesful = true
        }
        return isSuccesful;
    };
}

function createAccount() {
    let firstName = prompt("Enter first name:")
    let lastName = prompt("Enter last name:")
    let id = prompt("Enter account's id:")

    let amount = prompt("Enter initial deposit:")

    let account = new Account(firstName, lastName, id, amount);

    ourBank.addAccount(account);
}


(function() {
    let ourBank = new Bank();
    console.log(ourBank);
    let id;
    let amount;

    ourBank.addAccount(new Account("Surafe", "kassahun", 0, 10000));
    ourBank.addAccount(new Account("Kidus", "Yo", 1, 10000));
    ourBank.addAccount(new Account("Naboni", "adsf", 2, 1000));
    ourBank.addAccount(new Account("Nabek", "Alemu", 3, 1900))
    let run = true;
    do {
        let option = prompt("Enter the service from below:\n1. Create account\n2. Withdraw\n3. Deposit\n4. Balance\n5. Transfer\n6. Terminate");
        let accounts = ourBank.getAccount();
        
        
        switch (option) {
            case "1":
                createAccount();
                break;
    
            case "2":
                id = prompt("Enter account's id:");
                amount = Number(prompt("Enter withdrawal amount:"));
                for (account of accounts) {
                    if (account.id == id) {
                        if (account.withdraw(amount)) 
                            alert(`Your request is successful!`);
                        else
                            alert(`Your request is not succesfull`);
                    } 
                }
                break; 
    
            case "3":
                id = prompt("Enter account's id:");
                amount = Number(prompt("Enter the amount:"));
                for (account of accounts) {
                    if (account.id == id) {
                        account.deposit(amount) 
                        alert(`Your request is successful!`);
                    } 
                }
                break; 
    
            case "4":
                id = prompt("Enter account's id:");
                for (account of accounts) {
                    if (account.id == id) {
                        alert(`Your remaining amount is ${account.balance()} birr!`);
                    } 
                } 
                break;
            
            case "5":
                let senderId = prompt("Enter sender account's id:");
                let recieverId = prompt("Enter reciever account id:");
                amount = Number(prompt("Enter the amount:"));
                let senderAccount, recieverAccount;
                for (account of accounts) {
                    if (account.id == senderId) {
                        senderAccount = account;
                    } else if (account.id == recieverId) {
                        recieverAccount = account
                    }
                } if (senderAccount.transfer(recieverAccount, amount))
                    alert(`Your request is successful!`);
                else 
                    alert(`Your request is not succesfull`);
                break;
            case "6":
                run = false;
                break;
            
            default:
                alert("Wrong input!");
        }

    } while (true)

})();