import { db } from "$lib/prisma";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import { now } from "svelte/internal";

export const actions: Actions = {
    post : async ({request, cookies}) => {
        const data = await request.formData()
        const title = data.get("title");
        const content = data.get("content");

        if (typeof title !== "string" || typeof content !== "string" || !title || !content) {
            return fail(400, { message: "タイトルと内容は必須入力です。"})
        }

        const user = await db.user.findUnique({
            where: {
                authToken: cookies.get('session')
            }
        })

        if (!user) return fail(400, {message: "登録されていないユーザーです。"})

        await db.post.create({
            data: {
                title,
                content,
                userId: user.id,
                created_at: new Date(now()),
                updated_at: new Date(now()),
            }
        })

        await db.$disconnect();

        throw redirect(303, '/')
    }
}