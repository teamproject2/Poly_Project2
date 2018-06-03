package poly.soft.project2.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import poly.soft.project2.entity.Quyen;
import poly.soft.project2.entity.TaiKhoan;
import poly.soft.project2.repository.TaiKhoanRepository;

@Component
public class UserDetailServiceImpl implements UserDetailsService {

	@Autowired
 	TaiKhoanRepository taiKhoanRepository;
	
	@Override
	public UserDetails loadUserByUsername(String tenTaiKhoan) throws UsernameNotFoundException {
		TaiKhoan taiKhoan = taiKhoanRepository.findByTenTaiKhoan(tenTaiKhoan);
		List<GrantedAuthority> authorities = new ArrayList<>();
		for(Quyen role: taiKhoan.getQuyen()) {
			authorities.add(new SimpleGrantedAuthority(role.getTenQuyen()));
		}
		return new org.springframework.security.core.userdetails.User(taiKhoan.getTenTaiKhoan(), taiKhoan.getMatKhau(), authorities);
	}

	
}
