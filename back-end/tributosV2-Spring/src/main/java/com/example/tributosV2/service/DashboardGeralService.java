package com.example.tributosV2.service;

import com.example.tributosV2.model.Dashboard.DashboardGeral;
import com.example.tributosV2.model.Dashboard.DashboardGeralFaturamento;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class DashboardGeralService {

    @Autowired
    private DebitoService debitoService;

    @Autowired
    private ContribuienteService contribuienteService;

    public DashboardGeral getDashboardGeral(int anoBase, int anoAtras) {

         BigDecimal faturamentoEmAberto = debitoService.getValorEmAbertoAno(anoBase);

        BigDecimal faturamentoExecutado = debitoService.getValorArreacadadoAno(anoBase);

        Long totalContribuintes = contribuienteService.countContribuiente();

        List<DashboardGeralFaturamento> balancoAnual = new ArrayList<>();

        for (int anoAtual = anoBase - anoAtras; anoAtual <= anoBase; anoAtual++) {
            DashboardGeralFaturamento faturamento = new DashboardGeralFaturamento();

            faturamento.setAno(anoAtual);
            faturamento.setFaturado(debitoService.getValorArreacadadoAno(anoAtual));
            faturamento.setLancado(debitoService.getValorLancadoAno(anoAtual));

            balancoAnual.add(faturamento);
        }
        return new DashboardGeral(faturamentoEmAberto, faturamentoExecutado, totalContribuintes, balancoAnual);
    }
}
