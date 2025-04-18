// Toggle recipe details
function toggleRecipe(button) {
  const recipeId = button.getAttribute("data-target");
  const recipeDetails = document.getElementById(recipeId);

  // Ensure only the clicked recipe toggles
  document.querySelectorAll(".recipe-details").forEach((details) => {
    if (details !== recipeDetails) {
      details.classList.remove("open");
      const otherButton = details.previousElementSibling;
      const otherIcon = otherButton.querySelector("i");
      otherIcon.classList.remove("fa-chevron-up");
      otherIcon.classList.add("fa-chevron-down");
    }
  });

  // Toggle the clicked recipe
  recipeDetails.classList.toggle("open");

  // Change button icon
  const icon = button.querySelector("i");
  if (recipeDetails.classList.contains("open")) {
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  } else {
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  }
}

// Handle registration form submission
document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("registrationForm");
  if (registrationForm) {
    registrationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Show success message
      document.getElementById("successMessage").classList.remove("hidden");

      // Reset form
      this.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        document.getElementById("successMessage").classList.add("hidden");
      }, 5000);
    });
  }

  let dots = [];

  document.addEventListener("mousemove", (e) => {
    // Create new dot
    const dot = document.createElement("div");
    dot.className = "cursor-trail";
    dot.style.left = e.pageX + "px";
    dot.style.top = e.pageY + "px";
    document.body.appendChild(dot);

    // Add to array and remove after animation
    dots.push(dot);
    setTimeout(() => {
      dot.remove();
      dots = dots.filter((d) => d !== dot);
    }, 800);
  });
});
