package model;

public class Microbe {

    private int id;
    private String tipo, doencaAssociada, nome;
    private String[] sintomas;

    public String[] getSintomas() {
        return sintomas;
    }

    public void setSintomas(String[] sintomas) {
        this.sintomas = sintomas;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getDoencaAssociada() {
        return doencaAssociada;
    }

    public void setDoencaAssociada(String doencaAssociada) {
        this.doencaAssociada = doencaAssociada;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
