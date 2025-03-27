package in.hefshine.carrental.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.hefshine.carrental.entity.Booking;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
    List<Booking> findByUserId(Long userId);
}