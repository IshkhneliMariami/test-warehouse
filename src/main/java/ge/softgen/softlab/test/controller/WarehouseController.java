package ge.softgen.softlab.test.controller;

import ge.softgen.softlab.test.model.Warehouse;
import ge.softgen.softlab.test.service.WarehouseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/warehouse")
@RequiredArgsConstructor
public class WarehouseController {
    private final WarehouseService warehouseService;


    @GetMapping
    public List<Warehouse> getWarehouse() {
        return warehouseService.getAll();
    }

    @GetMapping("{id}")
    public Warehouse getWarehouse(@PathVariable long id) {
        return warehouseService.get(id);
    }

    @PostMapping
    public ResponseEntity<Warehouse> addWarehouse(@RequestBody Warehouse warehouse) {
        return ResponseEntity.status(HttpStatus.CREATED).body(warehouseService.add(warehouse));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWarehouse(@PathVariable long id) {
        warehouseService.delete(id);
        return ResponseEntity.noContent().build();
    }
    @PutMapping
    public Warehouse updateWarehouse(@PathVariable long id,
                                   @RequestBody Warehouse warehouse){
        warehouse.setId(id);
        return warehouseService.update(warehouse);
    }
}
