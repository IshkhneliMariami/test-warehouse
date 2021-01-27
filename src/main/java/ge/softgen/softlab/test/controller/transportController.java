package ge.softgen.softlab.test.controller;

import ge.softgen.softlab.test.model.Transport;
import ge.softgen.softlab.test.service.TransportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/transport")
@RequiredArgsConstructor
public class transportController {
    private final TransportService transportService;


    @GetMapping
    public List<Transport> getTransports() {
        return transportService.getAll();
    }

    @GetMapping("{id}")
    public Transport getTransport(@PathVariable long id) {
        return transportService.get(id);
    }

    @PostMapping
    public ResponseEntity<Transport> addTransport(@RequestBody Transport transport) {
        return ResponseEntity.status(HttpStatus.CREATED).body(transportService.add(transport));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransport(@PathVariable long id) {
        transportService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping
    public Transport updateTransport(@PathVariable long id,
                                     @RequestBody Transport transport) {
//        transport.setId(id);
//        return TransportService.update(transport);
          return null;
    }
}
