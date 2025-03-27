package in.hefshine.carrental.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.hefshine.carrental.entity.User;
import in.hefshine.carrental.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    public User authenticateUser(String email, String password) {
    	User user = userRepository.findByEmail(email);
		if (user != null && user.getPassword().equals(password)) {
			return user;
		}
		return null;
	}
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
