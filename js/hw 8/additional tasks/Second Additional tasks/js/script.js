class UserCard {
    constructor(number) {
    }

    getCardOptions(number) {
        this.balance = 100;
        this.transactionLimit = 100;
        this.historyLogs = {}
        this.key = number;
    }

    putCredits(money) {
        this.balance += money;
    }

    takeCredits(money) {
        this.balance -= money;
        if (this.balance - money <= 0) {
            console.error(this.balance);
        }
    }

    setTransactionLimit(limit) {
        this.transactionLimit = limit;
    }

    transferCredits(sum, obj) {
        this.balance = Math.round(this.balance - sum - (sum * 5 / 1000));
        obj.balance += sum;
    }
}

let secondUser = new UserCard;
secondUser.getCardOptions(3);

let user = new UserCard;
user.getCardOptions(3);
user.putCredits(2300);
user.takeCredits(230);
user.setTransactionLimit(5000);
user.transferCredits(200, secondUser);


console.log(user);
console.log(secondUser);