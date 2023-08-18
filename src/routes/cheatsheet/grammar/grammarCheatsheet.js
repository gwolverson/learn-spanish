import { readable } from 'svelte/store';

export const grammarCheatsheet = readable({
  articles: {
    id: 1,    
    english: "Articles",
    spanish: "Artículos",
    words: [
      ["The (singular)", "El (masc) / La (fem)"],
      ["The (plural)", "Los (masc) / Las (fem)"],
      ["A (singular)", "Un (masc) / Una (fem)"],
      ["A (plural)", "Unos (masc) / Unas (fem)"]      
    ]
  },
  connectives: {
    id: 2,    
    english: "Connectives",
    spanish: "Conectivos",
    words: [
      ["After", "Después"],
      ["Before", "Antes"],
      ["And", "Y"],
      ["Or", "O"],
      ["That", "Que"],
      ["Por eso que", "That's why"],
      ["To", "A / Para / En"],      
      ["Although", "Aunque / A pesar de que"],
      ["If", "Si"],
      ["Then", "Entonces"],
      ["Until", "Hasta"],
      ["Since", "Desde"],
      ["Because", "Porque"],
      ["But / Yet", "Pero"],
      ["So", "Así que"],
      ["For", "Para / Por"],
      ["In order to", "Para"],
      ["Of course", "Por supuesto"],
      ["Still", "Todavía"],
      ["Not Yet", "Todavía no / Aún no"],
      ["For me / In my opinion", "Para mí"],
      ["As far as I know", "Que yo sepa"],
      ["I don't believe that", "No creo que"],
      ["In other words", "Es decir / O sea / En otras palabras"],
      ["Since / Well", "Pues"],
      ["I mean", "Digo"],      
      ["Let's see", "A ver"],      
      ["Apparently", "Por lo visto"],  
      ["Therefore", "Por consiguiente"],  
    ]
  },
  possessiveAdjectives: {
    id: 3,    
    english: "Possessive Adjectives",
    spanish: "Adjetivos Posesivos",
    words: [
      ["My", "Mi"],
      ["Your", "Tu"],
      ["His / Hers", "Su (singular) / Sus (plural)"],
      ["Our (singular)", "Nuestro (masc) / Nuestra (fem)"],
      ["Our (plural)", "Nuestros (masc) / Nuestras (fem)"],
      ["Their(s)", "Su (singular) / Sus (plural)"],
    ]
  },
  questions: {
    id: 4,    
    english: "Questions",
    spanish: "Preguntas",
    words: [
      ["What?", "¿Qué?"],      
      ["Where?", "¿Dónde?"],      
      ["From where?", "¿De dónde?"],      
      ["When?", "¿Cuando?"],      
      ["Which?", "¿Cuales?"],      
      ["How?", "¿Cómo?"],      
      ["Why?", "¿Por qué?"],      
      ["How much?", "¿Cuánto?"],      
      ["How many?", "¿Cuántos?"],      
    ]
  },
});