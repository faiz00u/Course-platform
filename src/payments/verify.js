const axios = require("axios");

exports.verifySale = async (email) => {
  const token = process.env.GUMROAD_ACCESS_TOKEN;
  const url = `https://api.gumroad.com/v2/sales?email=${email}`;

  const res = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` }
  });

  return res.data.sales || [];
};
