// Define the roles
const roles = [
  "Data Analyst",
  "Business Analyst",
  "Data Scientist",
  "Machine Learning Engineer"
];

// Update the "roles-container" with roles dynamically
let index = 0;
setInterval(() => {
  document.getElementById("roles-container").innerText = roles[index];
  index = (index + 1) % roles.length;
}, 2000);