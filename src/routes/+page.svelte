<script>
    import Card from '../components/common/Card.svelte';
import Heading  from '../components/common/Heading.svelte';    
</script>
<div>
    <Heading 
        title="¡Hola y bienvenido!"
        subTitle="Hello and welcome! This app is designed as a tool to help you learn Spanish, by providing a variety of resources!"
    />
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card 
            title="Verbs"
            content="Learn more about Spanish verbs, conjugation, when and how to use them!"
            link="/verbs/basic"                        
        />
        <Card 
            title="Tips & Tricks"
            content="Learn some useful tips & tricks for improving your Spanish vocabulary!"
            link="/tips-and-tricks/tion-cion" 
        />
        <Card 
            title="Cheatsheets"
            content="Cheatsheets to expand your Spanish vocabulary!"
            link="/cheatsheet/basics-one" 
        />
        <Card 
            title="Quiz"
            content="Create randomly generated quizes to test and improve your knowledge!"
            link="/quiz" 
            linkText="Quiz time!"
        />
    </div>
</div>
