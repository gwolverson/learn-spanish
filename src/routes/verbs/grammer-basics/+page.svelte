<script>
	import { Heading } from 'flowbite-svelte';
	import Sidebar from "../components/Sidebar.svelte";
</script>

<div>  
  <div class="grid md:grid-cols-6 gap-2">
    <div class="col-span-1">
      <Sidebar />
    </div>  
    <div class="col-span-5">
      <Heading tag="h1" class="mb-4 text-center" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Grammer Basics</Heading>
    </div>
  </div>
</div>