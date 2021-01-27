package ge.softgen.softlab.test.service;

import ge.softgen.softlab.test.model.Driver;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DriverService {
    List<Driver> getAll();

    Driver get(long id);

    Driver add(Driver driver);

    Driver update(Driver driver);

    void delete(long id);
}
