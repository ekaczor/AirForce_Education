package org.wcci.airforce_education.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.wcci.airforce_education.entities.GalleryImageEntity;
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

    @PutMapping("/updateImage")
    public ResponseEntity<?> updateImage(@RequestBody GalleryImageEntity image) {
        try {
            return ResponseEntity.ok(service.updateImage(image));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e);
        }
    }

    @PostMapping("/saveImage")
    public ResponseEntity<?> saveImage(@RequestBody GalleryImageEntity image) {
        try {
            return ResponseEntity.ok(service.saveImage(image));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e);
        }
    }

    @DeleteMapping("/deleteImage/{id}")
    public ResponseEntity<?> deleteImage(@PathVariable Long id) {
        try {
            service.deleteImage(id);
            return ResponseEntity.ok("Deleted");
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e);
        }
    }

    @GetMapping("/getall")
    public ResponseEntity<List<GalleryImageEntity>> getAllImages() {
        try {
            List<GalleryImageEntity> imageList = service.getAllImages();
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
