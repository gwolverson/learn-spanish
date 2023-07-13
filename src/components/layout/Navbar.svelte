<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, Chevron, DarkMode } from 'flowbite-svelte';
    import { page } from '$app/stores';
    $: currentRoute = $page.url.pathname;    
  </script>

<Navbar let:hidden let:toggle navClass="border-b mb-5">
    <NavBrand href="/">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        class="mr-3 h-6 sm:h-9"
        alt="Svelte Logo"
      />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Learn Spanish
      </span>
    </NavBrand>
    <div class="flex items-center md:order-2">
      <DarkMode>
        <svelte:fragment slot="lightIcon">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"/></svg>
        </svelte:fragment>
        <svelte:fragment slot="darkIcon">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"/></svg>
        </svelte:fragment>
      </DarkMode>
      <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1"/>
    </div>
    <NavUl {hidden}>
      <NavLi href="/" active={currentRoute == '/'}>Home</NavLi>      
      <NavLi id="verbs" active={currentRoute.includes('/verbs')} class="cursor-pointer"><Chevron aligned>Verbs</Chevron></NavLi>
      <NavLi id="tips-and-tricks" active={currentRoute == '/tips-and-tricks'}><Chevron aligned>Tips & Tricks</Chevron></NavLi>          
      <NavLi href="/connectives" active={currentRoute == '/connectives'}>Connectives</NavLi>          
      <NavLi href="/quiz" active={currentRoute == '/quiz'}>Quiz</NavLi>  
      <Dropdown triggeredBy="#verbs" class="w-44 z-20">
        <DropdownItem href="/verbs/basic">Basic</DropdownItem>
        <DropdownItem href="/verbs/irregular">Irregular</DropdownItem>
        <DropdownItem href="/verbs/preterite">Preterite</DropdownItem>        
        <DropdownItem href="/verbs/flashcards">Flashcards</DropdownItem>
      </Dropdown>
      <Dropdown triggeredBy="#tips-and-tricks" class="w-44 z-20">
        <DropdownItem href="/tips-and-tricks/tion-cion">tion-cion</DropdownItem>        
        <DropdownItem href="/tips-and-tricks/ary-ario">ary-ario</DropdownItem>
        <DropdownItem href="/tips-and-tricks/ic-ico">ic-ico</DropdownItem>        
        <DropdownItem href="/tips-and-tricks/ous-oso">ous-oso</DropdownItem>        
        <DropdownItem href="/tips-and-tricks/ct-cto">ct-cto</DropdownItem>        
      </Dropdown>        
    </NavUl>
  </Navbar>