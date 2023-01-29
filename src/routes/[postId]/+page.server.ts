import { db } from "$lib/prisma"
import type { PageServerLoad } from ".svelte-kit/types/src/routes/$types";
import type { Actions, RouteParams } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import type { Route } from "svelte-navigator";

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


export const actions: Actions = {
    comment : async ({request,locals, params}:{
        request : Request,
        locals: App.Locals,
        params: RouteParams
    }) => {
        const data = await request.formData();
        const comment = data.get("comment");
        if (typeof comment != "string" || !comment) {
            return fail(400, { message: "コメントは必須入力です。" })
        }
        
        await db.comment.create({
            data:{
               userId: locals.user.id,
               postId: Number(params.postId),
               content: comment,
               created_at: new Date(),
               updated_at: new Date()
            }
        })
        throw redirect(301, `/${params.postId}`)
    }
}