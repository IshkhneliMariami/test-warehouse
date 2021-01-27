package ge.softgen.softlab.test.controller;

import ge.softgen.softlab.test.model.Item;
import ge.softgen.softlab.test.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/item")
@RequiredArgsConstructor
public class ItemController {
    private final ItemService itemService;

    @GetMapping
    public List<Item> getItems() {
        return itemService.getAll();
    }

    @GetMapping("{id}")
    public Item getItem(@PathVariable long id) {
        return itemService.get(id);
    }

    @PostMapping
    public ResponseEntity<Item> addItem(@RequestBody Item item) {
        return ResponseEntity.status(HttpStatus.CREATED).body(itemService.add(item));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable long id) {
        itemService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
