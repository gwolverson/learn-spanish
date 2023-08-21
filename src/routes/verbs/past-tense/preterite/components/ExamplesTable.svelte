<script>
  import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell } from "flowbite-svelte";
</script>

<Table striped={true}>
  <TableHead>
    <TableHeadCell>Verb</TableHeadCell>
    <TableHeadCell>Examples (I / You / He / We / They)</TableHeadCell>            
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>Hablar (to speak)</TableBodyCell>
      <TableBodyCell>Yo Hablé / Tú Hablaste / Él Habló / Nosotros Hablamos / Ellos Hablaron</TableBodyCell>      
    </TableBodyRow>    
    <TableBodyRow>
      <TableBodyCell>Comer (to eat)</TableBodyCell>
      <TableBodyCell>Yo Comí / Tú Comiste / Él Comió / Nosotros Comimos / Ellos Comieron</TableBodyCell>      
    </TableBodyRow> 
    <TableBodyRow>
      <TableBodyCell>Vivir (to live)</TableBodyCell>
      <TableBodyCell>Yo Viví / Tú Viviste / Él Vivió / Nosotros Vivimos / Ellos Vivieron</TableBodyCell>      
    </TableBodyRow>    
  </TableBody>
</Table>