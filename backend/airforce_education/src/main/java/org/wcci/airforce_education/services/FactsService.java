package org.wcci.airforce_education.services;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class FactsService {
    private String apiUrl = "https://api.api-ninjas.com/v1/facts";
    private String apiKey = "vaHi7Uwcex1SpF89RScdBQ==aal7kFgR6lMRQvpC";

    public String getRandomFact() {
        WebClient webClient = WebClient.builder()
                .baseUrl(apiUrl)
                .defaultHeader("X-Api-Key", apiKey)
                .build();

        return webClient.get()
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
