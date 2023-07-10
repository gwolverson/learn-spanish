<script>
  import { Card, List, Li } from "flowbite-svelte";

  export let currentVerb;
</script>
<Card size="md">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Example Usage</h5>
  <List tag="ul" class="space-y-1">
    {#each currentVerb.examples as example}
      <Li liClass="dark:text-white italic">
        <strong>{example.spanish}</strong><br/>
        <i>{example.english}</i> 
      </Li>            
    {/each}
  </List>
</Card>