<script lang="ts">
	import { goto } from '$app/navigation';
	import { baseFetch } from '$lib/util/fetch';
	import { onMount } from 'svelte';

	function logout() {
		baseFetch('auth/logout', 'POST').then(() => goto('/login'));
	}

	let loading = true;
	onMount(async () => {
		const { error } = await baseFetch('auth/check');
		if (error != null) return goto('/login');

		loading = false;
	});
</script>

<button on:click={logout}>logout</button>
{#if loading}
	<span>Loading...</span>
{:else}
	<slot />
{/if}
