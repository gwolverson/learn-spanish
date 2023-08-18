<script>
  import { get } from 'svelte/store';

	import { Tabs } from "flowbite-svelte";
	import Heading from "../../../components/common/Heading.svelte";

  import { timeAndDirectionCheatsheet } from './timeAndDirectionCheatsheet';		
	import CheatsheetTabItem from '../components/CheatsheetTabItem.svelte';

  const cheatsheet = get(timeAndDirectionCheatsheet);
  const cheatsheetKeys = Object.keys(get(timeAndDirectionCheatsheet));
</script>
<div>
    <Heading 
        title="Time & Direction"
        subTitle="A list of common Spanish words & phrases relating to time and direction"
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