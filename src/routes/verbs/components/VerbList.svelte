<script>
    import { Li, List } from 'flowbite-svelte';

    export let verbs;
    export let selectVerb;
</script>

<List tag="ul" class="space-y-1">
  {#each verbs as verb, index}
    <Li liClass="dark:text-white">
      <a
        tabindex={index}
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer" 
        on:click={(event) => selectVerb(event.target.innerText)}>
          {verb}
      </a>              
    </Li> 
  {/each}             
</List>