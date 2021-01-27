package ge.softgen.softlab.test.controller;

import ge.softgen.softlab.test.model.StoreItem;
import ge.softgen.softlab.test.service.StoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/store")
@RequiredArgsConstructor
public class StoreController {
    private final StoreService storeService;

    @GetMapping
    public List<StoreItem> getStoreItems() {
        return storeService.getAll();
    }

    @GetMapping("{id}")
    public StoreItem getStoreItem(@PathVariable long id) {
        return storeService.get(id);
    }

    @PostMapping
    public ResponseEntity<StoreItem> addStoreItem(@RequestBody StoreItem storeItem) {
        return ResponseEntity.status(HttpStatus.CREATED).body(storeService.add(storeItem));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStoreItem(@PathVariable long id) {
        storeService.delete(id);
        return ResponseEntity.noContent().build();
    }
    @PutMapping
    public StoreItem updateStoreItem(@PathVariable long id,
                                     @RequestBody StoreItem storeItem){
        storeItem.setId(id);
        return storeService.update(storeItem);
    }

}
