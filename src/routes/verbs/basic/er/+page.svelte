<script>
  import { get } from 'svelte/store';

  import { regularErVerbStore, irregularErVerbStore } from '../../stores/erVerbStores';
	import VerbPageLayout from '../../components/VerbPageLayout.svelte';
	
  const regularVerbs = Object.keys(get(regularErVerbStore))
  const irregularVerbs = Object.keys(get(irregularErVerbStore))
  const combinedVerbs = {...get(regularErVerbStore), ...get(irregularErVerbStore)}
  let currentVerb = combinedVerbs['comer'];

  function selectVerb(verb) {       
    currentVerb = combinedVerbs[verb];
  }  
</script>

<VerbPageLayout 
  heading='-er Verbs'
  regularVerbs={regularVerbs}
  irregularVerbs={irregularVerbs}
  currentVerb={currentVerb}
  selectVerb={selectVerb}
/>