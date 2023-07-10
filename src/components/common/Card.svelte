<script>
  import { Card, Button } from "flowbite-svelte";

  export let title = 'replace me';
  export let content = 'replace-me';
  export let link = '/replace-me';
  export let linkText = 'Learn more!';
</script>
<Card>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
    {content}
  </p>
  <Button class="w-fit" href={link}>
    {linkText}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
  </Button>
</Card>