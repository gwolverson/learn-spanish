<script>
  import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell } from "flowbite-svelte";
</script>

<Table striped={true}>
  <TableHead>
    <TableHeadCell>Form</TableHeadCell>
    <TableHeadCell>-ar Verbs</TableHeadCell>        
    <TableHeadCell>-ir and -er Verbs</TableHeadCell>        
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>Yo</TableBodyCell>
      <TableBodyCell>-aba</TableBodyCell>
      <TableBodyCell>-ía</TableBodyCell>        
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Tú</TableBodyCell>
      <TableBodyCell>-abas</TableBodyCell>
      <TableBodyCell>-ías</TableBodyCell>        
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Él / Ella / Usted</TableBodyCell>
      <TableBodyCell>-aba</TableBodyCell>
      <TableBodyCell>-ía</TableBodyCell>        
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Nosotros</TableBodyCell>
      <TableBodyCell>-abamos</TableBodyCell>
      <TableBodyCell>-íamos</TableBodyCell>        
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Ellos / Ellas / Ustedes</TableBodyCell>
      <TableBodyCell>-aban</TableBodyCell>
      <TableBodyCell>-ían</TableBodyCell>        
    </TableBodyRow>    
  </TableBody>
</Table>