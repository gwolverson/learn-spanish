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
      <TableBodyCell>-é</TableBodyCell>
      <TableBodyCell>-í</TableBodyCell>        
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Tú</TableBodyCell>
      <TableBodyCell>-aste</TableBodyCell>
      <TableBodyCell>-iste</TableBodyCell>        
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Él / Ella / Usted</TableBodyCell>
      <TableBodyCell>-ó</TableBodyCell>
      <TableBodyCell>-ió</TableBodyCell>        
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Nosotros</TableBodyCell>
      <TableBodyCell>-amos</TableBodyCell>
      <TableBodyCell>-imos</TableBodyCell>        
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Ellos / Ellas / Ustedes</TableBodyCell>
      <TableBodyCell>-aron</TableBodyCell>
      <TableBodyCell>-ieron</TableBodyCell>        
    </TableBodyRow>
  </TableBody>
</Table>