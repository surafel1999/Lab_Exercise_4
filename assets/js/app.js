

function add(numbers) {
    let result = 0;
    for (number of numbers) {
        result += number;
    }
    return result;
}

function mult(numbers) {
    let result = 1;
    for (number of numbers) {
        result *= number;
    }
    return result;
}

function div(numbers) {
    let result = 1;
    for (number of numbers) {
        if (number == 0) 
            return "undefined";    
        else
            result /= number;
    }
    return result;
}

function sub(numbers) {
    let result = numbers[0];
    for (let i=1; i < numbers.length; i++) {
        result -= numbers[i];
    }
    return result;
}

function max(numbers) {
    let maximum = numbers[0];
    for (let i=1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }
    return maximum;
}

function min(numbers) {
    let minimum = numbers[0];
    for (let i=1; i < numbers.length; i++) {
        if (numbers[i] > minimum) {
            miniimum = numbers[i];
        }
    }
    return minimum;
}

function average(numbers) {
    let total = add(numbers)
    return total/numbers.length;
}


(function () {
    let option = prompt("Service option: \n1 for addition, \n2 for subtraction, \n3 for multiplication, \n4 for division, \n5 for maximum, \n6 for minimum, \n7 for average");
    let numbers = Number(prompt("How many numbers do you want to enter"));
    let array = [];
    for (let i = 0; i < numbers; i++) {
        array.push(Number(prompt(`Enter number ${i+1}:`)));
    }
    switch (option) {
        case "1":
            alert(add(array));
            break;
        case "2":
            alert(sub(array));
            break;
        case "3":
            alert(mult(array));
            break
        case "4":
            alert(div(array));
            break;
        case "5":
            alert(max(array));
            break;
        case "6":
            alert(min(array));
            break;
        case "7":
            alert(average(array));
            break;
        default:
            alert("Wrong input!");

    }
})();