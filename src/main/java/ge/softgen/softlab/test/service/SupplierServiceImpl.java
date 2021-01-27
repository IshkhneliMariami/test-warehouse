package ge.softgen.softlab.test.service;

import ge.softgen.softlab.test.exception.NotFoundException;
import ge.softgen.softlab.test.model.Supplier;
import ge.softgen.softlab.test.repository.SupplierRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SupplierServiceImpl implements SupplierService{
    private final SupplierRepository supplierRepository;

    @Override
    public List<Supplier> getAll() {
        return supplierRepository.findAll();
    }

    @Override
    public Supplier get(long id) {
        String msg = String.format("supplier with id: %d Not Found", id);
        return supplierRepository.findById(id).orElseThrow(() -> new NotFoundException(msg));
    }

    @Override
    public Supplier add(Supplier supplier) {
        supplier.setId(null);
        return supplierRepository.save(supplier);
    }

    @Override
    public Supplier update(Supplier supplier) {
        return null;
    }

    @Override
    public void delete(long id) {
        get(id);
        supplierRepository.deleteById(id);
    }
}
