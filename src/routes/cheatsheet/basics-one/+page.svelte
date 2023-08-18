<script>
  import { get } from 'svelte/store';

	import { Tabs } from "flowbite-svelte";
	import Heading from "../../../components/common/Heading.svelte";

  import { basicsOneCheatsheet } from './basicsOneCheatsheet';		
	import CheatsheetTabItem from '../components/CheatsheetTabItem.svelte';

  const cheatsheet = get(basicsOneCheatsheet);
  const cheatsheetKeys = Object.keys(get(basicsOneCheatsheet));
</script>
<div>
    <Heading 
        title="Basics One"
        subTitle="A list of some of the more common basic Spanish words & phrases"
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