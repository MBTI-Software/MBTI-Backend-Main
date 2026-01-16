const express = require("express");
const router = express.Router();
const Visitor = require("./Visitor");
const { randomUUID } = require("crypto");

router.post("/", async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const visitor = new Visitor({
      name,
      email,
      age,
    });

    await visitor.save();

    res.status(201).json({
      success: true,
      message: "Visitor created successfully",
    });

  } catch (error) {
    console.error("visitor POST error:", error);
    res.status(500).json({ success: false, message: "Internal server error", error: error.message });
  }
});

module.exports = router;
