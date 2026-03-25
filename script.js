const API = "https://your-backend-url";

const userId = localStorage.getItem("user") || Date.now();
localStorage.setItem("user", userId);

function explain() {
  fetch(`${API}/api/explain`, {
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
  fetch(`${API}/api/fix`, {
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

function upload() {
  const file = document.getElementById("image").files[0];

  const formData = new FormData();
  formData.append("image", file);

  fetch(`${API}/api/screenshot`, {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("output").innerText = data.result;
  });
}
