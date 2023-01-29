import { db } from "$lib/prisma"
import type { PageServerLoad } from ".svelte-kit/types/src/routes/$types";

export const load: PageServerLoad = async ({ params} ) => {
    const threadDetail = await db.post.findUnique({
        where: {
            id : Number(params.postId) 
        }
    })
    const comments = await db.comment.findMany({
        where:{
            postId: Number(params.postId)
        },
        select: {
            user: true,
            content: true,
            created_at: true,
        }
    })
    console.log("comments:", comments)
    return { threadDetail, comments }

}