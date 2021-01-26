package ge.softgen.softlab.test.service;

import ge.softgen.softlab.test.exception.NotFoundException;
import ge.softgen.softlab.test.model.StoreItem;
import ge.softgen.softlab.test.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StoreServiceImpl implements StoreService {
    private final StoreRepository storeRepository;


    @Override
    public List<StoreItem> getAll() {
        return storeRepository.findAll();
    }

    @Override
    public StoreItem get(long id) {
        String msg = String.format("Item with id: %d Not Found", id);
        return storeRepository.findById(id).orElseThrow(() -> new NotFoundException(msg));
    }


    @Override
    public StoreItem add(StoreItem storeItem) {
        storeItem.setId(null);
        return storeRepository.save(storeItem);
    }

    @Override
    public StoreItem update(StoreItem storeItem) {
        return null;
    }

    @Override
    public void delete(long id) {
        get(id);
        storeRepository.deleteById(id);

    }
}
