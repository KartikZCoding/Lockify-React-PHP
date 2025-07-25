# 🔐 Lockify - Password Manager Web App

**Lockify** is a secure and efficient web-based password manager that allows users to store and manage login credentials for various websites. Designed as a Single Page Application (SPA) using **ReactJS (Vite)** for the frontend and **PHP + MySQL** for the backend, it offers smooth navigation, CRUD operations, and profile-based access control for added security.

---

## 📌 Project Objective

To build a **secure, single-page password manager** where users can:

- Register and log in securely
- Store website credentials (site name, username, password)
- View credentials with a profile password prompt
- Update or delete stored website entries

---

## 🧑‍💻 Developer Role

As the developer, I was responsible for:

- Designing the **frontend UI** using ReactJS and CSS
- Implementing **SPA behavior** using React Router, `useNavigate`, `useParams`, and `useEffect`
- Creating **RESTful API connections** between React and PHP using Axios
- Building the **backend logic** in PHP for login, registration, and CRUD operations
- Setting up and managing the **MySQL database**

---

## 🛠 Technologies Used

| Layer    | Tools / Languages          |
| -------- | -------------------------- |
| Frontend | ReactJS (Vite), Axios, CSS |
| Backend  | PHP (Core PHP)             |
| Database | MySQL                      |
| Tools    | XAMPP, phpMyAdmin, Node.js |

---

## 🧩 Key Features

- 🔐 User Registration & Login (Session-based auth)
- 🌐 Add Website: Save site name, username, and password
- 📝 Update Website Info
- 🗑️ Delete Stored Website Entry
- 🔍 View Website Details (with profile password confirmation)
- 📡 Axios for smooth frontend-backend communication
- 🧭 SPA with React Router (no page reloads)

---

## 🗂️ Project Structure

```
Lockify/
├── Database/
│   └── lockify.sql                   # MySQL database dump
├── PHP│   └── lockify/
│       ├── add_website.php          # Insert new credentials
│       ├── connection.php           # DB connection script
│       ├── delete_website.php       # Delete website entry
│       ├── home.php                 # Fetch all websites
│       ├── login.php                # User login handler
│       ├── profile_password.php     # Profile password verification
│       ├── register.php             # User registration handler
│       ├── update_website.php       # Update website credentials
│       └── view_details.php         # View full credentials
├── public/                          # Public assets (React)
├── src/                             # React source code
│   └── components, pages, routing
```

---

## ⚙️ Installation & Setup

### 1️⃣ Backend Setup (PHP & MySQL)

1. **Start XAMPP** and run Apache & MySQL.
2. **Copy the PHP backend folder**:
   ```
   /PHP/lockify → C:\xampp\htdocs\lockify
   ```
3. **Import the database**:
   - Open [http://localhost/phpmyadmin](http://localhost/phpmyadmin)
   - Create a new database named `lockify`
   - Click _Import_ and upload the file:
     ```
     Database/lockify.sql
     ```

### 2️⃣ Frontend Setup (React + Vite)

1. **Navigate to your React project**:
   ```bash
   cd path/to/lockify-frontend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the Vite development server**:
   ```bash
   npm run dev
   ```
4. Visit:
   ```
   http://localhost:5173
   ```

---

## 🧠 React Concepts Used

| Concept         | Usage Description                                                           |
| --------------- | --------------------------------------------------------------------------- |
| `useEffect()`   | To trigger data fetch on component mount without page reload                |
| `useNavigate()` | To redirect user after actions like login, registration, or form submission |
| `useParams()`   | To extract dynamic route values like `web_id` and `reg_id`                  |
| SPA Routing     | Implemented using `react-router-dom` for smooth navigation without reloads  |
| Axios           | Used for asynchronous communication between React and PHP backend           |

---

## 💡 Usage Flow

1. **Register** as a new user
2. **Login** with valid credentials
3. Land on the **Home Page** to see all stored website entries
4. Click:
   - 🔍 **View** to see full details after entering profile password
   - ✏️ **Update** to modify details
   - ❌ **Delete** to remove credentials
5. Click **Add Website** to insert new credentials

> 🔁 All operations happen without page reload due to SPA functionality

---

## 📄 License

This project is for educational use only. You may modify and reuse the code with proper credit.

---

## 🙋‍♂️ Author

**Kartik Ahir**  
Final Year B.Tech - Computer Engineering  
Government Engineering College, Modasa

---

## 📫 Contact

For any queries or collaboration ideas:  
📧 Email: ahir.kartik.385@gmail.com

---
