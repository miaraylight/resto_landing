// ===== Dynamic Menu Rendering =====
// (menuData & renderMenu defined inside DOMContentLoaded)
document.addEventListener("DOMContentLoaded", () => {
  const menuData = {
    "Desayunos": [
      {
        "name": "Huevos con Jamón",
        "price": "$14.99",
        "description": "Huevos con jamón"
      },
      {
        "name": "Huevos a la Mexicana",
        "price": "$14.99",
        "description": "Huevos revueltos con salsa a base de tomate"
      },
      {
        "name": "Huevos con Chorizo",
        "price": "$14.99",
        "description": "Huevos con chorizo mexicano"
      },
      {
        "name": "Huevos Rancheros",
        "price": "$14.99",
        "description": "Huevos fritos con tortilla y salsa"
      },
      {
        "name": "Chilaquiles",
        "price": "$11.50",
        "description": "Totopos en salsa roja o verde"
      }
    ],
    "Entradas": [
      {
        "name": "Guacamole con Totopos",
        "price": "$7.99",
        "description": "Dip de aguacate fresco con totopos"
      },
      {
        "name": "Nachos con Carne",
        "price": "$14.99",
        "description": "Totopos con carne de res y queso"
      },
      {
        "name": "Alitas (8 piezas)",
        "price": "$10.00",
        "description": "Alitas de pollo crujientes"
      },
      {
        "name": "Alitas (12 piezas)",
        "price": "$14.99",
        "description": "Alitas de pollo crujientes"
      },
      {
        "name": "Calamares Empanizados",
        "price": "$11.99",
        "description": "Aros empanizados con mayonesa de chipotle"
      }
    ],
    "Tacos": [
      {
        "name": "Taco de Bistec",
        "price": "$3.99",
        "description": null
      },
      {
        "name": "Taco al Pastor",
        "price": "$3.99",
        "description": "Carne de cerdo marinada picante"
      },
      {
        "name": "Taco de Birria",
        "price": "$17.99",
        "description": "Servido con consomé"
      },
      {
        "name": "Trío de Quesabirrias",
        "price": "$18.99",
        "description": "Tres tacos de birria con queso y consomé"
      },
      {
        "name": "Taco de Lengua",
        "price": "$4.99",
        "description": "Lengua de res tierna"
      }
    ],
    "Burritos": [
      {
        "name": "Burrito (Relleno a elegir)",
        "price": "$10.99",
        "description": "Con frijoles, queso, crema, lechuga y tomate"
      },
      {
        "name": "Burrito Catrina",
        "price": "$14.99",
        "description": "Especial de la casa con sabor intenso"
      },
      {
        "name": "Cena de Burrito",
        "price": "$16.99",
        "description": "A elegir entre camarón, pescado o lengua"
      },
      {
        "name": "Cena de Burrito con Mole",
        "price": "$17.99",
        "description": "Cubierto con mole o salsa roja"
      }
    ],
    "Platillos": [
      {
        "name": "Cena de Pollo",
        "price": "$17.99",
        "description": null
      },
      {
        "name": "Enchiladas (Queso/Carne)",
        "price": "$15.99",
        "description": "Tortillas enrolladas con salsa y guarnición"
      },
      {
        "name": "Carne Asada",
        "price": "$18.99",
        "description": "Bistec de res a la parrilla"
      },
      {
        "name": "Carne y Camarón",
        "price": "$22.99",
        "description": "Combinación de carne asada y camarones"
      },
      {
        "name": "Cena de Chile Relleno",
        "price": "$16.99",
        "description": "Chile poblano relleno"
      }
    ],
    "Mariscos": [
      {
        "name": "Camarones al Mojo",
        "price": "$20.99",
        "description": "Camarones en salsa de mantequilla con ajo"
      },
      {
        "name": "Camarones a la Diabla",
        "price": "$20.99",
        "description": "Camarones en salsa roja picante"
      },
      {
        "name": "Mojarra Entera",
        "price": "$25.99",
        "description": "Tilapia entera al mojo o a la diabla"
      },
      {
        "name": "Coctel de Camarón",
        "price": "$17.00",
        "description": "Cóctel de camarón con aguacate y tomate"
      },
      {
        "name": "Tostadas de Ceviche",
        "price": "$6.99",
        "description": "Ceviche de mariscos en tostadas"
      }
    ],
    "Postres": [
      {
        "name": "Churro",
        "price": "$6.00",
        "description": null
      },
      {
        "name": "Flan",
        "price": "$4.00",
        "description": null
      },
      {
        "name": "Tiramisú",
        "price": "$4.99",
        "description": null
      },
      {
        "name": "Pastel de Oreo",
        "price": "$4.99",
        "description": null
      }
    ],
    "Bebidas": [
      {
        "name": "Margarita Reina",
        "price": "$15.00",
        "description": null
      },
      {
        "name": "Michelada",
        "price": "$12.00",
        "description": "Cóctel de cerveza con especias"
      },
      {
        "name": "Jarritos",
        "price": "$2.99",
        "description": null
      },
      {
        "name": "Horchata / Jamaica",
        "price": "$2.99–$5.99",
        "description": "Bebidas tradicionales mexicanas"
      },
      {
        "name": "Cerveza Nacional",
        "price": "$5.00",
        "description": null
      },
      {
        "name": "Cerveza Importada",
        "price": "$6.00",
        "description": null
      }
    ]
  };
  const menuContainer = document.getElementById("menu-content");
  const buttons = document.querySelectorAll(".menu-nav button");

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  function renderMenu(category) {
    const items = menuData[category];
    if (!items) return;

    menuContainer.innerHTML = `
        <h2>${capitalize(category)}</h2>
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

  renderMenu("Desayunos");
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