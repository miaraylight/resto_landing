// ===== Dynamic Menu Rendering =====
// (menuData & renderMenu defined inside DOMContentLoaded)
document.addEventListener("DOMContentLoaded", () => {

 const menuData = {
      "BEVERAGES": [
        {
          "name": "HORCHATA, JAMAICA, TAMARINDO",
          "price": "$3.25",
          "description": "16 Oz, also available in 32 Oz for $6.50",
          "image": "public/placeholder1.png"
        },
        {
          "name": "JARRITOS",
          "price": "$3.50",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "SODA DE LATA",
          "price": "$2.25",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "COCA MEXICANA",
          "price": "$3.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "COCA MEXICANA MEDIO LITRO",
          "price": "$4.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "CAFE (16 Oz)",
          "price": "$3.25",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "JUGO DE NARANJA NATURAL",
          "price": "$5.00",
          "description": "16 Oz, also available in 32 Oz for $10.00",
          "image": "public/placeholder1.png"
        }
      ],
      "COCKTAILS": [
        {
          "name": "MEGA MARGARITA",
          "price": "$49.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "TAMARINDO/MANGO MICHELADA",
          "price": "$13.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "REGULAR MICHELADA",
          "price": "$12.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "LAS CARIÑOSAS (tamarindo / STRAWBERRY / MANGO)",
          "price": "$29.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "PALOMASO 32 oz w hornitos tequila bottle",
          "price": "$28.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "CRAZY REMY cóctel w/ sm bottle de remy",
          "price": "$28.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "CATRINA QUEEN serv sm botlle de henesys",
          "price": "$28.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "PINA COLADA QUEEN serve w sm bottle Malibu",
          "price": "$28.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "MARGARITA ORIGINAL 12 oz",
          "price": "$12.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "MARGARITA QUEEN w coronita beer or modelito",
          "price": "$16.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "MARGARITA STRAWBERRY/MANGO/TAMARINDO 12 oz",
          "price": "$14.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "HEAVENLY HIBISCUS",
          "price": "$10.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "PIÑA COLADA",
          "price": "$13.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "LONG ISLAND",
          "price": "$8.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "D’USSE COCKTAIL",
          "price": "$13.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "CANTARITO",
          "price": "$13.00",
          "description": null,
          "image": "public/placeholder1.png"
        }
      ],
      "SHOTS": [
        {
          "name": "DON JULIO 70 PATRON CRYSTALINO",
          "price": "$15.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "PATRON CASAMIGOS ADICTIVO DON JULIO",
          "price": "$12.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "MEZCAL SHOT (400 CONEJOS / UNION / VIDA / MONTE ALBAN)",
          "price": "$10.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "HORNITOS, CENTENARIO SHOT",
          "price": "$10.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "JAMESON/ REMY / HENNESY / JACK DANIELS / D’USSE",
          "price": "$12.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "DON JULIO 1942",
          "price": "$30.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "CLASE AZUL",
          "price": "$30.00",
          "description": null,
          "image": "public/placeholder1.png"
        }
      ],
      "BEER": [
        {
          "name": "DOMESTIC",
          "price": "$5.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "IMPORTED",
          "price": "$6.00",
          "description": null,
          "image": "public/placeholder1.png"
        }
      ],
      "DESSERT": [
        {
          "name": "FLAN",
          "price": "$5.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "CHURRO",
          "price": "$5.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "CHEESECAKE",
          "price": "$5.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "OREO CAKE",
          "price": "$5.99",
          "description": null,
          "image": "public/placeholder1.png"
        }
      ],
      "platillos": [
        {
          "name": "ENCHILADAS CHEESE",
          "price": "$14.99",
          "description": "Served with salad, rice, beans. Extra queso or crema $0.50, Extra avocado $0.75",
          "image": "public/placeholder1.png"
        },
        {
          "name": "ENCHILADAS MEAT",
          "price": "$16.99",
          "description": "Served with salad, rice, beans. Extra queso or crema $0.50, Extra avocado $0.75",
          "image": "public/placeholder1.png"
        },
        {
          "name": "MAR Y TIERRA",
          "price": "$26.99",
          "description": "6 oz arrachera, chicken breast, grilled shrimp served with rice, beans guacamole",
          "image": "public/placeholder1.png"
        },
        {
          "name": "CECINA DINNER",
          "price": "$19.99",
          "description": "Served with grilled onion, rice, beans, salad",
          "image": "public/placeholder1.png"
        },
        {
          "name": "CHICKEN FAJITAS",
          "price": "$14.99",
          "description": "Served with rice, beans and salad",
          "image": "public/placeholder1.png"
        },
        {
          "name": "FAJITAS MIX (STEAK, CHICKEN. & SHRIMP)",
          "price": "$22.99",
          "description": "Served with rice, beans and salad",
          "image": "public/placeholder1.png"
        },
        {
          "name": "GRILLED CHICKEN BREAST PECHUGA DE POLLO A LA PLANCHA",
          "price": "$14.99",
          "description": "Served with rice, beans and salad",
          "image": "public/placeholder1.png"
        },
        {
          "name": "MEXICAN STYLE STEAK",
          "price": "$17.99",
          "description": "Served with rice & beans",
          "image": "public/placeholder1.png"
        },
        {
          "name": "CARNE ASADA",
          "price": "$35.99",
          "description": "12 oz de skirt steak served with rice, salad, beans",
          "image": "public/placeholder1.png"
        },
        {
          "name": "TAMPIQUEÑA",
          "price": "$39.99",
          "description": "Served with rice, beans, 1 enchilada, 12oz meet - 12 oz de skirt steak, rice, beans, guacamole, 1 mole enchilada",
          "image": "public/placeholder1.png"
        },
        {
          "name": "MILANESA DE RES OR MILANESA DE POLLO",
          "price": "$14.99",
          "description": "Served with salad, rice, beans chicken or beef",
          "image": "public/placeholder1.png"
        },
        {
          "name": "STEAK FAJITAS",
          "price": "$19.99",
          "description": "Served with rice, beans",
          "image": "public/placeholder1.png"
        },
        {
          "name": "MOLE DINNER",
          "price": "$14.99",
          "description": "2 pc chicken with delicious mole style Guerrero, served with rice & beans",
          "image": "public/placeholder1.png"
        },
        {
          "name": "CHILE RELLENO DINNER",
          "price": "$16.99",
          "description": "Vegetarian, Rice beans and salsa ranchera",
          "image": "public/placeholder1.png"
        }
      ],
      "CHEESEBURGERS": [
        {
          "name": "CHEESEBURGER",
          "price": "$10.99",
          "description": "Served with lettuce, tomato, onion, mayonnaise and fries",
          "image": "public/placeholder1.png"
        },
        {
          "name": "DOUBLE CHEESEBURGER",
          "price": "$11.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "A LA MEXIQUE",
          "price": "$12.99",
          "description": "6 oz party med. served with bean, avocado, lettuce, onion, tomato, jalapenos mayonnaise and fries",
          "image": "public/placeholder1.png"
        },
        {
          "name": "BACON CHEESE BURGER",
          "price": "$11.99",
          "description": "Served with lettuce, tomato, onion, mayonnaise and fries",
          "image": "public/placeholder1.png"
        },
        {
          "name": "BACON DOUBLE-CHEESEBURGER",
          "price": "$12.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "EGG CHEESEBURGER",
          "price": "$14.99",
          "description": "Served with lettuce, tomato, avocado, onion, bacon, egg, and mayonnaise",
          "image": "public/placeholder1.png"
        }
      ],
      "KIDS": [
        {
          "name": "TACO DINNER",
          "price": "$7.75",
          "description": "Rice and beans plain (12 & Under Only)",
          "image": "public/placeholder1.png"
        },
        {
          "name": "CHICKEN NUGGETS",
          "price": "$7.75",
          "description": "Nuggets and fries (12 & Under Only)",
          "image": "public/placeholder1.png"
        },
        {
          "name": "MOZZARELLA CHEESE STICKS",
          "price": "$7.75",
          "description": "Served with fries (12 & Under Only)",
          "image": "public/placeholder1.png"
        },
        {
          "name": "CHEESE BURGER",
          "price": "$7.75",
          "description": "Served with fries and cheese (12 & Under Only)",
          "image": "public/placeholder1.png"
        },
        {
          "name": "KIDS JUICE",
          "price": "$1.50",
          "description": null,
          "image": "public/placeholder1.png"
        }
      ],
      "SEAFOOD": [
        {
          "name": "GRILLED SHRIMP",
          "price": "$21.99",
          "description": "Served with salad, rice, grilled onion",
          "image": "public/placeholder1.png"
        },
        {
          "name": "SHRIMP IN SPICY SAUCE",
          "price": "$21.99",
          "description": "Served with salad, rice, grilled onion",
          "image": "public/placeholder1.png"
        },
        {
          "name": "WHOLE TILAPIA FISH",
          "price": "$21.99",
          "description": "Salad and rice",
          "image": "public/placeholder1.png"
        },
        {
          "name": "WHOLE TILAPIA FISH IN GARLIC SAUCE",
          "price": "$25.99",
          "description": "Salad, rice, fries, fresh garlic seasoned on top",
          "image": "public/placeholder1.png"
        },
        {
          "name": "TILAPIA FILLET",
          "price": "$21.99",
          "description": "2 pc fillet served with salad and rice",
          "image": "public/placeholder1.png"
        },
        {
          "name": "SHRIMP FAJITAS",
          "price": "$21.99",
          "description": "Served with salad and rice",
          "image": "public/placeholder1.png"
        },
        {
          "name": "SHRIMP COCKTAIL",
          "price": "$20.00",
          "description": "Served with onion, tomato, onion, cilantro, avocado shrimp",
          "image": "public/placeholder1.png"
        },
        {
          "name": "COCTEL MIXTO (SHRIMP, OCTOPUS)",
          "price": "$24.99",
          "description": "Served with onion, tomato, onion, cilantro, avocado shrimp, octopus",
          "image": "public/placeholder1.png"
        },
        {
          "name": "CHAPUZON (POLPO Y CAMARÓN AND SPECIAL SAUCE)",
          "price": "$21.99",
          "description": "Served with salad and rice",
          "image": "public/placeholder1.png"
        },
        {
          "name": "CAMARONES EMPANIZADOS",
          "price": "$21.99",
          "description": "Served with salad and rice, fries & garlic bread",
          "image": "public/placeholder1.png"
        },
        {
          "name": "PULPO A LA DIABLA",
          "price": "$21.99",
          "description": "Octopus and spicy sauce, served with salad, and rice",
          "image": "public/placeholder1.png"
        }
      ],
      "SOUPS": [
        {
          "name": "CHICKEN SOUP (caldo de pollo)",
          "price": "$13.99",
          "description": "Zucchini and carrot potatoe",
          "image": "public/placeholder1.png"
        },
        {
          "name": "SHRIMP SOUP (caldo de camaron)",
          "price": "$15.99",
          "description": "Zucchini and carrot potatoe",
          "image": "public/placeholder1.png"
        },
        {
          "name": "SHRIMP & FISH SOUP (caldo de camarón y pezcado)",
          "price": "$17.99",
          "description": "Zucchini and carrot potatoe",
          "image": "public/placeholder1.png"
        },
        {
          "name": "MENUDO",
          "price": "$14.99",
          "description": "Beef belly",
          "image": "public/placeholder1.png"
        },
        {
          "name": "BIRRIA",
          "price": "$17.99",
          "description": "Lamb and chickpea",
          "image": "public/placeholder1.png"
        },
        {
          "name": "POZOLE",
          "price": "$14.99",
          "description": "Boiled pork and corn",
          "image": "public/placeholder1.png"
        }
      ],
      "APPETIZERS": [
        {
          "name": "GUACAMOLE & CHIPS",
          "price": "$11.99",
          "description": "12OZ, 16OZ for $14.99",
          "image": "public/placeholder1.png"
        },
        {
          "name": "QUESO FUNDIDO",
          "price": "$11.99",
          "description": "Served with tortillas (with chorizo $2)",
          "image": "public/placeholder1.png"
        },
        {
          "name": "QUESADILLAS W/ CHEESE",
          "price": "$2.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "QUESADILLAS W/ MEAT",
          "price": "$4.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "LANGOSTINOS MED",
          "price": "$21.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "LANGOSTINOS LG",
          "price": "$40.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "FRIED CALAMARI",
          "price": "$11.99",
          "description": "With chipotle mayo",
          "image": "public/placeholder1.png"
        },
        {
          "name": "NACHOS W/MEAT",
          "price": "$14.99",
          "description": "Served with beas, chase, lettuce, tomatoes, onion, sour cream and guacamole",
          "image": "public/placeholder1.png"
        },
        {
          "name": "NACHOS VEGETARIAN",
          "price": "$13.50",
          "description": "Served with beas, chase, lettuce, tomatoes, onion, sour cream and guacamole",
          "image": "public/placeholder1.png"
        },
        {
          "name": "WINGS (búfalo or b.b.q)",
          "price": "$8.00",
          "description": "6PC, 12PC for $14.99",
          "image": "public/placeholder1.png"
        },
        {
          "name": "JUMBO QUESADILLA CHEESE or meat",
          "price": "$12.99",
          "description": "Served with lettuce, sour cream, guacamole",
          "image": "public/placeholder1.png"
        },
        {
          "name": "PICO DE GALLO 16OZ",
          "price": "$5.00",
          "description": "Served with chips",
          "image": "public/placeholder1.png"
        },
        {
          "name": "LA CATRINA SAMPLER",
          "price": "$24.99",
          "description": "FRIED CALAMARI, CHICKEN WING, MOZZARELLA CHEESE STICKS",
          "image": "public/placeholder1.png"
        },
        {
          "name": "TOSTADAS DE CEVICHE",
          "price": "$6.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "CAMARONES A LA CUCARACHA",
          "price": "$23.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "CEVICHE 16OZ",
          "price": "$17.99",
          "description": "16oz of marinated ceviche w/onion/tomato, cilantro and cucumber 3 pc tostadas",
          "image": "public/placeholder1.png"
        },
        {
          "name": "BOTANA DE MARISCOS",
          "price": "$59.99",
          "description": "Grilled shrimp, octopus and prawns, breaded shrimp, shrimp in a pan",
          "image": "public/placeholder1.png"
        }
      ],
      "SIDE": [
        {
          "name": "SOUR CREAM OR CHEESE 4OZ",
          "price": "$1.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "AVOCADO",
          "price": "HALF $2.00 OR FULL $4.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "RICE",
          "price": "16OZ $8.00 - 32oz $4.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "BEANS",
          "price": "16OZ $8.00 - 12oz $4.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "GRILLED ONION (CEBOLLITAS ASADAS)",
          "price": "$6.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "CHIPS",
          "price": "$4.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "FRIES",
          "price": "$5.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "SALSA ROJA O VERDE",
          "price": "16OZ $6.00 - 12 oz $8.00",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "POTATOS TOTS",
          "price": "$4.99",
          "description": null,
          "image": "public/placeholder1.png"
        }
      ],
      "Breakfast": [
        {
          "name": "CHILAQUILES CARNE & HUEVOS",
          "price": "$16.99",
          "description": "Served with rice, beans",
          "image": "public/placeholder1.png"
        },
        {
          "name": "CHILAQUILES HUEVOS",
          "price": "$14.99",
          "description": "Served with rice, beans",
          "image": "public/placeholder1.png"
        },
        {
          "name": "CHILAQUILES",
          "price": "$12.99",
          "description": "Served with rice, beans",
          "image": "public/placeholder1.png"
        },
        {
          "name": "CECINA W/ EGGS SERVED W/RICE AND BEANS",
          "price": "$14.99",
          "description": "Served with rice, beans",
          "image": "public/placeholder1.png"
        },
        {
          "name": "EGGS W/HAM HUEVOS CON JAMÓN",
          "price": "$11.99",
          "description": "Served with rice, beans",
          "image": "public/placeholder1.png"
        },
        {
          "name": "EGGS W/SAUSAGE HUEVOS CON CHORIZO",
          "price": "$11.99",
          "description": "Served with rice, beans",
          "image": "public/placeholder1.png"
        },
        {
          "name": "MEXICAN STYLE EGGS",
          "price": "$11.99",
          "description": "Served with rice, beans",
          "image": "public/placeholder1.png"
        },
        {
          "name": "STEAK & EGG",
          "price": "$21.00",
          "description": "W egg and tator tots",
          "image": "public/placeholder1.png"
        },
        {
          "name": "HUEVOS RANCHEROS",
          "price": "$11.99",
          "description": "Served with rice, beans",
          "image": "public/placeholder1.png"
        },
        {
          "name": "Pancakes",
          "price": "$9.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "Brunchburger",
          "price": "$14.99",
          "description": "Served w/ Bacon eggs and mozzarella and tator tots",
          "image": "public/placeholder1.png"
        },
        {
          "name": "Guacamole toast",
          "price": "$12.99",
          "description": "W/ eggs & tator tots",
          "image": "public/placeholder1.png"
        },
        {
          "name": "French toast",
          "price": "$10.99",
          "description": null,
          "image": "public/placeholder1.png"
        },
        {
          "name": "2x2",
          "price": "$9.99",
          "description": "Bacon eggs and tator tots",
          "image": "public/placeholder1.png"
        }
      ],
      "tacos": [
        {
          "name": "Taco (Standard Filling)",
          "price": "$3.99",
          "description": "Served on corn tortillas with Cilantro & Onion unless otherwise noted",
          "image": "public/placeholder1.png"
        },
        {
          "name": "Taco (Premium Filling)",
          "price": "$4.99",
          "description": "Served on corn tortillas with Cilantro & Onion unless otherwise noted",
          "image": "public/placeholder1.png"
        },
        {
          "name": "Taco (Vegetarian)",
          "price": "$3.99",
          "description": "Served on corn tortillas with Cilantro & Onion unless otherwise noted",
          "image": "public/placeholder1.png"
        },
        {
          "name": "Taco (Seafood Filling)",
          "price": "$4.99",
          "description": "Served with Tomato, Cilantro, Onion, Avocado",
          "image": "public/placeholder1.png"
        },
        {
          "name": "Chile Relleno Taco",
          "price": "$6.99",
          "description": "Cheese-stuffed poblano pepper, lightly battered & fried, served in a tortilla",
          "image": "public/placeholder1.png"
        },
        {
          "name": "Taco Birria Dinner",
          "price": "$17.99",
          "description": "3 Tacos w/ Consomé - Savory shredded beef Birria served with rich broth for dipping",
          "image": "public/placeholder1.png"
        },
        {
          "name": "Quesabirria Dinner",
          "price": "$18.99",
          "description": "3 Quesadillas w/ Consomé - Birria meat and melted cheese grilled in tortillas, served with broth for dipping",
          "image": "public/placeholder1.png"
        },
        {
          "name": "Taco Dinner (3 Tacos with your choice of Standard Fillings)",
          "price": "$14.99",
          "description": "Served with Rice & Beans",
          "image": "public/placeholder1.png"
        },
        {
          "name": "Premium Taco Dinner (3 Tacos with your choice of Premium or Seafood Fillings)",
          "price": "$15.99",
          "description": "Served with Rice & Beans",
          "image": "public/placeholder1.png"
        }
      ],
      "burritos": [
        {
          "name": "Burrito (Standard Filling)",
          "price": "$12.99",
          "description": "Large flour tortilla rolled with your choice of filling, Beans, Cheese, Sour Cream, Lettuce, Tomato, Cilantro & Onion unless noted",
          "image": "public/placeholder1.png"
        },
        {
          "name": "Burrito (Premium or Seafood Filling)",
          "price": "$15.99",
          "description": "Large flour tortilla rolled with your choice of filling, Beans, Cheese, Sour Cream, Lettuce, Tomato, Cilantro & Onion unless noted",
          "image": "public/placeholder1.png"
        },
        {
          "name": "Burrito (Vegetarian)",
          "price": "$10.99",
          "description": "Includes Guacamole instead of Sour Cream, unless requested otherwise",
          "image": "public/placeholder1.png"
        },
        {
          "name": "Catrina Burrito",
          "price": "$14.99",
          "description": "Your choice of Standard Filling, smothered in homemade Red Salsa OR Mole Sauce, topped with cheese",
          "image": "public/placeholder1.png"
        },
        {
          "name": "Burrito Dinner (Standard Burrito)",
          "price": "$14.99",
          "description": "Served with Rice & Beans",
          "image": "public/placeholder1.png"
        },
        {
          "name": "Premium Burrito Dinner (Premium or Seafood Burrito)",
          "price": "$16.99",
          "description": "Served with Rice & Beans",
          "image": "public/placeholder1.png"
        }
      ],
      "tortas": [
        {
          "name": "TORTAS",
          "price": "$11.99",
          "description": "Mexican sandwich on a toasted Telera roll with Beans, Cheese, Lettuce, Tomato, Mayo & Onion. Choose Filling: Steak, Al Pastor, Chicken, Chorizo, Eggs & Ham, Breaded Steak, or Breaded Chicken. Make it a Dinner / Add Fries - Add $1.00 ($12.99 Total) (Served with Rice & Beans OR French Fries)",
          "image": "public/placeholder1.png"
        }
      ],
      "Gorditas": [
        {
          "name": "GORDITAS",
          "price": "$5.99",
          "description": "Thick, homemade corn masa pocket stuffed with filling, Beans, Cheese & Crema. Choose Filling: Standard Filling, Premium Filling, or Roasted Poblano Pepper with Cheese.",
          "image": "public/placeholder1.png"
        }
      ],
      "Tostadas & Sopes": [
        {
          "name": "TOSTADAS & SOPES",
          "price": "$5.99",
          "description": "Tostada: Crispy flat corn tortilla / Sope: Thick corn masa base with pinched edges. Both topped with Beans, Cheese, Sour Cream, Lettuce, Tomato, Cilantro & Onion. Choose Filling: Standard Filling, Premium Filling, or Vegetarian Filling.",
          "image": "public/placeholder1.png"
        }
      ]
    };

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
        menuContainer.innerHTML = `<h2>${capitalize(category)}</h2><p>No items found for this category.</p>`;
        return;
      }

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
