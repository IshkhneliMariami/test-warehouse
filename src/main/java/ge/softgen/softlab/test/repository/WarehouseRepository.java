package ge.softgen.softlab.test.repository;

import ge.softgen.softlab.test.model.Warehouse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WarehouseRepository extends JpaRepository<Warehouse, Long> {
}
