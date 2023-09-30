function convertCelsius() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("kelvin").value = kelvin.toFixed(2);
}

function convertFahrenheit() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    const celsius = (fahrenheit - 32) * 5/9;
    const kelvin = (fahrenheit - 32) * 5/9 + 273.15;

    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("kelvin").value = kelvin.toFixed(2);
}

function convertKelvin() {
    const kelvin = parseFloat(document.getElementById("kelvin").value);
    const celsius = kelvin - 273.15;
    const fahrenheit = (kelvin - 273.15) * 9/5 + 32;

    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
}