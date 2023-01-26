import { db } from "$lib/prisma"
import type { PageServerLoad } from ".svelte-kit/types/src/routes/$types";

export const load: PageServerLoad = async ({ params} ) => {
    console.log(typeof params.postId)
    const threadDetail = await db.post.findUnique({
        where: {
            id : Number(params.postId) 
        }
    })

    return { threadDetail }

}