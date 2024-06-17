PGDMP  8                    |         
   tributosV2    16.1    16.1 H    B           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            C           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            D           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            E           1262    16817 
   tributosV2    DATABASE     �   CREATE DATABASE "tributosV2" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE "tributosV2";
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            F           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    18836    contribuinte    TABLE     �  CREATE TABLE public.contribuinte (
    codigo bigint NOT NULL,
    id bigint NOT NULL,
    pessoa_fisica_id bigint,
    pessoa_juridica_id bigint,
    email character varying(255),
    endereco character varying(255),
    nome character varying(255) NOT NULL,
    situacao character varying(255) NOT NULL,
    CONSTRAINT contribuinte_situacao_check CHECK (((situacao)::text = ANY ((ARRAY['ATIVO'::character varying, 'DESATIVADO'::character varying])::text[])))
);
     DROP TABLE public.contribuinte;
       public         heap    admin    false    4            �            1259    18835    contribuinte_id_seq    SEQUENCE     |   CREATE SEQUENCE public.contribuinte_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.contribuinte_id_seq;
       public          admin    false    216    4            G           0    0    contribuinte_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.contribuinte_id_seq OWNED BY public.contribuinte.id;
          public          admin    false    215            �            1259    18852    credito    TABLE     �  CREATE TABLE public.credito (
    id bigint NOT NULL,
    abreviatura character varying(255) NOT NULL,
    descricao character varying(255) NOT NULL,
    tipo_cadastro character varying(255),
    CONSTRAINT credito_tipo_cadastro_check CHECK (((tipo_cadastro)::text = ANY ((ARRAY['CONTRIBUICAO_MELHORIAS'::character varying, 'CONTRIBUINTE'::character varying, 'ECONOMICOS'::character varying, 'ECONOMICO_ATIVIDADE'::character varying, 'IMOVEIS'::character varying, 'RECEITAS_DIVERSAS'::character varying, 'PARCELAMENTOS'::character varying, 'TRANSFERENCIA_IMOVEIS'::character varying, 'NOTA_FISCAL_AVULSA'::character varying, 'AUTO_INFRACAO'::character varying, 'PROJETOS'::character varying, 'NOTIFICACOES_ISS'::character varying])::text[])))
);
    DROP TABLE public.credito;
       public         heap    admin    false    4            �            1259    18851    credito_id_seq    SEQUENCE     w   CREATE SEQUENCE public.credito_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.credito_id_seq;
       public          admin    false    218    4            H           0    0    credito_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.credito_id_seq OWNED BY public.credito.id;
          public          admin    false    217            �            1259    18862    debito    TABLE     F  CREATE TABLE public.debito (
    vl_beneficio numeric(38,2) NOT NULL,
    "vl_correção" numeric(38,2) NOT NULL,
    vl_desconto numeric(38,2) NOT NULL,
    vl_juros numeric(38,2) NOT NULL,
    vl_lancado numeric(38,2) NOT NULL,
    vl_multa numeric(38,2) NOT NULL,
    ano bigint NOT NULL,
    contribuinte_id bigint,
    credito_id bigint NOT NULL,
    economico_id bigint,
    id bigint NOT NULL,
    imovel_id bigint,
    nro_parcela bigint NOT NULL,
    referente character varying(255) NOT NULL,
    situacao character varying(255) NOT NULL,
    CONSTRAINT debito_referente_check CHECK (((referente)::text = ANY ((ARRAY['CONTRIBUINTE'::character varying, 'ECONOMICOS'::character varying, 'IMOVEIS'::character varying])::text[]))),
    CONSTRAINT debito_situacao_check CHECK (((situacao)::text = ANY ((ARRAY['ABERTO'::character varying, 'PAGA'::character varying, 'CANCELADA'::character varying, 'SUSPENSA'::character varying, 'INSCRITA_ENGLOBADA'::character varying, 'INSCRITA'::character varying, 'ISENTA'::character varying, 'ENGLOBADA'::character varying, 'PAGA_ENGLOBADA'::character varying, 'SIMULADA'::character varying, 'PARCELADA'::character varying, 'ELIMINADA'::character varying, 'PAGA_PARCELAMENTO'::character varying, 'PRESCRITA'::character varying, 'REMIDA'::character varying, 'ABAIXO_LIMITE'::character varying])::text[])))
);
    DROP TABLE public.debito;
       public         heap    admin    false    4            �            1259    18861    debito_id_seq    SEQUENCE     v   CREATE SEQUENCE public.debito_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.debito_id_seq;
       public          admin    false    4    220            I           0    0    debito_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.debito_id_seq OWNED BY public.debito.id;
          public          admin    false    219            �            1259    18873 	   economico    TABLE     �  CREATE TABLE public.economico (
    is_autonomo boolean,
    codigo bigint NOT NULL,
    contribuinte_id bigint,
    dh_inicio_atividade timestamp(6) without time zone,
    id bigint NOT NULL,
    cpf_cnpj character varying(255),
    email character varying(255),
    endereco character varying(255),
    nome character varying(255) NOT NULL,
    situacao character varying(255),
    CONSTRAINT economico_situacao_check CHECK (((situacao)::text = ANY ((ARRAY['ATIVADO'::character varying, 'INICIO'::character varying, 'REINICIO'::character varying, 'BAIXADO'::character varying, 'SUSPENSO'::character varying, 'CANCELADO'::character varying, 'PROVISORIO'::character varying, 'IRREGULAR'::character varying, 'REGULAR'::character varying])::text[])))
);
    DROP TABLE public.economico;
       public         heap    admin    false    4            �            1259    18872    economico_id_seq    SEQUENCE     y   CREATE SEQUENCE public.economico_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.economico_id_seq;
       public          admin    false    222    4            J           0    0    economico_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.economico_id_seq OWNED BY public.economico.id;
          public          admin    false    221            �            1259    18885    imovel    TABLE     �  CREATE TABLE public.imovel (
    campo1 bigint,
    campo2 bigint,
    campo3 bigint,
    campo4 bigint,
    codigo bigint NOT NULL,
    contribuinte_id bigint,
    id bigint NOT NULL,
    endereco character varying(255),
    imovel_tipo character varying(255) NOT NULL,
    CONSTRAINT imovel_imovel_tipo_check CHECK (((imovel_tipo)::text = ANY ((ARRAY['RURAL'::character varying, 'URBANO'::character varying])::text[])))
);
    DROP TABLE public.imovel;
       public         heap    admin    false    4            �            1259    18884    imovel_id_seq    SEQUENCE     v   CREATE SEQUENCE public.imovel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.imovel_id_seq;
       public          admin    false    4    224            K           0    0    imovel_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.imovel_id_seq OWNED BY public.imovel.id;
          public          admin    false    223            �            1259    18897    pessoa_fisica    TABLE       CREATE TABLE public.pessoa_fisica (
    codigo bigint NOT NULL,
    id bigint NOT NULL,
    cpf character varying(255) NOT NULL,
    email character varying(255),
    endereco character varying(255),
    nome character varying(255) NOT NULL,
    rg character varying(255) NOT NULL
);
 !   DROP TABLE public.pessoa_fisica;
       public         heap    admin    false    4            �            1259    18896    pessoa_fisica_id_seq    SEQUENCE     }   CREATE SEQUENCE public.pessoa_fisica_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.pessoa_fisica_id_seq;
       public          admin    false    4    226            L           0    0    pessoa_fisica_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.pessoa_fisica_id_seq OWNED BY public.pessoa_fisica.id;
          public          admin    false    225            �            1259    18912    pessoa_juridica    TABLE     &  CREATE TABLE public.pessoa_juridica (
    codigo bigint NOT NULL,
    id bigint NOT NULL,
    cnpj character varying(255) NOT NULL,
    email character varying(255),
    endereco character varying(255),
    inscricao_estadual character varying(255),
    nome character varying(255) NOT NULL
);
 #   DROP TABLE public.pessoa_juridica;
       public         heap    admin    false    4            �            1259    18911    pessoa_juridica_id_seq    SEQUENCE        CREATE SEQUENCE public.pessoa_juridica_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.pessoa_juridica_id_seq;
       public          admin    false    228    4            M           0    0    pessoa_juridica_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.pessoa_juridica_id_seq OWNED BY public.pessoa_juridica.id;
          public          admin    false    227            n           2604    18839    contribuinte id    DEFAULT     r   ALTER TABLE ONLY public.contribuinte ALTER COLUMN id SET DEFAULT nextval('public.contribuinte_id_seq'::regclass);
 >   ALTER TABLE public.contribuinte ALTER COLUMN id DROP DEFAULT;
       public          admin    false    216    215    216            o           2604    18855 
   credito id    DEFAULT     h   ALTER TABLE ONLY public.credito ALTER COLUMN id SET DEFAULT nextval('public.credito_id_seq'::regclass);
 9   ALTER TABLE public.credito ALTER COLUMN id DROP DEFAULT;
       public          admin    false    217    218    218            p           2604    18865 	   debito id    DEFAULT     f   ALTER TABLE ONLY public.debito ALTER COLUMN id SET DEFAULT nextval('public.debito_id_seq'::regclass);
 8   ALTER TABLE public.debito ALTER COLUMN id DROP DEFAULT;
       public          admin    false    220    219    220            q           2604    18876    economico id    DEFAULT     l   ALTER TABLE ONLY public.economico ALTER COLUMN id SET DEFAULT nextval('public.economico_id_seq'::regclass);
 ;   ALTER TABLE public.economico ALTER COLUMN id DROP DEFAULT;
       public          admin    false    222    221    222            r           2604    18888 	   imovel id    DEFAULT     f   ALTER TABLE ONLY public.imovel ALTER COLUMN id SET DEFAULT nextval('public.imovel_id_seq'::regclass);
 8   ALTER TABLE public.imovel ALTER COLUMN id DROP DEFAULT;
       public          admin    false    223    224    224            s           2604    18900    pessoa_fisica id    DEFAULT     t   ALTER TABLE ONLY public.pessoa_fisica ALTER COLUMN id SET DEFAULT nextval('public.pessoa_fisica_id_seq'::regclass);
 ?   ALTER TABLE public.pessoa_fisica ALTER COLUMN id DROP DEFAULT;
       public          admin    false    226    225    226            t           2604    18915    pessoa_juridica id    DEFAULT     x   ALTER TABLE ONLY public.pessoa_juridica ALTER COLUMN id SET DEFAULT nextval('public.pessoa_juridica_id_seq'::regclass);
 A   ALTER TABLE public.pessoa_juridica ALTER COLUMN id DROP DEFAULT;
       public          admin    false    228    227    228            3          0    18836    contribuinte 
   TABLE DATA           y   COPY public.contribuinte (codigo, id, pessoa_fisica_id, pessoa_juridica_id, email, endereco, nome, situacao) FROM stdin;
    public          admin    false    216   `       5          0    18852    credito 
   TABLE DATA           L   COPY public.credito (id, abreviatura, descricao, tipo_cadastro) FROM stdin;
    public          admin    false    218    `       7          0    18862    debito 
   TABLE DATA           �   COPY public.debito (vl_beneficio, "vl_correção", vl_desconto, vl_juros, vl_lancado, vl_multa, ano, contribuinte_id, credito_id, economico_id, id, imovel_id, nro_parcela, referente, situacao) FROM stdin;
    public          admin    false    220   =`       9          0    18873 	   economico 
   TABLE DATA           �   COPY public.economico (is_autonomo, codigo, contribuinte_id, dh_inicio_atividade, id, cpf_cnpj, email, endereco, nome, situacao) FROM stdin;
    public          admin    false    222   Z`       ;          0    18885    imovel 
   TABLE DATA           t   COPY public.imovel (campo1, campo2, campo3, campo4, codigo, contribuinte_id, id, endereco, imovel_tipo) FROM stdin;
    public          admin    false    224   w`       =          0    18897    pessoa_fisica 
   TABLE DATA           S   COPY public.pessoa_fisica (codigo, id, cpf, email, endereco, nome, rg) FROM stdin;
    public          admin    false    226   �`       ?          0    18912    pessoa_juridica 
   TABLE DATA           f   COPY public.pessoa_juridica (codigo, id, cnpj, email, endereco, inscricao_estadual, nome) FROM stdin;
    public          admin    false    228   �`       N           0    0    contribuinte_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.contribuinte_id_seq', 1, false);
          public          admin    false    215            O           0    0    credito_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.credito_id_seq', 1, false);
          public          admin    false    217            P           0    0    debito_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.debito_id_seq', 1, false);
          public          admin    false    219            Q           0    0    economico_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.economico_id_seq', 1, false);
          public          admin    false    221            R           0    0    imovel_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.imovel_id_seq', 1, false);
          public          admin    false    223            S           0    0    pessoa_fisica_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.pessoa_fisica_id_seq', 1, false);
          public          admin    false    225            T           0    0    pessoa_juridica_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.pessoa_juridica_id_seq', 1, false);
          public          admin    false    227            |           2606    18846 $   contribuinte contribuinte_codigo_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.contribuinte
    ADD CONSTRAINT contribuinte_codigo_key UNIQUE (codigo);
 N   ALTER TABLE ONLY public.contribuinte DROP CONSTRAINT contribuinte_codigo_key;
       public            admin    false    216            ~           2606    18848 .   contribuinte contribuinte_pessoa_fisica_id_key 
   CONSTRAINT     u   ALTER TABLE ONLY public.contribuinte
    ADD CONSTRAINT contribuinte_pessoa_fisica_id_key UNIQUE (pessoa_fisica_id);
 X   ALTER TABLE ONLY public.contribuinte DROP CONSTRAINT contribuinte_pessoa_fisica_id_key;
       public            admin    false    216            �           2606    18850 0   contribuinte contribuinte_pessoa_juridica_id_key 
   CONSTRAINT     y   ALTER TABLE ONLY public.contribuinte
    ADD CONSTRAINT contribuinte_pessoa_juridica_id_key UNIQUE (pessoa_juridica_id);
 Z   ALTER TABLE ONLY public.contribuinte DROP CONSTRAINT contribuinte_pessoa_juridica_id_key;
       public            admin    false    216            �           2606    18844    contribuinte contribuinte_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.contribuinte
    ADD CONSTRAINT contribuinte_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.contribuinte DROP CONSTRAINT contribuinte_pkey;
       public            admin    false    216            �           2606    18860    credito credito_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.credito
    ADD CONSTRAINT credito_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.credito DROP CONSTRAINT credito_pkey;
       public            admin    false    218            �           2606    18871    debito debito_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.debito
    ADD CONSTRAINT debito_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.debito DROP CONSTRAINT debito_pkey;
       public            admin    false    220            �           2606    18883    economico economico_codigo_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.economico
    ADD CONSTRAINT economico_codigo_key UNIQUE (codigo);
 H   ALTER TABLE ONLY public.economico DROP CONSTRAINT economico_codigo_key;
       public            admin    false    222            �           2606    18881    economico economico_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.economico
    ADD CONSTRAINT economico_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.economico DROP CONSTRAINT economico_pkey;
       public            admin    false    222            �           2606    18895    imovel imovel_codigo_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.imovel
    ADD CONSTRAINT imovel_codigo_key UNIQUE (codigo);
 B   ALTER TABLE ONLY public.imovel DROP CONSTRAINT imovel_codigo_key;
       public            admin    false    224            �           2606    18893    imovel imovel_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.imovel
    ADD CONSTRAINT imovel_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.imovel DROP CONSTRAINT imovel_pkey;
       public            admin    false    224            �           2606    18906 &   pessoa_fisica pessoa_fisica_codigo_key 
   CONSTRAINT     c   ALTER TABLE ONLY public.pessoa_fisica
    ADD CONSTRAINT pessoa_fisica_codigo_key UNIQUE (codigo);
 P   ALTER TABLE ONLY public.pessoa_fisica DROP CONSTRAINT pessoa_fisica_codigo_key;
       public            admin    false    226            �           2606    18908 #   pessoa_fisica pessoa_fisica_cpf_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.pessoa_fisica
    ADD CONSTRAINT pessoa_fisica_cpf_key UNIQUE (cpf);
 M   ALTER TABLE ONLY public.pessoa_fisica DROP CONSTRAINT pessoa_fisica_cpf_key;
       public            admin    false    226            �           2606    18904     pessoa_fisica pessoa_fisica_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.pessoa_fisica
    ADD CONSTRAINT pessoa_fisica_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.pessoa_fisica DROP CONSTRAINT pessoa_fisica_pkey;
       public            admin    false    226            �           2606    18910 "   pessoa_fisica pessoa_fisica_rg_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.pessoa_fisica
    ADD CONSTRAINT pessoa_fisica_rg_key UNIQUE (rg);
 L   ALTER TABLE ONLY public.pessoa_fisica DROP CONSTRAINT pessoa_fisica_rg_key;
       public            admin    false    226            �           2606    18921 *   pessoa_juridica pessoa_juridica_codigo_key 
   CONSTRAINT     g   ALTER TABLE ONLY public.pessoa_juridica
    ADD CONSTRAINT pessoa_juridica_codigo_key UNIQUE (codigo);
 T   ALTER TABLE ONLY public.pessoa_juridica DROP CONSTRAINT pessoa_juridica_codigo_key;
       public            admin    false    228            �           2606    18919 $   pessoa_juridica pessoa_juridica_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.pessoa_juridica
    ADD CONSTRAINT pessoa_juridica_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.pessoa_juridica DROP CONSTRAINT pessoa_juridica_pkey;
       public            admin    false    228            �           2606    18937 "   debito fk1y7dy7wv7xhabjf7k8g2kvryn    FK CONSTRAINT     �   ALTER TABLE ONLY public.debito
    ADD CONSTRAINT fk1y7dy7wv7xhabjf7k8g2kvryn FOREIGN KEY (credito_id) REFERENCES public.credito(id);
 L   ALTER TABLE ONLY public.debito DROP CONSTRAINT fk1y7dy7wv7xhabjf7k8g2kvryn;
       public          admin    false    220    4740    218            �           2606    18942 "   debito fk2l38u767vd86bv6jnx6dl84m1    FK CONSTRAINT     �   ALTER TABLE ONLY public.debito
    ADD CONSTRAINT fk2l38u767vd86bv6jnx6dl84m1 FOREIGN KEY (economico_id) REFERENCES public.economico(id);
 L   ALTER TABLE ONLY public.debito DROP CONSTRAINT fk2l38u767vd86bv6jnx6dl84m1;
       public          admin    false    222    220    4746            �           2606    18932 "   debito fk6r13mpp9qoqtbhy5tiajka9b4    FK CONSTRAINT     �   ALTER TABLE ONLY public.debito
    ADD CONSTRAINT fk6r13mpp9qoqtbhy5tiajka9b4 FOREIGN KEY (contribuinte_id) REFERENCES public.contribuinte(id);
 L   ALTER TABLE ONLY public.debito DROP CONSTRAINT fk6r13mpp9qoqtbhy5tiajka9b4;
       public          admin    false    220    216    4738            �           2606    18957 "   imovel fk6rbngk2bd3kg7l0d0kmj6q3pn    FK CONSTRAINT     �   ALTER TABLE ONLY public.imovel
    ADD CONSTRAINT fk6rbngk2bd3kg7l0d0kmj6q3pn FOREIGN KEY (contribuinte_id) REFERENCES public.contribuinte(id);
 L   ALTER TABLE ONLY public.imovel DROP CONSTRAINT fk6rbngk2bd3kg7l0d0kmj6q3pn;
       public          admin    false    216    224    4738            �           2606    18947 "   debito fkcgs7x6126ic2vxfgq9gj8boyo    FK CONSTRAINT     �   ALTER TABLE ONLY public.debito
    ADD CONSTRAINT fkcgs7x6126ic2vxfgq9gj8boyo FOREIGN KEY (imovel_id) REFERENCES public.imovel(id);
 L   ALTER TABLE ONLY public.debito DROP CONSTRAINT fkcgs7x6126ic2vxfgq9gj8boyo;
       public          admin    false    224    220    4750            �           2606    18952 %   economico fkh3ijljy2661mks55b06fn7tfv    FK CONSTRAINT     �   ALTER TABLE ONLY public.economico
    ADD CONSTRAINT fkh3ijljy2661mks55b06fn7tfv FOREIGN KEY (contribuinte_id) REFERENCES public.contribuinte(id);
 O   ALTER TABLE ONLY public.economico DROP CONSTRAINT fkh3ijljy2661mks55b06fn7tfv;
       public          admin    false    216    4738    222            �           2606    18927 (   contribuinte fklcdtknl44k0d7jxw8oi0o2sqo    FK CONSTRAINT     �   ALTER TABLE ONLY public.contribuinte
    ADD CONSTRAINT fklcdtknl44k0d7jxw8oi0o2sqo FOREIGN KEY (pessoa_juridica_id) REFERENCES public.pessoa_juridica(id);
 R   ALTER TABLE ONLY public.contribuinte DROP CONSTRAINT fklcdtknl44k0d7jxw8oi0o2sqo;
       public          admin    false    216    228    4762            �           2606    18922 (   contribuinte fkmydfw78j5gar51o8xhd1myliu    FK CONSTRAINT     �   ALTER TABLE ONLY public.contribuinte
    ADD CONSTRAINT fkmydfw78j5gar51o8xhd1myliu FOREIGN KEY (pessoa_fisica_id) REFERENCES public.pessoa_fisica(id);
 R   ALTER TABLE ONLY public.contribuinte DROP CONSTRAINT fkmydfw78j5gar51o8xhd1myliu;
       public          admin    false    4756    216    226            3      x������ � �      5      x������ � �      7      x������ � �      9      x������ � �      ;      x������ � �      =      x������ � �      ?      x������ � �     