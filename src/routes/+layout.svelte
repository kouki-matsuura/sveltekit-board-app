<script lang="ts">
    import { page } from '$app/stores'
</script>

<svelte:head>
    <title>SvelteKit Auth</title>
</svelte:head>

<nav>
    {#if !$page.data.user}
        <a href="/login">ログイン</a>
        <a href="/register">新規登録</a>
    {/if}

    {#if $page.data.user}
        <a href="/admin">Admin</a>

        <form action="/logout?/logout" method="POST">
            <button>Log out</button>
        </form>
    {/if}
</nav>

<main>
    <slot />
</main>