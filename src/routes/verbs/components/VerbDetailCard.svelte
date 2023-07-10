<script>
  import { Card, List, Li } from "flowbite-svelte";

  export let currentVerb;

  function getVerbConjunctive(subject, form) {
    if (subject.form) {
      return subject.form + subject[form];
    } else {
      return subject[form];
    }
  }

</script>
<Card size="md">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{currentVerb.verb} ({currentVerb.action})</h5>
  <List tag="ul" class="space-y-1">
    <Li liClass="dark:text-white italic">Yo <strong>{getVerbConjunctive(currentVerb.subject, 'i')}</strong> (I {currentVerb.action})</Li>        
    <Li liClass="dark:text-white italic">Tú <strong>{getVerbConjunctive(currentVerb.subject, 'you')}</strong> (You {currentVerb.action})</Li>        
    <Li liClass="dark:text-white italic">Él / Ella / Usted (formal) <strong>{getVerbConjunctive(currentVerb.subject, 'he')}</strong> (He / She {currentVerb.action}s)</Li>        
    <Li liClass="dark:text-white italic">Nosotros <strong>{getVerbConjunctive(currentVerb.subject, 'we')}</strong> (We {currentVerb.action})</Li>            
    <Li liClass="dark:text-white italic">Ellos / Ellas / Ustedes (formal) <strong>{getVerbConjunctive(currentVerb.subject, 'they')}</strong> (They {currentVerb.action})</Li>            
  </List>
</Card>