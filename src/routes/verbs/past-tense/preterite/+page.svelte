<script>
	import { Li, List, Span, TabItem, Tabs, } from "flowbite-svelte";
	import Heading from "../../../../components/common/Heading.svelte";
	import RulesTable from "./components/RulesTable.svelte";
	import ExamplesTable from "./components/ExamplesTable.svelte";
	import CommonIrregularTable from "./components/CommonIrregularTable.svelte";

</script>

<div>  
  <Heading 
    title="Preterite Verbs"
    subTitle="Below are some of the most common Spanish verbs, those that end in -ar, -er and -ir. Some are regular, whereas others are irregular."
  />
  <Tabs style="pill">
    <TabItem open title="Rules">
      <RulesTable />
    </TabItem>
    <TabItem title="Examples">
      <ExamplesTable />
    </TabItem>
    <TabItem title="Common Irregular">
      <CommonIrregularTable />
    </TabItem>
    <TabItem title="Trigger Phrases">
      <h2 customSize="text-lg font-semibold" class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white">Phrases that trigger the Preterite:</h2>
      <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
        <Li><Span>Una vez</Span> (one time/once)</Li>
        <Li><Span>El otro día</Span> (the other day)</Li>
        <Li><Span>Ayer</Span> (yesterday)</Li>
        <Li><Span>Anoche</Span> (last night)</Li>
        <Li><Span>La semana pasada</Span> (last week)</Li>
        <Li><Span>El mes pasado</Span> (last month)</Li>
        <Li><Span>El año pasado</Span> (last year)</Li>
        <Li><Span>En ese momento</Span> (in that moment)</Li>
        <Li><Span>Desde el primer momento</Span> (from the first moment)</Li>
        <Li><Span>Ayer por la tarde</Span> (yesterday afernoon)</Li>
        <Li><Span>Hoy por la mañana</Span> (this morning)</Li>
        <Li><Span>Hace dos años</Span> (two years ago)</Li>
      </List>
    </TabItem>
  </Tabs>
</div>