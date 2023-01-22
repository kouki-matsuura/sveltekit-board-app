import { redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async () => {
    throw redirect(302, '/');
}

export const actions: Actions = {
    logout: async ({ cookies }) => {
        cookies.set('session', '', {
            path: '/',
            expires: new Date(0),
        })

        throw redirect(302, '/login')
    }
}