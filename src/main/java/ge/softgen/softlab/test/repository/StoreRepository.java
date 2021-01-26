package ge.softgen.softlab.test.repository;

import ge.softgen.softlab.test.model.StoreItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface StoreRepository extends JpaRepository<StoreItem, Long> {
}
