package ge.softgen.softlab.test.service;

import ge.softgen.softlab.test.model.Supplier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SupplierService {


    List<Supplier> getAll();

    Supplier get(long id);

    Supplier add(Supplier supplier);

    Supplier update(Supplier supplier);

    void delete(long id);

}

