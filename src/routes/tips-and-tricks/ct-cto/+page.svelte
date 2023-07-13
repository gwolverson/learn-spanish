<script>
  import { get } from 'svelte/store';

	import { P, Span, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
	import Heading from "../../../components/common/Heading.svelte";

  import { ctToCto } from '../stores/cognateTrickStore';
	import TableRow from '../components/TableRow.svelte';
</script>
<div>
    <Heading 
        title="Ct to Cto"
        subTitle="If a noun ends in ct (i.e. act), then to tranlate into Spanish, most of the time you just replace it with cto (i.e. acto)."
    />           
    <Table striped={true}>
      <TableHead>
        <TableHeadCell>English Noun</TableHeadCell>
        <TableHeadCell>Spanish Noun</TableHeadCell>        
      </TableHead>
      <TableBody class="divide-y">
        <TableRow
          cognates={get(ctToCto)}
        />        
      </TableBody>
    </Table>
</div>