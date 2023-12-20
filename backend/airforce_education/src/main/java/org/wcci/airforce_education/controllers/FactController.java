package org.wcci.airforce_education.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wcci.airforce_education.services.FactsService;

@RestController
@RequestMapping("/api/facts")
public class FactController {

    @Autowired
    private FactsService factsService;

    @GetMapping
    public String getRandomFact() {
        try {
            return factsService.getRandomFact();
        } catch (Exception e) {
            System.out.println("Error: " + e);
            return "Error";
        }
    }
}
