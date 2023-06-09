import { readable } from 'svelte/store';

export const regularArVerbStore = readable({
	hablar: {
        id: 1,
        verb: 'Hablar',
        action: 'speak',
        subject: {
            form: 'habl',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo hablo con mi madre',
                english: 'I speak with my mother'
            },
            {
                spanish: 'Tú hablas con tu madre',
                english: 'You speak with your mother'
            },
            {
                spanish: 'Él habla con su madre',
                english: 'He speaks with his mother'
            },
            {
                spanish: 'Nosotros hablamos con nuestra madre',
                english: 'We speak with our mother'
            },
            {
                spanish: 'Ellos hablan con su madre',
                english: 'They speak with their mother'
            }
        ]
    },
    necesitar: {
        id: 2,
        verb: 'Necesitar',
        action: 'need',
        subject: {
            form: 'necesit',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo necesiun bolígrafo',
                english: 'I need a pen'
            },
            {
                spanish: 'Tú necesitas un bolígrafo',
                english: 'You need a pen'
            },
            {
                spanish: 'Él necesita un bolígrafo',
                english: 'He needs a pen'
            },
            {
                spanish: 'Nosotros necesitamos un bolígrafo',
                english: 'We need a pen'
            },
            {
                spanish: 'Ellos necesitan un bolígrafo',
                english: 'They need a pen'
            }
        ]
    },	
    ayudar: {
        id: 3,
        verb: 'Ayudar',
        action: 'help',
        subject: {
            form: 'ayud',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo ayudo mi amigo',
                english: 'I help my friend'
            },
            {
                spanish: 'Tú ayudas tu amigo',
                english: 'You help your friend'
            },
            {
                spanish: 'Él ayuda su amigo',
                english: 'He helps his friend'
            },
            {
                spanish: 'Nosotros ayudamos nuestro amigo',
                english: 'We help our friend'
            },
            {
                spanish: 'Ellos ayduan su amigo',
                english: 'They help their friend'
            }
        ]
    },	
    cambiar: {
        id: 4,
        verb: 'Cambiar',
        action: 'change',
        subject: {
            form: 'cambi',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo cambio mi carro',
                english: 'I change my car'
            },
            {
                spanish: 'Tú cambias tu carro',
                english: 'You change your car'
            },
            {
                spanish: 'Él cambia su carro',
                english: 'He changes his car'
            },
            {
                spanish: 'Nosotros cambiamos nuestro carro',
                english: 'We change our car'
            },
            {
                spanish: 'Ellos cambian su carro',
                english: 'They change their car'
            }
        ]
    },	
    amar: {
        id: 5,
        verb: 'Amar',
        action: 'love',
        subject: {
            form: 'am',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo te amo',
                english: 'I love you'
            },
            {
                spanish: 'Tú me amas',
                english: 'You love me'
            },
            {
                spanish: 'Él la ama',
                english: 'He loves her'
            },
            {
                spanish: 'Nosotros la amamos',
                english: 'We love her'
            },
            {
                spanish: 'Ellos lo aman',
                english: 'They love him'
            }
        ]
    },	
    quedar: {
        id: 6,
        verb: 'Quedar',
        action: 'stay / meet',
        subject: {
            form: 'qued',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo quedo contigo',
                english: 'I stay with you'
            },
            {
                spanish: 'Tú quedas conmigo',
                english: 'You stay with me'
            },
            {
                spanish: 'Él queda con ella',
                english: 'He stays with her'
            },
            {
                spanish: 'Nosotros nos quedamos con ellos',
                english: 'We stay with her'
            },
            {
                spanish: 'Ellos se quedan con nosotros',
                english: 'They stay with us'
            }
        ]
    },	
    tomar: {
        id: 7,
        verb: 'Tomar',
        action: 'take',
        subject: {
            form: 'tom',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo tomo el tren',
                english: 'I take the train'
            },
            {
                spanish: 'Tú tomas el tren',
                english: 'You take the train'
            },
            {
                spanish: 'Él toma el tren',
                english: 'He takes the train'
            },
            {
                spanish: 'Nosotros tomamos el tren',
                english: 'We take the train'
            },
            {
                spanish: 'Ellos toman el tren',
                english: 'They take the train'
            }
        ]
    },	
    bailar: {
        id: 8,
        verb: 'Bailar',
        action: 'dance',
        subject: {
            form: 'bail',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo bailo contigo',
                english: 'I dance with you'
            },
            {
                spanish: 'Tú bailas conmigo',
                english: 'You dance with me'
            },
            {
                spanish: 'Él baila con ella',
                english: 'He dances with her'
            },
            {
                spanish: 'Nosotros bailamos con ellos',
                english: 'We dance with them'
            },
            {
                spanish: 'Ellos bailan con nosotros',
                english: 'They dance with us'
            }
        ]
    },	
    cantar: {
        id: 9,
        verb: 'Cantar',
        action: 'sing',
        subject: {
            form: 'cant',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo canuna canción',
                english: 'I sing a song'
            },
            {
                spanish: 'Tú cantas una canción',
                english: 'You sing a song'
            },
            {
                spanish: 'Él canta una canción',
                english: 'He sings a song'
            },
            {
                spanish: 'Nosotros cantamos una canción',
                english: 'We sing a song'
            },
            {
                spanish: 'Ellos cantan una canción',
                english: 'They sing a song'
            }
        ]
    },	
    entrar: {
        id: 10,
        verb: 'Entrar',
        action: 'enter',
        subject: {
            form: 'entr',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo entro la habitación',
                english: 'I enter the room'
            },
            {
                spanish: 'Tú entras la habitación',
                english: 'You enter the room'
            },
            {
                spanish: 'Él entra la habitación',
                english: 'He enters the room'
            },
            {
                spanish: 'Nosotros entramos la habitación',
                english: 'We enter the room'
            },
            {
                spanish: 'Ellos entran la habitación',
                english: 'They enter the room'
            }
        ]
    },	
    esperar: {
        id: 11,
        verb: 'Esperar',
        action: 'wait / hope',
        subject: {
            form: 'esper',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo te espero',
                english: 'I wait for you'
            },
            {
                spanish: 'Tú me esperas',
                english: 'You wait for me'
            },
            {
                spanish: 'Él la espera',
                english: 'He waits for her'
            },
            {
                spanish: 'Nosotros los esperamos',
                english: 'We wait for them'
            },
            {
                spanish: 'Ellos nos esperan',
                english: 'They wait for us'
            }
        ]
    },	
    expresar: {
        id: 12,
        verb: 'Expresar',
        action: 'express',
        subject: {
            form: 'expres',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo me expreso',
                english: 'I express myself'
            },
            {
                spanish: 'Tú te expresas',
                english: 'You express yourself'
            },
            {
                spanish: 'Él se expresa',
                english: 'He expresses himself'
            },
            {
                spanish: 'Nosotros nos expresamos',
                english: 'We express ourselves'
            },
            {
                spanish: 'Ellos se expresan',
                english: 'They express themselves'
            }
        ]
    },	
    lavar: {
        id: 13,
        verb: 'Lavar',
        action: 'wash',
        subject: {
            form: 'lav',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo lavo mi ropa',
                english: 'I wash my clothes'
            },
            {
                spanish: 'Tú lavas tu ropa',
                english: 'You wash your clothes'
            },
            {
                spanish: 'Él lava su ropa',
                english: 'He washes his clothes'
            },
            {
                spanish: 'Nosotros lavamos nuestra ropa',
                english: 'We wash our clothes'
            },
            {
                spanish: 'Ellos lavan se ropa',
                english: 'They wash their clothes'
            }
        ]
    },	
    limpiar: {
        id: 14,
        verb: 'Limpiar',
        action: 'clean',
        subject: {
            form: 'limpi',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo limpio la casa',
                english: 'I clean the house'
            },
            {
                spanish: 'Tú limpias la casa',
                english: 'You clean the house'
            },
            {
                spanish: 'Él limpia la casa',
                english: 'He cleans the house'
            },
            {
                spanish: 'Nosotros limpiamos la casa',
                english: 'We clean the house'
            },
            {
                spanish: 'Ellos limpian la casa',
                english: 'They clean the house'
            }
        ]
    },	
    llamar: {
        id: 15,
        verb: 'Llamar',
        action: 'call',
        subject: {
            form: 'llam',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo llamo a mis padres',
                english: 'I call my parents'
            },
            {
                spanish: 'Tú llamas a tus padres',
                english: 'You call your parents'
            },
            {
                spanish: 'Él llama a sus padres',
                english: 'He calls his parents'
            },
            {
                spanish: 'Nosotros llamamos a nuestros padres',
                english: 'We call our parents'
            },
            {
                spanish: 'Ellos llaman a sus padres',
                english: 'They call their parents'
            }
        ]
    },
    llevar: {
        id: 16,
        verb: 'Llevar',
        action: 'carry / wear',
        subject: {
            form: 'llev',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo llevo la bolsa',
                english: 'I carry the bag'
            },
            {
                spanish: 'Tú llevas la bolsa',
                english: 'You carry the bag'
            },
            {
                spanish: 'Él lleva la bolsa',
                english: 'He carries the bag'
            },
            {
                spanish: 'Nosotros llevamos la bolsa',
                english: 'We carry the bag'
            },
            {
                spanish: 'Ellos llevan la bolsa',
                english: 'They carry the bag'
            }
        ]
    },		
    mandar: {
        id: 17,
        verb: 'Mandar',
        action: 'send',
        subject: {
            form: 'mand',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo mando la carta',
                english: 'I send the letter'
            },
            {
                spanish: 'Tú mandas la carta',
                english: 'You send the letter'
            },
            {
                spanish: 'Él manda la carta',
                english: 'He sends the letter'
            },
            {
                spanish: 'Nosotros mandamos la carta',
                english: 'We send the letter'
            },
            {
                spanish: 'Ellos mandan la carta',
                english: 'They send the letter'
            }
        ]
    },	
    mirar: {
        id: 18,
        verb: 'Mirar',
        action: 'watch / look',
        subject: {
            form: 'mir',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo miro la tele',
                english: 'I watch the tele'
            },
            {
                spanish: 'Tú miras la tele',
                english: 'You watch the tele'
            },
            {
                spanish: 'Él mira la tele',
                english: 'He watches the tele'
            },
            {
                spanish: 'Nosotros miramos la tele',
                english: 'We watch the tele'
            },
            {
                spanish: 'Ellos miran la tele',
                english: 'They watch the tele'
            }
        ]
    },	
    nadar: {
        id: 19,
        verb: 'Nadar',
        action: 'swim',
        subject: {
            form: 'nad',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo nado en la piscina',
                english: 'I swim in the pool'
            },
            {
                spanish: 'Tú nadas en la piscina',
                english: 'You swim in the pool'
            },
            {
                spanish: 'Él nada en la piscina',
                english: 'He swims in the pool'
            },
            {
                spanish: 'Nosotros nadamos en la piscina',
                english: 'We swim in the pool'
            },
            {
                spanish: 'Ellos nadan en la piscina',
                english: 'They swim in the pool'
            }
        ]
    },	
    olvidar: {
        id: 20,
        verb: 'Olvidar',
        action: 'forget',
        subject: {
            form: 'olvid',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo olvido mis llaves',
                english: 'I forget my keys'
            },
            {
                spanish: 'Tú olivas tus llaves',
                english: 'You forget your keys'
            },
            {
                spanish: 'Él olvida sus llaves',
                english: 'He forgets his keys'
            },
            {
                spanish: 'Nosotros olvidamos nuestras llaves',
                english: 'We forget our keys'
            },
            {
                spanish: 'Ellos olvidan sus llaves',
                english: 'They forget our keys'
            }
        ]
    },	
    pagar: {
        id: 21,
        verb: 'Pagar',
        action: 'pay',
        subject: {
            form: 'pag',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo pago la cuenta',
                english: 'I pay the bill'
            },
            {
                spanish: 'Tú pagas la cuenta',
                english: 'You pay the bill'
            },
            {
                spanish: 'Él paga la cuenta',
                english: 'He pays the bill'
            },
            {
                spanish: 'Nosotros pagamos la cuenta',
                english: 'We pay the bill'
            },
            {
                spanish: 'Ellos pagan la cuenta',
                english: 'They pay the bill'
            }
        ]
    },	
    montar: {
        id: 22,
        verb: 'Montar',
        action: 'ride',
        subject: {
            form: 'mont',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo monmi bicicleta',
                english: 'I ride my bike'
            },
            {
                spanish: 'Tú montas tu bicicleta',
                english: 'You ride your bike'
            },
            {
                spanish: 'Él monta su bicicleta',
                english: 'He rides his bike'
            },
            {
                spanish: 'Nosotros montamos nuestra bicicleta',
                english: 'We ride our bike'
            },
            {
                spanish: 'Ellos montan su bicicleta',
                english: 'They ride their bike'
            }
        ]
    },	
    parar: {
        id: 23,
        verb: 'Parar',
        action: 'stop',
        subject: {
            form: 'par',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo paro el carro',
                english: 'I stop the car'
            },
            {
                spanish: 'Tú paras el carro',
                english: 'You stop the car'
            },
            {
                spanish: 'Él para el carro',
                english: 'He stops the car'
            },
            {
                spanish: 'Nosotros paramos el carro',
                english: 'We stop the car'
            },
            {
                spanish: 'Ellos paran el carro',
                english: 'They stop the car'
            }
        ]
    },	
    trabajar: {
        id: 24,
        verb: 'Trabajar',
        action: 'work',
        subject: {
            form: 'trabaj',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo trabajo de casa',
                english: 'I work from home'
            },
            {
                spanish: 'Tú trabajas de casa',
                english: 'You work from home'
            },
            {
                spanish: 'Él trabaja de casa',
                english: 'He works from home'
            },
            {
                spanish: 'Nosotros trabajamos de casa',
                english: 'We work from home'
            },
            {
                spanish: 'Ellos trabajan de casa',
                english: 'They work from home'
            }
        ]
    },	
    viajar: {
        id: 25,
        verb: 'Viajar',
        action: 'travel',
        subject: {
            form: 'viaj',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo viajo a España',
                english: 'I travel Spain'
            },
            {
                spanish: 'Tú viajas a España',
                english: 'You travel Spain'
            },
            {
                spanish: 'Él viaja a España',
                english: 'He travels Spain'
            },
            {
                spanish: 'Nosotros viajamos a España',
                english: 'We travel Spain'
            },
            {
                spanish: 'Ellos viajan a España',
                english: 'They travel Spain'
            }
        ]
    },	
    caminar: {
        id: 26,
        verb: 'Caminar',
        action: 'walk',
        subject: {
            form: 'camin',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo camino en el parque',
                english: 'I walk in the park'
            },
            {
                spanish: 'Tú caminas en el parque',
                english: 'You walk in the park'
            },
            {
                spanish: 'Él camina en el parque',
                english: 'He walks in the park'
            },
            {
                spanish: 'Nosotros caminamos en el parque',
                english: 'We walk in the park'
            },
            {
                spanish: 'Ellos caminan en el parque',
                english: 'They walk in the park'
            }
        ]
    },	
    buscar: {
        id: 27,
        verb: 'Buscar',
        action: 'look for',
        subject: {
            form: 'busc',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo busco un regalo',
                english: 'I look for a gift'
            },
            {
                spanish: 'Tú buscas un regalo',
                english: 'You look for a gift'
            },
            {
                spanish: 'Él buscas un regalo',
                english: 'He looks for a gift'
            },
            {
                spanish: 'Nosotros buscamos un regalo',
                english: 'We look for a gift'
            },
            {
                spanish: 'Ellos buscan un regalo',
                english: 'They look for a gift'
            }
        ]
    },	
});

