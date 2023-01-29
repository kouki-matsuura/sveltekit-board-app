<script lang="ts">
    import type { PageData } from "./$types";
    import type { ActionData } from "./comment/$types";
    export let data: PageData
    export let form: ActionData
</script>
<div>
    <a href="/"> ＜ 一覧に戻る</a>
</div>
<h1>スレッド詳細</h1>
<li>{data.threadDetail?.title}</li>
<li>{data.threadDetail?.content}</li>
<h2>コメント</h2>
{#each data.comments as comment}
    <div>名前：{comment.user.name}</div>
    <div>日時：{comment.created_at}</div>
    <div>内容：{comment.content}</div>
    <br />
{/each}
<div>
    {#if form?.message}
        {form?.message}
    {/if}
</div>
<form method="POST" action="?/comment">
    <input name="comment" type="text" />
    <button>コメントする</button>
</form>

