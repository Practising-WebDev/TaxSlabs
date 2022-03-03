let income = 255500;
let NetIncomeValue = 0;

function NetIncome(income){
    if(income<=250000){
        NetIncomeValue = income;
    } else if (250000<income<=500000){
        NetIncomeValue = income - (income*5)/100;
    } else if (500000<income<=750000){
        NetIncomeValue = income - (income*10)/100;
    } else if (750000<income<=1000000){
        NetIncomeValue = income - (income*15)/100;
    } else if (1000000<income<=1250000){
        NetIncomeValue = income - (income*20)/100;
    } else if (1250000<income<=1500000){
        NetIncomeValue = income - (income*25)/100;
    } else if (1250000<income){
        NetIncomeValue = income - (income*30)/100;
    } 
    return NetIncomeValue;
}

console.log(NetIncome(income));