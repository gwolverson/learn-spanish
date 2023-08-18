<script>
	import { TabItem, Table, TableHead, TableHeadCell, TableBody, P } from "flowbite-svelte";
	import TableRow from "./TableRow.svelte";

  export let cheatsheetEntryId;
  export let english;
  export let spanish;
  export let cheatsheetEntries;
</script>

<TabItem open={cheatsheetEntryId == 0}>
  <span slot="title">{english}</span>
  <P class="text-sm mb-5">En Español - {spanish}</P>
  <Table striped={true}>
    <TableHead>
      <TableHeadCell>English</TableHeadCell>
      <TableHeadCell>Spanish</TableHeadCell>        
    </TableHead>
    <TableBody class="divide-y">
      <TableRow 
        {cheatsheetEntries}
      />
    </TableBody>
  </Table>
</TabItem>