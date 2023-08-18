import { readable } from 'svelte/store';

export const basicsTwoCheatsheet = readable({
  animals: {
    id: 1,    
    english: "Animals",
    spanish: "Animales",
    words: [
      ["Cat", "Gato"],
      ["Perro", "Perro"],
      ["Chicken", "Pollo"],
      ["Cow", "Vaca"],
      ["Sheep", "Oveja"],
      ["Snake", "Serpiente"],
      ["Elephant", "Elefante"],
      ["Rabbit", "Conejo"],
      ["Pig", "Cerdo"],
      ["Horse", "Caballo"],
      ["Bear", "Oso"],
      ["Lion", "León"],
      ["Monkey", "Mono"],
    ]
  },
  transport: {
    id: 2,    
    english: "Transport",
    spanish: "Transporte",
    words: [
      ["Taxi", "Taxi"],
      ["Train", "Tren"],
      ["Bus", "Autobus"],
      ["Plane", "Avion"],
      ["Boat", "Barco"],
      ["Ship", "Buque"],
      ["Car", "Carro / Coche"],
      ["Motorbike", "Motocicleta"],
      ["Bicycle", "Bicicleta"],
      ["Tram", "Tranvia"],
    ]
  },
  drinks: {
    id: 3,    
    english: "Drinks",
    spanish: "Bebidas",
    words: [
      ["Water", "Agua"],
      ["Tea", "Té"],
      ["Coffee", "Café"],
      ["Wine", "Vino"],
      ["Beer", "Cerveza"],
      ["Juice", "Jugo"],
      ["Milk", "Leche"],
    ]
  },
  food: {
    id: 4,    
    english: "Food",
    spanish: "Comida",
    words: [
      ["Eggs", "Los Huevos"],      
      ["Bread", "Pan"],      
      ["Cheese", "Queso"],      
      ["Meat", "Carne"],      
      ["Fish", "Pescado"],      
      ["Banana", "Banana / Platano"],      
      ["Apple", "Manzana"],      
      ["Orange", "Naranja"],      
      ["Rice", "Arroz"],      
      ["Cake", "Torta / Pastel"],      
      ["Soup", "Sopa"],      
      ["Fruit", "Frutas"],      
      ["Cereal", "Cereales"],      
    ]
  },
  clothing: {
    id: 5,    
    english: "Clothing",
    spanish: "Ropa",
    words: [
      ["Shirt", "Camisa"],      
      ["T-Shirt", "Camiseta"],      
      ["Blouse", "Blusa"],      
      ["Trousers", "Los Pantalones"],      
      ["Skirt", "Falda"],      
      ["Dress", "Vestido"],      
      ["Hat", "Sombrero"],      
      ["Sunglasses", "Gafas de sol"],      
      ["Coat", "Abrigo"],      
      ["Belt", "Cinturón"],      
      ["Shoe", "Zapato"],      
    ]
  },
  body: {
    id: 6,    
    english: "Body",
    spanish: "Cuerpo",
    words: [
      ["Head", "Cabeza"],  
      ["Face", "Cara"],  
      ["Hair", "Pelo"],            
      ["Eye", "Oye"],            
      ["Ear", "Oreja"],            
      ["Mouth", "Boca"],            
      ["Nose", "Nariz"],            
      ["Neck", "Cuello"],            
      ["Arm", "Brazo"],            
      ["Hand", "Mano"],            
      ["Finger", "Dedo"],            
      ["Body", "Cuerpo"],
      ["Leg", "Pierna"],            
      ["Foot", "Pie"],            
    ]
  },
});