const users = require("../database/models");

const courseList = [
  { course_id: "hxnfb", title: "Sample Course", price: 10, delivery_type: "link", content_link: "https://example.com/download" }
];

exports.getAllCourses = () => courseList;

exports.buyLink = (telegram_id, course_id) => {
  return `https://gumroad.com/l/${course_id}?custom_fields[telegram_id]=${telegram_id}&custom_fields[course_id]=${course_id}`;
};
