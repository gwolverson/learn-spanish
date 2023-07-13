<script>
  import { get } from 'svelte/store';

	import { P, Span, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
	import Heading from "../../../components/common/Heading.svelte";

  import { ousToOso } from '../stores/cognateTrickStore';
	import TableRow from '../components/TableRow.svelte';
</script>
<div>
    <Heading 
        title="Ous to Oso"
        subTitle="If a noun ends in ous (i.e. curious), then to tranlate into Spanish, most of the time you just replace it with ico (i.e. curioso)."
    />       
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">                  
      It's worth noting that in Spanish, they mostly drop character repetition down to single characters. So cla<Span underline>ss</Span>ic becomes cla<Span underline>s</Span>íco.
    </P>
    <Table striped={true}>
      <TableHead>
        <TableHeadCell>English Noun</TableHeadCell>
        <TableHeadCell>Spanish Noun</TableHeadCell>        
      </TableHead>
      <TableBody class="divide-y">
        <TableRow
          cognates={get(ousToOso)}
        />        
      </TableBody>
    </Table>
</div>