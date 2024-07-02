INSERT INTO public.contribuinte (codigo, cpf_cnpj, email, endereco, nome, situacao, tipo_contribuinte)
VALUES (1, '123.456.789-00', 'joao@gmail.com', 'Rua A, 123', 'João Silva', 'ATIVO', 'PESSOA_FISICA');

INSERT INTO public.contribuinte (codigo, cpf_cnpj, email, endereco, nome, situacao, tipo_contribuinte)
VALUES (2, '12.345.678/0001-00', 'empresa@empresa.com', 'Av. Principal, 456', 'Empresa XYZ', 'ATIVO', 'PESSOA_JURIDICA');

INSERT INTO public.contribuinte (codigo, cpf_cnpj, email, endereco, nome, situacao, tipo_contribuinte)
VALUES (3, '987.654.321-00', 'maria@gmail.com', 'Rua B, 789', 'Maria Souza', 'DESATIVADO', 'PESSOA_FISICA');

INSERT INTO public.contribuinte (codigo, cpf_cnpj, email, endereco, nome, situacao, tipo_contribuinte)
VALUES (4, '98.765.432/0001-00', 'empresa2@empresa.com', 'Av. Secundária, 789', 'Empresa ABC', 'DESATIVADO', 'PESSOA_JURIDICA');

INSERT INTO public.contribuinte (codigo, cpf_cnpj, endereco, nome, situacao, tipo_contribuinte)
VALUES (5, '111.222.333-44', 'Rua C, 456', 'Fulano de Tal', 'ATIVO', 'PESSOA_FISICA');


-- Ano 2024
INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (100.00, 5.00, 0.00, 2.50, 107.50, 0.00, 2024, 1, NULL, 1, 'Crédito A', 'ABERTO');

INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (200.00, 10.00, 0.00, 5.00, 215.00, 0.00, 2024, 4, '2024-06-15 10:00:00', 1, 'Crédito B', 'PAGA');

INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (150.00, 7.50, 0.00, 3.75, 161.25, 0.00, 2024, 2, NULL, 1, 'Crédito C', 'CANCELADA');

-- Ano 2023
INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (300.00, 15.00, 0.00, 7.50, 322.50, 0.00, 2023, 4, '2023-07-20 09:30:00', 1, 'Crédito D', 'PAGA');

INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (250.00, 12.50, 0.00, 6.25, 268.75, 0.00, 2023, 1, NULL, 1, 'Crédito E', 'ABERTO');

-- Ano 2022
INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (400.00, 20.00, 0.00, 10.00, 430.00, 0.00, 2022, 1, '2022-04-10 14:45:00', 1, 'Crédito F', 'PAGA');

INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (350.00, 17.50, 0.00, 8.75, 376.25, 0.00, 2022, 2, NULL, 1, 'Crédito G', 'CANCELADA');

-- Ano 2021
INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (500.00, 25.00, 0.00, 12.50, 537.50, 0.00, 2021, 5, NULL, 1, 'Crédito H', 'ABERTO');

INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (450.00, 22.50, 0.00, 11.25, 483.75, 0.00, 2021, 2, '2021-09-05 11:00:00', 1, 'Crédito I', 'PAGA');

-- Ano 2020
INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (600.00, 30.00, 0.00, 15.00, 645.00, 0.00, 2020, 1, NULL, 1, 'Crédito J', 'CANCELADA');

INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (550.00, 27.50, 0.00, 13.75, 591.25, 0.00, 2020, 4, '2020-03-15 08:30:00', 1, 'Crédito K', 'ABERTO');

-- Ano 2024
INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (120.00, 6.00, 0.00, 3.00, 129.00, 0.00, 2024, 2, NULL, 1, 'Crédito L', 'ABERTO');

INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (250.00, 12.50, 0.00, 6.25, 268.75, 0.00, 2024, 5, '2024-08-10 15:30:00', 1, 'Crédito M', 'PAGA');

INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (180.00, 9.00, 0.00, 4.50, 193.50, 0.00, 2024, 2, NULL, 1, 'Crédito N', 'CANCELADA');

-- Ano 2023
INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (320.00, 16.00, 0.00, 8.00, 344.00, 0.00, 2023, 4, '2023-05-20 14:00:00', 1, 'Crédito O', 'PAGA');

INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (280.00, 14.00, 0.00, 7.00, 301.00, 0.00, 2023, 2, NULL, 1, 'Crédito P', 'ABERTO');

-- Ano 2022
INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (420.00, 21.00, 0.00, 10.50, 451.50, 0.00, 2022, 5, NULL, 1, 'Crédito Q', 'ABERTO');

INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (380.00, 19.00, 0.00, 9.50, 408.50, 0.00, 2022, 1, '2022-09-15 11:45:00', 1, 'Crédito R', 'PAGA');

-- Ano 2021
INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (520.00, 26.00, 0.00, 13.00, 559.00, 0.00, 2021, 2, NULL, 1, 'Crédito S', 'ABERTO');

INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (480.00, 24.00, 0.00, 12.00, 516.00, 0.00, 2021, 3, '2021-12-10 09:00:00', 1, 'Crédito T', 'PAGA');

-- Ano 2020
INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (620.00, 31.00, 0.00, 15.50, 666.50, 0.00, 2020, 1, NULL, 1, 'Crédito U', 'CANCELADA');

INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (580.00, 29.00, 0.00, 14.50, 623.50, 0.00, 2020, 4, '2020-06-20 08:00:00', 1, 'Crédito V', 'ABERTO');


INSERT INTO public.debito (vl_beneficio, vl_correcao, vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, data_pagamento, nro_parcela, credito, situacao)
VALUES (700.00, 35.00, 0.00, 17.50, 752.50, 0.00, 2019, 2, NULL, 1, 'Crédito W', 'ABERTO');
