module.exports = validateRequest = (req, res, next) => {
  const regex = /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/g;

  if (!req.query.date) {
    res.status(400).json({
      error: "Invalid query param"
    });
  } else if (!regex.test(req.query.date)) {
    res.status(400).json({ error: "Invalid date format" });
  } else {
    next();
  }
};
