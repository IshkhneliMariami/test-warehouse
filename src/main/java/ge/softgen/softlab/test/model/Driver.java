package ge.softgen.softlab.test.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "drivers")
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "id_number", nullable = false)
    private String idNumber;


    @Column(name = "name", nullable = false)
    private String name;

}
