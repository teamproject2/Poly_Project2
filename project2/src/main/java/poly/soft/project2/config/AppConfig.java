package poly.soft.project2.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class AppConfig implements WebMvcConfigurer {
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/loaigiay/**")
	   	  .allowedOrigins(getOrigins())//String[]
		  .allowedMethods("POST", "GET",  "PUT", "OPTIONS", "DELETE")
		  .allowedHeaders("X-Auth-Token", "Content-Type")
		  .exposedHeaders("custom-header1", "custom-header2")
		  .allowCredentials(false)
		  .maxAge(4800);
	}
	
	private String[] getOrigins() {
		List<String> list = new ArrayList<>();
		list.add("http://127.0.0.1:3000");
		list.add("http://127.0.0.1:3001");
		return list.toArray(new String[list.size()]);
	}
}
