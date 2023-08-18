import { readable } from 'svelte/store';

export const travelCheatsheet = readable({
  places: {
    id: 1,    
    english: "Places",
    spanish: "Lugares",
    words: [
      ["City", "(La) Cuidad"],
      ["Town", "(El) Pueblo"],
      ["Village", "(La) Aldea"],
      ["Road / Highway", "(La) Carretera"],
      ["Street", "(La) Calle"],
      ["Hospital", "(El) Hospital"],
      ["Bank", "(El) Banco"],
      ["Police Station", "La Comisaría de Policiá"],
      ["Airport", "(El) Aeropuerto"],
      ["Train Sation", "La Estación de Tren"],
      ["Subway Sation", "La Estación de Metro"],
      ["Café", "(El) Café"],
      ["Toilet", "(El) Bańo"],
      ["Gym", "(El) Gimnasio"],
      ["Restaurant", "(El) Restaurante"],
      ["Cinema", "(El) Cine"],
      ["Beach", "(La) Playa"],      
      ["Swimming Pool", "(La) Piscina"],      
      ["Supermarket", "(El) Supermercado"],      
      ["Library", "(La) Biblioteca"],      
      ["Park", "(El) Parque"],
      ["Mueseum", "(El) Museo"],
      ["University", "(La) Universidad"],
      ["Bridge", "(El) Puente"],
    ]
  },
  travel: {
    id: 2,    
    english: "Travel",
    spanish: "Viaje",
    words: [
      ["Plane", "(El) Avión"],
      ["Train", "(El) Tren"],
      ["Subway / Metro", "(El) Metro"],
      ["Tram", "(La) Tranvía"],
      ["Hotel", "(El) Hotel"],
      ["Map", "(El) Mapa"],
      ["Entrance", "(La) Entrada"],
      ["Exhibition", "(La) Exposición"],
      ["Souvenir", "(El) Recuerdo"],
      ["Charger", "(El) Cargador"],
      ["Toiletries", "(Los) Artículos de higiene"],
      ["Sunscreen", "(El) Protector de solar"],
      ["Umbrella", "(El) Paraguas"],
      ["ATM Machine", "(El) Cajero Automático"],
      ["Currency", "(La) Divisa"],
      ["Money", "(El) Dinero"],
    ]
  },
});