var userinput_1 = '';
var userinput_2 = '';
var symbol;

function button(number) {
    if (symbol) {
        userinput_1 += number;
        document.getElementById("input-1").value = userinput_1;
        console.log(userinput_1, 'input_box_1');
    }
    else {
        userinput_2 += number;
        document.getElementById("input-1").value = userinput_2;
        console.log(userinput_2, 'input_box_3');
    }
}
function execution(operator) {
    symbol = operator;
    document.getElementById("input-1").value = symbol;
    console.log(symbol, 'operator');
}

function result() {
    if (symbol == '/') {
        let final = parseInt(userinput_1) / parseInt(userinput_2);
        document.getElementById("input-1").value = final;
    }
    else if (symbol == '*') {
        let final = parseInt(userinput_1) * parseInt(userinput_2);
        document.getElementById("input-1").value = final;
    }
    else if (symbol == '+') {
        let final = parseInt(userinput_1) + parseInt(userinput_2);
        document.getElementById("input-1").value = final;
    }
    else if (symbol == '-') {
        let final = parseInt(userinput_1) - parseInt(userinput_2);
        document.getElementById("input-1").value = final;
    }
    else {
        document.getElementById("input-1").value = "Invalid Operator";
    }
}

function autoclear() {
    userinput_1 = '';
    userinput_2 = '';
    symbol = '';
    final = '';

    document.getElementById("input-1").value = '';
    document.getElementById("input-2").value = '';

}

