package poly.soft.project2.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import poly.soft.project2.entity.TaiKhoan;
import poly.soft.project2.service.TaiKhoanService;

public class LogInterceptor extends HandlerInterceptorAdapter {
	@Autowired
	TaiKhoanService taiKhoanService;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		String tenTaiKhoan = request.getHeader("username");
		String matKhau = request.getHeader("password");
		TaiKhoan taikhoan = taiKhoanService.findByTenTaiKhoanAndMatKhau(tenTaiKhoan, matKhau);
		if (taikhoan == null) {
			throw new Exception("Invalid User Id or Password. Please try again.");
		}
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {

	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {

	}

}
