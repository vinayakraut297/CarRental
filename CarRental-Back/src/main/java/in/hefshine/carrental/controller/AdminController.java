package in.hefshine.carrental.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.hefshine.carrental.entity.Admin;
import in.hefshine.carrental.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
	private final AdminService adminService;

	public AdminController(AdminService adminService) {
		this.adminService = adminService;
	}

	@PostMapping("/register")
	public ResponseEntity<Admin> registerAdmin(@RequestBody Admin admin) {
		Admin savedAdmin = adminService.registerAdmin(admin);
		return ResponseEntity.ok(savedAdmin);
	}

	@PostMapping("/login")
	public ResponseEntity<String> loginAdmin(@RequestBody Admin AdminData) {
		Admin admin = adminService.authenticateAdmin(AdminData.getEmail(), AdminData.getPassword());
		if (admin != null) {
			return new ResponseEntity<>("Login successful!", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Invalid email or password.", HttpStatus.UNAUTHORIZED);
		}
	}
}
