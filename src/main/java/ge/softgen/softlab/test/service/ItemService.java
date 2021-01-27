package ge.softgen.softlab.test.service;

import ge.softgen.softlab.test.model.Item;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ItemService {
    List<Item> getAll();

    Item get(long id);

    Item add(Item item);

    Item update(Item item);

    void delete(long id);
}
