import { r as readable } from "./index.js";
const regularErVerbStore = readable({
  comer: {
    verb: "Comer",
    action: "eat",
    subject: {
      form: "com",
      i: "o",
      you: "es",
      he: "e",
      we: "emos",
      they: "en"
    },
    examples: [
      {
        spanish: "Yo como frutas",
        english: "I eat fruits"
      },
      {
        spanish: "Tú comes frutas",
        english: "You eat fruits"
      },
      {
        spanish: "Él come frutas",
        english: "He eats fruits"
      },
      {
        spanish: "Nosotros comemos frutas",
        english: "We eat fruits"
      },
      {
        spanish: "Ellos comen frutas",
        english: "They eat fruits"
      }
    ]
  },
  aprender: {
    verb: "Aprender",
    action: "learn",
    subject: {
      form: "aprend",
      i: "o",
      you: "es",
      he: "e",
      we: "emos",
      they: "en"
    },
    examples: [
      {
        spanish: "Yo aprendo español",
        english: "I learn Spanish"
      },
      {
        spanish: "Tú aprendes español",
        english: "You learn Spanish"
      },
      {
        spanish: "Él aprende español",
        english: "He learns Spanish"
      },
      {
        spanish: "Nosotros aprendemos español",
        english: "We learn Spanish"
      },
      {
        spanish: "Ellos aprenden español",
        english: "They learn Spanish"
      }
    ]
  },
  beber: {
    verb: "Beber",
    action: "drink",
    subject: {
      form: "beb",
      i: "o",
      you: "es",
      he: "e",
      we: "emos",
      they: "en"
    },
    examples: [
      {
        spanish: "Yo bebo agua",
        english: "I drink water"
      },
      {
        spanish: "Tú bebes aqua",
        english: "You drink water"
      },
      {
        spanish: "Él bebe agua",
        english: "He drinks water"
      },
      {
        spanish: "Nosotros bebemos aqua",
        english: "We drink water"
      },
      {
        spanish: "Ellos beben aqua",
        english: "They drink water"
      }
    ]
  },
  comprender: {
    verb: "Comprender",
    action: "understand",
    subject: {
      form: "comprend",
      i: "o",
      you: "es",
      he: "e",
      we: "emos",
      they: "en"
    },
    examples: [
      {
        spanish: "Yo comprendo español",
        english: "I understand Spanish"
      },
      {
        spanish: "Tú comprendes español",
        english: "You understand Spanish"
      },
      {
        spanish: "Él comprende español",
        english: "He understands Spanish"
      },
      {
        spanish: "Nosotros comprendemos español",
        english: "We understand Spanish"
      },
      {
        spanish: "Ellos comprenden español",
        english: "They understand Spanish"
      }
    ]
  },
  correr: {
    verb: "Correr",
    action: "run",
    subject: {
      form: "corr",
      i: "o",
      you: "es",
      he: "e",
      we: "emos",
      they: "en"
    },
    examples: [
      {
        spanish: "Yo corro en el parque",
        english: "I run in the park"
      },
      {
        spanish: "Tú corres en el parque",
        english: "You run in the park"
      },
      {
        spanish: "Él corre en el parque",
        english: "He runs in the park"
      },
      {
        spanish: "Nosotros corremos en el parque",
        english: "We run in the park"
      },
      {
        spanish: "Ellos corren en el parque",
        english: "They run in the park"
      }
    ]
  },
  leer: {
    verb: "Leer",
    action: "read",
    subject: {
      form: "le",
      i: "o",
      you: "es",
      he: "e",
      we: "emos",
      they: "en"
    },
    examples: [
      {
        spanish: "Yo leo un libro",
        english: "I read a book"
      },
      {
        spanish: "Tú lees un libro",
        english: "You read a book"
      },
      {
        spanish: "Él lee un libro",
        english: "He reads a book"
      },
      {
        spanish: "Nosotros leemos un libro",
        english: "We read a book"
      },
      {
        spanish: "Ellos leen un libro",
        english: "They read a book"
      }
    ]
  },
  vender: {
    verb: "Vender",
    action: "sell",
    subject: {
      form: "vend",
      i: "o",
      you: "es",
      he: "e",
      we: "emos",
      they: "en"
    },
    examples: [
      {
        spanish: "Yo vendo un libro",
        english: "I sell a book"
      },
      {
        spanish: "Tú vendes un libro",
        english: "You sell a book"
      },
      {
        spanish: "Él vende un libro",
        english: "He sells a book"
      },
      {
        spanish: "Nosotros vendemos un libro",
        english: "We sell a book"
      },
      {
        spanish: "Ellos venden un libro",
        english: "They sell a book"
      }
    ]
  },
  corresponder: {
    verb: "Corresponder",
    action: "correspond",
    subject: {
      form: "correspond",
      i: "o",
      you: "es",
      he: "e",
      we: "emos",
      they: "en"
    },
    examples: [
      {
        spanish: "Yo correspondo a su carta",
        english: "I correspond to your letter"
      },
      {
        spanish: "Tú correspondes a mi carta",
        english: "You correspond to my letter"
      },
      {
        spanish: "Él corresponde a su carta",
        english: "He corresponds to your letter"
      },
      {
        spanish: "Nosotros correspondemos a su carta",
        english: "We correspond to your letter"
      },
      {
        spanish: "Ellos corresponden a su carta",
        english: "They correspond to your letter"
      }
    ]
  }
});
const irregularErVerbStore = readable({
  ser: {
    verb: "Ser",
    action: "be",
    subject: {
      i: "soy",
      you: "eres",
      he: "es",
      we: "somos",
      they: "son"
    },
    examples: [
      {
        spanish: "Yo soy de España",
        english: "I am from Spain"
      },
      {
        spanish: "Tú eres de España",
        english: "You are from Spain"
      },
      {
        spanish: "Él es de España",
        english: "He is from Spain"
      },
      {
        spanish: "Nosotros somos de España",
        english: "We are from Spain"
      },
      {
        spanish: "Ellos son de España",
        english: "They are from Spain"
      }
    ]
  },
  tener: {
    verb: "Tener",
    action: "have",
    subject: {
      i: "tengo",
      you: "tienes",
      he: "tiene",
      we: "tenemos",
      they: "tienen"
    },
    examples: [
      {
        spanish: "Yo tengo un gato",
        english: "I have a cat"
      },
      {
        spanish: "Tú tienes un gato",
        english: "You have a cat"
      },
      {
        spanish: "Él tiene un gato",
        english: "He has a cat"
      },
      {
        spanish: "Nosotros tenemos un gato",
        english: "We have a cat"
      },
      {
        spanish: "Ellos tienen un gato",
        english: "They have a cat"
      }
    ]
  },
  querer: {
    verb: "Querer",
    action: "want",
    subject: {
      i: "quiero",
      you: "quieres",
      he: "quiere",
      we: "queremos",
      they: "quieren"
    },
    examples: [
      {
        spanish: "Yo quiero un gato",
        english: "I want a cat"
      },
      {
        spanish: "Tú quieres un gato",
        english: "You want a cat"
      },
      {
        spanish: "Él quiere un gato",
        english: "He wants a cat"
      },
      {
        spanish: "Nosotros queremos un gato",
        english: "We want a cat"
      },
      {
        spanish: "Ellos quieren un gato",
        english: "They want a cat"
      }
    ]
  },
  entender: {
    verb: "Entender",
    action: "understand",
    subject: {
      i: "entiendo",
      you: "entiendes",
      he: "entiende",
      we: "entendemos",
      they: "entienden"
    },
    examples: [
      {
        spanish: "Yo entiendo español",
        english: "I understand Spanish"
      },
      {
        spanish: "Tú entiendes español",
        english: "You understand Spanish"
      },
      {
        spanish: "Él entiende español",
        english: "He understands Spanish"
      },
      {
        spanish: "Nosotros entendemos español",
        english: "We understand Spanish"
      },
      {
        spanish: "Ellos entienden español",
        english: "They understand Spanish"
      }
    ]
  },
  hacer: {
    verb: "Hacer",
    action: "do / make",
    subject: {
      i: "hago",
      you: "haces",
      he: "hace",
      we: "hacemos",
      they: "hacen"
    },
    examples: [
      {
        spanish: "Yo hago un pastel",
        english: "I make a cake"
      },
      {
        spanish: "Tú haces un pastel",
        english: "You make a cake"
      },
      {
        spanish: "Él hace un pastel",
        english: "He makes a cake"
      },
      {
        spanish: "Nosotros hacemos un pastel",
        english: "We make a cake"
      },
      {
        spanish: "Ellos hacen un pastel",
        english: "They make a cake"
      }
    ]
  },
  saber: {
    verb: "Saber",
    action: "know",
    subject: {
      i: "sé",
      you: "sabes",
      he: "sabe",
      we: "sabemos",
      they: "saben"
    },
    examples: [
      {
        spanish: "Yo sé jugar al fútbol",
        english: "I know how to play football"
      },
      {
        spanish: "Tú sabes jugar al fútbol",
        english: "You know how to play football"
      },
      {
        spanish: "Él sabe jugar al fútbol",
        english: "He knows how to play football"
      },
      {
        spanish: "Nosotros sabemos jugar al fútbol",
        english: "We know how to play football"
      },
      {
        spanish: "Ellos saben jugar al fútbol",
        english: "They know how to play football"
      }
    ]
  },
  coger: {
    verb: "Coger",
    action: "catch / take",
    subject: {
      i: "cojo",
      you: "coges",
      he: "coge",
      we: "cogimos",
      they: "cogen"
    },
    examples: [
      {
        spanish: "Yo cojo las llaves",
        english: "I take the keys"
      },
      {
        spanish: "Tú coges las llaves",
        english: "You take the keys"
      },
      {
        spanish: "Él coge las llaves",
        english: "He take the keys"
      },
      {
        spanish: "Nosotros cogimos las llaves",
        english: "We take the keys"
      },
      {
        spanish: "Ellos cogen las llaves",
        english: "They take the keys"
      }
    ]
  },
  crecer: {
    verb: "Crecer",
    action: "grow",
    subject: {
      i: "crezco",
      you: "creces",
      he: "crece",
      we: "crecemos",
      they: "crecen"
    },
    examples: [
      {
        spanish: "Yo crezco cada dia",
        english: "I grow every day"
      },
      {
        spanish: "Tú creces cada dia",
        english: "You grow every day"
      },
      {
        spanish: "Él creces cada dia",
        english: "He grows every day"
      },
      {
        spanish: "Nosotros crecemos cada di",
        english: "We grow every day"
      },
      {
        spanish: "Ellos crecen cada dia",
        english: "They grow every day"
      }
    ]
  },
  creer: {
    verb: "Creer",
    action: "think / believe",
    subject: {
      i: "creo",
      you: "crees",
      he: "cree",
      we: "creemos",
      they: "creen"
    },
    examples: [
      {
        spanish: "Yo creo en ti",
        english: "I believe in you"
      },
      {
        spanish: "Tú crees en mi",
        english: "You believe in me"
      },
      {
        spanish: "Él cree en ti",
        english: "He believes in you"
      },
      {
        spanish: "Nosotros creemos en ti",
        english: "We believe in you"
      },
      {
        spanish: "Ellos creen en ti",
        english: "They believe in you"
      }
    ]
  },
  ver: {
    verb: "Ver",
    action: "see / watch",
    subject: {
      i: "veo",
      you: "ves",
      he: "ve",
      we: "vemos",
      they: "ven"
    },
    examples: [
      {
        spanish: "Yo veo la tele",
        english: "I watch TV"
      },
      {
        spanish: "Tú ves la tele",
        english: "You watch TV"
      },
      {
        spanish: "Él ve la tele",
        english: "He watches TV"
      },
      {
        spanish: "Nosotros vemos la tele",
        english: "We watch the TV"
      },
      {
        spanish: "Ellos ven la tele",
        english: "They watch the TV"
      }
    ]
  },
  ver: {
    verb: "Ver",
    action: "see / watch",
    subject: {
      i: "veo",
      you: "ves",
      he: "ve",
      we: "vemos",
      they: "ven"
    },
    examples: [
      {
        spanish: "Yo veo la tele",
        english: "I watch TV"
      },
      {
        spanish: "Tú ves la tele",
        english: "You watch TV"
      },
      {
        spanish: "Él ve la tele",
        english: "He watches TV"
      },
      {
        spanish: "Nosotros vemos la tele",
        english: "We watch the TV"
      },
      {
        spanish: "Ellos ven la tele",
        english: "They watch the TV"
      }
    ]
  },
  poder: {
    verb: "Poder",
    action: "can",
    subject: {
      i: "puedo",
      you: "puedes",
      he: "puede",
      we: "podemos",
      they: "pueden"
    },
    examples: [
      {
        spanish: "Yo puedo tocar la guitarra",
        english: "I can play the guitar"
      },
      {
        spanish: "Tú puedes tocar la guitarra",
        english: "You can play the guitar"
      },
      {
        spanish: "Él puede tocar la guitarra",
        english: "He can play the guitar"
      },
      {
        spanish: "Nosotros podemos tocar la guitarra",
        english: "We can play the guitar"
      },
      {
        spanish: "Ellos pueden tocar la guitarra",
        english: "They can play the guitar"
      }
    ]
  },
  poner: {
    verb: "Poner",
    action: "put",
    subject: {
      i: "pongo",
      you: "pones",
      he: "pone",
      we: "ponemos",
      they: "ponen"
    },
    examples: [
      {
        spanish: "Yo pongo las llaves sobre la mesa",
        english: "I put the keys on the table"
      },
      {
        spanish: "Tú pones las llaves sobre la mesa",
        english: "You put the keys on the table"
      },
      {
        spanish: "Él pone las llaves sobre la mesa",
        english: "He puts the keys on the table"
      },
      {
        spanish: "Nosotros ponemos las llaves sobre la mesa",
        english: "We put the keys on the table"
      },
      {
        spanish: "Ellos ponen las llaves sobre la mesa",
        english: "They put the keys on the table"
      }
    ]
  }
});
export {
  irregularErVerbStore as i,
  regularErVerbStore as r
};
