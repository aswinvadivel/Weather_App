document.getElementById('getTemperature').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    fetch(`http://localhost:8080/temperature?city=${city}`)
        .then(response => response.json())
        .then(data => {
            const result = `The temperature in ${city} is ${data.main.temp}°C`;
            document.getElementById('result').textContent = result;
        })
        .catch(error => {
            document.getElementById('result').textContent = 'Error fetching temperature data';
            console.error('Error:', error);
        });
});
