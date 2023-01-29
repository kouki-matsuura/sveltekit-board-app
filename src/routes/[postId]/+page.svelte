<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData
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

<form method="POST" action="/{data.threadDetail?.id}/comment?/comment">
    <input name="comment" type="text" required />
    <button>コメントする</button>
</form>

