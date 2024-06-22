package com.example.tributosV2.model.Dashboard;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
public class DashboardGeral {

    private BigDecimal valorLancadoEmAberto;
    private BigDecimal valorLancadoPago;
    private Long totalContribuinteCadastrados;
    private List<DashboardGeralFaturamento> balancoAnual;

}
