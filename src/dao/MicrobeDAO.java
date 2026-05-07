package dao;

import model.Microbe;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class MicrobeDAO {

    private Connection con;

    public MicrobeDAO(Connection con) {
        con = DBConnection.createConnection();
    }

    public void insereDados (Microbe microbe) throws SQLException {

        String sql = "insert into microbe values (?,?,?,?,?,?,?)";
        PreparedStatement stmt = con.prepareStatement(sql);
        stmt.setInt(1, microbe.getId());
        stmt.setString(2, microbe.getNome());
        stmt.setString(3, microbe.getTipo());
        stmt.setString(4, microbe.getDoencaAssociada());
        stmt.setString(5, microbe.getSintomas());

    }

}
