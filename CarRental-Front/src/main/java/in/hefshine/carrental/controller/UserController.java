package in.hefshine.carrental.controller;

import java.util.*;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import in.hefshine.carrental.entity.User;
import in.hefshine.carrental.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

	private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	@PostMapping("/register")
	public ResponseEntity<User> registerUser(@RequestBody User user) {
		User savedUser = userService.registerUser(user);
		return ResponseEntity.ok(savedUser);
	}
//
//	@PostMapping("/login")
//	public ResponseEntity<String> loginUser(@RequestBody User userData) {
//		User user = userService.authenticateUser(userData.getEmail(), userData.getPassword());
//		if (user != null) {
//			return new ResponseEntity<>("Login successful!", HttpStatus.OK);
//		} else {
//			return new ResponseEntity<>("Invalid email or password.", HttpStatus.UNAUTHORIZED);
//		}
//	}
	
	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> loginUser(@RequestBody User userData) {
	    User user = userService.authenticateUser(userData.getEmail(), userData.getPassword());
	    if (user != null) {
	        Map<String, Object> response = new HashMap<>();
	        response.put("userId", user.getId());
	        response.put("message", "Login successful!");
	        return ResponseEntity.ok(response);
	    } else {
	        return new ResponseEntity<>(Map.of("message", "Invalid email or password."), HttpStatus.UNAUTHORIZED);
	    }
	}

	@GetMapping
	public ResponseEntity<List<User>> getAllUsers() {
	    List<User> users = userService.getAllUsers();
	    return ResponseEntity.ok(users);
	}

	
}
