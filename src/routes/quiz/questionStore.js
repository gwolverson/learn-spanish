import { readable } from 'svelte/store';

export const questions = readable([
  {
    id: 1,
    question: 'What does the verb Hablar mean?',
    choices: [
      {
        id: 1,
        choice: 'To Converse',
        selected: false
      },
      {
        id: 2,
        choice: 'To Listen',
        selected: false,
      },
      {
        id: 3,
        choice: 'To Understand',
        selected: false
      },
      {
        id: 4,
        choice: 'To Speak',
        selected: false
      }
    ],
    answer: 4    
  },
  {
    id: 2,
    question: 'What does the verb Escuchar mean?',
    choices: [
      {
        id: 1,
        choice: 'To Converse',
        selected: false
      },
      {
        id: 2,
        choice: 'To Listen',
        selected: false,
      },
      {
        id: 3,
        choice: 'To Know',
        selected: false
      },
      {
        id: 4,
        choice: 'To Talk',
        selected: false
      }
    ],
    answer: 2
  },
  {
    id: 3,
    question: 'What does the verb Dormir mean?',
    choices: [
      {
      id: 1,
      choice: 'To Dream',
      selected: false
      },
      {
        id: 2,
        choice: 'To Sleep',
        selected: false,
      },
      {
        id: 3,
        choice: 'To Rest',
        selected: false
      },
      {
        id: 4,
        choice: 'To Walk',
        selected: false
      }
    ],
    answer: 2
  },
  {
    id: 4,
    question: 'Which of the following is an irregular verb?',
    choices: [
      {
      id: 1,
      choice: 'Hablar',
      selected: false
      },
      {
        id: 2,
        choice: 'Dormir',
        selected: false,
      },
      {
        id: 3,
        choice: 'Ir',
        selected: false
      },
      {
        id: 4,
        choice: 'Conversar',
        selected: false
      }
    ],
    answer: 3  
  },
  {
    id: 5,
    question: 'What does the verb Regresar mean?',
    choices: [
      {
      id: 1,
      choice: 'To Regress',
      selected: false
      },
      {
        id: 2,
        choice: 'To Return',
        selected: false,
      },
      {
        id: 3,
        choice: 'To Regret',
        selected: false
      },
      {
        id: 4,
        choice: 'To Express',
        selected: false
      }
    ],
    answer: 2
  },
  {
    id: 6,
    question: 'What does the verb Regresar mean?',
    choices: [
      {
      id: 1,
      choice: 'To Regress',
      selected: false
      },
      {
        id: 2,
        choice: 'To Return',
        selected: false,
      },
      {
        id: 3,
        choice: 'To Regret',
        selected: false
      },
      {
        id: 4,
        choice: 'To Express',
        selected: false
      }
    ],
    answer: 2
  },
  {
    id: 7,
    question: 'What does the verb Regresar mean?',
    choices: [
      {
      id: 1,
      choice: 'To Regress',
      selected: false
      },
      {
        id: 2,
        choice: 'To Return',
        selected: false,
      },
      {
        id: 3,
        choice: 'To Regret',
        selected: false
      },
      {
        id: 4,
        choice: 'To Express',
        selected: false
      }
    ],
    answer: 2
  }
]);
