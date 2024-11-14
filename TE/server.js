const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

// Подключение к базе данных
let db = new sqlite3.Database('vehicles.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the vehicles database.');
});

// Middleware для обработки JSON
app.use(express.json());

// Эндпоинт для поиска автомобиля по VIN
app.get('/api/vehicles', (req, res) => {
    const { vin, license_plate } = req.query;
    let query = 'SELECT * FROM vehicles WHERE 1=1';
    let params = [];

    if (vin) {
        query += ' AND vin = ?';
        params.push(vin);
    }
    if (license_plate) {
        query += ' AND license_plate = ?';
        params.push(license_plate);
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
