package org.wcci.airforce_education.services;

import org.springframework.web.reactive.function.client.WebClient;
import org.wcci.airforce_education.config.ApiConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class APODService {

    private String baseUrl = "https://api.nasa.gov/planetary/apod?";

    @Autowired
    private ApiConfig apiConfig;

    public void fetchData(String date) {
        WebClient webClient = WebClient.create();

        String responseBody = webClient.get()
                .uri(baseUrl + "api_key=" + apiConfig.getKey() + "&date=" + date)
                .retrieve()
                .bodyToMono(String.class)
                .block();
                System.out.println(responseBody);
    }

}