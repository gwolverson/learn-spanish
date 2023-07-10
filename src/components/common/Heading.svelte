<script>
    import {  Heading, P, Button } from 'flowbite-svelte';

    export let title;
    export let subTitle;
  </script>
  
  <div class="text-center">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">{title}</Heading>
    <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400" align="center">{subTitle}</P>
  </div>