<script>
	import { Li, List, Span, TabItem, Tabs } from "flowbite-svelte";
	import Heading from "../../../../components/common/Heading.svelte";
	import RulesTable from "./components/RulesTable.svelte";
	import ExamplesTable from "./components/ExamplesTable.svelte";
	import CommonIrregularTable from "./components/CommonIrregularTable.svelte";

</script>

<div>  
  <Heading 
    title="Imperfect Verbs"
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
      <h2 customSize="text-lg font-semibold" class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white">Phrases that trigger the Imperfect:</h2>
      <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
        <Li><Span>A menudo</Span> (often)</Li>
        <Li><Span>Frecuentemente</Span> (frequentl)</Li>
        <Li><Span>Rara vez</Span> (rarely)</Li>
        <Li><Span>A veces</Span> (sometimes)</Li>
        <Li><Span>Generalmente</Span> (generally)</Li>
        <Li><Span>Siempre</Span> (always)</Li>
        <Li><Span>Algunas veces</Span> (at time)</Li>
        <Li><Span>Mientras</Span> (while)</Li>
        <Li><Span>Todos los años</Span> (every year)</Li>
        <Li><Span>Cada día</Span> (every day)</Li>
        <Li><Span>Muchas veces</Span> (many times)</Li>
        <Li><Span>Todo el tiempo</Span> (all the time)</Li>
        <Li><Span>Almost never</Span> (casi nunca)</Li>
        <Li><Span>Once in a while</Span> (de vez en cuando)</Li>
      </List>
    </TabItem>
  </Tabs>  
</div>