package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;
import java.io.InputStream;

/**
 * Utility class responsible for establishing a connection
 * to the MySQL database using properties loaded from a configuration file.
 *
 * The configuration file (db.properties) must be available in the classpath
 * and contain the required database connection parameters.
 */
public class DBConnection {

    private static Connection con;
    private static String user,password, url, database, server;

    /**
     * Default constructor.
     */
    public DBConnection() {
    }

    /**
     * Creates and returns a connection to the database using
     * properties defined in the db.properties file.
     *
     * Expected properties:
     * <ul>
     *   <li>db.user - database username</li>
     *   <li>db.password - database password</li>
     *   <li>db.server - database host (e.g., localhost)</li>
     *   <li>db.name - database name</li>
     * </ul>
     *
     * @return a Connection object if successful, or null if the connection fails
     */
    public static Connection createConnection() {

        try {
            Properties props = new Properties();

            InputStream input = DBConnection.class
                    .getClassLoader()
                    .getResourceAsStream("db.properties");

            props.load(input);

            user = props.getProperty("db.user");
            password = props.getProperty("db.password");
            server = props.getProperty("db.server");
            database = props.getProperty("db.name");

            url = "jdbc:mysql://" + server + ":3306/" + database;

            con = DriverManager.getConnection(url, user, password);
            System.out.println("Connection successful");
            return con;

        } catch (Exception e) {
            System.out.println("Failed to connect to database");
            e.printStackTrace();
            return null;
        }
    }
}