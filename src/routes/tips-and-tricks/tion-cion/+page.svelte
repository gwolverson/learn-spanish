<script>
  import { get } from 'svelte/store';

	import { P, Span, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
	import Heading from "../../../components/common/Heading.svelte";

  import { tionToCion } from '../stores/cognateTrickStore';
	import TableRow from '../components/TableRow.svelte';
</script>
<div>
    <Heading 
        title="Tion to Ción"
        subTitle="If a noun ends in tion (i.e. information), then to tranlate into Spanish, most of the time you just replace it with ción (i.e. información)."
    />    
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">                  
      If the Spanish noun ends in <Span underline>ación</Span> then to tranlate that into a verb, you just drop the <Span underline>ación</Span> and replace it with <Span underline>ar</Span>, 
      i.e. information, becomes inform<Span underline>ación</Span>, which becomes inform<Span underline>ar</Span>.<br/><br/>
      The other cool thing about this trick is all the nouns following this pattern are feminine! So they become prefixed with <Span underline>la</Span>, i.e. <Span underline>la</Span> información.
    </P>
    <Table striped={true}>
      <TableHead>
        <TableHeadCell>English Noun</TableHeadCell>
        <TableHeadCell>Spanish Noun</TableHeadCell>
        <TableHeadCell>Verb</TableHeadCell>          
      </TableHead>
      <TableBody class="divide-y">
        <TableRow
          cognates={get(tionToCion)}
        />        
      </TableBody>
    </Table>
</div>