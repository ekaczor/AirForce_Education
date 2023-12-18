package org.wcci.airforce_education.services;

import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class APODService {
    private final WebClient webClient;

    private String baseUrl = "https://api.nasa.gov/planetary";

    private ArrayList<String> keys = new ArrayList<>(
            List.of("AGW1fvVJhw2LddwnG0uVOSDsQSePVTcVnSJsoG29", "qVEoAWdF7bLymAOnDHf46ea9ail7wBfzBAZ9bAaB",
                    "qOqUQPUx5MHRyTUYctpKL8F2jr3MZI4wSxjM9rMh"));

    public Mono<String> fetchData(String date, int index) throws Exception {
        try {

            var responseBody = webClient.get()
                    .uri(uriBuilder -> uriBuilder
                            .path("/apod")
                            .queryParam("api_key", keys.get(index))
                            .queryParam("date", date)
                            .build())
                    .retrieve().bodyToMono(String.class);
            return responseBody;
        } catch (Exception error) {
            if (index - 1 < keys.size()) {
                return fetchData(date, index + 1);
            } else {
                throw (new Exception(error));
            }
        }
    }

    public APODService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(baseUrl).build();
    }

}