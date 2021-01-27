package ge.softgen.softlab.test.service;

import ge.softgen.softlab.test.exception.NotFoundException;
import ge.softgen.softlab.test.model.Driver;
import ge.softgen.softlab.test.repository.DriverRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DriverServiceImpl implements DriverService {
    private final DriverRepository driverRepository;

    @Override
    public List<Driver> getAll() {
        return driverRepository.findAll();
    }

    @Override
    public Driver get(long id) {
        String msg = String.format("Driver with id: %d Not Found", id);
        return driverRepository.findById(id).orElseThrow(() -> new NotFoundException(msg));
    }

    @Override
    public Driver add(Driver driver) {
        driver.setId(null);
        return driverRepository.save(driver);
    }

    @Override
    public Driver update(Driver driver) {
        return null;
    }

    @Override
    public void delete(long id) {
        get(id);
        driverRepository.deleteById(id);

    }
}
