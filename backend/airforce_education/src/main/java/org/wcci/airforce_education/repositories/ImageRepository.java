package org.wcci.airforce_education.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.wcci.airforce_education.dtos.APODImageEntity;

public interface ImageRepository extends JpaRepository<APODImageEntity, Long>{

}
