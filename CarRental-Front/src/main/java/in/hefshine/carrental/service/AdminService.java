package in.hefshine.carrental.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.hefshine.carrental.entity.Admin;
import in.hefshine.carrental.repository.AdminRepository;

@Service
public class AdminService {
	@Autowired
	private AdminRepository adminRepository;

	public AdminService(AdminRepository adminRepository) {
		this.adminRepository = adminRepository;
	}

	public Admin registerAdmin(Admin admin) {
		return adminRepository.save(admin);
	}


	 public Admin authenticateAdmin(String email, String password) {
	    	Admin admin = adminRepository.findByEmail(email);
			if (admin != null && admin.getPassword().equals(password)) {
				return admin;
			}
			return null;
		}
}
