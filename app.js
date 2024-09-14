
function appendToDisplay(value) {
    document.getElementById("enter-value").value += value
}

function clearDisplay() {
    document.getElementById("enter-value").value = " "
}

function displayResult() {
    let display = document.getElementById("enter-value")

    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "error"
    }
}
