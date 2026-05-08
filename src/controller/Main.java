package controller;

import dao.MicrobeDAO;
import model.Microbe;
import java.sql.SQLException;

/**
 * Main class responsible for testing the insertion of a Microbe
 * into the database.
 *
 * This class simulates a simple use case where a Microbe object
 * is created, populated with data, and persisted using the DAO layer.
 */
public class Main {

    /**
     * Application entry point.
     *
     * @param args command-line arguments
     * @throws SQLException if a database access error occurs
     */
    static void main(String[] args) throws SQLException {

        Microbe microbe = new Microbe();

        microbe.setId(1);
        microbe.setName("Influenza A");
        microbe.setType("RNA Virus");
        microbe.setDisease("Flu");
        microbe.setSymptoms("Fever, cough, fatigue");
        microbe.setTransmission("Airborne");

        MicrobeDAO dao = new MicrobeDAO();
        dao.insertData(microbe);

    }
}