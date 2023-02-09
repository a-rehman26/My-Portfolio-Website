let valuesDisplay = document.querySelectorAll(".num-counting-span-1");
let interval = 9000;

valuesDisplay.forEach((valuesDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valuesDisplay.getAttribute("data-val"))

    let duration = Math.floor(interval / endValue)

    let counter = setInterval(function () {
        startValue += 1
        valuesDisplay.textContent = startValue;

        if (startValue == endValue) {
            clearInterval(counter)
        }
    })

})