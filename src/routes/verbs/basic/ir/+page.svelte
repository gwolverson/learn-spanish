<script>
  import { get } from 'svelte/store';

  import { regularIrVerbStore, irregularIrVerbStore } from '../../stores/irVerbStores';
	import VerbPageLayout from '../../components/VerbPageLayout.svelte';
  
  const regularVerbs = Object.keys(get(regularIrVerbStore))
  const irregularVerbs = Object.keys(get(irregularIrVerbStore))
  const combinedVerbs = {...get(regularIrVerbStore), ...get(irregularIrVerbStore)}
  let currentVerb = combinedVerbs['vivir'];
  
  function selectVerb(verb) {       
    currentVerb = combinedVerbs[verb];
  }  
</script>

<VerbPageLayout 
  heading='-ir Verbs'
  regularVerbs={regularVerbs}
  irregularVerbs={irregularVerbs}
  currentVerb={currentVerb}
  selectVerb={selectVerb}
/>