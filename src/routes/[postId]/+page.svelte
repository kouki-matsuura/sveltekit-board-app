<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData
    console.log("data:", data)
</script>
<h1>スレッド詳細</h1>
<li>{data.threadDetail?.title}</li>
<li>{data.threadDetail?.content}</li>

