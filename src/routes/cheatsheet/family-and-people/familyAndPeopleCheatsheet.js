import { readable } from 'svelte/store';

export const familyAndPeopleCheatsheet = readable({
  family: {
    id: 1,    
    english: "Family",
    spanish: "Familia",
    words: [
      ["Mother", "(La) Madre"],
      ["Father", "(El) Padre"],
      ["Parents", "(Los) Padres"],
      ["Brother", "(El) Hermano"],
      ["Sister", "(La) Hermana"],
      ["Son", "(El) Hijo"],
      ["Daughter", "(La) Hija"],
      ["Children", "(Los) Hijos"],
      ["Grandfather", "(El) Abuelo"],
      ["Grandmother", "(La) Abuela"],
      ["Aunt", "(La) Tía"],
      ["Uncle", "(El) Tío"],
      ["Cousin", "(El) Primo / (La) Prima"],
      ["Grandson", "(El) Nieto"],
      ["Granddaughter", "(La) Nieta"],
      ["Husband", "(El) Esposo / Marido"],
      ["Wife", "(La) Esposa"],
      ["Novio", "(El) Novio"],
      ["Girlfriend", "(La) Novia"],
      ["Father (in law)", "(El) Suegro"],
      ["Mother (in law)", "(La) Suegra"],
      ["Brother (in law)", "(El) Cuñado"],
      ["Sister (in law)", "(La) Cuñada"],
      ["Son (in law)", "(El) Yerno"],
      ["Daughter (in law)", "(La) Nuera"],
    ]
  },
  people: {
    id: 2,    
    english: "People",
    spanish: "Gente",
    words: [
      ["Man", "(El) Hombre"],
      ["Woman", "(La) Mujer"],
      ["Boy", "(El) Nino"],
      ["Girl", "(La) Nina"],      
      ["Friend", "(El) Amigo / (La) Amiga"],
    ]
  }
});