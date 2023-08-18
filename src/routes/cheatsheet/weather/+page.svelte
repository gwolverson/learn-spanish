<script>
  import { get } from 'svelte/store';

	import { Tabs } from "flowbite-svelte";
	import Heading from "../../../components/common/Heading.svelte";

  import { weatherCheatsheet } from './weatherCheatsheet';		
	import CheatsheetTabItem from '../components/CheatsheetTabItem.svelte';

  const cheatsheet = get(weatherCheatsheet);
  const cheatsheetKeys = Object.keys(get(weatherCheatsheet));
</script>
<div>
    <Heading 
        title="Weather"
        subTitle="A list of common Spanish words & phrases relating to weather"
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