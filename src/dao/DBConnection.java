package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;
import java.io.InputStream;

public class DBConnection {

    private static Connection con;
    private static String usuario, senha, url, banco, servidor;

    public DBConnection() {
    }

    public static Connection createConnection() {

        try {
            Properties props = new Properties();

            InputStream input = DBConnection.class
                    .getClassLoader()
                    .getResourceAsStream("db.properties");

            props.load(input);

            usuario = props.getProperty("db.user");
            senha = props.getProperty("db.password");
            servidor = props.getProperty("db.server");
            banco = props.getProperty("db.name");

            url = "jdbc:mysql://" + servidor + ":3306/" + banco;

            con = DriverManager.getConnection(url, usuario, senha);
            System.out.println("Conectado com sucesso!");
            return con;

        } catch (Exception e) {
            System.out.println("Erro ao conectar!");
            e.printStackTrace();
            return null;
        }
    }
}