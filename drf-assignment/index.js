document.querySelectorAll(".customDropdown").forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdownToggle");
  const menu = dropdown.querySelector(".dropdownMenu");
  const icon = toggle.querySelector("svg"); // Select the SVG icon

  // Hide the menu by default
  menu.style.display = "none";

  // Toggle dropdown on click
  toggle.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event from bubbling up

    const isOpen = menu.style.display === "block";
    menu.style.display = isOpen ? "none" : "block";
    
    // Rotate the icon when dropdown is open
    icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
    icon.style.transition = "transform 0.3s ease"; // Smooth animation
  });

  // Handle option selection
  menu.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      toggle.querySelector("h4").textContent = item.textContent; // Update text
      menu.style.display = "none"; // Hide menu
      icon.style.transform = "rotate(0deg)"; // Reset icon rotation
    });
  });

  // Hide menu if clicked outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      menu.style.display = "none";
      icon.style.transform = "rotate(0deg)"; // Reset icon rotation
    }
  });
});
