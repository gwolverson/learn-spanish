<script>
  import {  Card, Button, Modal, P } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';

  import { get } from 'svelte/store';
  import { questions } from './questionStore';
	import Heading from '../../components/common/Heading.svelte';

  let allQuestions = get(questions);

  let selectedChoice = false;
  let selectedQuestion;
  let quizGenerated = false;
  let numberOfQuestions = 3;
  let generatedQuestions = [];
  let answerSubmitted;
  let answerIsCorrect;
  let modalText = '';
  let showEndQuizModal;
  
  let currentQuestion;
  let questionNumber = 0;

  function generateQuiz() { 
    let generatedNumbers = new Set();            
    while (generatedNumbers.size < numberOfQuestions) {
      generatedNumbers.add(Math.floor(Math.random() * allQuestions.length));                
    }      

    for (const number of generatedNumbers) {       
      generatedQuestions.push(allQuestions[number]);
    }
    currentQuestion = generatedQuestions[questionNumber];
    quizGenerated = true; 
  }

  function resetQuiz() { 
    quizGenerated = false; 
    showEndQuizModal = false;
    questionNumber = 0;    
    generatedQuestions = [];
  }

  function handleChoice(id, question) {    
    selectedChoice = id;
    selectedQuestion = question;    
  }

  function handleCheck() {
    answerIsCorrect = false;
    if (selectedQuestion.answer == selectedChoice) {
      modalText = 'Well done, that answer is correct!';
      answerIsCorrect = true;
    } else {
      modalText = 'Try again, that answer is incorrect.';
      answerIsCorrect = false
    }
    answerSubmitted = true;
  }

  function handleNext() {
    if (questionNumber >= generatedQuestions.length - 1) {        
      showEndQuizModal = true;
    } else if (answerIsCorrect) {
      questionNumber++;
      selectedChoice = 0;
      currentQuestion = generatedQuestions[questionNumber];
    }
  }
</script>

<div class="text-center">
  <Heading  
    title="Quiz Time!"
    subTitle="Click the button below to generate a new quiz!"
  />
  {#if !quizGenerated}
  <Button color='blue' on:click={generateQuiz}>Generate Quiz</Button>
  {/if}
  {#if quizGenerated}
  <Card class="content-center text-center mb-15 display-block m-auto" size="lg" padding='xl'>
    <h5 class="mb-5 text-3xl font-bold text-gray-900 dark:text-white">{currentQuestion.question}</h5>
    <div class="grid grid-cols-2 gap-4 mb-15">
      {#each currentQuestion.choices as choice}
        <Button 
          id={choice.id} 
          color={selectedChoice == choice.id ? 'green' : 'alternative'} 
          bind:this={selectedChoice} 
          on:click={event => handleChoice(event.target.id, currentQuestion)}>
            {choice.choice}
        </Button>
      {/each}
    </div>
    <div>      
      <Button color='blue' class="mt-5" on:click={handleCheck}>Check</Button>
    </div>
  </Card>
  <Button color='red' class="mt-5" on:click={resetQuiz}>Reset Quiz</Button>
  {/if}
</div>

<Modal bind:this={answerIsCorrect} bind:open={answerSubmitted} size="xs" autoclose>  
  <div class="text-center">
    {#if answerIsCorrect}    
      <svg class="w-6 h-6 text-green-400 display-block m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
      </svg>        
    {:else} 
      <Icon name="close-solid" size="md" class="text-red-700 inline m-1"/> 
    {/if}
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{modalText}</h3>    
    <Button color='blue' on:click={handleNext}>Ok</Button>
  </div>  
</Modal>

<Modal bind:open={showEndQuizModal} size="lg" autoclose>  
  <div class="text-center">
    <Icon name="clipboard-outline" size="md" class="text-green-500 inline m-1"/>     
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Quiz completed!</h3>    
    <Button color='blue' on:click={resetQuiz}>Finish</Button>
  </div>  
</Modal>
