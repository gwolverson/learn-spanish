import { r as readable } from "./index.js";
const regularIrVerbStore = readable({
  vivir: {
    verb: "Virir",
    action: "live",
    subject: {
      form: "viv",
      i: "o",
      you: "es",
      he: "e",
      we: "imos",
      they: "en"
    },
    examples: [
      {
        spanish: "Yo vivo aqui",
        english: "I live here"
      },
      {
        spanish: "Tú vives aqui",
        english: "You live here"
      },
      {
        spanish: "Él vive aqui",
        english: "He is sick"
      },
      {
        spanish: "Nosotros vivimos aqui",
        english: "We live here"
      },
      {
        spanish: "Ellos viven aqui",
        english: "They live here"
      }
    ]
  },
  escribir: {
    verb: "Escribir",
    action: "write",
    subject: {
      form: "escrib",
      i: "o",
      you: "es",
      he: "e",
      we: "imos",
      they: "en"
    },
    examples: [
      {
        spanish: "Yo escribo una carta",
        english: "I write a letter"
      },
      {
        spanish: "Tú escribes una carta",
        english: "You write a letter"
      },
      {
        spanish: "Él escribe una carta",
        english: "He writes a letter"
      },
      {
        spanish: "Nosotros escribimos una carta",
        english: "We write a letter"
      },
      {
        spanish: "Ellos escriben una carta",
        english: "They write a letter"
      }
    ]
  },
  describir: {
    verb: "Describir",
    action: "describe",
    subject: {
      form: "describ",
      i: "o",
      you: "es",
      he: "e",
      we: "imos",
      they: "en"
    },
    examples: [
      {
        spanish: "Yo describo este lugar",
        english: "I describe this place"
      },
      {
        spanish: "Tú describes este lugar",
        english: "You describe this place"
      },
      {
        spanish: "Él describe este lugar",
        english: "He describes this place"
      },
      {
        spanish: "Nosotros describimos este lugar",
        english: "We describe this place"
      },
      {
        spanish: "Ellos describen este lugar",
        english: "They describe this place"
      }
    ]
  },
  recibir: {
    verb: "Recibir",
    action: "receive",
    subject: {
      form: "recib",
      i: "o",
      you: "es",
      he: "e",
      we: "imos",
      they: "en"
    },
    examples: [
      {
        spanish: "Yo recibo este regalo",
        english: "I receive this gift"
      },
      {
        spanish: "Tú recibes este regalo",
        english: "You receive this gift"
      },
      {
        spanish: "Él recibe este regalo",
        english: "He receives this gift"
      },
      {
        spanish: "Nosotros recibimos este regalo",
        english: "We receive this gift"
      },
      {
        spanish: "Ellos reciben este regalo",
        english: "They receive this gift"
      }
    ]
  }
});
const irregularIrVerbStore = readable({
  ir: {
    verb: "Ir",
    action: "go",
    subject: {
      form: "v",
      i: "oy",
      you: "as",
      he: "a",
      we: "amos",
      they: "an"
    },
    examples: [
      {
        spanish: "Yo voy a la tienda",
        english: "I go to the store"
      },
      {
        spanish: "Tú vas a la tienda",
        english: "You go to the store"
      },
      {
        spanish: "Él va a la tienda",
        english: "He goes to the store"
      },
      {
        spanish: "Nosotros vamos a la tienda",
        english: "We go to the store"
      },
      {
        spanish: "Ellos van a la tienda",
        english: "They go to the store"
      }
    ]
  },
  dormir: {
    verb: "Dormir",
    action: "sleep",
    subject: {
      i: "duermo",
      you: "duermes",
      he: "duerme",
      we: "dormimos",
      they: "duermen"
    },
    examples: [
      {
        spanish: "Yo duermo en la cama",
        english: "I sleep in the bed"
      },
      {
        spanish: "Tú duermes en la cama",
        english: "You sleep in the bed"
      },
      {
        spanish: "Él duerme en la cama",
        english: "He sleeps in the bed"
      },
      {
        spanish: "Nosotros dormimos en la cama",
        english: "We sleep in the bed"
      },
      {
        spanish: "Ellos duermen en la cama",
        english: "They sleep in the bed"
      }
    ]
  },
  decir: {
    verb: "Decir",
    action: "say",
    subject: {
      i: "digo",
      you: "dices",
      he: "dice",
      we: "decimos",
      they: "dicen"
    },
    examples: [
      {
        spanish: "Yo digo algo",
        english: "I say something"
      },
      {
        spanish: "Tú dices algo",
        english: "You say something"
      },
      {
        spanish: "Él dice algo",
        english: "He says something"
      },
      {
        spanish: "Nosotros decimos algo",
        english: "We say something"
      },
      {
        spanish: "Ellos dicen algo",
        english: "They say something"
      }
    ]
  },
  oir: {
    verb: "Oír",
    action: "hear",
    subject: {
      i: "oigo",
      you: "oyes",
      he: "oye",
      we: "oímos",
      they: "oyen"
    },
    examples: [
      {
        spanish: "Yo oigo algo",
        english: "I hear something"
      },
      {
        spanish: "Tú oyes algo",
        english: "You hear something"
      },
      {
        spanish: "Él oye algo",
        english: "He hears something"
      },
      {
        spanish: "Nosotros oímos",
        english: "We hear something"
      },
      {
        spanish: "Ellos oyen algo",
        english: "They hear something"
      }
    ]
  },
  morir: {
    verb: "Morir",
    action: "die",
    subject: {
      i: "oigo",
      you: "oyes",
      he: "oye",
      we: "oímos",
      they: "oyen"
    },
    examples: [
      {
        spanish: "Yo oigo algo",
        english: "I hear something"
      },
      {
        spanish: "Tú oyes algo",
        english: "You hear something"
      },
      {
        spanish: "Él oye algo",
        english: "He hears something"
      },
      {
        spanish: "Nosotros oímos",
        english: "We hear something"
      },
      {
        spanish: "Ellos oyen algo",
        english: "They hear something"
      }
    ]
  }
});
export {
  irregularIrVerbStore as i,
  regularIrVerbStore as r
};