export const irregularArVerbStore = readable({        
    estar: {
        id: 1,
        verb: 'Estar',
        action: 'be',
        subject: {
            form: 'est',
            i: 'oy',
            you: 'ás',
            he: 'á',
            we: 'amos',
            they: 'án'
        },
        examples: [
            {
                spanish: 'Yo estoy enferma',
                english: 'I am sick'
            },
            {
                spanish: 'Tú estás enferma',
                english: 'You are sick'
            },
            {
                spanish: 'Él está enferma',
                english: 'He is sick'
            },
            {
                spanish: 'Nosotros estamos enfermas',
                english: 'We are sick'
            },
            {
                spanish: 'Ellos están enfermas',
                english: 'They are sick'
            }
        ]
    },	
    dar: {
        id: 2,
        verb: 'Dar',
        action: 'give',
        subject: {
            form: 'd',
            i: 'oy',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo le doy un regalo',
                english: 'I give him a gift'
            },
            {
                spanish: 'Tú le das un regalo',
                english: 'You give him a gift'
            },
            {
                spanish: 'Él le da un regalo',
                english: 'He gives him a gift'
            },
            {
                spanish: 'Nosotros le damos un regalo',
                english: 'We give him a gift'
            },
            {
                spanish: 'Ellos le dan un regalo',
                english: 'They give him a gift'
            }
        ]
    },	            
    empezar: {
        id: 3,
        verb: 'Empezar',
        action: 'begin',
        subject: {
            form: 'emp',
            i: 'iezo',
            you: 'iezas',
            he: 'ieza',
            we: 'ezamos',
            they: 'iezan'
        },
        examples: [
            {
                spanish: 'Yo empiezo a trabajar a las ocho',
                english: 'I begin work at eight'
            },
            {
                spanish: 'Tú empiezas a trabajar a las ocho',
                english: 'You start work at eight'
            },
            {
                spanish: 'Él empieza a trabajar a las ocho',
                english: 'He starts work at eight'
            },
            {
                spanish: 'Nosotros empezamos a trabajar a las ocho',
                english: 'We start work at eight'
            },
            {
                spanish: 'Ellos empiezan a trabajar a las ocho',
                english: 'They start work at eight'
            }
        ]
    },	    
    llegar: {
        id: 4,
        verb: 'Llegar',
        action: 'arrive',
        subject: {
            form: 'lleg',
            i: 'o',
            you: 'as',
            he: 'a',
            we: 'amos',
            they: 'an'
        },
        examples: [
            {
                spanish: 'Yo llego a las ocho',
                english: 'I arrive at eight'
            },
            {
                spanish: 'Tú llegas a las ocho',
                english: 'You arrive at eight'
            },
            {
                spanish: 'Él llega a las ocho',
                english: 'He arrive at eight'
            },
            {
                spanish: 'Nosotros llegamos a las ocho',
                english: 'We arrive at eight'
            },
            {
                spanish: 'Ellos llegan a las ocho',
                english: 'They arrive at eight'
            }
        ]
    },	
    encontrar: {
        id: 5,
        verb: 'Encontrar',
        action: 'find',
        subject: {
            form: 'enc',
            i: 'uentro',
            you: 'uentras',
            he: 'uentra',
            we: 'ontramos',
            they: 'uentran'
        },
        examples: [
            {
                spanish: 'Yo encuentro las llaves',
                english: 'I find the keys'
            },
            {
                spanish: 'Tú encuentras las llaves',
                english: 'You find the keys'
            },
            {
                spanish: 'Él encuentra las llaves',
                english: 'He finds the keys'
            },
            {
                spanish: 'Nosotros encontramos las llaves',
                english: 'We find the keys'
            },
            {
                spanish: 'Ellos encuentran las llaves',
                english: 'They find the keys'
            }
        ]
    },	
    pensar: {
        id: 6,
        verb: 'Pensar',
        action: 'think',
        subject: {
            form: 'p',
            i: 'ienso',
            you: 'iensas',
            he: 'iensa',
            we: 'ensamos',
            they: 'iensan'
        },
        examples: [
            {
                spanish: 'Yo pienso en ti',
                english: 'I think of you'
            },
            {
                spanish: 'Tú piensas en me',
                english: 'You think of me'
            },
            {
                spanish: 'Él piensa en ti',
                english: 'He thinks of you'
            },
            {
                spanish: 'Nosotros pensamos en ti',
                english: 'We think of you'
            },
            {
                spanish: 'Ellos piensan en ti',
                english: 'They think of you'
            }
        ]
    },	
})