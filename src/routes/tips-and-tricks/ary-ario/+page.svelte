<script>
  import { get } from 'svelte/store';

	import { P, Span, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
	import Heading from "../../../components/common/Heading.svelte";

  import { aryToArio } from '../stores/cognateTrickStore';
	import TableRow from '../components/TableRow.svelte';
</script>
<div>
    <Heading 
        title="Ary to Ario"
        subTitle="If a noun ends in ary (i.e. anniversary), then to tranlate into Spanish, most of the time you just replace it with ario (i.e. anniversario)."
    />       
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">                  
      It's worth noting that in Spanish, they mostly drop character repetition down to single characters. So a<Span underline>nn</Span>iversary becomes a<Span underline>n</Span>iversario.
    </P>
    <Table striped={true}>
      <TableHead>
        <TableHeadCell>English Noun</TableHeadCell>
        <TableHeadCell>Spanish Noun</TableHeadCell>        
      </TableHead>
      <TableBody class="divide-y">
        <TableRow
          cognates={get(aryToArio)}
        />        
      </TableBody>
    </Table>
</div>