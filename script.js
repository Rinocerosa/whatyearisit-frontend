document.addEventListener("DOMContentLoaded", function () {
  fetch("https://whatyearisit-backend.vercel.app/year")
    .then((response) => response.json())
    .then((data) => {
      console.log("Frontend: Received response from backend:", data);
      document.getElementById("year").textContent = data.year;
    })
    .catch((error) =>
      console.error("Frontend: Error fetching current year:", error)
    );
});
