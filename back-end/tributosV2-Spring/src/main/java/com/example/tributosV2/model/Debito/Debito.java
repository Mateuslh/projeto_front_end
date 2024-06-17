package com.example.tributosV2.model.Debito;

import com.example.tributosV2.model.Contribuinte.Contribuinte;
import com.example.tributosV2.model.EntityId;
import com.example.tributosV2.util.BigDecimalUtils;
import jakarta.persistence.*;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Arrays;

@Entity(name = "Debito")
@Table(name = "Debito")
@Getter
@Setter
public class Debito extends EntityId {

    @ManyToOne
    @JoinColumn(name = "contribuinte_id")
    private Contribuinte contribuinte;

    @Column(name = "credito", nullable = false)
    private String credito;

    @Column(name = "ano", nullable = false)
    private Long ano;

    @Positive
    @Column(name = "nro_parcela", nullable = false)
    private Long parcela;

    @Enumerated(EnumType.STRING)
    @Column(name = "situacao", nullable = false)
    private SituacaoGuia situacao;

    @Positive
    @Column(name = "vl_lancado", nullable = false)
    private BigDecimal vlLancado;

    @PositiveOrZero
    @Column(name = "vl_correcao", nullable = false)
    private BigDecimal vlCorrecao;

    @PositiveOrZero
    @Column(name = "vl_juros", nullable = false)
    private BigDecimal vlJuros;

    @PositiveOrZero
    @Column(name = "vl_multa", nullable = false)
    private BigDecimal vlMulta;

    @PositiveOrZero
    @Column(name = "vl_desconto", nullable = false)
    private BigDecimal vlDesconto;

    @PositiveOrZero
    @Column(name = "vl_beneficio", nullable = false)
    private BigDecimal vlBeneficio;

    public BigDecimal getVlDescontos() {
        return BigDecimalUtils.somaLista(Arrays.asList(vlBeneficio, vlDesconto, vlMulta, vlJuros));
    }

    public BigDecimal getVlAcressimos() {
        return BigDecimalUtils.somaLista(Arrays.asList(vlCorrecao, vlLancado));
    }

    public BigDecimal getVlTotal() {
        return getVlAcressimos().subtract(getVlDescontos());
    }

}
