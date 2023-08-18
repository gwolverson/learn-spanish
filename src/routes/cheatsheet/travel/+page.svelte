<script>
  import { get } from 'svelte/store';

	import { Tabs } from "flowbite-svelte";
	import Heading from "../../../components/common/Heading.svelte";

  import { travelCheatsheet } from './travelCheatsheet';		
	import CheatsheetTabItem from '../components/CheatsheetTabItem.svelte';

  const cheatsheet = get(travelCheatsheet);
  const cheatsheetKeys = Object.keys(get(travelCheatsheet));
</script>
<div>
    <Heading 
        title="Travel"
        subTitle="A list of common Spanish words & phrases relating to travel"
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