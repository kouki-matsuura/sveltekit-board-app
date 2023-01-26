<script lang="ts">
    import {goto} from "$app/navigation";
	import type { PageData } from "./$types";


    export let data: PageData
    console.log("data:", data)
</script>
<main>
   <h1>スレッド一覧</h1>
    <button type="button"  on:click={() => goto("/post")}>投稿する</button>
    {#each data.threads as thread }
        <li>{thread.content}</li>
        <li>{thread.title}</li>
        <button type="button" on:click={() => goto(`/${thread.id}`)}>詳細を見る</button>
    {/each}
</main>