package engsoft.business.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class Viagem {

    String origem;
    String destino;
    Viatura viatura;
    Cliente cliente;
    BigDecimal preco;
    LocalDateTime  horaInicio;
    LocalDateTime horaFim;
}
