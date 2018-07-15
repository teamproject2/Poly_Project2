package poly.soft.project2.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@Configuration
public class AppConfig implements WebMvcConfigurer  {
	
	@Autowired
	CommonInterceptor commonInterceptor;
	
	@Autowired
	AdminInterceptor adminInterceptor;
	
	@Override
    public void addInterceptors(InterceptorRegistry registry) {
       registry.addInterceptor(commonInterceptor);
       
       String[] list = {"/hoadon/**","/thongke/**","/loaigiay/**","/nhanvien/**","/khachhang/**"};
       
       registry.addInterceptor(adminInterceptor).addPathPatterns(list);
    }
}
