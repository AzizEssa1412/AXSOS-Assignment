// test file completed

package main.java.com.example.save_travels.repositories;


import com.example.savetravels.Models.Travel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TravelRepository extends CrudRepository<Travel, Long> {
    List<Travel> findAll();
}