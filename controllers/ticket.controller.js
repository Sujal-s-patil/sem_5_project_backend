const db = require("./sql");

const ticketRecords = async (req, res) => {
    db.query(`SELECT * FROM ticket WHERE status !='completed'`, (error, results) => {
        if (error) {
            res.json(error);
        } else {
            res.json(results);
        }
    })
}

const createTicket = async (req, res) => {
    const data = req.body;
    const keys = Object.keys(data);
    const values = Object.values(data);
    const placeholder = keys.map(() => '?').join(',');
    const query = `INSERT INTO ticket (${keys.join(',')}) VALUES (${placeholder})`;
    db.query(query, values, (error, results) => {
        if (error) {
            res.json({ message: error })
        } else {
            res.json({ message: 'success' });
        }
    })

}

const specificTicket = async (req, res) => {
    const data = req.body;
    const keys = Object.keys(data);
    const values = Object.values(data);
    const placeholder = keys.map((key) =>` ${key}= ? `).join(' AND ');

    const query = `SELECT * FROM ticket WHERE ${placeholder}`;

    db.query(query, values, (error, results) => {
        if (error) {
            res.json(error);
        } else {
            res.json(results);
        }
    })
}

const lastComplaintId = async (req, res) => {
    db.query(`SELECT complaint_id FROM ticket ORDER BY complaint_id DESC LIMIT 1;`, (error, results) => {
        if (error) {
            res.json(error);
        } else {
            res.json(results);
        }
    })
}


module.exports = {
    ticketRecords,
    createTicket,
    specificTicket,
    lastComplaintId
}