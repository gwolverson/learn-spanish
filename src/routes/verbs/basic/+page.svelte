<script>
  import { get } from 'svelte/store';
	import { Tabs } from 'flowbite-svelte';

  import { regularArVerbStore, irregularArVerbStore } from '../stores/arVerbStores';		
  import { regularErVerbStore, irregularErVerbStore } from '../stores/erVerbStores';
  import { regularIrVerbStore, irregularIrVerbStore } from '../stores/irVerbStores';
  
	import Heading from '../../../components/common/Heading.svelte';
	import VerbTab from '../components/VerbTab.svelte';

  const combinedArVerbs = {
    ...get(regularArVerbStore),
    ...get(irregularArVerbStore)
  };

  const combinedErVerbs = {
    ...get(regularErVerbStore),
    ...get(irregularErVerbStore)
  };

  const combinedIrVerbs = {
    ...get(regularIrVerbStore),
    ...get(irregularIrVerbStore)
  };

  const allVerbs = {
    ...get(regularArVerbStore),
    ...get(irregularArVerbStore),
    ...get(regularErVerbStore),
    ...get(irregularErVerbStore),
    ...get(regularIrVerbStore),
    ...get(irregularIrVerbStore)
  }
  
  let currentVerb = combinedArVerbs['hablar'];
  
  function selectVerb(verb) {       
    currentVerb = allVerbs[verb];
  }  
</script>

<div>
<Heading 
  title="Basic Verbs"
  subTitle="Below are some of the most common Spanish verbs, those that end in -ar, -er and -ir. Some are regular, whereas others are irregular."
/>
<Tabs style="underline">
  <VerbTab
    {selectVerb}
    open={true}
    title="-ar"
    verbList={Object.keys(combinedArVerbs)}
    currentVerb={currentVerb}
  />
  <VerbTab
    {selectVerb}
    title="-er"
    verbList={Object.keys(combinedErVerbs)}
    currentVerb={currentVerb}
  /> 
  <VerbTab
    {selectVerb}
    title="-ir"
    verbList={Object.keys(combinedIrVerbs)}
    currentVerb={currentVerb}
  />        
</Tabs>
</div>