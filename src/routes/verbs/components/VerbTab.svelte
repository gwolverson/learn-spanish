<script>
	import { TabItem } from "flowbite-svelte";
	import VerbList from "./VerbList.svelte";
	import VerbDetailCard from "./VerbDetailCard.svelte";

  export let open = false;
  export let currentVerb;  
  export let verbList;
  export let title;
  export let selectVerb;
</script>

<TabItem open={open} title={title}>
  <div class="grid md:grid-cols-6 gap-3">
    <div class="col-span-2 md">
      <VerbList
        {selectVerb},
        verbs={verbList}
      /> 
    </div>
    <div class="col-span-4 md">
      <VerbDetailCard bind:currentVerb />
    </div>
  </div>
</TabItem>