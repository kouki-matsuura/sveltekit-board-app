import { db } from "$lib/prisma";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session');
    
    if (!session) {
        return await  resolve(event)
    }

    const user = await db.user.findUnique({
        where: { authToken: session},
        select: { name: true, role: true}
    })

    if (user) {
        event.locals.user = {
            name: user.name,
            role: user.role
        }
    }

    return await resolve(event)
}