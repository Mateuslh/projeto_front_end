package com.example.tributosV2.model.Contribuinte;

import com.example.tributosV2.model.EntityId;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
public class Contribuinte extends EntityId {

    @Column(name = "codigo", nullable = false, unique = true)
    private Long codigo;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Enumerated(EnumType.STRING)
    @Column(name = "situacao", nullable = false)
    private SituacaoContribuinte situacao = SituacaoContribuinte.ATIVO;

    @Column(name = "endereco")
    private String endereco;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_contribuinte", nullable = false)
    private TipoContribuinte tipoContribuinte;

    @Column(name = "email")
    private String email;

    @Column(name = "cpf_cnpj")
    private String cpfCnpj;
}
