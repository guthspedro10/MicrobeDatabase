package dao;

import model.Microbe;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Data Access Object (DAO) responsible for handling
 * persistence operations related to the Microbe entity.
 *
 * This class manages the database connection and
 * executes SQL statements for data insertion.
 */
public class MicrobeDAO {

    /**
     * Database connection instance.
     */
    private Connection con;

    /**
     * Constructs a MicrobeDAO and initializes the database connection.
     */
    public MicrobeDAO() {
        con = DBConnection.createConnection();
    }

    /**
     * Inserts a Microbe object into the database.
     *
     * @param microbe the Microbe object containing data to be inserted
     * @throws SQLException if an error occurs during SQL execution
     */
    public void insertData (Microbe microbe) throws SQLException {

        String sql = "insert into microbe values (?,?,?,?,?,?)";
        PreparedStatement stmt = con.prepareStatement(sql);
        stmt.setInt(1, microbe.getId());
        stmt.setString(2, microbe.getName());
        stmt.setString(3, microbe.getType());
        stmt.setString(4, microbe.getDisease());
        stmt.setString(5, microbe.getSymptoms());
        stmt.setString(6, microbe.getTransmission());
        stmt.executeUpdate();

        System.out.println("Microbe inserted successfully!");

    }

}