import { db } from "$lib/prisma"
import type { PageServerLoad } from ".svelte-kit/types/src/routes/$types";
import { redirect } from "@sveltejs/kit"

export const load: PageServerLoad = async ({locals}) => {

    const threads = await db.post.findMany({
        orderBy:{ id: 'desc' },
        include:{user: {
            select: {
                name: true
            }
        }}
    });
    return {threads}
}