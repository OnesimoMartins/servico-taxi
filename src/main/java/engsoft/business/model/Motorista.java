package engsoft.business.model;

import engsoft.business.model.enums.EstadoMotorista;

import java.util.Date;

public class Motorista {

    String nome;
    String email;
    String password;
    String morada;
    Date dataNascimento;
    EstadoMotorista estadoViatura;
    Integer kms;
}
