<script lang="ts">
    import {useNavigate} from "svelte-navigator";
    export let form : any;
</script>

<h1>ログイン画面</h1>
{#if form?.errorMessage}
    {form?.errorMessage}
{/if}
<p></p>
<form method="POST">
    <label>名前:
        <input name="name" type="text" />
    </label>
    <label>
        パスワード：
        <input name="password" type="password" />
    </label>
    <button>登録する</button>
</form>

