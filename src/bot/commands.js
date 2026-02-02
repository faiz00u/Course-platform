const courses = require("../courses/courses");

exports.handleMessage = async (bot, msg) => {
  const text = msg.text;

  if (text === "/courses") {
    const courseList = courses.getAllCourses()
      .map(c => `${c.title} - $${c.price}\nBuy: ${c.buyLink(msg.from.id, c.course_id)}`)
      .join("\n\n");

    bot.sendMessage(msg.chat.id, courseList || "No courses available.");
  }
};
