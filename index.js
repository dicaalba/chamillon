const messages = [
  "Chami 🐧",
  "Macuqui 🐒",
  "Chamaquin 🐽",
  "Diana 🐱",
  "Kevin 🐱",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
