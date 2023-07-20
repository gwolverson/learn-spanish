<script>
	import { useRegisterSW } from 'virtual:pwa-register/svelte';	
	import { Toast, Button, P } from 'flowbite-svelte';

	const {
		needRefresh,
		updateServiceWorker,
		offlineReady
	} = useRegisterSW({
		onRegistered(r) {
		// uncomment following code if you want check for updates
		// r && setInterval(() => {
		//    console.log('Checking for sw update')
		//    r.update()
		// }, 20000 /* 20s for testing purposes */)
			console.log(`SW Registered: ${r}`)
		},
		onRegisterError(error) {
			console.log('SW registration error', error)
		},
	})
	const close = () => {
		offlineReady.set(false)
		needRefresh.set(false)
	}
	$: toast = $offlineReady || $needRefresh
</script>

{#if toast}
	<Toast simple position="bottom-right">		
		<div class="mb-2">
			{#if $offlineReady}
				<P >
					App ready to work offline
				</P>
			{:else}
				<P>
					New content available, click on reload button to update.
				</P>
			{/if}
		</div>
		{#if $needRefresh}
			<Button color="green" on:click={() => updateServiceWorker(true)}>
				Reload
			</Button>
		{/if}
		<Button color="dark" on:click={close}>
			Close
		</Button>
	</Toast>
{/if}