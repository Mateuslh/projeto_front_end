package com.example.tributosV2.repository;

import com.example.tributosV2.model.Contribuinte.Contribuinte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContribuienteRepository extends JpaRepository<Contribuinte, Long> {
}