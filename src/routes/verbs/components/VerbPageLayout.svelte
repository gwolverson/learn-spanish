<script>
  import { Heading, TabItem, Tabs } from 'flowbite-svelte';
	import Sidebar from "./Sidebar.svelte";
	import VerbDetailCard from './VerbDetailCard.svelte';
	import VerbExampleCard from './VerbExampleCard.svelte';
	import VerbList from './VerbList.svelte';

  export let regularVerbs;
  export let irregularVerbs;  
  export let currentVerb;
  export let heading;
  export let selectVerb = () => {};
</script>

<div>  
  <div class="grid md:grid-cols-6 gap-6">
    <div class="col-span-1">
      <Sidebar />
    </div>  
    <div class="col-span-5">
      <Heading tag="h1" class="mb-4 text-center" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">{heading}</Heading>      
      <div class="px-10 grid md:grid-cols-6 gap-4">
        <div class="col-span-3">          
            <Tabs style="underline">
              <TabItem open title="Regular">
                <VerbList
                  {selectVerb},
                  verbs={regularVerbs}
                />                            
              </TabItem>
              <TabItem title="Irregular">                
                <VerbList
                  {selectVerb},
                  verbs={irregularVerbs}
                />                                              
              </TabItem>             
            </Tabs>                      
        </div>
        <div class="col-span-3">
          <div class="mb-5">
            <VerbDetailCard bind:currentVerb />
          </div>  
          <div>
            <VerbExampleCard bind:currentVerb />
          </div>
        </div>
        </div>
    </div>
  </div>
</div>