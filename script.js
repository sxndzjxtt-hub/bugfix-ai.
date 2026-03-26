const API = "https://bugfix-backend-1.onrender.com";

let user = localStorage.getItem("user");
let plan = localStorage.getItem("plan");

// 🔐 redirect logic
if (!user && !location.pathname.includes("login")) {
  location.href = "login.html";
}

if (user && !plan && !location.pathname.includes("pricing")) {
  location.href = "pricing.html";
}

// 🚀 MAIN FUNCTION
async function handleAction(type) {
  const input = document.getElementById("codeInput").value;

  if (!input) return alert("Enter error");

  const res = await fetch(API + "/api/" + type, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      error: input,
      userId: user,
      plan: plan || "free"
    })
  });

  const data = await res.json();

  document.getElementById("outputBox").innerText =
    data.result || data.error;
}

// 🔐 LOGIN
function loginUser() {
  const email = document.getElementById("email").value;
  localStorage.setItem("user", email);
  location.href = "pricing.html";
}

// 💰 PLAN
function selectPlan(p) {
  localStorage.setItem("plan", p);
  location.href = "index.html";
}
// 🔥 CURSOR GLOW FOLLOW
document.addEventListener("mousemove", e => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");

  const glow = document.body;
  glow.style.setProperty("--mx", e.clientX + "px");
  glow.style.setProperty("--my", e.clientY + "px");
});

// 🔥 PARTICLES GENERATOR
setInterval(() => {
  const p = document.createElement("div");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (4 + Math.random() * 4) + "s";
  document.body.appendChild(p);

  setTimeout(() => p.remove(), 8000);
}, 400);
