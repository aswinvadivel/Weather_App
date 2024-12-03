package com.weather.WeatherApp.controller;

import com.weather.WeatherApp.Service.WeatherService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "http://localhost:3000")
public class WeatherController {

    @Autowired
    private WeatherService weatherService;

    @GetMapping("/{city}")
    public ResponseEntity<Map<String, Object>> getWeather(@PathVariable String city) {
        try{
        Map<String, Object> weatherData = weatherService.fetchWeather(city);
        System.out.println("API Response:"+weatherData);
        return ResponseEntity.ok(weatherData);}
        catch (Exception e){
            return ResponseEntity.status(404).body(Map.of("error","Unable to fetch weather data.Please check the city name and try again."));
        }
    }
}
