package ge.softgen.softlab.test.service;

import ge.softgen.softlab.test.model.Transport;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TransportService {

    List<Transport> getAll();

    Transport get(long id);

    Transport add(Transport transport);

    Transport update(Transport transport);

    void delete(long id) ;

}
