package org.wcci.airforce_education.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.wcci.airforce_education.entities.GalleryImageEntity;

public interface ImageRepository extends JpaRepository<GalleryImageEntity, Long> {
    List<GalleryImageEntity> findByImageUrl(String imageUrl);

    Optional<GalleryImageEntity> findById(Long id);
}
