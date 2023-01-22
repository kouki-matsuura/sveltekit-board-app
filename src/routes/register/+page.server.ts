import { fail, redirect } from "@sveltejs/kit";
import { db } from "$lib/prisma";
import type { Actions } from "./$types";
import bcrypt from 'bcrypt'
import { Roles } from "$lib/constants";


export const actions: Actions = {
    register : async ({request}) => {
        const data = await request.formData();
        const name = data.get("name");
        const password = data.get("password");
        
        if (typeof name !== "string" ||typeof password !== "string" || !name || !password) {
            return fail(400, { invalid: true })
        }

        const user = await db.user.findUnique({
            where: {name}
        })

        if (user) {
            return fail(400, { invalid: true })
        }
        
        await db.user.create({
            data: {
                name,
                password : await bcrypt.hash(password, 10),
                authToken: crypto.randomUUID(),
                role: { connect: { name: Roles.USER}}
            },
        })

        await db.$disconnect();

        throw redirect(303, '/login')
    }
}