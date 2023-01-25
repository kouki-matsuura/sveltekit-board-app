<script lang="ts">
    import {goto} from "$app/navigation";
	import type { PageData } from "./$types";


    export let data: PageData
    console.log("data:", data)
</script>
<main>
   <h1>スレッド一覧</h1>
    <button type="button"  on:click={() => goto("/post")}>投稿する</button>

    
</main>