// ===== Dynamic Menu Rendering =====
// (menuData & renderMenu defined inside DOMContentLoaded)
document.addEventListener("DOMContentLoaded", () => {
 const menuData = 
   const menuContainer = document.getElementById("menu-content");
    const buttons = document.querySelectorAll(".menu-nav button");

    function capitalize(str) {
      if (!str) return '';
      // Special handling for categories with "&" to capitalize both parts
      if (str.includes(' & ')) {
        return str.split(' & ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' & ');
      }
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    function renderMenu(category) {
      const items = menuData[category];
      if (!items) {
        console.warn(`Category "${category}" not found in menuData.`);
        menuContainer.innerHTML = `<h2>${capitalize(category)}</h2><p>No se encontraron elementos para esta categoría.</p>`;
        return;
      }

      // Translate category display name
      let displayCategoryName;
      switch(category) {
          case "Breakfast": displayCategoryName = "Desayuno"; break;
          case "APPETIZERS": displayCategoryName = "Aperitivos"; break;
          case "tacos": displayCategoryName = "Tacos"; break;
          case "burritos": displayCategoryName = "Burritos"; break;
          case "platillos": displayCategoryName = "Platillos"; break;
          case "SEAFOOD": displayCategoryName = "Mariscos"; break;
          case "DESSERT": displayCategoryName = "Postres"; break;
          case "BEVERAGES": displayCategoryName = "Bebidas"; break;
          case "COCKTAILS": displayCategoryName = "Cócteles"; break;
          case "SHOTS": displayCategoryName = "Shots"; break;
          case "BEER": displayCategoryName = "Cerveza"; break;
          case "CHEESEBURGERS": displayCategoryName = "Hamburguesas con Queso"; break;
          case "KIDS": displayCategoryName = "Niños"; break;
          case "SOUPS": displayCategoryName = "Sopas"; break;
          case "SIDE": displayCategoryName = "Guarniciones"; break;
          case "tortas": displayCategoryName = "Tortas"; break;
          case "Gorditas": displayCategoryName = "Gorditas"; break;
          case "Tostadas & Sopes": displayCategoryName = "Tostadas y Sopes"; break;
          default: displayCategoryName = capitalize(category); // Fallback for any unhandled categories
      }

      menuContainer.innerHTML = `
        <h2>${displayCategoryName}</h2>
        <div class="menu-grid">
          ${items.map(item => `
            <div class="menu-card">
              <img src="${item.image || 'public/placeholder1.png'}" alt="${item.name}">
              <div class="info">
                <h3>${item.name}</h3>
                ${item.description ? `<p>${item.description}</p>` : ''}
                <span class="price">${item.price}</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const category = button.dataset.category;
        buttons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");
        renderMenu(category);
      });
    });

    // Render the initial category when the page loads
    renderMenu("Breakfast");
});

// Observe all elements meant to fade in
const fadeElements = document.querySelectorAll('.fade-in-on-scroll, .fade-section');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.3 });

fadeElements.forEach(el => fadeObserver.observe(el));

// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const mobileNav = document.getElementById('mobileNav');
const closeMenuBtn = document.querySelector('.close-menu');

burger?.addEventListener('click', () => {
  mobileNav?.classList.add('open');
});

closeMenuBtn?.addEventListener('click', () => {
  mobileNav?.classList.remove('open');
});

// Optional: close menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav?.classList.remove('open');
  });
});

 document.getElementById("year").textContent = new Date().getFullYear();