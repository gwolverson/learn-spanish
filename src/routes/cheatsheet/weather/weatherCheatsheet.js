import { readable } from 'svelte/store';

export const weatherCheatsheet = readable({
  weather: {
    id: 1,    
    english: "Weather",
    spanish: "Clima / Tiempo",
    words: [
      ["Hot", "Caliente"],      
      ["Cold", "Frío / Fría"],      
      ["Rain", "(La) Lluvia"],      
      ["Sun", "(El) Sol"],      
      ["Snow", "(La) Nieve"],      
      ["Wind", "Viento"],      
      ["Dark", "(El) Oscuro"],      
      ["Cloud", "(La) Nube"],   
      ["Storm", "(La) Tormente"],   
      ["Breeze", "(La) Brisa"],   
      ["Humid", "(La) Humedad"],   
      ["Thunder", "(El) Trueno"],   
    ]
  }, 
  adjectives: {
    id: 2,    
    english: "Adjectives",
    spanish: "Adjetivos",
    words: [
      ["Hot", "Caluroso"],
      ["Sunny", "Soleado"],
      ["Clear Skies", "Despejado"],
      ["Humid", "Húmedo"],
      ["Rainy", "Lluvioso"],
      ["Cool", "Fresco"],
      ["Freezing", "Helado"],
      ["Cloudy", "Nublado"],
      ["Windy", "Ventoso"],
      ["Good weather", "Buen tiempo"],
      ["Mal weather", "Mal tiempo"],
    ]
  }, 
  questions: {
    id: 3,    
    english: "Questions",
    spanish: "Preguntas",
    words: [
      ["What's the weather like?", "¿Qué tiempo hace?"],      
      ["How is the weather?", "¿Cómo está el tiempo?"],      
      ["How is the climate?", "¿Cómo está el clima?"],      
      ["what's it like outside?", "¿Qué tiempo hace fuera?"],      
      ["what's the weather like in ...?", "¿Cómo es el clima en ...?"],      
      ["Is it cold outside?", "¿Hace frío afuera?"],      
    ]
  },  
  verbs: {
    id: 4,    
    english: "Verbs",
    spanish: "Verbos",
    words: [
      ["It's hot", "Esta caliente / Hay caliente"],    
      ["It's rainy", "Esta lluvia / Hay lluvia"],    
      ["It's windy", "Esta viento / Hay viento"],    
      ["It's snowy", "Esta nieve / Hay nieve"],    
      ["It's sunny", "Esta soleado / Hay soleado"],    
    ]
  },  
});