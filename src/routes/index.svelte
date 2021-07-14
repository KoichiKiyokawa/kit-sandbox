<script lang="ts">
	import Accordion from '$lib/components/Accordion.svelte';
</script>

<div class="container">
	<Accordion>
		<div slot="header">hoge</div>
		<div slot="content">
			<p>hoge1</p>
			<p>hoge2</p>
			<p>hoge3</p>
			<p>hoge3</p>
			<p>hoge3</p>
			<p>hoge3</p>
		</div>
	</Accordion>
</div>

<style lang="postcss">
	[slot='header'] {
		background-color: skyblue;
	}

	[slot='content'] {
		margin-top: 2rem;
	}
</style>
