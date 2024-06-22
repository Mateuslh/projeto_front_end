package com.example.tributosV2.service;

import com.example.tributosV2.exception.ValidationException;
import com.example.tributosV2.model.Debito.Debito;
import com.example.tributosV2.repository.DebitoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.sound.midi.Soundbank;
import java.math.BigDecimal;
import java.net.SocketOption;
import java.util.List;

@Service
@AllArgsConstructor
public class DebitoService extends AbstractCadastralService<Debito, DebitoRepository> {

    protected DebitoRepository debitoRepository;

    public BigDecimal getValorArreacadadoAno(int ano) {
        return sumValorTotalDebitos(debitoRepository.findByDataPagamentoYear(ano));
    }

    public BigDecimal getValorLancadoAno(int ano) {
        return sumValorTotalDebitos(debitoRepository.getAllByAno((long) ano));
    }

    public BigDecimal getValorEmAbertoAno(int ano) {
        return sumValorTotalDebitos(debitoRepository.findByDataPagamentoIsNullAndAno((long) ano));
    }

    public BigDecimal sumValorTotalDebitos(List<Debito> debitos) {
        BigDecimal valorTotal = BigDecimal.ZERO;
        for (Debito debito : debitos) {
            valorTotal = valorTotal.add(debito.getVlTotal());
        }
        return valorTotal;
    }

    public void validate(Debito debito) throws ValidationException {

        if (debito.getVlTotal().compareTo(BigDecimal.ZERO) < 0) {
            throw new ValidationException("O valor final deve ser maior que 0.");
        }
    }
}
