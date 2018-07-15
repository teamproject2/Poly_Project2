package poly.soft.project2.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import poly.soft.project2.entity.LoaiGiay;
import poly.soft.project2.entity.TaiKhoan;
import poly.soft.project2.service.LoaiGiayService;
import poly.soft.project2.service.TaiKhoanService;

@Component
public class CommonInterceptor extends HandlerInterceptorAdapter {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		System.out.println("\n-------- CommonInterceptor.preHandle --- ");
        return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		System.out.println("\n-------- CommonInterceptor.postHandle --- ");
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		System.out.println("\n-------- CommonInterceptor.afterCompletion --- ");
	}

}
