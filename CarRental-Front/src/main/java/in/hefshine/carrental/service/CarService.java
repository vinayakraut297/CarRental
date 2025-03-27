package in.hefshine.carrental.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.hefshine.carrental.entity.Car;
import in.hefshine.carrental.repository.CarRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CarService {
    
    @Autowired
    private CarRepository carRepository;

    public List<Car> getAllCars() {
        return carRepository.findAll();
    }
    

    public List<Car> getAvailableCars() {
        return carRepository.findByAvailability(true);
    }

    public Car addCar(Car car) {
        return carRepository.save(car);
    }
    
    public Car updateCar(Long id, Car updatedCar) {
        Optional<Car> existingCar = carRepository.findById(id);
        if (existingCar.isPresent()) {
            Car car = existingCar.get();
            car.setModel(updatedCar.getModel());
            car.setBrand(updatedCar.getBrand());
            car.setPriceperday(updatedCar.getPriceperday());
            car.setFueltype(updatedCar.getFueltype());
            car.setImage(updatedCar.getImage());
            car.setAvailability(updatedCar.isAvailability());
            return carRepository.save(car);
        }
        return null;
    }

    public void deleteCar(long id) {
        carRepository.deleteById(id);
    }
    public List<String> getAllBrands() {
        return carRepository.findAll()
                            .stream()
                            .map(Car::getBrand)
                            .distinct()
                            .collect(Collectors.toList());
    }

}