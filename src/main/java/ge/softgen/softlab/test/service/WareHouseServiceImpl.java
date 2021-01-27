package ge.softgen.softlab.test.service;

import ge.softgen.softlab.test.exception.NotFoundException;
import ge.softgen.softlab.test.model.Warehouse;
import ge.softgen.softlab.test.repository.WarehouseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class WareHouseServiceImpl implements WarehouseService {
    private final WarehouseRepository warehouseRepository;

    @Override
    public List<Warehouse> getAll() {
        return warehouseRepository.findAll();
    }

    @Override
    public Warehouse get(long id) {
        String msg = String.format("warehouse with id: %d Not Found", id);
        return warehouseRepository.findById(id).orElseThrow(() -> new NotFoundException(msg));
    }

    @Override
    public Warehouse add(Warehouse warehouse) {
        warehouse.setId(null);
        return warehouseRepository.save(warehouse);
    }

    @Override
    public Warehouse update(Warehouse warehouse) {
        warehouse.setId(null);
        return warehouseRepository.save(warehouse);
    }

    @Override
    public void delete(long id) {
        get(id);
        warehouseRepository.deleteById(id);

    }
}
