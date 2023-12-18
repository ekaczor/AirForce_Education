package org.wcci.airforce_education.services;

import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class APODService {

    private String baseUrl = "https://api.nasa.gov/planetary/apod?";

    private String key = "AGW1fvVJhw2LddwnG0uVOSDsQSePVTcVnSJsoG29";

    public String fetchData(String date) {
        WebClient webClient = WebClient.create();

        String responseBody = webClient.get()
                .uri(baseUrl + "api_key=" + key + "&date=" + date)
                .retrieve()
                .bodyToMono(String.class)
                .block();
        return responseBody;
    }
}