// Ganpati Bappa animation

document.addEventListener("mousemove", (e) => {

    const ganpati = document.querySelector(".ganpati");

    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;

    ganpati.style.transform =
        `translate(${x}px, ${y}px)`;
});

console.log("🙏 Ganpati Bappa Morya 🙏");
