document.addEventListener("DOMContentLoaded", () => {
  const roleTabs = document.querySelectorAll("[data-role-tab]");
  const roleInput = document.getElementById("login-role");
  const loginForm = document.getElementById("login-form");
  const todayElement = document.querySelector("[data-today]");

  if (todayElement) {
    const today = new Date();

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    todayElement.textContent = today.toLocaleDateString("en-US", options);
  }

  roleTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selectedRole = tab.getAttribute("data-role-tab");

      roleInput.value = selectedRole;

      roleTabs.forEach((item) => {
        item.classList.remove("active");
      });

      tab.classList.add("active");
    });
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const role = roleInput.value;

    if (role === "admin") {
      window.location.href = "admin.html";
    }

    if (role === "teacher") {
      window.location.href = "teacher.html";
    }

    if (role === "student") {
      window.location.href = "student.html";
    }
  });
});
