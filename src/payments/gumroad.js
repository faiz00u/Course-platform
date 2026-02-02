const axios = require("axios");

exports.createCheckoutLink = (telegram_id, course_id) => {
  const productId = process.env.GUMROAD_PRODUCT_ID;
  return `https://gumroad.com/l/${productId}?custom_fields[telegram_id]=${telegram_id}&custom_fields[course_id]=${course_id}`;
};
