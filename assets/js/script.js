var userinput_1 = '';
var userinput_2 = '';
var symbol;

function button(number) {
    if (symbol) {
        userinput_2 += number;
        document.getElementById("input-1").value = userinput_2;
        console.log(userinput_2, 'input_box_2');
    } else {
        userinput_1 += number;
        document.getElementById("input-1").value = userinput_1;
        console.log(userinput_1, 'input_box_1');
    }
}

function execution(operator) {
    symbol = operator;
    document.getElementById("input-1").value = symbol;
    console.log(symbol, 'operator');
}

function result() {
    let final;
    if (symbol == '/') {
        final = parseInt(userinput_1) / parseInt(userinput_2);
    } else if (symbol == '*') {
        final = parseInt(userinput_1) * parseInt(userinput_2);
    } else if (symbol == '+') {
        final = parseInt(userinput_1) + parseInt(userinput_2);
    } else if (symbol == '-') {
        final = parseInt(userinput_1) - parseInt(userinput_2);
    } else {
        document.getElementById("input-1").value = "Invalid Operator";
        return;
    }

    document.getElementById("input-1").value = final;


    userinput_1 = final.toString(); 
    userinput_2 = ''; 
    symbol = ''; 
}

function autoclear() {
    userinput_1 = '';
    userinput_2 = '';
    symbol = '';
    document.getElementById("input-1").value = '';
}

