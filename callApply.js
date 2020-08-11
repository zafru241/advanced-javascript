const normalPerson = {
    firstName:"Syed",
    lastName :"Zafrullah",
    salary: 15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){      ///method///
        console.log(this);
        this.salary = this.salary - amount- tips - tax;
        return this.salary;
    }
}
// normalPerson.chargeBill(500);
// normalPerson.chargeBill(1500);
// console.log(normalPerson.salary);

const heroPerson ={

    firstName:"Hero",
    lastName :"Zafrullah",
    salary: 25000,
}
    

const friendlyPerson ={
    firstName:"Hero",
    lastName :"Zafrullah",
    salary:30000,
}
// normalPerson.chargeBill();
// const heroChargebill = normalPerson.chargeBill.bind(heroPerson);  //...bind..//
// heroChargebill(2000);
// heroChargebill(3000);
// console.log(heroPerson.salary);
// const frindlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// frindlyChargeBill(2000);
// frindlyChargeBill(2000);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 15); //...call..comma.//
// normalPerson.chargeBill.call(heroPerson, 3000, 200, 45);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 900, 100, 15);  //...call..comma...//
// normalPerson.chargeBill.call(friendlyPerson, 3000, 100, 45);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson,[300,30,15]);
console.log(heroPerson.salary);