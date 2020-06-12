"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    percent = parseInt(percent, 10) / 100;
    contribution = parseInt(contribution, 10);
    amount = parseInt(amount, 10);

    let credit = amount - contribution;
    let mounth = new Date().getMonth() - date;
    let payAll = credit * ((percent / 12) + (percent / 12) / (Math.pow((1 + (percent / 12)),  mounth) - 1));
    let totalAmount = (payAll * mounth).toFixed(2);

    console.log(totalAmount);

    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting;

    if (name) {
        greeting = `Привет, мир! Меня зовут ${name}`;
    } else {
        greeting = `Привет, мир! Меня зовут Аноним`;
    }
    
    console.log(greeting);
    return greeting;
}