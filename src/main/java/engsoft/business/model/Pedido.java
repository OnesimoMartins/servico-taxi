package engsoft.business.model;

import java.time.LocalDateTime;

public class Pedido {

    Cliente cliente;
    Localizacao localizacao;
    LocalDateTime localDateTime;

    Boolean isPedidoEspecifico;

    Motorista motorista;// caso o pedido seja direccioado para ele
}
