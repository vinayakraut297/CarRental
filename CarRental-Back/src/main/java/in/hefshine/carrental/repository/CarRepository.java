package in.hefshine.carrental.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.hefshine.carrental.entity.Car;

import java.util.List;
import java.util.Optional;

public interface CarRepository extends JpaRepository<Car, Long> {
	List<Car> findByAvailability(boolean b);

	Optional<Car> findById(Integer id);
	

}