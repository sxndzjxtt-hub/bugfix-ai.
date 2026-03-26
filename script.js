const API = "https://bugfix-backend-1.onrender.com";
const userId = localStorage.getItem("user") || Date.now();
localStorage.setItem("user", userId);

// typing animation
async function typeText(el, text) {
  el.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    el.innerHTML += text[i];
    await new Promise(r => setTimeout(r, 8));
  }
}

function handleAction(type) {
  const input = document.getElementById("codeInput").value;
  const plan = document.getElementById("planSelect").value;
  const output = document.getElementById("outputBox");

  if (!input.trim()) {
    alert("Enter code 😅");
    return;
  }

  document.getElementById("loadingOverlay").classList.add("active");

  fetch(API + "/api/" + type, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ error: input, userId, plan })
  })
  .then(res => res.json())
  .then(async data => {
    document.getElementById("loadingOverlay").classList.remove("active");

    const text = data.result || data.error || "No response";

    await typeText(output, text);

    output.classList.add("has-content");
  })
  .catch(() => {
    document.getElementById("loadingOverlay").classList.remove("active");
    output.innerText = "Error 😢";
  });
}

// login
function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}
function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}
