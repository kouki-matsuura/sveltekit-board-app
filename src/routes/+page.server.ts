import { db } from "$lib/prisma"
import type { PageServerLoad } from ".svelte-kit/types/src/routes/$types";
import { redirect } from "@sveltejs/kit"

export const load: PageServerLoad = async ({locals}) => {
    if(!locals.user) {
        throw redirect(302, '/login')
    }

    const threads = await db.post.findMany({
        orderBy:{ id: 'desc' }
    });
    return {threads}
}