package com.example.save_travels.services;


import src.main.java.com.example.save_travels.models.Travel;
import com.example.save_travels.repositories.TravelRepository;

import scala.reflect.macros.contexts.Traces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TravelServices {
    @Autowired
    TravelRepository travelRepository;


    public void createTravel(Travel Travel) {
        travelRepository.save(Travel);
    }

    public List<Travel> getAllTravels() {
        return travelRepository.findAll();
    }

    public Travel getTravelById(Long id) {
        Optional<Traces> optional = travelRepository.findById(id);
        Travel Travel = optional.orElse(null);
        return Travel;
    }

    public Travel updateTravel(Long id, Travel Travel) {
        Travel existingBurger = travelRepository.findById(id).orElse(null);

        if (existingBurger != null) {
        existingBurger.setExpenseName(Travel.getExpenseName());
        existingBurger.setVendor(Travel.getVendor());
        existingBurger.setAmount(Travel.getAmount());
        existingBurger.setDescription(Travel.getDescription());
        return travelRepository.save(existingBurger);
    } else {
            return null;
        }
    }

    public void deleteTravel(Long id) {
        travelRepository.deleteById(id);
    }
}