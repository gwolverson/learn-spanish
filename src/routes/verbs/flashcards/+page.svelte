<script>
	import { Heading, Button, P, Checkbox, Range, Label, Alert } from 'flowbite-svelte';
  import { get } from 'svelte/store';

  import { regularArVerbStore, irregularArVerbStore } from '../stores/arVerbStores';
  import { regularErVerbStore, irregularErVerbStore } from '../stores/erVerbStores';
  import { regularIrVerbStore, irregularIrVerbStore } from '../stores/irVerbStores';
	import Flashcard from './components/Flashcard.svelte';

  let alert = false;

  const combinedArVerbs = {
    ...get(regularArVerbStore),
    ...get(irregularArVerbStore)
  };

  const combinedErVerbs = {
    ...get(regularErVerbStore),
    ...get(irregularErVerbStore)
  };

  const combinedIrVerbs = {
    ...get(regularIrVerbStore),
    ...get(irregularIrVerbStore)
  };

  let combinedVerbs = {};
  let generatedVerbs = [];

  let arVerbs = false;
  let erVerbs = false;
  let irVerbs = false;
  let mixedVerbs = false;
  let numberOfCards = 0;

  function generateCards() {
    if ((!arVerbs && !erVerbs && !irVerbs && !mixedVerbs) || numberOfCards == 0) {
      alert = true;
    } else {
      generatedVerbs = [];
      alert = false;
      combinedVerbs = {};
      if (!mixedVerbs) {
        if (arVerbs) {
          Object.assign(combinedVerbs, combinedArVerbs);
        }
        if (erVerbs) {
          Object.assign(combinedVerbs, combinedErVerbs);
        }
        if (irVerbs) {
          Object.assign(combinedVerbs, combinedIrVerbs);
        }
      } else {
        combinedVerbs = {
          ...combinedArVerbs, ...combinedErVerbs, ...combinedIrVerbs
        }
      }
      
      const keys = Object.keys(combinedVerbs); 
      let generatedNumbers = new Set();            
      while (generatedNumbers.size < numberOfCards) {
        generatedNumbers.add(Math.floor(Math.random() * keys.length));                
      }      

      for (const number of generatedNumbers) {       
        generatedVerbs.push(combinedVerbs[keys[number]]);
      }      
    }
  }

</script>

<div>  
  <div class="grid md:grid-cols-6 gap-6">
    <div class="col-span-6">
      <Heading tag="h1" class="mb-4 text-center" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Flashcards</Heading>                      
      <div class="px-10">
        <h2 class="m-auto pb-5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Generate flashcards based on the content you want to focus on</h2>
        <form>
          {#if alert}
            <Alert color="red">
              <span class="font-medium">Danger alert!</span>You must choose at least one option and the number of cards you wish to generate!
            </Alert>
          {/if}
          <P class="pb-2 dark:text-white italic">Select which content you want to focus on</P>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <Checkbox class="mb-6 space-x-1" bind:checked={arVerbs}>-ar verbs</Checkbox>
              <Checkbox class="mb-6 space-x-1" bind:checked={erVerbs}>-er verbs</Checkbox>
              <Checkbox class="mb-6 space-x-1" bind:checked={irVerbs}>-ir verbs</Checkbox>
              <Checkbox class="mb-6 space-x-1" bind:checked={mixedVerbs}>Mixed verbs</Checkbox>
              <Label>Number of Cards {numberOfCards}</Label>
              <Range id="numberOfCards" min="1" max="10" bind:value={numberOfCards} />
            </div>
          </div>
          <Button color="blue" on:click={generateCards}>Generate Cards</Button>
        </form>
        {#if generatedVerbs.length > 0}
          <div class="pt-10 grid md:grid-cols-2 gap-6">
            {#each generatedVerbs as verb}
              <Flashcard {verb}/>
            {/each}
          </div>    
        {/if}                     
      </div>      
    </div>    
  </div>
</div>