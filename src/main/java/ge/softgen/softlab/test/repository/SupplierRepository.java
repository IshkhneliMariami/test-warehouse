package ge.softgen.softlab.test.repository;

import ge.softgen.softlab.test.model.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}
