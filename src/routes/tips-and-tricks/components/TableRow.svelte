<script>
	import { TableBodyCell, TableBodyRow } from "flowbite-svelte";

  export let cognates;
</script>

{#each cognates as cognate}
<TableBodyRow>
  {#if cognate[0]}
  <TableBodyCell>{cognate[0]}</TableBodyCell>
  {/if}
  {#if cognate[1]}
  <TableBodyCell>{cognate[1]}</TableBodyCell>
  {/if}
  {#if cognate[2]}
  <TableBodyCell>{cognate[2]}</TableBodyCell>
  {/if}
</TableBodyRow>
{/each}