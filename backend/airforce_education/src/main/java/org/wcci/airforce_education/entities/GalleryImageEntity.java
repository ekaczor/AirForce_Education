package org.wcci.airforce_education.entities;

import jakarta.persistence.*;

@Entity
public class GalleryImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String imageUrl;
    private int rating;

    public GalleryImageEntity() {
    }

    public GalleryImageEntity(Long id, String imageUrl, String title) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        // ensure it is between 1 and 5 if lower/higher set to 1/5
        this.rating = Math.max(1, Math.min(rating, 5));
    }

}
