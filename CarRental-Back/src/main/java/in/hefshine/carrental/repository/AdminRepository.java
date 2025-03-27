package in.hefshine.carrental.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import in.hefshine.carrental.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
	 Admin findByEmail(String email);
}
