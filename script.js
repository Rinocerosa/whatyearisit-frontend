document.addEventListener("DOMContentLoaded", function () {
  fetch("https://whatyearisit-backend.vercel.app/year")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("year").textContent = data.year.toString();
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération de l'année:", error)
    );
});
