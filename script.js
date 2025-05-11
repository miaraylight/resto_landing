const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('modal-close');
const galleryItems = document.querySelectorAll('.gallery-item');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const burger = document.querySelector(".burger");
const mobileNav = document.getElementById("mobileNav");
const closeBurgerBtn = document.querySelector(".close-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

burger.addEventListener("click", () => {
  mobileNav.classList.add("open");
});

closeBurgerBtn.addEventListener("click", () => {
  mobileNav.classList.remove("open");
});

mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  });
});

// Optional: close if you click outside the menu
window.addEventListener("click", (e) => {
  if (!mobileNav.contains(e.target) && !burger.contains(e.target)) {
    mobileNav.classList.remove("open");
  }
});

let currentIndex = 0;
const images = Array.from(galleryItems);

function openModal(index) {
  modal.style.display = 'flex';
  modalImg.src = images[index].src;
  modalImg.alt = images[index].alt;
  currentIndex = index;
}

function closeModal() {
  modal.style.display = 'none';
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  openModal(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openModal(currentIndex);
}

galleryItems.forEach((item, i) => {
  item.addEventListener('click', () => openModal(i));
});

closeBtn.addEventListener('click', closeModal);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});

modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target === modalImg) closeModal();
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in-on-scroll');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

faders.forEach(fader => observer.observe(fader));


const fadeSections = document.querySelectorAll(".fade-section");

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.3 });

fadeSections.forEach(section => {
  observer1.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  const menuData = {
    "breakfast": [
      {
        "name": "Huevos con Jamón",
        "price": "$14.99",
        "description": "Eggs with ham",
      },
      {
        "name": "Huevos a la Mexicana",
        "price": "$14.99",
        "description": "Eggs scrambled in tomato-based salsa"
      },
      {
        "name": "Huevos con Chorizo",
        "price": "$14.99",
        "description": "Eggs with Mexican sausage"
      },
      {
        "name": "Huevos Rancheros",
        "price": "$14.99",
        "description": "Fried eggs with tortilla and salsa"
      },
      {
        "name": "Chilaquiles",
        "price": "$11.50",
        "description": "Tortilla chips in red or green salsa"
      }
    ],
    "appetizers": [
      {
        "name": "Guacamole & Chips",
        "price": "$7.99",
        "description": "Fresh avocado dip & tortilla chips"
      },
      {
        "name": "Nachos with Meat",
        "price": "$14.99",
        "description": "Tortilla chips loaded with beef & cheese"
      },
      {
        "name": "Wings (8pc)",
        "price": "$10.00",
        "description": "Crispy chicken wings"
      },
      {
        "name": "Wings (12pc)",
        "price": "$14.99",
        "description": "Crispy chicken wings"
      },
      {
        "name": "Fried Calamari",
        "price": "$11.99",
        "description": "Lightly breaded rings with chipotle mayo"
      }
    ],
    "tacos": [
      {
        "name": "Steak Taco",
        "price": "$3.99",
        "description": null
      },
      {
        "name": "Al Pastor Taco",
        "price": "$3.99",
        "description": "Spicy marinated pork"
      },
      {
        "name": "Birria Taco",
        "price": "$17.99",
        "description": "Served with consomé"
      },
      {
        "name": "Quesabirria Trio",
        "price": "$18.99",
        "description": "Three beef & cheese tacos with consomé"
      },
      {
        "name": "Lengua Taco",
        "price": "$4.99",
        "description": "Tender beef tongue"
      }
    ],
    "burritos": [
      {
        "name": "Burrito (Any filling)",
        "price": "$10.99",
        "description": "Served with beans, cheese, sour cream, lettuce, tomato"
      },
      {
        "name": "Catrina Burrito",
        "price": "$14.99",
        "description": "House special with bold flavor"
      },
      {
        "name": "Burrito Dinner",
        "price": "$16.99",
        "description": "Choice of shrimp, fish, or lengua"
      },
      {
        "name": "Burrito Dinner w/ Mole",
        "price": "$17.99",
        "description": "Topped with mole or red salsa"
      }
    ],
    "platillos": [
      {
        "name": "Chicken Dinner",
        "price": "$17.99",
        "description": null
      },
      {
        "name": "Enchiladas (Cheese/Meat)",
        "price": "$15.99",
        "description": "Rolled tortillas with sauce & garnish"
      },
      {
        "name": "Carne Asada",
        "price": "$18.99",
        "description": "Grilled beef steak"
      },
      {
        "name": "Steak & Shrimp",
        "price": "$22.99",
        "description": "Grilled steak and shrimp combo"
      },
      {
        "name": "Chile Relleno Dinner",
        "price": "$16.99",
        "description": "Stuffed poblano pepper"
      }
    ],
    "seafood": [
      {
        "name": "Camarones al Mojo",
        "price": "$20.99",
        "description": "Shrimp in garlic butter sauce"
      },
      {
        "name": "Camarones a la Diabla",
        "price": "$20.99",
        "description": "Spicy red-sauce shrimp"
      },
      {
        "name": "Mojarra (entera)",
        "price": "$25.99",
        "description": "Whole tilapia in garlic or diabla style"
      },
      {
        "name": "Coctel de Camarón",
        "price": "$17.00",
        "description": "Shrimp cocktail with avocado & tomato"
      },
      {
        "name": "Tostadas de Ceviche",
        "price": "$6.99",
        "description": "Seafood ceviche on tostadas"
      }
    ],
    "desserts": [
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
        "name": "Tiramisu",
        "price": "$4.99",
        "description": null
      },
      {
        "name": "Oreo Cake",
        "price": "$4.99",
        "description": null
      }
    ],
    "drinks": [
      {
        "name": "Margarita Queen",
        "price": "$15.00",
        "description": null
      },
      {
        "name": "Michelada",
        "price": "$12.00",
        "description": "Classic spiced beer cocktail"
      },
      {
        "name": "Jarritos",
        "price": "$2.99",
        "description": null
      },
      {
        "name": "Horchata / Jamaica",
        "price": "$2.99–$5.99",
        "description": "Traditional Mexican drinks"
      },
      {
        "name": "Domestic Beer",
        "price": "$5.00",
        "description": null
      },
      {
        "name": "Imported Beer",
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

  renderMenu("breakfast");
});
