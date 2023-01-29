import { fail, redirect } from "@sveltejs/kit";
import { db } from "$lib/prisma";
import type { Actions } from "./$types";
import bcrypt from 'bcrypt'
import { Roles } from "$lib/constants";


export const actions: Actions = {
    comment : async ({request,locals, params}) => {
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

        await db.$disconnect();
        throw redirect(301, `/${params.postId}`)
    }
}