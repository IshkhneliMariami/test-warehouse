package ge.softgen.softlab.test.repository;


import ge.softgen.softlab.test.model.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepository extends JpaRepository<Driver, Long> {
}
