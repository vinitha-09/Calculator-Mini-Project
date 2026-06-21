function appendValue(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    let result = document.getElementById("result");

    try {
        result.value = eval(result.value);
    } catch {
        result.value = "Error";
    }
}
