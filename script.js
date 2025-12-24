function showMessage() {
  const msg = document.getElementById("message");

  if (msg.classList.contains("active")) return;

  msg.style.display = "block";
  msg.classList.add("active");

  // Mesaj animasyonu
  msg.animate(
    [
      { opacity: 0, transform: "translateY(20px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    {
      duration: 800,
      easing: "cubic-bezier(.22,.61,.36,1)",
      fill: "forwards"
    }
  );

  // Parçacık efekti
  for (let i = 0; i < 14; i++) {
    createParticle();
  }
}

// Parçacık oluşturma
function createParticle() {
  const particle = document.createElement("span");
  particle.innerText = Math.random() > 0.5 ? "✨" : "💖";
  particle.style.position = "fixed";
  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.top = window.innerHeight - 100 + "px";
  particle.style.fontSize = Math.random() * 14 + 14 + "px";
  particle.style.pointerEvents = "none";
  particle.style.zIndex = 9999;

  document.body.appendChild(particle);

  particle.animate(
    [
      { transform: "translateY(0) scale(1)", opacity: 1 },
      {
        transform: `translateY(-${Math.random() * 200 + 150}px) scale(1.6)`,
        opacity: 0
      }
    ],
    {
      duration: Math.random() * 1200 + 1000,
      easing: "ease-out",
      fill: "forwards"
    }
  );

  setTimeout(() => particle.remove(), 2200);
}

// Arka planda yavaş yavaş çıkan kalpler
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerText = "💗";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "-20px";
  heart.style.fontSize = Math.random() * 10 + 16 + "px";
  heart.style.opacity = 0.6;
  heart.style.pointerEvents = "none";
  heart.style.zIndex = 1;

  document.body.appendChild(heart);

  heart.animate(
    [
      { transform: "translateY(0)", opacity: 0 },
      { transform: "translateY(-120vh)", opacity: 0.6 },
      { opacity: 0 }
    ],
    {
      duration: Math.random() * 6000 + 6000,
      easing: "linear",
      fill: "forwards"
    }
  );

  setTimeout(() => heart.remove(), 12000);
}, 1200);
