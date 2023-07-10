<script>
    import Card from '../components/common/Card.svelte';
import Heading  from '../components/common/Heading.svelte';    
</script>
<div>
    <Heading 
        title="¡Hola y bienvenido!"
        subTitle="Hello and welcome! This app is designed to help you learn the language Spanish, by providing a variety of resources!."
    />
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card 
            title="Verbs"
            content="Learn more about Spanish verbs, conjugation, when and how to use them!"
            link="/verbs"                        
        />
        <Card 
            title="Connectives"
            content="Learn more about Spanish connecting words and how to use them!"
            link="/connectives" 
        />
        <Card 
            title="Quiz"
            content="Create randomly generates quizes to test and improve your knowledge!"
            link="/quiz" 
            linkText="Quiz time!"
        />
    </div>
</div>
