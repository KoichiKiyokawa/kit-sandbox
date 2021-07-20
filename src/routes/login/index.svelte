<script lang="ts">
	import { goto } from '$app/navigation';
	import { baseFetch } from '$lib/util/fetch';

	let form = { email: '', password: '' };

	async function onSubmit() {
		const { error } = await baseFetch('auth/login', 'POST', form);
		if (error == null) goto('/');
	}
</script>

<form on:submit|preventDefault={onSubmit}>
	<label>
		メールアドレス
		<input bind:value={form.email} type="email" autocomplete="email" />
	</label>

	<label>
		パスワード
		<input bind:value={form.password} type="password" autocomplete="current-password" />
	</label>

	<button>ログイン</button>
</form>
