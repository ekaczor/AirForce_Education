package org.wcci.airforce_education.services;

import org.springframework.web.reactive.function.client.WebClient;
import org.wcci.airforce_education.entities.GalleryImageEntity;
import org.wcci.airforce_education.repositories.ImageRepository;

import reactor.core.publisher.Mono;
import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class APODService {
    private final WebClient webClient;

    @Autowired
    private ImageRepository imageRepository;

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

    public GalleryImageEntity saveImage(GalleryImageEntity image) throws Exception {
        /// if exists throw exception
        if (imageRepository.findByImageUrl(image.getImageUrl()).size() > 0) {
            throw new Exception("Image already exists!");
        } else {
            return imageRepository.save(image);
        }
    }

    public GalleryImageEntity updateImage(GalleryImageEntity image) throws Exception {
        // if does not exist throw error
        if (image.getId() == null || !imageRepository.findById(image.getId()).isPresent()) {
            throw new Exception("Image does not exist!");
        }
        return imageRepository.save(image);
    }

    public void deleteImage(Long id) throws Exception {
        // if id dont exists throw error
        if (id != null && !imageRepository.findById(id).isPresent()) {
            throw new Exception("Can't delete image that does not exist!");
        } else {
            imageRepository.deleteById(id);
        }

    }

    public List<GalleryImageEntity> getAllImages() {
        // Retrieve a list of APODImageEntity from the repository
        List<GalleryImageEntity> images = imageRepository.findAll();

        // Use Java Streams to transform the list of entities to a list of ImageDto
        return images;
    }

    // private GalleryImageEntity convertToImageDto(GalleryImageEntity entity) {
    //     GalleryImageEntity imageDto = new GalleryImageEntity();
    //     imageDto.setId(entity.getId()); // Assuming getId returns the _id
    //     imageDto.setImageUrl(entity.getImageUrl());
    //     imageDto.setTitle(entity.getTitle());
    //     // Set other properties as needed

    //     return imageDto;
    // }

    public APODService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(baseUrl).build();
    }

}