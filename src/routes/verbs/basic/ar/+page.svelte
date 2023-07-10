<script>
  import { get } from 'svelte/store';

  import { regularArVerbStore, irregularArVerbStore } from '../../stores/arVerbStores';	
	import VerbPageLayout from '../../components/VerbPageLayout.svelte';
  
  const regularVerbs = Object.keys(get(regularArVerbStore))
  const irregularVerbs = Object.keys(get(irregularArVerbStore))
  const combinedVerbs = {...get(regularArVerbStore), ...get(irregularArVerbStore)}
  let currentVerb = combinedVerbs['hablar'];
  
  function selectVerb(verb) {       
    currentVerb = combinedVerbs[verb];
  }  
</script>

<VerbPageLayout 
  heading='-ar Verbs'
  regularVerbs={regularVerbs}
  irregularVerbs={irregularVerbs}
  currentVerb={currentVerb}
  selectVerb={selectVerb}
/>