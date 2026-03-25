<script>
  document.querySelectorAll(".dropdown .dropbtn").forEach((btn) => {
    const menuId = btn.getAttribute("aria-controls");
    const menu = document.getElementById(menuId);

    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      menu.hidden = isOpen;
    });
  });

  // Optional: close menus when clicking outside
  document.addEventListener("click", (e) => {
    document.querySelectorAll(".dropdown").forEach((dd) => {
      if (!dd.contains(e.target)) {
        const btn = dd.querySelector(".dropbtn");
        const menu = dd.querySelector(".dropdown-content");
        if (btn && menu && btn.getAttribute("aria-expanded") === "true") {
          btn.setAttribute("aria-expanded", "false");
          menu.hidden = true;
        }
      }
    });
  );
</script>