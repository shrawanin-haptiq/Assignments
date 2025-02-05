document.querySelectorAll(".customDropdown").forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdownToggle");
  const menu = dropdown.querySelector(".dropdownMenu");

  // Hide the menu by default
  menu.style.display = "none";

  // Toggle dropdown on click
  toggle.addEventListener("click", (e) => {
    // Prevent the click event from propagating to the document listener
    e.stopPropagation();
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  // Handle option selection
  menu.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      toggle.textContent = item.textContent; // Update button text
      menu.style.display = "none"; // Hide menu
    });
  });

  // Hide menu if clicked outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      menu.style.display = "none";
    }
  });
});
