<script>
  import { Card, Button, P } from 'flowbite-svelte';  

  export let verb = {};
  let visible = false; 

  function toggleVisible() {
    visible = !visible;
  }
</script>

<Card size="md">
  <h5 class="m-auto pb-5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{verb.verb} {#if visible}(to {verb.action}){/if}</h5>                        
  {#if visible}
    <div class="m-auto pb-5">
      <P class="dark:text-white italic">Yo <strong>{verb.subject.form + verb.subject.i}</strong> / I {verb.action}</P>
      <P class="dark:text-white italic">Tú <strong>{verb.subject.form + verb.subject.you}</strong> / You {verb.action}</P>
      <P class="dark:text-white italic">Él / Ella / Usted <strong>{verb.subject.form + verb.subject.he}</strong> / El / She / They {verb.action}</P>
      <P class="dark:text-white italic">Nosotros <strong>{verb.subject.form + verb.subject.we}</strong> / We {verb.action}</P>
      <P class="dark:text-white italic">Ellos / Ustedes <strong>{verb.subject.form + verb.subject.they}</strong> / They {verb.action}</P>              
    </div>
  {/if}
  <div class="w-48 m-auto">
    <Button color="blue" on:click={toggleVisible}>{#if visible}Hide{/if}{#if !visible}Show{/if} Definition</Button>
  </div>
</Card>          