const API = "https://bugfix-backend-1.onrender.com";

const userId = localStorage.getItem("user") || Date.now();
localStorage.setItem("user", userId);

function handleAction(type) {
  const input = document.getElementById("codeInput").value;
  const plan = document.getElementById("planSelect").value;

  if (!input.trim()) {
    alert("Please enter code or error 😅");
    return;
  }

  document.getElementById("loadingOverlay").style.display = "flex";

  const endpoint = type === "explain" ? "/api/explain" : "/api/fix";

  fetch(API + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      error: input,
      userId,
      plan
    })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("loadingOverlay").style.display = "none";

    const outputBox = document.getElementById("outputBox");

    outputBox.innerText = data.result || data.error || "No response";
  })
  .catch(err => {
    document.getElementById("loadingOverlay").style.display = "none";
    alert("Something went wrong 😭");
    console.error(err);
  });
}

// COPY BUTTON
function copyOutput() {
  const text = document.getElementById("outputBox").innerText;

  navigator.clipboard.writeText(text);

  document.getElementById("copyBtn").innerText = "Copied!";
  setTimeout(() => {
    document.getElementById("copyBtn").innerText = "Copy";
  }, 1500);
}
