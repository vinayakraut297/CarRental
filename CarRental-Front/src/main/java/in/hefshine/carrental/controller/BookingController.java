package in.hefshine.carrental.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import in.hefshine.carrental.entity.Booking;
import in.hefshine.carrental.service.BookingService;

import java.util.List;

@RestController
@RequestMapping("/bookings")
@CrossOrigin
public class BookingController {

	@Autowired
	private BookingService bookingService;
	
	@PostMapping("/book")
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
        System.out.println("Received Booking: " + booking);
        Booking savedBooking = bookingService.createBooking(booking);
        return ResponseEntity.ok(savedBooking);
    }

	@GetMapping("/user/{userId}")
	public List<Booking> getBookingsByUserId(@PathVariable Long userId) {
		return bookingService.getBookingsByUserId(userId);
	}

	@GetMapping("/all")
	public List<Booking> getallBookings() {
		return bookingService.getallBookings();
	}

}