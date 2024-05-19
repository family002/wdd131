const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear();

let modif = new Date(document.lastModified).toLocaleString('en-us');
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: <span>${modif}</span>`;

const temperature = 23;
const windSpeed = 5;
const windChillElement = document.querySelector('.windchill')

function calculateWindChill(temp, wind) {
    return Math.round(13.12 + (0.6215 *temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16)))
}

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed)
    windChillElement.textContent = `${windChill} °C`;
} else{
    windChillElement.textContent = "N/A";
}

