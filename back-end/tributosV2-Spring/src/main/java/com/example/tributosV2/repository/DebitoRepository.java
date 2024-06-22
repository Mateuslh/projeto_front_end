package com.example.tributosV2.repository;

import com.example.tributosV2.model.Debito.Debito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DebitoRepository extends JpaRepository<Debito, Long> {
    List<Debito> findDebitoByContribuinteId(Long id);

    @Query("SELECT d FROM Debito d WHERE YEAR(d.dataPagamento) = :year")
    List<Debito> findByDataPagamentoYear(@Param("year") int year);

    List<Debito> getAllByAno(Long ano);

    List<Debito> findByDataPagamentoIsNullAndAno(Long ano);
}
