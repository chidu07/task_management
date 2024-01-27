const connection = require("../config/db");

const logg = (req, res) => {
  const query = "SELECT * FROM user";

  connection.query(query, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }

    res.status(200).json({ success: true, data: results });
  });
};

module.exports = { logg };
