package ge.softgen.softlab.test.repository;

import ge.softgen.softlab.test.model.Transport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransportRepository extends JpaRepository <Transport, Long> {
}
