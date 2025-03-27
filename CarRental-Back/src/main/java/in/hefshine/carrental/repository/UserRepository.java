package in.hefshine.carrental.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.hefshine.carrental.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}