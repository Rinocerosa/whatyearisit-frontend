document.addEventListener("DOMContentLoaded", function () {
  // Effectuer une requête GET vers le backend hébergé sur Vercel
  fetch("whatyearisit-backend-theta-beryl.vercel.app/year")
    .then((response) => response.json())
    .then((data) => {
      // Dynamiser la partie HTML en changeant le contenu de l'élément avec l'ID "year"
      document.getElementById("year").textContent = data.year;
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération de l'année:", error)
    );
});
