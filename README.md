# 🔬🦠 MicrobeDatabase

Project developed in Java with Spring Boot and JavaScript that manages a database of pathogenic microorganisms.
The application features a complete CRUD dashboard allowing users to record, view, update, and remove information about microbes, their associated diseases, symptoms, and transmission routes.
This project was created to practice full-stack web development, REST API design, and apply bioinformatics concepts.

## ⚙️ Features

* **Full CRUD Operations**: Create, Read, Update, and Delete microbe records.
* **Interactive Dashboard**: Tabbed interface built with HTML5, CSS3, and Vanilla JavaScript.
* **RESTful API**: Spring Boot controllers handling HTTP requests (GET, POST, PUT, DELETE).
* **Entity Persistence**: Spring Data JPA for database interactions.
* **XSS Prevention**: Safe DOM manipulation using textContent for dynamic table rendering.
* **Modular Architecture**: Clean separation between controller, model, and repository layers.

## 🏗️ Project Structure

The project follows a standard Spring Boot layered architecture coupled with a static web front-end:

MicrobeDatabase
│
├── src/main/java/com/pedroguths/microbedatabase
│   ├── controller
│   │   └── MicrobeController.java      # REST API endpoints for CRUD operations
│   ├── model
│   │   └── MicrobeModel.java           # Entity mapping for microbes
│   └── repository
│       └── MicrobeRepository.java      # Spring Data JPA repository interface
│
└── src/main/resources/static
    ├── css
    │   └── style.css                   # Custom styles for the dashboard
    ├── js
    │   └── script.js                   # Asynchronous fetch logic and DOM handling
    └── index.html                      # Single-page application dashboard interface

## 🛠️ Technologies

* **Backend**: Java 17+, Spring Boot, Spring Data JPA
* **Frontend**: HTML5, CSS3, JavaScript (ES6+), FontAwesome
* **Database**: H2 Database / MySQL (Spring Data JPA)
* **Build Tool**: Maven

## 🚀 How to Run

1. **Clone the repository:**
   git clone https://github.com/guthspedro10/MicrobeDatabase.git

2. **Navigate to the project directory:**
   cd MicrobeDatabase

3. **Build and run the Spring Boot application:**
   ./mvnw spring-boot:run

4. **Access the Application:**
   Open your browser and navigate to http://localhost:8080 to access the dashboard.

## 💻 Example API Requests

### 1. Create a Microbe (POST /microbe)
Input Body:
{
  "name": "Escherichia coli",
  "type": "Bacteria",
  "disease": "Gastroenteritis",
  "symptoms": "Abdominal cramps, watery diarrhea, nausea",
  "transmission": "Fecal-oral route, contaminated food or water"
}

### 2. Read All Microbes (GET /microbe)
Response:
[
  {
    "id": 1,
    "name": "Escherichia coli",
    "type": "Bacteria",
    "disease": "Gastroenteritis"
  }
]

## 🎯 Project Goal

This project was developed to:
* Practice full-stack software development with Java and Spring Boot.
* Build a responsive front-end dashboard consuming RESTful endpoints asynchronously.
* Organize a structured database schema for health technology applications.
* Demonstrate proficiency in software design and API development.

## 📚 Possible Future Improvements

* Add advanced search and filtering (by microbe type or disease).
* Implement user authentication and authorization (Spring Security).
* Support FASTA/genomic sequence references for each organism.
* Add pagination and sorting for large microbial datasets.

## 📌 Project Status

✅ Completed – Educational project focused on learning Full-Stack Web Development, REST APIs, and Health Tech concepts.
