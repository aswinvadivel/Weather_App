function getWeather() {
    const city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("weather-info").innerHTML = `<p class="error">Please enter a valid city name.</p>`;
        return;
    }

    document.getElementById("weather-info").innerHTML = `<p>Loading...</p>`;

    const backendUrl = "http://localhost:8080/api/weather"; // Ensure this URL is correct
    console.log("City:", city);
    console.log("Backend URL:", `${backendUrl}/${encodeURIComponent(city)}`);

    fetch(`${backendUrl}/${encodeURIComponent(city)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(weather => {
            if (weather.main && weather.weather) {
                const weatherDiv = `
                    <div>
                        <p><strong>City:</strong> ${city}</p>
                        <p><strong>Temperature:</strong> ${weather.main.temp || "N/A"}°C</p>
                        <p><strong>Condition:</strong> ${weather.weather[0]?.description || "N/A"}</p>
                        <p><strong>Humidity:</strong> ${weather.main.humidity || "N/A"}%</p>
                        <p><strong>Wind:</strong> ${weather.wind?.speed || "N/A"} m/s</p>
                    </div>
                `;
                document.getElementById("weather-info").innerHTML = weatherDiv;
            } else {
                document.getElementById("weather-info").innerHTML = `<p class="error">Weather data not available for ${city}.</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error.message || error);
            document.getElementById("weather-info").innerHTML = `<p class="error">Unable to fetch weather data. Please try again later.</p>`;
        });
}
