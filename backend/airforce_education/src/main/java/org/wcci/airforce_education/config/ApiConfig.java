package org.wcci.airforce_education.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix="api")
public class ApiConfig {
    private String key;

    public String getKey() {
        return key;
    }

    public void getKey(String key) {
        this.key=key;
    }


    
}
