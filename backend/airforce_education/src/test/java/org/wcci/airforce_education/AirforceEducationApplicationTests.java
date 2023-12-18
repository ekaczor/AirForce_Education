package org.wcci.airforce_education;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.wcci.airforce_education.services.APODService;

@SpringBootTest
class AirforceEducationApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void testServiceURL() {
	APODService service =  new APODService();
	service.fetchData("2023-12-15");
		assertEquals(1,1);
	}

}
