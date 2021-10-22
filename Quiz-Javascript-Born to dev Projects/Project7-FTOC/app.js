function toCelsius()
{
    let fahrenheit = prompt("Fahrenheit :")
    let value = (fahrenheit-32)*5/9
    document.getElementById("toCelsius").innerHTML = value.toFixed(2)
}
function toFahrenheit()
{
    let celsius = prompt("Celsius :")
    let value = (celsius*9)/5+32
    document.getElementById("toFahrenheit").innerHTML = value.toFixed(2)
}
toCelsius()
toFahrenheit()