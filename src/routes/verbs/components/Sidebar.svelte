<script>
    import { page } from '$app/stores';
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownWrapper, SidebarDropdownItem } from 'flowbite-svelte';
    $: activeUrl = $page.url.pathname
  </script>
  
  <Sidebar>
    <SidebarWrapper>
      <SidebarGroup>
        <SidebarItem label="Introduction" href="/verbs" active={activeUrl === '/verbs'}/>   
        <SidebarItem label="Grammer Basics" href="/verbs/grammer-basics" active={activeUrl === '/verbs/grammer-basics'}/> 
        <SidebarDropdownWrapper label="Basic Verbs" href="/verbs/basic/ar" active={activeUrl === '/verbs/basic/ar'}>
          <SidebarDropdownItem label="-ar verbs" href="/verbs/basic/ar" active={activeUrl === '/verbs/basic/ar'}/>
          <SidebarDropdownItem label="-er verbs" href="/verbs/basic/er" active={activeUrl === '/verbs/basic/er'}/>
          <SidebarDropdownItem label="-ir verbs" href="/verbs/basic/ir" active={activeUrl === '/verbs/basic/ir'}/>
        </SidebarDropdownWrapper>      
        <SidebarItem label="Irregular Verbs" href="/verbs/irregular" active={activeUrl === '/verbs/irregular'}/>    
        <SidebarItem label="Preterite" href="/verbs/preterite" active={activeUrl === '/verbs/preterite'}/>                            
        <SidebarItem label="Flashcards" href="/verbs/flashcards" active={activeUrl === '/verbs/flashcards'}/>                            
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>