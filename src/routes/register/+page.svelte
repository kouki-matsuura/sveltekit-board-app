<script lang="ts">
    import type { ActionData } from "./$types"

    export let form: ActionData
</script>
<h1>ユーザー登録</h1>
{#if form?.invalid}
<p>既に存在するユーザーです。</p>
{/if}
<form method="POST" action="?/register">
    <label>名前：
        <input name="name" type="text" required/>
    </label>
    <label>パスワード：
        <input name="password" type="password" required/>
    </label>
    <button>登録する</button>
</form>