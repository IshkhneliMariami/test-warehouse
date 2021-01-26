package ge.softgen.softlab.test.model;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "store_items")
public class StoreItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "store")
    private Long store;

    @Column(name = "supplier")
    private String supplier;

    @Column(name = "model", nullable = false)
    private String model;

    @Column(name = "brand", nullable = false)
    private String brand;

    @Column(name = "quantity", nullable = false)
    private Long quantity;

    @Column(name = "price", nullable = false)
    private Long price;

//    @ManyToMany
//    @JoinTable(
//            name = "store_itmes",
//            joinColumns = @JoinColumn(name = "id"),
//            inverseJoinColumns = @JoinColumn(name = "id")
//    )
//    private List<Warehouse> warehouses;


//    @Column(name = "create_date", nullable = false,
//            updatable = false, columnDefinition = "timestamp default now()")
//    private LocalDateTime createDate;



}
