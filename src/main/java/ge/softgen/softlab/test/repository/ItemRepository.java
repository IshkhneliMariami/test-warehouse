package ge.softgen.softlab.test.repository;

import ge.softgen.softlab.test.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
