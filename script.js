const API = "https://bugfix-backend-1.onrender.com";

const userId = localStorage.getItem("user") || Date.now();
localStorage.setItem("user", userId);

function explain() {
  fetch(API + "/api/explain", {
    .then(res => res.json())
.then(data => {
  console.log(data);   // 👈 ADD THIS
  document.getElementById("output").innerText = data.result || data.error;
})
.catch(err => {
  console.error(err);  // 👈 ADD THIS
  alert("Error aa gaya");
});
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      error: document.getElementById("input").value,
      userId,
      plan: document.getElementById("plan").value
    })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("output").innerText = data.result || data.error;
  });
}

function fix() {
  fetch(API + "/api/fix", {
    .then(res => res.json())
.then(data => {
  console.log(data);   // 👈 ADD THIS
  document.getElementById("output").innerText = data.result || data.error;
})
.catch(err => {
  console.error(err);  // 👈 ADD THIS
  alert("Error aa gaya");
});
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      error: document.getElementById("input").value,
      userId,
      plan: document.getElementById("plan").value
    })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("output").innerText = data.result || data.error;
  });
}
