import { readable } from 'svelte/store';

export const timeAndDirectionCheatsheet = readable({
  time: {
    id: 1,    
    english: "Time",
    spanish: "Tiempo",
    words: [
      ["Second", "(El) Segundo"],    
      ["Minute", "(El) Minuto"],    
      ["Hour", "(La) Hora"],    
      ["Day", "(El) Dia"],    
      ["Year", "(El) Año"],    
      ["Decade", "(La) Década"],    
      ["Century", "(El) Siglo"],    
      ["Millennium", "(El) Milenio"],    
      ["Month", "(El) Mes"],    
      ["Today", "Hoy"],    
      ["Yesterday", "Ayer"],    
      ["Tomorrow", "Mañana"],    
      ["Next Week", "(La) Próxima Semana"],    
      ["Now", "Ahora"],    
      ["Later", "Más Tarde"],    
      ["What time is it?", "¿Qué hora es?"],
      ["It's 3 o'clock", "Son las tres en punto"],
    ]
  },
  navigation: {
    id: 2,    
    english: "Navigation",
    spanish: "Navegación",
    words: [
      ["Direction", "(La) Dirección"],         
      ["Distance", "(La) Distancia"],         
      ["Here", "Aqui"],         
      ["There", "Allí"],         
      ["Right", "(La) Derecha"],         
      ["Left", "(La) Izquierda"],         
      ["Straight Ahead", "Todo Recto"],         
      ["Behind", "Detrás"],         
      ["Between", "Entre"],         
      ["Opposite", "Enfrente"],         
      ["Center", "(El) Centro"],         
      ["In front (of)", "Delante (de)"],  
      ["Next to", "Al Lado (de)"],
      ["Near (to)", "Cerca (de)"],
      ["Far (from)", "Lejos (de)"],
      ["Underneath", "Debajo (de)"],       
      ["Inside (of)", "Dentro (de)"],       
      ["On Top (of)", "Encima (de)"],       
      ["Corner", "(La) Esquina"],         
      ["Up", "Arriba"],         
      ["Down", "Abajo"],
      ["To go up", "Subir"],
      ["Open", "Abrir"],
      ["Closed", "Cerrado"],            
    ]
  },  
  daysOfTheWeek: {
    id: 3,
    english: "Days of the Week",
    spanish: "Días de la Semana",
    words: [
      ["Monday", "Lunes"],
      ["Tuesday", "Martes"],
      ["Wednesday", "Miércoles"],
      ["Thursday", "Jueves"],
      ["Friday", "Viernes"],
      ["Saturday", "Sábado"],
      ["Sunday", "Domingo"],
    ]
  },
  months: {
    id: 4,
    english: "Months",
    spanish: "Mesas",
    words: [
      ["January", "Enero"],
      ["February", "Febrero"],
      ["March", "Marzo"],
      ["April", "Abril"],
      ["May", "Mayo"],
      ["June", "Junio"],
      ["July", "Julio"],
      ["August", "Agosto"],
      ["September", "Septiembre"],
      ["October", "Octubre"],
      ["November", "Noviembre"],
      ["December", "Deciembre"],
    ]
  },
  seasons: {
    id: 5,
    english: "Seasons",
    spanish: "Temporadas",
    words: [
      ["Spring", "La Primavera"],
      ["Summer", "El Verano"],
      ["Autumn", "El Otoño"],
      ["Winter", "El Invierno"],
    ]
  },
  directionalPoints: {
    id: 6,
    english: "Directional Points",
    spanish: "Dirección Cardinal",
    words: [
      ["North", "Norte"],  
      ["South", "Sur"],  
      ["East", "Este"],  
      ["West", "Oeste"],  
    ]  
  }
});