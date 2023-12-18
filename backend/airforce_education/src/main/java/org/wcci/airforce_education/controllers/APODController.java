package org.wcci.airforce_education.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.wcci.airforce_education.services.APODService;

import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/apod")
public class APODController {
    @Autowired
    private APODService service;

    @GetMapping("/{date}")
    public Mono<String> getImageOfTheDay(@PathVariable String date) {
        try {
            return service.fetchData(date, 0);
        } catch (Exception e) {
            return null;
        }

    }
}
