<script>
	import { TableBodyCell, TableBodyRow } from "flowbite-svelte";

  export let cheatsheetEntries;
</script>

{#each cheatsheetEntries as cheatsheetEntry}
<TableBodyRow>
  <TableBodyCell>{cheatsheetEntry[0]}</TableBodyCell>
  <TableBodyCell>{cheatsheetEntry[1]}</TableBodyCell>
</TableBodyRow>
{/each}