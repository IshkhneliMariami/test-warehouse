package ge.softgen.softlab.test.service;

import ge.softgen.softlab.test.model.StoreItem;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StoreService {

    List<StoreItem> getAll();

    StoreItem get(long id);

    StoreItem add(StoreItem storeItem);

    StoreItem update(StoreItem storeItem);

    void delete(long id);

}
