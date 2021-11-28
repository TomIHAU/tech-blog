const signup = async (event) => {
  event.preventDefault();
  console.log("js working");

  const username = document.querySelector("#signupName").value.trim();
  const password = document.querySelector("#signupPass").value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#signup-form").addEventListener("submit", signup);
