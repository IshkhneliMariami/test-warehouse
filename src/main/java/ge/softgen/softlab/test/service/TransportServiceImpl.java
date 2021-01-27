package ge.softgen.softlab.test.service;

import ge.softgen.softlab.test.exception.NotFoundException;
import ge.softgen.softlab.test.model.Transport;
import ge.softgen.softlab.test.repository.TransportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TransportServiceImpl implements TransportService {
    private final TransportRepository transportRepository;

    @Override
    public List<Transport> getAll() {
       return transportRepository.findAll();
    }

    @Override
    public Transport get(long id) {
        String msg = String.format("transport with id: %d Not Found", id);
        return transportRepository.findById(id).orElseThrow(() -> new NotFoundException(msg));
    }

    @Override
    public Transport add(Transport transport) {
        transport.setId(null);
        return transportRepository.save(transport);
    }

    @Override
    public Transport update(Transport transport) {
        return null;
    }

    @Override
    public void delete(long id) {
        get(id);
        transportRepository.deleteById(id);

    }
}
