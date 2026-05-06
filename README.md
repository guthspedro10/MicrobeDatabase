# 🦠 MicrobeDatabase

Project developed in **Java** that simulates a **basic microorganism registry system**.

The application allows users to store and manage data about **viruses and bacteria**, including their classification, associated diseases, and symptoms.

This project was created to practice **Java (MVC + DAO architecture)**, **SQL databases**, and basic **web development concepts**.

---

# ⚙️ Features

* Register microorganisms (**Create**)
* Store biological data (name, type, disease, symptoms)
* Structured using **MVC architecture**
* Database integration using **JDBC**
* Separation between **model, controller, and data access layers**

---

# 🛠️ Technologies

* **Java**
* **JDBC**
* **MySQL**
* **HTML / CSS**
* **JSP & Servlets**

---

# 🚀 How to Run

Clone the repository:

```
git clone https://github.com/guthspedro10/MicrobeDatabase.git
```

Navigate to the project folder:

```
cd MicrobeDatabase
```

Configure the database connection:

Create a file named:

```
db.properties
```

Based on:

```
src/resources/db.example.properties
```

Example:

```
db.user=your_user
db.password=your_password
db.server=localhost
db.name=microbe
```

---

Create the database:

```sql
CREATE DATABASE microbe;

USE microbe;

CREATE TABLE microbe (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    type VARCHAR(20),
    disease VARCHAR(100),
    symptoms TEXT
);
```

---

Run the application using your Java environment or servlet container.

---

# 💻 Example

### Stored data

```
Name: Influenza A
Type: RNA Virus
Disease: Flu
Symptoms: Fever, cough, fatigue
```

---

# 🎯 Project Goal

This project was developed to:

* Practice **Java backend development**
* Apply **MVC and DAO patterns**
* Work with **relational databases (SQL)**
* Simulate a **simple biomedical data system**

---

# 📚 Possible Future Improvements

* Implement full CRUD (**Update/Delete**)
* Add search functionality
* Improve user interface
* Input validation
* Normalize database (e.g., symptoms table)

---

# 📌 Project Status

🚧 **In Development** — Educational project focused on learning **Java, SQL, and Web Development**.
