package com.example.tributosV2.service;

import com.example.tributosV2.exception.ValidationException;
import com.example.tributosV2.model.Debito.Debito;
import com.example.tributosV2.repository.DebitoRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class DebitoService extends AbstractCadastralService<Debito, DebitoRepository> {

    public void validate(Debito debito) throws ValidationException {

        if (debito.getVlTotal().compareTo(BigDecimal.ZERO) < 0) {
            throw new ValidationException("O valor final deve ser maior que 0.");
        }
    }
}
