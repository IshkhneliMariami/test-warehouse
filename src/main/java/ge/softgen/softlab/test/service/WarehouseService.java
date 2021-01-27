package ge.softgen.softlab.test.service;

import ge.softgen.softlab.test.model.Warehouse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface WarehouseService {

    List<Warehouse> getAll();

    Warehouse get(long id);

    Warehouse add(Warehouse warehouse);

    Warehouse update(Warehouse warehouse);

    void delete(long id);

}


