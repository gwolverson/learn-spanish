<script>
  import { get } from 'svelte/store';

	import { Tabs } from "flowbite-svelte";
	import Heading from "../../../components/common/Heading.svelte";

  import { familyAndPeopleCheatsheet } from './familyAndPeopleCheatsheet';		
	import CheatsheetTabItem from '../components/CheatsheetTabItem.svelte';

  const cheatsheet = get(familyAndPeopleCheatsheet);
  const cheatsheetKeys = Object.keys(get(familyAndPeopleCheatsheet));
</script>
<div>
  <Heading 
    title="Family & People"
    subTitle="A list of common Spanish words & phrases relating to family & people"
  />       
    <Tabs style="pill">
      {#each cheatsheetKeys as key, index(cheatsheet[key].id)}
      <CheatsheetTabItem
        cheatsheetEntryId={index}
        cheatsheetEntries={cheatsheet[key].words}
        english={cheatsheet[key].english}
        spanish={cheatsheet[key].spanish}
      />      
      {/each}
    </Tabs>    
</div>