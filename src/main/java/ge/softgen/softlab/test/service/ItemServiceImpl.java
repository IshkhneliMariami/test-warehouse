package ge.softgen.softlab.test.service;

import ge.softgen.softlab.test.exception.NotFoundException;
import ge.softgen.softlab.test.model.Item;
import ge.softgen.softlab.test.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {
    private final ItemRepository itemRepository;

    @Override
    public List<Item> getAll() {
        return itemRepository.findAll();
    }

    @Override
    public Item get(long id) {
        String msg = String.format("Item with id: %d Not Found", id);
        return itemRepository.findById(id).orElseThrow(() -> new NotFoundException(msg));
    }

    @Override
    public Item add(Item item) {
        item.setId(null);
        return itemRepository.save(item);
    }

    @Override
    public Item update(Item item) {
        return null;
    }

    @Override
    public void delete(long id) {
        get(id);
        itemRepository.deleteById(id);

    }
}
