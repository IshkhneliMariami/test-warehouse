package ge.softgen.softlab.test.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "driver", nullable = false)
    private String driver;


    @Column(name = "transport", nullable = false)
    private String transport;



    @Column(name = "quantity", nullable = false)
    private Long quantity;


}
