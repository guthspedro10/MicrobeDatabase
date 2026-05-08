package model;

/**
 * Represents a microorganism entity in the system.
 *
 * This class stores basic information about a microbe,
 * including its identification, classification, associated disease,
 * symptoms, and transmission method.
 *
 * It is used as a data model to transfer information between
 * different layers of the application.
 */
public class Microbe {

    private int id;
    private String type, disease, name, symptoms, transmission;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDisease() {
        return disease;
    }

    public void setDisease(String disease) {
        this.disease = disease;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }
}