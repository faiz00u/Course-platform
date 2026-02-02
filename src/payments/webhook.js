const express = require("express");
const crypto = require("crypto");
const User = require("../database/models");
const bot = require("../bot/bot");

const router = express.Router();

router.post("/", async (req, res) => {
  const signature = req.headers["x-gumroad-signature"];
  const body = JSON.stringify(req.body);

  const secret = process.env.GUMROAD_WEBHOOK_SECRET;
  const hmac = crypto.createHmac("sha256", secret).update(body).digest("hex");

  if (hmac !== signature) return res.sendStatus(401);

  const event = req.body;
  const fields = event.sale?.custom_fields;
  if (!fields) return res.sendStatus(400);

  const telegram_id = fields.telegram_id;
  const course_id = fields.course_id;

  // Anti-fraud: already exists?
  const exists = await User.findOne({ telegram_id, course_id });
  if (exists) return res.sendStatus(200);

  await User.create({ telegram_id, course_id, paid: true });

  bot.sendMessage(telegram_id, `✅ Payment received! You now have access to course ${course_id}.`);

  res.sendStatus(200);
});

module.exports = router;
