package ge.softgen.softlab.test.controller;

import ge.softgen.softlab.test.model.Supplier;
import ge.softgen.softlab.test.service.SupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/supplier")
@RequiredArgsConstructor
public class SupplierController {
   private final SupplierService supplierService;


    @GetMapping
    public List<Supplier> getSuppliers() {
        return supplierService.getAll();
    }

    @GetMapping("{id}")
    public Supplier getSupplier(@PathVariable long id) {
        return supplierService.get(id);
    }

    @PostMapping
    public ResponseEntity<Supplier> addSupplier(@RequestBody Supplier supplier) {
        return ResponseEntity.status(HttpStatus.CREATED).body(supplierService.add(supplier));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSupplier(@PathVariable long id) {
        supplierService.delete(id);
        return ResponseEntity.noContent().build();
    }
    @PutMapping
    public Supplier updateSupplier(@PathVariable long id,
                                     @RequestBody Supplier supplier){
        supplier.setId(id);
        return supplierService.update(supplier);
    }
}
