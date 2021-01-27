package ge.softgen.softlab.test.controller;

import ge.softgen.softlab.test.model.Driver;
import ge.softgen.softlab.test.service.DriverService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping("/driver")
@RequiredArgsConstructor
public class DriverController {
    private final DriverService driverService;
    @GetMapping
    public List<Driver> getDrivers() {
        return driverService.getAll();
    }

    @GetMapping("{id}")
    public Driver getDriver(@PathVariable long id) {
        return driverService.get(id);
    }

    @PostMapping
    public ResponseEntity<Driver> addDriver(@RequestBody Driver driver) {
        return ResponseEntity.status(HttpStatus.CREATED).body(driverService.add(driver));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDriver(@PathVariable long id) {
        driverService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
