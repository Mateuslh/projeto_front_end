package com.example.tributosV2.model.Dashboard;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class DashboardGeralFaturamento {
    private int ano;
    private BigDecimal faturado;
    private BigDecimal lancado;
}
