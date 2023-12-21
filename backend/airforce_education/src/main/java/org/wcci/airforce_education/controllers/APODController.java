package org.wcci.airforce_education.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.wcci.airforce_education.dtos.APODImageEntity;
import org.wcci.airforce_education.repositories.ImageRepository;
import org.wcci.airforce_education.services.APODService;

import reactor.core.publisher.Mono;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/apod")
public class APODController {
    @Autowired
    private APODService service;

    @Autowired
    private ImageRepository imageRepository;

    @GetMapping("/{date}")
    public Mono<String> getImageOfTheDay(@PathVariable String date) {
        try {
            return service.fetchData(date, 0);
        } catch (Exception e) {
            return null;
        }

    }

    @PostMapping("/saveImage")
    public Mono<ResponseEntity<String>> saveImageOfTheDay(@RequestBody String imageUrl) {
        try {
            // Assume that the imageUrl is passed as the request body
            // You can modify this method based on your requirements
            return service.saveImage(imageUrl)
                    .map(savedImageUrl -> ResponseEntity.ok("Image saved successfully at: " + savedImageUrl))
                    .defaultIfEmpty(ResponseEntity.status(500).body("Failed to save image."));
        } catch (Exception e) {
            return Mono.error(e);
        }
    }

@GetMapping("/getall")
public ResponseEntity<List<APODImageEntity>> getAllImages() {
    try {
        List<APODImageEntity> imageList = service.getAllImages();
        if (!imageList.isEmpty()) {
            return ResponseEntity.ok(imageList);
        } else {
            return ResponseEntity.notFound().build();
        }
    } catch (Exception e) {
        return ResponseEntity.status(500).body(null);
    }

}
}
