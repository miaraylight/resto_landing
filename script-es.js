// ===== Dynamic Menu Rendering =====
// (menuData & renderMenu defined inside DOMContentLoaded)
document.addEventListener("DOMContentLoaded", () => {
  const menuData = {
    "Entradas y Sopas": [
      {
        name: "Guacamole y Totopos",
        price: "$11.99",
        description: "12oz, o 16oz por $14.99",
        image: "public/placeholder1.png",
      },
      {
        name: "Queso Fundido",
        price: "$11.99",
        description: "Servido con tortillas (con chorizo +$2.00)",
        image: "public/placeholder1.png",
      },
      {
        name: "Quesadillas de Queso",
        price: "$2.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Quesadillas con Carne",
        price: "$4.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Langostinos Medianos",
        price: "$21.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Langostinos Grandes",
        price: "$40.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Calamares Fritos",
        price: "$11.99",
        description: "Con mayonesa de chipotle",
        image: "public/placeholder1.png",
      },
      {
        name: "Nachos con Carne",
        price: "$14.99",
        description:
          "Servidos con frijoles, queso, lechuga, tomate, cebolla, crema y guacamole",
        image: "public/placeholder1.png",
      },
      {
        name: "Nachos Vegetarianos",
        price: "$13.50",
        description:
          "Servidos con frijoles, queso, lechuga, tomate, cebolla, crema y guacamole",
        image: "public/placeholder1.png",
      },
      {
        name: "Alitas (Búfalo o BBQ)",
        price: "$8.00",
        description: "6 piezas, 12 piezas por $14.99",
        image: "public/placeholder1.png",
      },
      {
        name: "Quesadilla Gigante (Queso o Carne)",
        price: "$12.99",
        description: "Servida con lechuga, crema y guacamole",
        image: "public/placeholder1.png",
      },
      {
        name: "Pico de Gallo 16oz",
        price: "$5.00",
        description: "Servido con totopos",
        image: "public/placeholder1.png",
      },
      {
        name: "Sampler La Catrina",
        price: "$24.99",
        description:
          "Calamares fritos, alitas de pollo, dedos de queso mozzarella",
        image: "public/placeholder1.png",
      },
      {
        name: "Tostadas de Ceviche",
        price: "$6.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Camarones a la Cucaracha",
        price: "$23.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Ceviche 16oz",
        price: "$17.99",
        description:
          "16oz de ceviche marinado con cebolla, tomate, cilantro y pepino. Servido con 3 tostadas.",
        image: "public/placeholder1.png",
      },
      {
        name: "Botana de Mariscos",
        price: "$59.99",
        description:
          "Camarones a la plancha, pulpo y langostinos, camarones empanizados y camarones al sartén.",
        image: "public/placeholder1.png",
      },
      {
        name: "Caldo de Pollo",
        price: "$13.99",
        description: "Con calabacita, zanahoria y papa.",
        image: "public/placeholder1.png",
      },
      {
        name: "Caldo de Camarón",
        price: "$15.99",
        description: "Con calabacita, zanahoria y papa.",
        image: "public/placeholder1.png",
      },
      {
        name: "Caldo de Camarón y Pescado",
        price: "$17.99",
        description: "Con calabacita, zanahoria y papa.",
        image: "public/placeholder1.png",
      },
      {
        name: "Menudo",
        price: "$14.99",
        description: "Pancita de res.",
        image: "public/placeholder1.png",
      },
      {
        name: "Birria",
        price: "$17.99",
        description: "Carne de borrego y garbanzo.",
        image: "public/placeholder1.png",
      },
      {
        name: "Pozole",
        price: "$14.99",
        description: "Carne de cerdo y maíz pozolero.",
        image: "public/placeholder1.png",
      },
    ],
    "Platos Fuertes": [
      {
        name: "Enchiladas de Queso",
        price: "$14.99",
        description:
          "Servidas con ensalada, arroz y frijoles. Queso o crema extra $0.50, Aguacate extra $0.75",
        image: "public/placeholder1.png",
      },
      {
        name: "Enchiladas con Carne",
        price: "$16.99",
        description:
          "Servidas con ensalada, arroz y frijoles. Queso o crema extra $0.50, Aguacate extra $0.75",
        image: "public/placeholder1.png",
      },
      {
        name: "Mar y Tierra",
        price: "$26.99",
        description:
          "6 oz de arrachera, pechuga de pollo y camarones a la plancha. Servido con arroz, frijoles y guacamole.",
        image: "public/placeholder1.png",
      },
      {
        name: "Plato de Cecina",
        price: "$19.99",
        description: "Servido con cebolla asada, arroz, frijoles y ensalada.",
        image: "public/placeholder1.png",
      },
      {
        name: "Fajitas de Pollo",
        price: "$14.99",
        description: "Servidas con arroz, frijoles y ensalada.",
        image: "public/placeholder1.png",
      },
      {
        name: "Fajitas Mixtas (Bistec, Pollo y Camarón)",
        price: "$22.99",
        description: "Servidas con arroz, frijoles y ensalada.",
        image: "public/placeholder1.png",
      },
      {
        name: "Pechuga de Pollo a la Plancha",
        price: "$14.99",
        description: "Servida con arroz, frijoles y ensalada.",
        image: "public/placeholder1.png",
      },
      {
        name: "Bistec a la Mexicana",
        price: "$17.99",
        description: "Servido con arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Carne Asada",
        price: "$35.99",
        description:
          "12 oz de arrachera servida con arroz, ensalada y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Tampiqueña",
        price: "$39.99",
        description:
          "12 oz de arrachera servida con arroz, frijoles, guacamole y una enchilada de mole.",
        image: "public/placeholder1.png",
      },
      {
        name: "Milanesa de Res o de Pollo",
        price: "$14.99",
        description: "Servida con ensalada, arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Fajitas de Bistec",
        price: "$19.99",
        description: "Servidas con arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Plato de Mole",
        price: "$14.99",
        description:
          "2 piezas de pollo con delicioso mole estilo Guerrero, servido con arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Plato de Chile Relleno",
        price: "$16.99",
        description:
          "Vegetariano. Servido con arroz, frijoles y salsa ranchera.",
        image: "public/placeholder1.png",
      },
      {
        name: "Hamburguesa con Queso",
        price: "$10.99",
        description:
          "Servida con lechuga, tomate, cebolla, mayonesa y papas fritas.",
        image: "public/placeholder1.png",
      },
      {
        name: "Hamburguesa Doble con Queso",
        price: "$11.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Hamburguesa a la Mexicana",
        price: "$12.99",
        description:
          "Carne de 6 oz servida con frijoles, aguacate, lechuga, cebolla, tomate, jalapeños, mayonesa y papas fritas.",
        image: "public/placeholder1.png",
      },
      {
        name: "Hamburguesa con Tocino y Queso",
        price: "$11.99",
        description:
          "Servida con lechuga, tomate, cebolla, mayonesa y papas fritas.",
        image: "public/placeholder1.png",
      },
      {
        name: "Hamburguesa Doble con Tocino y Queso",
        price: "$12.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Hamburguesa con Huevo",
        price: "$14.99",
        description:
          "Servida con lechuga, tomate, aguacate, cebolla, tocino, huevo y mayonesa.",
        image: "public/placeholder1.png",
      },
      {
        name: "Camarones a la Plancha",
        price: "$21.99",
        description: "Servidos con ensalada, arroz y cebolla asada.",
        image: "public/placeholder1.png",
      },
      {
        name: "Camarones a la Diabla",
        price: "$21.99",
        description: "Servidos con ensalada, arroz y cebolla asada.",
        image: "public/placeholder1.png",
      },
      {
        name: "Mojarra Entera Frita",
        price: "$21.99",
        description: "Con ensalada y arroz.",
        image: "public/placeholder1.png",
      },
      {
        name: "Mojarra Entera al Mojo de Ajo",
        price: "$25.99",
        description:
          "Con ensalada, arroz, papas fritas y ajo fresco sazonado por encima.",
        image: "public/placeholder1.png",
      },
      {
        name: "Filete de Tilapia",
        price: "$21.99",
        description: "2 filetes servidos con ensalada y arroz.",
        image: "public/placeholder1.png",
      },
      {
        name: "Fajitas de Camarón",
        price: "$21.99",
        description: "Servidas con ensalada y arroz.",
        image: "public/placeholder1.png",
      },
      {
        name: "Cóctel de Camarón",
        price: "$20.00",
        description: "Servido con cebolla, tomate, cilantro y aguacate.",
        image: "public/placeholder1.png",
      },
      {
        name: "Cóctel Mixto (Camarón y Pulpo)",
        price: "$24.99",
        description: "Servido con cebolla, tomate, cilantro y aguacate.",
        image: "public/placeholder1.png",
      },
      {
        name: "Chapuzón (Pulpo, Camarón y Salsa Especial)",
        price: "$21.99",
        description: "Servido con ensalada y arroz.",
        image: "public/placeholder1.png",
      },
      {
        name: "Camarones Empanizados",
        price: "$21.99",
        description: "Servidos con ensalada, arroz, papas fritas y pan de ajo.",
        image: "public/placeholder1.png",
      },
      {
        name: "Pulpo a la Diabla",
        price: "$21.99",
        description: "Pulpo en salsa picante, servido con ensalada y arroz.",
        image: "public/placeholder1.png",
      },
      {
        name: "Chilaquiles con Carne y Huevos",
        price: "$16.99",
        description: "Servidos con arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Chilaquiles con Huevos",
        price: "$14.99",
        description: "Servidos con arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Chilaquiles",
        price: "$12.99",
        description: "Servidos con arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Cecina con Huevos",
        price: "$14.99",
        description: "Servida con arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Huevos con Jamón",
        price: "$11.99",
        description: "Servidos con arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Huevos con Chorizo",
        price: "$11.99",
        description: "Servidos con arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Huevos a la Mexicana",
        price: "$11.99",
        description: "Servidos con arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Bistec y Huevo",
        price: "$21.00",
        description: "Con huevo y papas 'tater tots'.",
        image: "public/placeholder1.png",
      },
      {
        name: "Huevos Rancheros",
        price: "$11.99",
        description: "Servidos con arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Panqueques",
        price: "$9.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Hamburguesa de Desayuno",
        price: "$14.99",
        description:
          "Servida con tocino, huevo, queso mozzarella y 'tater tots'.",
        image: "public/placeholder1.png",
      },
      {
        name: "Pan Tostado con Guacamole",
        price: "$12.99",
        description: "Con huevo y 'tater tots'.",
        image: "public/placeholder1.png",
      },
      {
        name: "Pan Francés",
        price: "$10.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "2x2",
        price: "$9.99",
        description: "Tocino, huevos y 'tater tots'.",
        image: "public/placeholder1.png",
      },
    ],
    "Tacos, Tortas y Más": [
      {
        name: "Taco (Relleno Clásico)",
        price: "$3.99",
        description: "Servido en tortillas de maíz con cilantro y cebolla.",
        image: "public/placeholder1.png",
      },
      {
        name: "Taco (Relleno Premium)",
        price: "$4.99",
        description: "Servido en tortillas de maíz con cilantro y cebolla.",
        image: "public/placeholder1.png",
      },
      {
        name: "Taco (Vegetariano)",
        price: "$3.99",
        description: "Servido en tortillas de maíz con cilantro y cebolla.",
        image: "public/placeholder1.png",
      },
      {
        name: "Taco (Relleno de Mariscos)",
        price: "$4.99",
        description: "Servido con tomate, cilantro, cebolla y aguacate.",
        image: "public/placeholder1.png",
      },
      {
        name: "Taco de Chile Relleno",
        price: "$6.99",
        description:
          "Chile poblano relleno de queso, capeado y frito, servido en una tortilla.",
        image: "public/placeholder1.png",
      },
      {
        name: "Orden de Tacos de Birria",
        price: "$17.99",
        description:
          "3 tacos con consomé - Deliciosa birria de res deshebrada, servida con su rico consomé.",
        image: "public/placeholder1.png",
      },
      {
        name: "Orden de Quesabirrias",
        price: "$18.99",
        description:
          "3 quesadillas con consomé - Birria y queso derretido en tortillas a la plancha, servidas con consomé.",
        image: "public/placeholder1.png",
      },
      {
        name: "Orden de Tacos (3 Tacos con Relleno Clásico)",
        price: "$14.99",
        description: "Servidos con arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Orden de Tacos Premium (3 Tacos con Relleno Premium o de Mariscos)",
        price: "$15.99",
        description: "Servidos con arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Burrito (Relleno Clásico)",
        price: "$12.99",
        description:
          "Gran tortilla de harina con tu elección de relleno, frijoles, queso, crema, lechuga, tomate, cilantro y cebolla.",
        image: "public/placeholder1.png",
      },
      {
        name: "Burrito (Relleno Premium o de Mariscos)",
        price: "$15.99",
        description:
          "Gran tortilla de harina con tu elección de relleno, frijoles, queso, crema, lechuga, tomate, cilantro y cebolla.",
        image: "public/placeholder1.png",
      },
      {
        name: "Burrito (Vegetariano)",
        price: "$10.99",
        description:
          "Incluye guacamole en lugar de crema, a menos que se pida lo contrario.",
        image: "public/placeholder1.png",
      },
      {
        name: "Burrito Catrina",
        price: "$14.99",
        description:
          "Tu elección de relleno clásico, bañado en salsa roja casera O mole, y gratinado con queso.",
        image: "public/placeholder1.png",
      },
      {
        name: "Orden de Burrito (Burrito Clásico)",
        price: "$14.99",
        description: "Servido con arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Orden de Burrito Premium (Burrito Premium o de Mariscos)",
        price: "$16.99",
        description: "Servido con arroz y frijoles.",
        image: "public/placeholder1.png",
      },
      {
        name: "Tortas",
        price: "$11.99",
        description:
          "Sándwich mexicano en pan telera tostado con frijoles, queso, lechuga, tomate, mayonesa y cebolla. Elige Relleno: Bistec, Al Pastor, Pollo, Chorizo, Huevo y Jamón, Milanesa de Res o Pollo. Hazlo orden / Agrega papas fritas - Agrega $1.00 (Total $12.99) (Servido con Arroz y Frijoles O Papas Fritas)",
        image: "public/placeholder1.png",
      },
      {
        name: "Gorditas",
        price: "$5.99",
        description:
          "Gordita de masa de maíz hecha a mano, rellena con tu guiso favorito, frijoles, queso y crema. Elige Relleno: Clásico, Premium o Rajas con Queso.",
        image: "public/placeholder1.png",
      },
      {
        name: "Tostadas y Sopes",
        price: "$5.99",
        description:
          "Tostada: Tortilla de maíz plana y crujiente / Sope: Base gruesa de masa de maíz. Ambos con frijoles, queso, crema, lechuga, tomate, cilantro y cebolla. Elige Relleno: Clásico, Premium o Vegetariano.",
        image: "public/placeholder1.png",
      },
    ],
    Bebidas: [
      {
        name: "HORCHATA, JAMAICA, TAMARINDO",
        price: "$3.25",
        description: "16oz, también disponible en 32oz por $6.50",
        image: "public/placeholder1.png",
      },
      {
        name: "JARRITOS",
        price: "$3.50",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Refresco de Lata",
        price: "$2.25",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "COCA MEXICANA",
        price: "$3.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "COCA MEXICANA MEDIO LITRO",
        price: "$4.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Café (16oz)",
        price: "$3.25",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Jugo de Naranja Natural",
        price: "$5.00",
        description: "16oz, también disponible en 32oz por $10.00",
        image: "public/placeholder1.png",
      },
      {
        name: "Mega Margarita",
        price: "$49.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Michelada de Tamarindo/Mango",
        price: "$13.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Michelada Clásica",
        price: "$12.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Las Cariñosas (Tamarindo / Fresa / Mango)",
        price: "$29.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Palomazo 32oz con botella de tequila Hornitos",
        price: "$28.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Cóctel Crazy Remy con botellita de Remy",
        price: "$28.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Catrina Queen servido con botellita de Hennessy",
        price: "$28.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Piña Colada Queen servida con botellita de Malibu",
        price: "$28.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Margarita Original 12oz",
        price: "$12.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Margarita Queen con Coronita o Modelito",
        price: "$16.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Margarita de Fresa/Mango/Tamarindo 12oz",
        price: "$14.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Heavenly Hibiscus",
        price: "$10.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Piña Colada",
        price: "$13.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Long Island Iced Tea",
        price: "$8.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Cóctel D'USSÉ",
        price: "$13.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Cantarito",
        price: "$13.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "DON JULIO 70 / PATRÓN CRISTALINO",
        price: "$15.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "PATRÓN / CASAMIGOS / ADICTIVO / DON JULIO",
        price: "$12.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Shot de Mezcal (400 Conejos / Unión / Vida / Monte Albán)",
        price: "$10.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Shot de Hornitos o Centenario",
        price: "$10.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "JAMESON / REMY / HENNESSY / JACK DANIELS / D’USSÉ",
        price: "$12.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "DON JULIO 1942",
        price: "$30.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "CLASE AZUL",
        price: "$30.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Cerveza Nacional",
        price: "$5.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Cerveza Importada",
        price: "$6.00",
        description: null,
        image: "public/placeholder1.png",
      },
    ],
    "Acompañamientos, Postres y Menú Infantil": [
      {
        name: "Crema o Queso 4oz",
        price: "$1.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Aguacate",
        price: "Mitad $2.00 / Entero $4.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Arroz",
        price: "16oz $8.00 - 32oz $4.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Frijoles",
        price: "16oz $8.00 - 12oz $4.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Cebollitas Asadas",
        price: "$6.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Totopos",
        price: "$4.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Papas Fritas",
        price: "$5.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Salsa Roja o Verde",
        price: "16oz $6.00 - 12oz $8.00",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Papas 'Tater Tots'",
        price: "$4.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Flan",
        price: "$5.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Churro",
        price: "$5.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Pastel de Queso",
        price: "$5.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Pastel de Oreo",
        price: "$5.99",
        description: null,
        image: "public/placeholder1.png",
      },
      {
        name: "Orden de Taco para Niños",
        price: "$7.75",
        description:
          "Arroz y frijoles sencillos (Sólo para menores de 12 años).",
        image: "public/placeholder1.png",
      },
      {
        name: "Nuggets de Pollo",
        price: "$7.75",
        description: "Nuggets y papas fritas (Sólo para menores de 12 años).",
        image: "public/placeholder1.png",
      },
      {
        name: "Dedos de Queso Mozzarella",
        price: "$7.75",
        description:
          "Servidos con papas fritas (Sólo para menores de 12 años).",
        image: "public/placeholder1.png",
      },
      {
        name: "Hamburguesa con Queso para Niños",
        price: "$7.75",
        description:
          "Servida con papas fritas y queso (Sólo para menores de 12 años).",
        image: "public/placeholder1.png",
      },
      {
        name: "Jugo para Niños",
        price: "$1.50",
        description: null,
        image: "public/placeholder1.png",
      },
    ],
  };
  const navContainer = document.querySelector(".menu-nav");
  const menuContainer = document.getElementById("menu-list-container");
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeButton = document.querySelector(".modal-close-button");

  // SVG for the photo icon. Using an SVG makes it easy to style with CSS.
  const photoIconSVG = `
        <svg class="photo-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>`;

  function capitalize(str) {
    return str
      .split(" y ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" y ");
  }

  function renderMenu(category) {
    const items = menuData[category] || [];

    let menuHTML = `<h2 class="menu-category-title">${capitalize(
      category
    )}</h2>`;

    menuHTML += items
      .map((item) => {
        // Determine the icon's class based on the image source
        const iconClass =
          item.image === "public/placeholder1.png"
            ? "icon-placeholder"
            : "icon-custom-image";

        return `
                <div class="menu-item">
                    <div class="menu-item-top">\<div class="js-photo-icon ${iconClass}" data-img-src="${
          item.image
        }">
                            ${photoIconSVG}
                        </div>
                        <span class="menu-item-name">${item.name}</span>

                        <span class="dots"></span>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    ${
                      item.description
                        ? `<p class="menu-item-description">${item.description}</p>`
                        : ""
                    }
                </div>
            `;
      })
      .join("");

    menuContainer.innerHTML = menuHTML;
  }

  function createNavButtons() {
    Object.keys(menuData).forEach((category) => {
      const button = document.createElement("button");
      button.dataset.category = category;
      button.textContent = capitalize(category);
      navContainer.appendChild(button);
    });
  }

  // --- Event Listeners ---

  // For modal opening (using event delegation)
  menuContainer.addEventListener("click", function (event) {
    const iconWrapper = event.target.closest(".js-photo-icon");
    if (iconWrapper) {
      const imgSrc = iconWrapper.dataset.imgSrc;
      modalImage.src = imgSrc;
      modal.style.display = "block";
    }
  });

  // For closing the modal
  function closeModal() {
    modal.style.display = "none";
  }
  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      // Close only if clicking on the background
      closeModal();
    }
  });

  // For nav buttons
  navContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const button = event.target;
      navContainer.querySelector(".active")?.classList.remove("active");
      button.classList.add("active");
      renderMenu(button.dataset.category);
    }
  });

  // --- Initial Page Load ---
  function init() {
    createNavButtons();
    const firstCategory = Object.keys(menuData)[0];
    if (firstCategory) {
      navContainer.querySelector("button").classList.add("active");
      renderMenu(firstCategory);
    }
  }

  init();
});

// Observe all elements meant to fade in
const fadeElements = document.querySelectorAll(
  ".fade-in-on-scroll, .fade-section"
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.3 }
);

fadeElements.forEach((el) => fadeObserver.observe(el));

// Mobile Navigation Toggle
const burger = document.querySelector(".burger");
const mobileNav = document.getElementById("mobileNav");
const closeMenuBtn = document.querySelector(".close-menu");

burger?.addEventListener("click", () => {
  mobileNav?.classList.add("open");
});

closeMenuBtn?.addEventListener("click", () => {
  mobileNav?.classList.remove("open");
});

// Optional: close menu when clicking a link
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav?.classList.remove("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
