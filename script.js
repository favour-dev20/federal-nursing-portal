// Demo user data
const demoStudent = {
  name: "Grace Emmanuel (Year 2 Nursing Student)",
  courses: [
    "Human Anatomy II",
    "Psychiatric Nursing",
    "Community Health Nursing",
    "Clinical Practicum"
  ],
  grades: [
    "Human Anatomy II - A",
    "Psychiatric Nursing - B+",
    "Community Health Nursing - A",
    "Clinical Practicum - A"
  ]
};

const demoLecturer = {
  name: "Mrs. O. Okoro (Lecturer - Mental Health Nursing)",
  courses: ["Psychiatric Nursing", "Therapeutic Communication"]
};

// Login function
function login() {
  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  if (password !== "1234") {
    alert("Incorrect password!");
    return;
  }

  localStorage.setItem("user", username);
  showPage(username);
}

// Logout function
function logout() {
  localStorage.removeItem("user");
  showPage("login");
}

// Show page based on role
function showPage(role) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

  if (role === "student") {
    populateStudent();
    document.getElementById("student-page").classList.add("active");
  } else if (role === "lecturer") {
    populateLecturer();
    document.getElementById("lecturer-page").classList.add("active");
  } else if (role === "admin") {
    document.getElementById("admin-page").classList.add("active");
  } else {
    document.getElementById("login-page").classList.add("active");
  }
}

// Student content
function populateStudent() {
  document.getElementById("student-name").innerText = "Welcome, " + demoStudent.name;
  document.getElementById("student-courses").innerHTML = demoStudent.courses
    .map(c => <li>${c}</li>)
    .join("");
  document.getElementById("student-grades").innerHTML = demoStudent.grades
    .map(g => <li>${g}</li>)
    .join("");
}

// Lecturer content
function populateLecturer() {
  document.getElementById("lecturer-name").innerText = "Welcome, " + demoLecturer.name;
  document.getElementById("lecturer-courses").innerHTML = demoLecturer.courses
    .map(c => <li>${c}</li>)
    .join("");
}

// Load previous session
window.onload = function() {
  const savedUser = localStorage.getItem("user");
  showPage(savedUser || "login");
};
