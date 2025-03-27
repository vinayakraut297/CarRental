package in.hefshine.carrental.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import in.hefshine.carrental.entity.Booking;
import in.hefshine.carrental.entity.Car;
import in.hefshine.carrental.repository.BookingRepository;
import in.hefshine.carrental.repository.CarRepository;
import in.hefshine.carrental.repository.UserRepository;

@Service
public class BookingService {

	@Autowired
	private BookingRepository bookingRepository;

	 @Autowired
	    private CarRepository carRepository;
	 
	 @Autowired
	    private UserRepository userRepository;
	 
	public Booking bookCar(Booking booking) {
		return bookingRepository.save(booking);
	}
	
	public Booking createBooking(Booking booking) {
        Car car = carRepository.findById(booking.getCar().getId()).orElse(null);
        if (car == null) {
            throw new RuntimeException("Car not found");
        }
        
        booking.setCar(car); 
        return bookingRepository.save(booking);
    }

	public List<Booking> getBookingsByUserId(Long userId) {
		return bookingRepository.findByUserId(userId);
	}

	public List<Booking> getallBookings() {
		return bookingRepository.findAll();
	}

}
