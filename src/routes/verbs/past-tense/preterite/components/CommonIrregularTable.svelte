<script>
  import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell } from "flowbite-svelte";
</script>

<Table striped={true}>
  <TableHead>
    <TableHeadCell>Verb</TableHeadCell>
    <TableHeadCell>Preterite Stem</TableHeadCell>
    <TableHeadCell>Examples (I / You / He / We / They)</TableHeadCell>            
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>Ser (to be) / Ir (to go)</TableBodyCell>
      <TableBodyCell>fu-</TableBodyCell>
      <TableBodyCell>Yo Fui / Tú Fuiste / Él Fue / Nosotros Fuimos / Ellos Fueron</TableBodyCell>      
    </TableBodyRow>  
    <TableBodyRow>
      <TableBodyCell>Estar (to be)</TableBodyCell>
      <TableBodyCell>estuv-</TableBodyCell>
      <TableBodyCell>Yo Estuve / Tú Estuviste / Él Estuvo / Nosotros Estuvimos / Ellos Estuvieron</TableBodyCell>      
    </TableBodyRow>    
    <TableBodyRow>
      <TableBodyCell>Tener (to have)</TableBodyCell>
      <TableBodyCell>tuv-</TableBodyCell>
      <TableBodyCell>Yo Tuve / Tú Tuviste / Él Tuvo / Nosotros Tuvimos / Ellos Tuvieron</TableBodyCell>      
    </TableBodyRow>      
    <TableBodyRow>
      <TableBodyCell>Venir (to come)</TableBodyCell>
      <TableBodyCell>vin-</TableBodyCell>
      <TableBodyCell>Yo Vine / Tú Viniste / Él Vino / Nosotros Vinimos / Ellos Vinieron</TableBodyCell>      
    </TableBodyRow>      
    <TableBodyRow>
      <TableBodyCell>Hacer (to do)</TableBodyCell>
      <TableBodyCell>hic-</TableBodyCell>
      <TableBodyCell>Yo Hice / Tú Hiciste / Él Hizo / Nosotros Hicimos / Ellos Hicieron</TableBodyCell>      
    </TableBodyRow>  
    <TableBodyRow>
      <TableBodyCell>Poder (to be able to)</TableBodyCell>
      <TableBodyCell>pud-</TableBodyCell>
      <TableBodyCell>Yo Pude / Tú Pudiste / Él Pudo / Nosotros Pudimos / Ellos Pudieron</TableBodyCell>      
    </TableBodyRow>      
    <TableBodyRow>
      <TableBodyCell>Ponder (to put)</TableBodyCell>
      <TableBodyCell>pus-</TableBodyCell>
      <TableBodyCell>Yo Puse / Tú Pusiste / Él Puso / Nosotros Pusimos / Ellos Pusieron</TableBodyCell>      
    </TableBodyRow>   
    <TableBodyRow>
      <TableBodyCell>Dar (to give)</TableBodyCell>
      <TableBodyCell>di-</TableBodyCell>
      <TableBodyCell>Yo Di / Tú Diste / Él Dio / Nosotros Dimos / Ellos Dieron</TableBodyCell>      
    </TableBodyRow>   
    <TableBodyRow>
      <TableBodyCell>Saber (to know)</TableBodyCell>
      <TableBodyCell>sup-</TableBodyCell>
      <TableBodyCell>Yo Supe / Tú Supiste / Él Supo / Nosotros Supimos / Ellos Supieron</TableBodyCell>      
    </TableBodyRow>   
    <TableBodyRow>
      <TableBodyCell>Querer (to want)</TableBodyCell>
      <TableBodyCell>quis-</TableBodyCell>
      <TableBodyCell>Yo Quise / Tú Quisite / Él Quiso / Nosotros Quisimos / Ellos Quisieron</TableBodyCell>      
    </TableBodyRow>      
  </TableBody>
</Table>