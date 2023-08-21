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
      <TableBodyCell>Yo Hablaba / Tú Habalabas / Él Hablaba / Nosotros Hablabamos / Ellos Hablan</TableBodyCell>      
    </TableBodyRow>    
    <TableBodyRow>
      <TableBodyCell>Comer (to eat)</TableBodyCell>
      <TableBodyCell>Yo Comía / Tú Comías / Él Comía / Nosotros Comíamos / Ellos Comían</TableBodyCell>      
    </TableBodyRow> 
    <TableBodyRow>
      <TableBodyCell>Vivir (to live)</TableBodyCell>
      <TableBodyCell>Yo Vivía / Tú Vivías / Él Vivía / Nosotros Vivíamos / Ellos Vivían</TableBodyCell>      
    </TableBodyRow>    
  </TableBody>
</Table>