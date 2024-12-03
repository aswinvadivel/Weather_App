package com.weather.WeatherApp.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class WeatherService {

    private static final String API_KEY = "533745c5307927793dfbefb601d2d8c5";

    public Map<String, Object> fetchWeather(String city) {
        String apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY + "&units=metric";
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(apiUrl, Map.class);
    }
}
