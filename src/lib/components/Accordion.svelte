<script lang="ts">
	import { slide } from 'svelte/transition';

	let isOpen = false;
</script>

<div>
	<div role="button" aria-expanded={isOpen} on:click={() => (isOpen = !isOpen)}>
		<slot name="header" {isOpen} />
	</div>
	{#if isOpen}
		<div transition:slide>
			<slot name="content" />
		</div>
	{/if}
</div>

<style lang="postcss">
	[role='button'] {
		cursor: pointer;
	}
</style>
