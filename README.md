# 🔬🦠 MicrobeDatabase

![Learning](https://skillicons.dev/icons?i=java,spring,js,mysql,postman)

- Project developed in Java with Spring Boot that manages a database of pathogenic microorganisms. 
- The application features a complete CRUD dashboard allowing users to record, view, update, and remove information about microbes, their associated diseases, symptoms, and transmission routes.
- Frontend interface built as a responsive Single Page Application (SPA) consuming backend REST APIs

---

## ⚙️ Features

* Full CRUD Operations: Create, Read, Update, and Delete microbe records.
* Interactive Dashboard: Tabbed interface built with HTML5, CSS3, and JavaScript.
* RESTful API: Spring Boot controllers handling HTTP requests (GET, POST, PUT, DELETE).
* Entity Persistence: Spring Data JPA for database interactions.
* XSS Prevention: Safe DOM manipulation using textContent for dynamic table rendering.
* Modular Architecture: Clean separation between controller, model, and repository layers.

---

## 🏗️ Project Structure

The project follows a standard Spring Boot layered architecture coupled with a static web front-end:

```

src/main/java/com/pedroguths/microbedatabase
├── controller
│   └── MicrobeController.java      # REST API endpoints for CRUD operations
├── model
│   └── MicrobeModel.java           # Entity mapping for microbes
└── repository
    └── MicrobeRepository.java      # Spring Data JPA repository interface

src/main/resources/static
    └── style.css                   # Custom styles for the dashboard
    └── script.js                   # Asynchronous fetch logic and DOM handling
    └── index.html                  # Single-page application dashboard interface
```

---

## 🛠️ Technologies

### Backend & Database
- Java 21
- Spring Boot (Web, REST API)
- Spring Data JPA / Hibernate
- MySQL (Managed via MySQL Workbench)
- Maven (Dependency & Build Management)

### Frontend
- HTML5 & CSS3
- JavaScript (Fetch API)

---

## 🚀 How to Run

### Prerequisites
- Java Development Kit (JDK 21)
- MySQL Server & MySQL Workbench
- Maven (or use the included ./mvnw wrapper)

### 1. Database Setup
Configure your MySQL database connection in src/main/resources/application.yaml:
```
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/microbedatabase
    username: seu_nome_de_usuario
    password: sua_senha
  jpa:
    hibernate:
      ddl-auto: update
```

### 2. Clone the repository
```
git clone https://github.com/guthspedro10/MicrobeDatabase.git
```
```
cd MicrobeDatabase
```
### 3. Run the Backend API
```
./mvnw spring-boot:run
```
### 4. Run the Frontend
Simply open "http://localhost:8080" on your browser

---

## 📚 Possible Future Improvements

* Add advanced search and filtering (by microbe type or disease).
* Implement user authentication and authorization (Spring Security).
* Support FASTA/genomic sequence references for each organism.
* Add pagination and sorting for large microbial datasets.

---

## 📌 Project Status

✅ Completed – Educational project focused on learning Backend Development, REST APIs, and HealthTech concepts.
