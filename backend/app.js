const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ObjectUnsubscribedError } = require("rxjs");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "e_cart",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.message);
  } else {
    console.log("Connected to the database");
  }
});

app.post("/api/register", async (req, res) => {
  try {
    const firstname = req.body.fname;
    const lastname = req.body.lname;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.pass;

    // hash the password before storing in database
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const q =
      "INSERT INTO user_details (firstname, lastname, email, phone, password) VALUES (?, ?, ?, ?, ?)";
    const values = [firstname, lastname, email, phone, hashedPassword];

    db.query(q, values, (err, result) => {
      if (err) {
        console.error("Error inserting user data: " + err.message);
        return res.status(500).send("Error inserting user data");
      } else {
        console.log("User data inserted:", result);
        return res.status(201).send("User registered successfully");
      }
    });
  } catch (error) {
    console.error("Error registering user: " + error.message);
    return res.status(500).send("Error registering user");
  }
});

// Login Validation
app.post("/api/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const q = "SELECT * FROM user_details WHERE email = ?";
    const values = [email];

    db.query(q, values, async (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Database error" });
      }
      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const hashedPassword = results[0].password;

      // Compare the hashed password with the input password
      const passwordMatch = await bcrypt.compare(password, hashedPassword);

      if (passwordMatch) {
        console.log("Login successful");
        return res.status(200).json({ message: "Login successful" });
      } else {
        return res.status(401).json({ message: "Invalid email or password" });
      }
    });
  } catch (error) {
    console.error("Error logging in: " + error.message);
    return res.status(500).send("Error logging in");
  }
});

app.get("/api/userData", (req, res) => {
  const q = "SELECT * FROM user_details";
  db.query(q, (err, result) => {
    if (err) {
      console.error("Error getting user data:", err.message);
      return res.status(500).send("Error getting user data");
    }
    console.log("Success:", result);
    return res.status(200).json(result);
  });
});

app.get("/api/productData", (req, res) => {
  const q = "SELECT * FROM product_data";
  db.query(q, (err, result) => {
    if (err) {
      console.error("Error getting product data:", err.message);
      return res.status(500).send("Error getting product data");
    }
    return res.status(200).json(result);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
